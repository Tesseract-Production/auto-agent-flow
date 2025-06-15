import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase-server';
import { z } from 'zod';

// Validation schema
const subscribeSchema = z.object({
  email: z.string().email('Invalid email address'),
  source: z.string().min(1, 'Source is required'),
  metadata: z.record(z.any()).optional(),
});

// Integration result types
type IntegrationResult = {
  success: boolean;
  data?: any;
  error?: string;
};

// Kit API integration
async function subscribeToKit(email: string, firstName?: string): Promise<IntegrationResult> {
  try {
    const kitApiKey = process.env.KIT_API_KEY;
    if (!kitApiKey) {
      console.warn('KIT_API_KEY not configured');
      return { success: false, error: 'Kit API key not configured' };
    }

    const response = await fetch('https://api.kit.com/v4/subscribers', {
      method: 'POST',
      headers: {
        'X-Kit-Api-Key': kitApiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        first_name: firstName,
        tags: ['n8n-masterclass', 'hero-signup'],
        state: 'active'
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Kit API error:', errorData);
      return { success: false, error: `Kit API error: ${response.status}` };
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('Kit integration error:', error);
    return { success: false, error: 'Failed to integrate with Kit' };
  }
}

// Sendgrid email integration
async function sendWelcomeEmail(email: string, firstName?: string): Promise<IntegrationResult> {
  try {
    const sendgridApiKey = process.env.SENDGRID_API_KEY;
    if (!sendgridApiKey) {
      console.warn('SENDGRID_API_KEY not configured');
      return { success: false, error: 'Sendgrid API key not configured' };
    }

    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${sendgridApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{
          to: [{ email, name: firstName || '' }],
          dynamic_template_data: {
            first_name: firstName || 'there',
            email: email
          }
        }],
        from: {
          email: 'academy@tesseract.nexus',
          name: 'Auto Agent Flow Academy'
        },
        template_id: process.env.SENDGRID_TEMPLATE_ID || 'd-your-template-id',
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Sendgrid API error:', errorData);
      return { success: false, error: `Sendgrid API error: ${response.status}` };
    }

    return { success: true, data: { message: 'Welcome email sent' } };
  } catch (error) {
    console.error('Sendgrid integration error:', error);
    return { success: false, error: 'Failed to send welcome email' };
  }
}

// External webhook integration
async function triggerExternalWebhook(email: string, firstName?: string): Promise<IntegrationResult> {
  try {
    const response = await fetch('https://api.tesseract.nexus/v1/auto-agent-flow-new-lead-processor', {
      method: 'POST',
      headers: {
        'Authorization': '36429048-8653-444a-90d3-49ce15500f4a',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        firstName,
        source: 'hero-email-capture',
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('External webhook error:', errorData);
      return { success: false, error: `Webhook error: ${response.status}` };
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('External webhook error:', error);
    return { success: false, error: 'Failed to trigger external webhook' };
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    const validatedData = subscribeSchema.parse(body);

    // Check if email already exists
    const { data: existingSubscriber, error: checkError } = await supabaseServer
      .from('email_subscribers')
      .select('id')
      .eq('email', validatedData.email)
      .single();

    if (checkError && checkError.code !== 'PGRST116') {
      console.error('Error checking existing subscriber:', checkError);
      return NextResponse.json({ error: 'Database error occurred' }, { status: 500 });
    }

    if (existingSubscriber) {
      return NextResponse.json(
        { 
          message: 'Email already subscribed', 
          alreadySubscribed: true,
          showConfetti: true 
        },
        { status: 200 }
      );
    }

    // Extract first name from metadata
    const firstName = validatedData.metadata?.firstName || null;
    
    // Remove firstName from metadata since it's now a separate column
    const cleanMetadata = validatedData.metadata ? 
      Object.fromEntries(Object.entries(validatedData.metadata).filter(([key]) => key !== 'firstName')) :
      {};
    
    // Insert new subscriber
    const { data, error } = await supabaseServer
      .from('email_subscribers')
      .insert({
        email: validatedData.email,
        first_name: firstName,
        source: validatedData.source,
        metadata: cleanMetadata,
      })
      .select()
      .single();

    if (error) {
      console.error('Error inserting subscriber:', error);
      return NextResponse.json({ error: 'Failed to subscribe email' }, { status: 500 });
    }

    // After successful Supabase insertion, trigger additional integrations
    const integrationResults: {
      supabase: IntegrationResult;
      kit: IntegrationResult;
      sendgrid: IntegrationResult;
      webhook: IntegrationResult;
    } = {
      supabase: { success: true, data },
      kit: { success: false, error: 'Not attempted' },
      sendgrid: { success: false, error: 'Not attempted' },
      webhook: { success: false, error: 'Not attempted' }
    };

    // 1. Subscribe to Kit platform
    try {
      const kitResult = await subscribeToKit(validatedData.email, firstName);
      integrationResults.kit = kitResult;
      if (!kitResult.success) {
        console.warn('Kit integration failed:', kitResult.error);
      }
    } catch (error) {
      console.error('Kit integration error:', error);
      integrationResults.kit = { success: false, error: 'Kit integration failed' };
    }

    // 2. Send welcome email via Sendgrid
    try {
      const sendgridResult = await sendWelcomeEmail(validatedData.email, firstName);
      integrationResults.sendgrid = sendgridResult;
      if (!sendgridResult.success) {
        console.warn('Sendgrid integration failed:', sendgridResult.error);
      }
    } catch (error) {
      console.error('Sendgrid integration error:', error);
      integrationResults.sendgrid = { success: false, error: 'Sendgrid integration failed' };
    }

    // 3. Trigger external webhook
    try {
      const webhookResult = await triggerExternalWebhook(validatedData.email, firstName);
      integrationResults.webhook = webhookResult;
      if (!webhookResult.success) {
        console.warn('External webhook failed:', webhookResult.error);
      }
    } catch (error) {
      console.error('External webhook error:', error);
      integrationResults.webhook = { success: false, error: 'Webhook integration failed' };
    }

    // Return success even if integrations fail (as Supabase succeeded)
    return NextResponse.json(
      {
        message: 'Successfully subscribed!',
        subscriber: data,
        integrations: integrationResults,
        showConfetti: true,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Unexpected error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Email subscription API endpoint' }, { status: 200 });
}
