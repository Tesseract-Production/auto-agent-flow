# Kit Email Platform Integration Setup

## Overview

The email subscription system now performs **3 actions** when users submit their first name and email through the hero email capture component:

1. **Supabase Database** - Store subscriber information (existing functionality)
2. **Kit Email Platform** - Add subscriber to email list and trigger welcome sequence
3. **External Webhook** - Trigger automation flow via Tesseract API

## Implementation Details

### API Route: `/api/subscribe`

The enhanced API route (`/src/app/api/subscribe/route.ts`) now includes:

- **Kit API Integration** - Subscribes users to Kit email platform with tags
- **External Webhook Integration** - Triggers automation flow via external API
- **Error Handling** - Graceful degradation if integrations fail
- **Integration Status Tracking** - Returns detailed status for each integration

### Kit API Configuration

**Environment Variable Required:**

```bash
KIT_API_KEY=your_actual_kit_api_key_here
```

**Kit Integration Details:**

- **Endpoint**: `https://api.kit.com/v4/subscribers`
- **Method**: POST
- **Authentication**: Bearer token
- **Tags Applied**: `['n8n-masterclass', 'hero-signup']`
- **State**: `active`

### External Webhook Configuration

**Webhook Details:**

- **URL**: `https://api.tesseract.nexus/v1/auto-agent-flow-new-lead-processor`
- **Method**: POST
- **Authorization**: `36429048-8653-444a-90d3-49ce15500f4a`
- **Payload**:

  ```json
  {
    "email": "user@example.com",
    "firstName": "John",
    "source": "hero-email-capture",
    "timestamp": "2025-01-13T10:30:00.000Z"
  }
  ```

## Setup Instructions

### 1. Configure Kit API Key

1. Log into your Kit account
2. Navigate to Account Settings → API
3. Generate or copy your API key
4. Add to `.env.local`:

   ```bash
   KIT_API_KEY=your_actual_kit_api_key_here
   ```

### 2. Deploy Environment Variables

For production deployment, add the Kit API key to your hosting platform:

**Vercel:**

```bash
vercel env add KIT_API_KEY
```

**Or via Vercel Dashboard:**

1. Go to Project Settings → Environment Variables
2. Add `KIT_API_KEY` with your actual key

### 3. Verify Integration

Test the integration by:

1. Submitting an email through the hero form
2. Checking the API response for integration status
3. Verifying the user appears in Kit dashboard
4. Confirming the external webhook receives the POST request

## API Response Format

```json
{
  "message": "Successfully subscribed!",
  "subscriber": {
    "id": 123,
    "email": "user@example.com",
    "first_name": "John",
    "created_at": "2025-01-13T10:30:00.000Z"
  },
  "integrations": {
    "supabase": {
      "success": true,
      "data": { /* subscriber data */ }
    },
    "kit": {
      "success": true,
      "data": { /* kit response */ }
    },
    "webhook": {
      "success": true,
      "data": { /* webhook response */ }
    }
  }
}
```

## Error Handling

The system uses **graceful degradation**:

- If Supabase fails → Return error (critical failure)
- If Kit fails → Log warning, continue (non-critical)
- If Webhook fails → Log warning, continue (non-critical)

Users will always see success if Supabase succeeds, even if other integrations fail.

## Monitoring

Integration failures are logged with appropriate detail:

- Kit integration errors
- External webhook errors
- Network timeouts
- Authentication failures

Check server logs for integration status and troubleshooting information.
