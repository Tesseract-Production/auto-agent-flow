# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Essential Commands

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Architecture Overview

This is a Next.js 15 landing page for the Tesseract n8n AI Orchestration Masterclass. The project uses:

- **Next.js 15.3.3** with App Router
- **TypeScript** with strict mode enabled
- **Tailwind CSS** with custom design system
- **Framer Motion** for animations
- **Supabase** (installed but not yet configured)

### Key Architectural Decisions

1. **Component Architecture**: All components in `src/components/` are client-side (`'use client'`) React functional components with TypeScript. Each component is self-contained with its own animations and styling.

2. **Design System**: Custom CSS variables defined in `globals.css`:

   - Primary color: `rgb(218, 50, 41)`
   - Secondary color: `rgb(92, 38, 35)`
   - Accent color: `rgb(224, 57, 47)`
   - Dark theme: `rgb(23, 23, 23)`
   - Custom utilities: `btn-primary`, `btn-secondary`, `gradient-text`, `glass-effect`

3. **Path Aliases**: `@/*` maps to `./src/*` for cleaner imports

4. **Page Structure**: Single landing page composed of 12 modular sections (Navigation → Hero → VideoPreview → CourseOutline → TechStack → Testimonials → Instructor → Pricing → FAQ → EmailCapture → FinalCTA → Footer)

## Backend Integration Notes

### Required Environment Variables

Add these to your `.env.local` file:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Email Integrations
KIT_API_KEY=your_kit_v4_api_key
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_TEMPLATE_ID=your_sendgrid_template_id

# Analytics
NEXT_PUBLIC_MICROSOFT_CLARITY_ID=your_clarity_project_id
```

### Email Flow Integration

The subscribe API endpoint (`/api/subscribe`) performs a 4-step integration:
1. **Supabase**: Stores subscriber data in `email_subscribers` table
2. **Kit**: Adds subscriber to email marketing platform (v4 API with `X-Kit-Api-Key` header)
3. **Sendgrid**: Sends welcome email using dynamic template
4. **External Webhook**: Triggers n8n automation workflow

### Features Implemented

- Email submission with confetti celebration
- Conditional download buttons (enabled after email submission)  
- Microsoft Clarity analytics integration (Project ID: rzjz2antsr)
- Multi-platform email integrations with graceful error handling
- Complete dark mode implementation with system preference detection
- Premium visual effects: hover transitions, shadow animations, shimmer effects

## Current Project Status

The frontend is complete with all landing page components built. Check `PROJECT_STATUS.md` for detailed status and pending work items.
