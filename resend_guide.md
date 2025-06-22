# Resend Email Integration Setup Guide

This guide outlines everything you need to configure in your Resend dashboard to enable email functionality for the Auto Agent Flow website.

## Environment Variables Required

Add these environment variables to your `.env.local` file:

```bash
# Resend Configuration
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Supabase Service Role (for support tickets)
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Resend Dashboard Setup

### 1. Create Resend Account

- Sign up at <https://resend.com>
- Verify your account via email

### 2. Domain Configuration

You need to configure your sending domain in Resend:

**Option A: Use tesseract.nexus domain**

- Add `tesseract.nexus` as a verified domain
- Add these DNS records to your domain:
  - SPF record: `v=spf1 include:_spf.resend.com ~all`
  - DKIM record: (provided by Resend)
  - DMARC record: `v=DMARC1; p=quarantine;`

**Option B: Use subdomain**

- Add `mail.tesseract.nexus` or `academy.tesseract.nexus`
- Follow Resend's domain verification process

### 3. API Key Generation

- Go to API Keys section in Resend dashboard
- Create a new API key with "Send emails" permission
- Copy the key and add to your environment variables

### 4. Email Templates (Optional)

The current implementation uses inline HTML, but you can optionally create templates:

#### Welcome Email Template

- **Subject**: `Welcome to the n8n AI Orchestration Masterclass, {{firstName}}!`
- **From**: `Auto Agent Flow Academy <academy@tesseract.nexus>`
- **Variables**: `firstName`, `email`

#### Support Ticket Notification Template

- **Subject**: `New Support Request from {{fullName}}`
- **From**: `Tesseract Support <support@tesseract.nexus>`
- **Variables**: `fullName`, `question`, `ticketId`, `submittedAt`

## Current Email Integrations

### 1. Welcome Email (Hero Email Capture)

**File**: `/src/app/api/subscribe/route.ts`
**Function**: `sendResendWelcomeEmail()`
**Triggered**: When user submits email in hero section
**From**: `Auto Agent Flow Academy <academy@mail.autoagentflow.com>`
**Template**: Inline HTML with brand styling

### 2. Support Ticket Notification

**File**: `/src/app/api/support/route.ts`
**Function**: Internal support team notification
**Triggered**: When user submits support form
**From**: `Auto Agent Flow Support <support@mail.autoagentflow.com>`
**To**: `team@autoagentflow.com`

## Email Content Details

### Welcome Email Features

- ✅ Personalized greeting with first name
- ✅ Brand-consistent styling (Auto Agent Flow colors)
- ✅ Clear call-to-action to course
- ✅ Community benefits explanation
- ✅ Professional email footer
- ✅ Mobile-responsive HTML
- ✅ Emoji support for engagement

### Support Notification Features

- ✅ Support ticket details
- ✅ Technical metadata (IP, user agent, referrer)
- ✅ Formatted question content
- ✅ Unique ticket ID for tracking
- ✅ Professional admin formatting

## Testing Checklist

### Before Going Live

1. ✅ Verify domain DNS records are properly configured
2. ✅ Test API key permissions in Resend dashboard  
3. ✅ Send test welcome email to yourself
4. ✅ Submit test support request and verify notification
5. ✅ Check email deliverability (inbox vs spam)
6. ✅ Test on mobile email clients
7. ✅ Verify unsubscribe links work (if added)

### Email Client Testing

- Gmail (desktop & mobile)
- Outlook (desktop & mobile)
- Apple Mail (desktop & mobile)
- Yahoo Mail
- Protonmail

## Integration Flow Summary

### Hero Email Submission Flow

1. User submits email in hero section
2. Email saved to Supabase `email_subscribers` table
3. Kit integration (existing)
4. Sendgrid integration (existing)  
5. **Resend welcome email** ← NEW
6. External webhook trigger (existing)
7. Success response with confetti

### Support Request Flow

1. User clicks "Contact Support" in FAQ
2. Popup opens with form fields
3. User submits name + question
4. Data saved to Supabase `support_tickets` table
5. **Resend notification to team** ← NEW
6. Success confirmation to user

## Monitoring & Analytics

### Resend Dashboard Metrics

- Email delivery rates
- Open rates (if tracking enabled)
- Bounce rates
- Spam complaints
- API usage

### Supabase Analytics

- Email subscriber growth
- Support ticket volume
- Geographic distribution
- Source attribution

## Troubleshooting

### Common Issues

1. **API Key Invalid**: Verify key has correct permissions
2. **Domain Not Verified**: Complete DNS verification process
3. **Rate Limits**: Check Resend plan limits
4. **Delivery Issues**: Monitor domain reputation
5. **Template Errors**: Validate HTML structure

### Debug Steps

1. Check application logs for Resend API errors
2. Verify environment variables are loaded
3. Test API key with Resend's test endpoint
4. Check domain verification status
5. Monitor email delivery status in Resend dashboard

## Security Considerations

- ✅ API keys stored as environment variables only
- ✅ No sensitive data in email content
- ✅ Rate limiting on API endpoints (via Next.js)
- ✅ Input validation before sending emails
- ✅ Email content sanitization

## Next Steps After Setup

1. Monitor email delivery rates for first week
2. A/B test welcome email subject lines
3. Set up email analytics tracking
4. Consider adding email templates for consistency
5. Implement unsubscribe functionality if needed
6. Add email automation sequences (drip campaigns)

## Support

If you encounter issues:

1. Check Resend documentation: <https://resend.com/docs>
2. Review implementation in `/src/app/api/subscribe/route.ts`
3. Verify Supabase table setup with `/src/supabase/support_tickets.sql`
4. Contact Resend support for domain/delivery issues

---

**Implementation Status**: ✅ Complete - Ready for API key configuration
**Last Updated**: January 2025
**Tested**: Staging environment ready for production deployment
