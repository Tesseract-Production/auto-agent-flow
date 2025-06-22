import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

interface SupportRequest {
  fullName: string;
  question: string;
}

function getClientIP(request: NextRequest): string | null {
  // Try various headers for IP address
  const xForwardedFor = request.headers.get('x-forwarded-for');
  const xRealIp = request.headers.get('x-real-ip');
  const xClientIp = request.headers.get('x-client-ip');
  
  if (xForwardedFor) {
    return xForwardedFor.split(',')[0].trim();
  }
  if (xRealIp) {
    return xRealIp;
  }
  if (xClientIp) {
    return xClientIp;
  }
  
  return null;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, question }: SupportRequest = body;

    // Validate input
    if (!fullName?.trim() || !question?.trim()) {
      return NextResponse.json(
        { error: 'Full name and question are required' },
        { status: 400 }
      );
    }

    // Get request metadata
    const userAgent = request.headers.get('user-agent');
    const referer = request.headers.get('referer');
    const clientIP = getClientIP(request);

    // Insert into Supabase
    const { data: ticket, error: supabaseError } = await supabase
      .from('support_tickets')
      .insert({
        full_name: fullName.trim(),
        question: question.trim(),
        user_agent: userAgent,
        ip_address: clientIP,
        referrer: referer,
        source: 'contact_popup'
      })
      .select()
      .single();

    if (supabaseError) {
      console.error('Supabase error:', supabaseError);
      return NextResponse.json(
        { error: 'Failed to submit support request' },
        { status: 500 }
      );
    }

    // Send confirmation email via Resend
    let emailSent = false;
    try {
      if (process.env.RESEND_API_KEY) {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: 'Auto Agent Flow Support <support@mail.autoagentflow.com>',
          to: ['team@autoagentflow.com'], // Support team notification
          subject: `New Support Request from ${fullName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #da3229;">New Support Request</h2>
              
              <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3>Contact Information</h3>
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
                <p><strong>Ticket ID:</strong> ${ticket.id}</p>
              </div>

              <div style="background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                <h3>Question/Comment:</h3>
                <p style="white-space: pre-wrap; line-height: 1.6;">${question}</p>
              </div>

              <div style="margin-top: 20px; padding: 15px; background: #e8f4f8; border-radius: 8px;">
                <h4>Technical Details:</h4>
                <p><strong>Source:</strong> Contact Popup</p>
                <p><strong>IP Address:</strong> ${clientIP || 'Unknown'}</p>
                <p><strong>User Agent:</strong> ${userAgent || 'Unknown'}</p>
                <p><strong>Referrer:</strong> ${referer || 'Direct'}</p>
              </div>

              <div style="margin-top: 30px; text-align: center; color: #666;">
                <p>Reply to this ticket in your Supabase dashboard or support system.</p>
              </div>
            </div>
          `,
        });
        emailSent = true;
      }
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json({
      success: true,
      ticketId: ticket.id,
      message: 'Support request submitted successfully',
      emailSent
    });

  } catch (error) {
    console.error('Support API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}