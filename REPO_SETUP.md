# 🚀 Auto Agent Flow - Local Development Setup

## What This Project Is
A Next.js 15 landing page for the **Auto Agent Flow Academy** - an n8n AI automation masterclass. Features email capture, pricing cards, video previews, and comprehensive backend integrations.

---

## 📋 Quick Start (5 Minutes)

### Step 1: Prerequisites
Make sure you have these installed:
- **Node.js 18+** - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)
- **Code Editor** - VS Code recommended

### Step 2: Clone & Install
```bash
# Clone the repository
git clone https://github.com/tesseract-creator/auto-agent-flow.git

# Navigate to project
cd auto-agent-flow

# Install dependencies (this takes ~2 minutes)
npm install
```

### Step 3: Environment Setup
```bash
# Copy the environment file
cp .env.local.example .env.local

# Edit the file (use any text editor)
nano .env.local
```

**Required Environment Variables** (already configured in `.env.local`):
```bash
# Supabase Database
NEXT_PUBLIC_SUPABASE_URL=https://areurlizrxsacdbwvjyo.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Email Integrations
KIT_API_KEY=kit_6490ced004108c7199f6cb7c86a6c438
SENDGRID_API_KEY=SG.DRJQDIK3TQWa8pHwmCWP0Q...

# Analytics
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-8QHK6F230J
NEXT_PUBLIC_MICROSOFT_CLARITY_ID=rzjz2antsr
```

### Step 4: Start Development
```bash
# Start the development server
npm run dev
```

**🎉 That's it!** Open [http://localhost:3000](http://localhost:3000) to see the site.

---

## 🛠️ Development Commands

| Command | What It Does |
|---------|-------------|
| `npm run dev` | Start development server (localhost:3000) |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Check code quality |
| `npm run typecheck` | Check TypeScript errors |

---

## 📁 Project Structure (What's Where)

```
auto-agent-flow/
├── src/
│   ├── app/                 # Next.js pages & API routes
│   │   ├── page.tsx        # Main landing page
│   │   ├── api/subscribe/  # Email capture API
│   │   └── layout.tsx      # Site layout & metadata
│   ├── components/         # React components
│   │   ├── HeroEmailCapture.tsx     # Email form
│   │   ├── Pricing.tsx              # Pricing cards
│   │   ├── Navigation.tsx           # Header & nav
│   │   ├── FloatingScrollButton.tsx # Scroll navigation
│   │   └── [other components]
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilities & helpers
│   └── styles/             # CSS files
├── public/                 # Static assets (images, etc.)
├── .env.local             # Environment variables
└── package.json           # Dependencies & scripts
```

---

## 🎯 Key Features

### ✅ What's Working
- **Email Capture**: Hero form with 5-step backend integration
- **Pricing Cards**: 3-column layout with proper CTAs
- **Popups**: Social proof (bottom-left) + Launch discount (bottom-right)
- **Scroll Navigation**: Progress tracker + floating scroll button
- **Analytics**: Google Analytics + Microsoft Clarity
- **Dark Mode**: System preference detection

### 🔄 Backend Integrations
When someone submits an email, it triggers:
1. **Supabase** - Database storage
2. **Kit** - Email marketing platform
3. **SendGrid** - Welcome email
4. **Resend** - Backup email
5. **n8n Webhook** - External automation

---

## 🧪 Testing & Development

### Test Email Capture
1. Fill out the hero form with any email
2. Check browser console for success/error messages
3. Check network tab to see API calls
4. Confetti animation should trigger on success

### Test Responsive Design
- Desktop: Full layout with all features
- Tablet: Responsive grid adjustments
- Mobile: Stacked layout + mobile menu

### Test Dark Mode
- Click theme toggle in navigation
- All components should switch themes
- Preference saved in localStorage

---

## 🚨 Common Issues & Solutions

### "Module not found" errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors
```bash
# Check for type issues
npm run typecheck
```

### Build failures
```bash
# Run linting first
npm run lint
npm run build
```

### Email capture not working
- Check `.env.local` has all required variables
- Check browser console for API errors
- Verify Supabase connection

### Images not loading
- Ensure images exist in `public/assets/images/`
- Check file extensions match imports
- Verify paths are correct

---

## 🎨 Customization Guide

### Change Colors
Edit `src/app/globals.css`:
```css
:root {
  --brand-primary: rgb(218, 50, 41);    /* Main red */
  --brand-secondary: rgb(92, 38, 35);   /* Dark red */
  --brand-accent: rgb(224, 57, 47);     /* Bright red */
}
```

### Add New Components
1. Create file in `src/components/`
2. Export as named export
3. Import in `src/app/page.tsx`
4. Add to main layout

### Modify Pricing
Edit `src/components/Pricing.tsx`:
- Update `pricing` object
- Modify card layouts
- Change CTA buttons

---

## 🚀 Deployment

### Automatic Deployment
- **Push to GitHub** → Vercel automatically deploys
- **Environment**: Production environment uses `.env.production`
- **Domain**: Configured in Vercel dashboard

### Manual Deployment
```bash
# Build locally
npm run build

# Test production build
npm run start
```

---

## 💡 Pro Tips

1. **Hot Reload**: Save any file to see instant changes
2. **Component Debugging**: Use React DevTools extension
3. **Performance**: Check Lighthouse scores in browser
4. **Console**: Always keep browser console open during development
5. **Mobile Testing**: Use browser DevTools mobile emulation

---

## 📞 Getting Help

### Documentation
- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Framer Motion**: [framer.com/motion](https://framer.com/motion)

### Project-Specific Files
- `CLAUDE.md` - AI assistant instructions
- `guide/PROJECT_STATUS.md` - Current project status
- `guide/EMAIL_SUBMIT_ACTION_PATH.txt` - Email flow details

---

## 🎯 Quick Checklist

- [ ] Node.js 18+ installed
- [ ] Repository cloned
- [ ] Dependencies installed (`npm install`)
- [ ] Environment variables configured
- [ ] Development server running (`npm run dev`)
- [ ] Site loads at localhost:3000
- [ ] Email form works (test submission)
- [ ] Dark mode toggle works
- [ ] No console errors

**🎉 You're ready to develop!**

---

*Last updated: January 2025*