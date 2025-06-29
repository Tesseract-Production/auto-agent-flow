import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase-server';
import { z } from 'zod';
import { Resend } from 'resend';

// Validation schema
const subscribeSchema = z.object({
  email: z.string().email('Invalid email address'),
  source: z.string().min(1, 'Source is required'),
  metadata: z.record(z.unknown()).optional(),
});

// Integration result types
type IntegrationResult = {
  success: boolean;
  data?: unknown;
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

// Resend email integration
async function sendResendWelcomeEmail(email: string, firstName?: string): Promise<IntegrationResult> {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.warn('RESEND_API_KEY not configured');
      return { success: false, error: 'Resend API key not configured' };
    }

    const resend = new Resend(resendApiKey);

    const { data, error } = await resend.emails.send({
      from: 'Auto Agent Flow Academy <academy@mail.autoagentflow.com>',
      to: [email],
      subject: `Welcome to the n8n AI Orchestration Masterclass, ${firstName || 'Future Automation Expert'}!`,
      html: `
        <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <div style="background: linear-gradient(135deg, #da3229 0%, #e03f2f 100%); padding: 40px 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">
              Welcome to Auto Agent Flow! 🚀
            </h1>
          </div>
          
          <div style="padding: 40px 20px;">
            <h2 style="color: #333; margin-bottom: 20px;">
              Hey ${firstName || 'there'}! 👋
            </h2>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              You've just taken the first step toward mastering n8n AI automation - and I'm thrilled to have you join our community of automation pioneers!
            </p>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              Here's what happens next:
            </p>
            
            <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <ul style="color: #555; line-height: 1.8; margin: 0; padding-left: 20px;">
                <li>📚 <strong>Free Resources</strong> - Access exclusive guides and workflows</li>
                <li>🎥 <strong>Preview Content</strong> - Watch sample lessons from the masterclass</li>
                <li>💬 <strong>Community Access</strong> - Join our Discord with 100+ automation experts</li>
                <li>🔥 <strong>Special Offers</strong> - Get notified about limited-time course discounts</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://academy.tesseract.nexus/course/n8n-full-stack-masterclass-2025-building-generative-multimedia-production-system" 
                 style="background: #da3229; color: #ffffff; padding: 15px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
                Explore the Full Course →
              </a>
            </div>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              Questions? Hit reply to this email - I personally read and respond to every message.
            </p>
            
            <p style="color: #666; line-height: 1.6;">
              Let's build the future together! 🤖<br>
              <strong>The Auto Agent Flow Team</strong>
            </p>
          </div>
          
          <div style="background: #f5f5f5; padding: 20px; text-align: center; color: #888; font-size: 12px;">
            <p style="margin: 0;">
              Auto Agent Flow Academy<br>
              You received this because you signed up for our n8n masterclass updates.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return { success: false, error: `Resend API error: ${error.message}` };
    }

    return { success: true, data: { emailId: data?.id, message: 'Welcome email sent via Resend' } };
  } catch (error) {
    console.error('Resend integration error:', error);
    return { success: false, error: 'Failed to send welcome email via Resend' };
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

    // Check if Supabase is available
    if (!supabaseServer) {
      console.warn('Supabase not available, proceeding with external integrations only');
      // Skip database operations but continue with email integrations
    } else {
      // Check if email already exists
      const { data: existingSubscriber, error: checkError } = await supabaseServer
        .from('email_subscribers')
        .select('id')
        .eq('email', validatedData.email)
        .single();

      if (checkError && checkError.code !== 'PGRST116') {
        console.error('Error checking existing subscriber:', checkError);
        // Don't fail here, continue with integrations
        console.warn('Continuing with external integrations despite database error');
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
    }

    // Extract first name from metadata
    const firstName = (typeof validatedData.metadata?.firstName === 'string' ? validatedData.metadata.firstName : undefined);
    
    let data = null;
    
    // Only insert to database if Supabase is available
    if (supabaseServer) {
      // Remove firstName from metadata since it's now a separate column
      const cleanMetadata = validatedData.metadata ? 
        Object.fromEntries(Object.entries(validatedData.metadata).filter(([key]) => key !== 'firstName')) :
        {};
      
      // Insert new subscriber
      const { data: insertData, error } = await supabaseServer
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
        console.warn('Continuing with external integrations despite database error');
      } else {
        data = insertData;
      }
    }

    // After successful Supabase insertion, trigger additional integrations
    const integrationResults: {
      supabase: IntegrationResult;
      kit: IntegrationResult;
      sendgrid: IntegrationResult;
      resend: IntegrationResult;
      webhook: IntegrationResult;
    } = {
      supabase: { success: true, data },
      kit: { success: false, error: 'Not attempted' },
      sendgrid: { success: false, error: 'Not attempted' },
      resend: { success: false, error: 'Not attempted' },
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

    // 3. Send welcome email via Resend
    try {
      const resendResult = await sendResendWelcomeEmail(validatedData.email, firstName);
      integrationResults.resend = resendResult;
      if (!resendResult.success) {
        console.warn('Resend integration failed:', resendResult.error);
      }
    } catch (error) {
      console.error('Resend integration error:', error);
      integrationResults.resend = { success: false, error: 'Resend integration failed' };
    }

    // 4. Trigger external webhook
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
