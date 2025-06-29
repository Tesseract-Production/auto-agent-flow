# 🚀 Auto Agent Flow

[![CI/CD Pipeline](https://github.com/tesseract-creator/auto-agent-flow/actions/workflows/ci.yml/badge.svg)](https://github.com/tesseract-creator/auto-agent-flow/actions/workflows/ci.yml)
[![Vercel](https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

> **Modern landing page for the Auto Agent Flow Academy - Master n8n AI Orchestration Masterclass**

A high-performance, fully responsive landing page built with Next.js 15, featuring advanced animations, comprehensive email integrations, and mobile-optimized user experience.

![Auto Agent Flow Preview](https://via.placeholder.com/1200x600/da3229/ffffff?text=Auto+Agent+Flow+Landing+Page)

## 📖 Table of Contents

- [🎯 Overview](#-overview)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [🔧 Development](#-development)
- [🌐 Deployment](#-deployment)
- [📱 Mobile Optimizations](#-mobile-optimizations)
- [🔌 API Integration](#-api-integration)
- [🎨 Design System](#-design-system)
- [📊 Performance](#-performance)
- [🧪 Testing](#-testing)
- [🔒 Security](#-security)
- [📚 Documentation](#-documentation)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## 🎯 Overview

Auto Agent Flow is a premium landing page for the **n8n AI Orchestration Masterclass** by Tesseract Academy. The project demonstrates modern web development practices with a focus on performance, accessibility, and user experience.

### Key Highlights

- **🎓 Educational Platform**: Landing page for n8n automation masterclass
- **🎨 Premium Design**: Liquid glass effects and advanced animations
- **📱 Mobile-First**: Optimized for all device sizes
- **⚡ High Performance**: Lighthouse scores optimized for production
- **🔗 Multi-Platform Integration**: Email, analytics, and automation workflows

## ✨ Features

### 🎪 User Experience
- **Interactive Video Player**: Mux-powered video streaming with custom controls
- **Email Capture System**: Multi-stage email collection with confetti celebrations
- **Social Proof Popups**: Real-time subscriber notifications (desktop only)
- **Floating Scroll Navigation**: Smart section-to-section navigation
- **Progress Tracking**: Visual scroll progress indicator
- **Dark/Light Mode**: System preference detection with manual toggle

### 🎨 Visual Design
- **Liquid Glass Effects**: Custom TesseractLiquidGlass component system
- **Framer Motion Animations**: Smooth page transitions and micro-interactions
- **Responsive Carousel**: Embla-powered workflow showcase
- **Gradient Typography**: Dynamic text effects and animations
- **Custom UI Components**: Star borders, animated backgrounds, and more

### 🔧 Technical Features
- **TypeScript**: Full type safety throughout the application
- **Server-Side Rendering**: Optimized for SEO and performance
- **API Routes**: Custom backend for email handling and integrations
- **Error Monitoring**: Sentry integration for production debugging
- **Analytics**: Google Analytics 4 and Microsoft Clarity integration

## 🛠️ Tech Stack

### Core Framework
- **[Next.js 15.3.4](https://nextjs.org)** - React framework with App Router
- **[React 18](https://reactjs.org)** - UI library with concurrent features
- **[TypeScript](https://www.typescriptlang.org)** - Type-safe JavaScript

### Styling & Animation
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion library
- **Custom CSS** - Liquid glass effects and advanced animations

### Backend & Database
- **[Supabase](https://supabase.com)** - Backend-as-a-Service with PostgreSQL
- **[Resend](https://resend.com)** - Modern email API
- **[SendGrid](https://sendgrid.com)** - Email delivery platform
- **[Kit](https://kit.com)** - Email marketing automation

### Media & Content
- **[Mux](https://mux.com)** - Video streaming and player
- **[Embla Carousel](https://www.embla-carousel.com)** - Lightweight carousel library

### Development Tools
- **[ESLint](https://eslint.org)** - Code linting and formatting
- **[Jest](https://jestjs.io)** - JavaScript testing framework
- **[Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)** - Performance monitoring

### Deployment & Monitoring
- **[Vercel](https://vercel.com)** - Serverless deployment platform
- **[Sentry](https://sentry.io)** - Error tracking and performance monitoring
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD pipeline

## 🚀 Quick Start

### Prerequisites

- **Node.js** 20.x or later
- **npm** or **yarn** package manager
- **Git** for version control

### 5-Minute Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/tesseract-creator/auto-agent-flow.git
   cd auto-agent-flow
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your API keys (see Environment Variables section)
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

### Environment Variables

Create a `.env.local` file with the following variables:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Email Integration
KIT_API_KEY=your_kit_v4_api_key
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_TEMPLATE_ID=your_sendgrid_template_id
RESEND_API_KEY=your_resend_api_key

# Analytics
NEXT_PUBLIC_MICROSOFT_CLARITY_ID=your_clarity_project_id
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your_ga4_measurement_id

# Monitoring
SENTRY_DSN=your_sentry_dsn
NEXT_PUBLIC_SENTRY_DSN=your_public_sentry_dsn

# Vercel (Auto-populated in production)
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_vercel_org_id
VERCEL_PROJECT_ID=your_vercel_project_id
```

## 📁 Project Structure

```
auto-agent-flow/
├── 📁 .github/
│   └── 📁 workflows/
│       └── ci.yml                 # CI/CD pipeline configuration
├── 📁 public/
│   ├── 📁 assets/
│   │   ├── 📁 images/            # Optimized WebP images
│   │   ├── 📁 icons/             # SVG icons and favicons
│   │   └── 📁 logos/             # Brand assets
│   └── 📄 *.svg                   # Public SVG assets
├── 📁 src/
│   ├── 📁 app/                    # Next.js 15 App Router
│   │   ├── 📁 api/               # API routes
│   │   │   ├── 📁 subscribe/     # Email subscription endpoint
│   │   │   ├── 📁 support/       # Contact form handler
│   │   │   └── 📁 social-proof/  # Social proof data
│   │   ├── 📁 legal/             # Legal pages (privacy, terms, etc.)
│   │   ├── layout.tsx            # Root layout with providers
│   │   ├── page.tsx              # Homepage component
│   │   └── globals.css           # Global styles and CSS variables
│   ├── 📁 components/             # Reusable UI components
│   │   ├── 📁 ui/                # Base UI components
│   │   ├── 📁 __tests__/         # Component tests
│   │   ├── HeroOptimized.tsx     # Hero section with video
│   │   ├── Navigation.tsx        # Header navigation
│   │   ├── VideoPreview.tsx      # Video player and carousel
│   │   ├── Pricing.tsx           # Pricing cards section
│   │   ├── FAQ.tsx               # Frequently asked questions
│   │   └── ...                   # Additional components
│   ├── 📁 contexts/              # React Context providers
│   ├── 📁 hooks/                 # Custom React hooks
│   ├── 📁 lib/                   # Utility functions and configurations
│   ├── 📁 styles/                # Additional CSS files
│   └── 📁 types/                 # TypeScript type definitions
├── 📁 supabase/                  # Database schemas and migrations
├── 📄 CLAUDE.md                  # Development guidelines for AI assistance
├── 📄 README.md                  # This file
├── 📄 package.json               # Dependencies and scripts
├── 📄 tailwind.config.js         # Tailwind CSS configuration
├── 📄 tsconfig.json              # TypeScript configuration
├── 📄 next.config.ts             # Next.js configuration
├── 📄 jest.config.js             # Jest testing configuration
└── 📄 lighthouserc.json          # Lighthouse CI configuration
```

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev                 # Start development server
npm run build              # Create production build
npm run start              # Start production server
npm run lint               # Run ESLint
npm run typecheck          # Run TypeScript type checking

# Testing
npm run test               # Run all tests
npm run test:unit          # Run unit tests only
npm run test:watch         # Run tests in watch mode

# Database
npm run db:generate        # Generate Supabase types
npm run db:push            # Push schema changes to Supabase
```

### Code Style & Standards

- **TypeScript**: Strict mode enabled for type safety
- **ESLint**: Configured with Next.js and TypeScript rules
- **Prettier**: Automatic code formatting on save
- **Husky**: Pre-commit hooks for code quality
- **Import Organization**: Absolute imports using `@/` alias

### Component Development

All components follow these conventions:

1. **Client Components**: Use `'use client'` directive for interactive components
2. **Type Safety**: Full TypeScript interfaces for all props
3. **Responsive Design**: Mobile-first approach with Tailwind classes
4. **Accessibility**: WCAG 2.1 AA compliance
5. **Testing**: Unit tests for all business logic

## 🌐 Deployment

### Automated Deployment (Recommended)

The project uses GitHub Actions for automated CI/CD:

1. **Push to main branch** triggers the pipeline
2. **Tests run in parallel** (lint, typecheck, unit, build)
3. **Security scanning** with npm audit and Snyk
4. **Lighthouse CI** validates performance
5. **Vercel deployment** goes live automatically

### Manual Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Required GitHub Secrets

Configure these secrets in your GitHub repository settings:

```
VERCEL_TOKEN           # Vercel API token
VERCEL_ORG_ID         # Vercel organization ID
VERCEL_PROJECT_ID     # Vercel project ID
SNYK_TOKEN            # Snyk security scanning token (optional)
SENTRY_AUTH_TOKEN     # Sentry release tracking token (optional)
```

## 📱 Mobile Optimizations

### Responsive Breakpoints

- **Mobile**: `< 768px` - Optimized for touch interactions
- **Tablet**: `768px - 1024px` - Balanced layout
- **Desktop**: `> 1024px` - Full feature set

### Mobile-Specific Features

- **Popup Management**: All popups disabled on mobile for better UX
- **Touch Gestures**: Optimized carousel and navigation
- **Performance**: Background animations disabled on mobile
- **Typography**: Responsive text scaling and line heights
- **Spacing**: Consistent 16px padding across all components

## 🔌 API Integration

### Email Subscription Flow

The `/api/subscribe` endpoint handles a 4-step integration process:

1. **Supabase**: Store subscriber data with metadata
2. **Kit**: Add to email marketing automation
3. **SendGrid**: Send welcome email with template
4. **External Webhook**: Trigger n8n automation workflow

### Error Handling

- **Graceful Degradation**: APIs work independently
- **Retry Logic**: Automatic retries for failed requests
- **Fallback Data**: Static data when services are unavailable
- **Comprehensive Logging**: Error tracking with Sentry

## 🎨 Design System

### Color Palette

```css
/* Primary Colors */
--brand-primary: rgb(218, 50, 41)      /* #da3229 */
--brand-secondary: rgb(92, 38, 35)     /* #5c2623 */
--brand-accent: rgb(224, 57, 47)       /* #e0392f */

/* Neutral Colors */
--background: rgb(255, 255, 255)       /* Light mode */
--background-dark: rgb(23, 23, 23)     /* Dark mode */

/* Semantic Colors */
--success: rgb(34, 197, 94)           /* Green */
--warning: rgb(251, 191, 36)          /* Yellow */
--error: rgb(239, 68, 68)             /* Red */
```

### Typography Scale

- **Display**: 96px / 72px / 60px - Hero headings
- **Heading**: 48px / 36px / 30px / 24px - Section titles
- **Body**: 20px / 18px / 16px - Content text
- **Caption**: 14px / 12px - Helper text

### Component Variants

- **TesseractLiquidGlass**: `card`, `interactive`, `background`
- **Buttons**: `primary`, `secondary`, `ghost`, `outline`
- **Animations**: `subtle`, `emphasized`, `playful`

## 📊 Performance

### Lighthouse Scores (Target)

- **Performance**: ≥ 80 (Mobile/Desktop)
- **Accessibility**: ≥ 90
- **Best Practices**: ≥ 90
- **SEO**: ≥ 90

### Optimization Strategies

- **Image Optimization**: WebP format with responsive sizing
- **Code Splitting**: Dynamic imports for heavy components
- **Bundle Analysis**: Regular bundle size monitoring
- **Caching**: Strategic caching for static assets
- **CDN**: Global content delivery via Vercel Edge Network

### Core Web Vitals

- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)

## 🧪 Testing

### Testing Strategy

- **Unit Tests**: Component logic and utilities
- **Integration Tests**: API endpoints and data flow
- **E2E Tests**: Critical user journeys (planned)
- **Visual Regression**: Component screenshot comparisons (planned)

### Running Tests

```bash
# Run all tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch

# Run specific test file
npm run test Navigation.test.tsx
```

### Test Structure

```typescript
// Example component test
import { render, screen, fireEvent } from '@testing-library/react';
import { Navigation } from '../Navigation';

describe('Navigation', () => {
  it('renders navigation items', () => {
    render(<Navigation />);
    expect(screen.getByText('Course Outline')).toBeInTheDocument();
  });
});
```

## 🔒 Security

### Security Measures

- **Environment Variables**: Secure API key management
- **Input Validation**: Zod schema validation for all inputs
- **Rate Limiting**: API endpoint protection (planned)
- **CORS**: Cross-origin request restrictions
- **CSP**: Content Security Policy headers (planned)

### Security Scanning

- **npm audit**: Dependency vulnerability scanning
- **Snyk**: Advanced security vulnerability detection
- **Automated Scans**: CI/CD pipeline integration

## 📚 Documentation

### Developer Resources

- **[CLAUDE.md](./CLAUDE.md)**: AI-assisted development guidelines
- **[REPO_SETUP.md](./REPO_SETUP.md)**: Detailed setup instructions
- **Component Documentation**: Inline JSDoc comments
- **API Documentation**: OpenAPI specs (planned)

### Architecture Decisions

- **App Router**: Next.js 15 app directory structure
- **Server Components**: Default to server-side rendering
- **Client Components**: Minimal client-side JavaScript
- **Styling**: Tailwind-first with custom CSS for complex effects

## 🤝 Contributing

### Development Workflow

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'feat: add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new component
fix: resolve mobile responsive issue
docs: update README
style: format code
refactor: improve performance
test: add unit tests
chore: update dependencies
```

### Code Review Process

- **Automated Checks**: All CI/CD tests must pass
- **Code Quality**: ESLint and TypeScript validation
- **Performance**: Lighthouse CI benchmarks
- **Security**: Dependency vulnerability scans

## 📄 License

This project is proprietary software owned by **Tesseract Academy**. All rights reserved.

For licensing inquiries, please contact: [team@tesseract.nexus](mailto:team@tesseract.nexus)

---

## 🌟 Acknowledgments

- **Design Inspiration**: Modern SaaS landing pages and educational platforms
- **Open Source Libraries**: Thanks to all the amazing open source contributors
- **Community**: n8n community for automation insights and feedback

---

<div align="center">

**Built with ❤️ by the Tesseract Team**

[🌐 Live Demo](https://auto-agent-flow.vercel.app) • [📧 Contact](mailto:team@tesseract.nexus) • [🐦 Twitter](https://twitter.com/tesseract_nexus)

</div>