import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase-server';
import { z } from 'zod';

// Validation schema
const subscribeSchema = z.object({
  email: z.string().email('Invalid email address'),
  source: z.string().min(1, 'Source is required'),
  metadata: z.record(z.any()).optional(),
});

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
        { message: 'Email already subscribed', alreadySubscribed: true },
        { status: 200 }
      );
    }

    // Extract first name from metadata
    const firstName = validatedData.metadata?.firstName || null;
    
    // Insert new subscriber
    const { data, error } = await supabaseServer
      .from('email_subscribers')
      .insert({
        email: validatedData.email,
        first_name: firstName,
        source: validatedData.source,
        metadata: validatedData.metadata || {},
      })
      .select()
      .single();

    if (error) {
      console.error('Error inserting subscriber:', error);
      return NextResponse.json({ error: 'Failed to subscribe email' }, { status: 500 });
    }

    return NextResponse.json(
      {
        message: 'Successfully subscribed!',
        subscriber: data,
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
