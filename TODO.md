# Dead Buttons & Links Audit - TODO

**Audit Date**: June 23, 2025  
**Objective**: Identify all non-functional buttons and links that need proper actions for public launch

## 🚨 CRITICAL DEAD BUTTONS (Main Conversion Elements)

### Hero Section (`src/components/Hero.tsx`)

- **Line 56-59**: `"Start Learning Today"` button - Primary CTA, completely dead => (URL FOR CLICK ACTION = <https://academy.tesseract.nexus/course/n8n-full-stack-masterclass-2025-building-generative-multimedia-production-system>)
- **Line 62**: `"Watch Free Preview"` button - Secondary CTA, completely dead => (ACTION = COMMENT OUT FOR NOW AND REMOVE FROM PAGE)

### Pricing Section (`src/components/Pricing.tsx`)

- **Lines 155-162**: All three pricing buttons are dead:
  - `"Access Resources"` button => CHANGE NAME TO RESOURCES + (URL FOR CLICK ACTION = <https://build.tesseract.nexus/>)
  - `"Join the Academy"` button => ( URL FOR CLICK ACTION = <https://academy.tesseract.nexus/>)
  - `"Get Team Access"` button => (URL FOR CLICK ACTION = NONE - COMMENT OUT AND REMOVE FOR NOW)

### Final CTA Section (`src/components/FinalCTA.tsx`)

- **Line 67-74**: `"Secure Your Spot Now"` button - Primary conversion CTA, completely dead ( URL FOR CLICK ACTION = <https://academy.tesseract.nexus/course/n8n-full-stack-masterclass-2025-building-generative-multimedia-production-system>)
- **Line 75**: `"Download Course Syllabus"` button - Lead magnet CTA, completely dead (URL FOR CLICK ACTION = NONE - COMMENT OUT BUT DO NOT DELETE FOR NOW)

## ⚠️ SECONDARY DEAD ELEMENTS

### Email Capture (`src/components/EmailCapture.tsx`)

- **Line 31-35**: Form submission only logs to console - needs proper backend integration (THIS IS NOT CORRECT. THERE SHOULD BE 4 ACTIONS which TRIGGER WEBHOOK, SEND RESULT TO SUPABASE, etc. THESE ARE WORKING SO PLEASE INVESTIGATE AS TO WHY YOU ARE NOT ABLE TO FIND THIS)
  - Current: `console.warn('Email submitted:', email)`
  - Needs: Actual API call to email service

### FAQ Section (`src/components/FAQ.tsx`)

- **Line 158**: `"Contact Support"` button - Support CTA, completely dead (URL FOR CLICK ACTION = <https://tesseract.nexus/contact/>)

## 🔗 PLACEHOLDER LINKS (Footer)

### Navigation Links (`src/components/Footer.tsx`)

**Lines 15-19** - These routes likely don't exist: (REVIEW THE REPO FOR THIS PLEASE, ALL OF THESE ARE WORKING ON LOCAL AND LIVE AND HAVE BEEN ALREADY DONE)

- `/blog`
- `/templates`
- `/about`
- `/contact`
- `/privacy`
- `/terms`

### Social Media Links (`src/components/Footer.tsx`) (ALREADY DONE)

**Lines 29-34** - Generic placeholder URLs:

- `https://youtube.com` → Need actual channel URL
- `https://twitter.com` → Need actual profile URL  
- `https://linkedin.com` → Need actual profile URL
- `https://github.com` → Need actual repository URL
- `https://discord.gg` → Need actual server invite URL

## ✅ WORKING ELEMENTS (No Action Needed)

- **Navigation**: All anchor links and theme toggle work
- **Video Preview**: Play button and carousel work
- **Free Ebook Resources**: Download buttons work conditionally
- **Launch Discount Popup**: All buttons functional
- **Social Proof Popup**: Functional

## 📋 ACTION ITEMS

### Priority 1 (Critical for Launch)

1. [ ] Add proper href/onClick to Hero "Start Learning Today" button
2. [ ] Add proper href/onClick to Hero "Watch Free Preview" button  
3. [ ] Add proper href/onClick to all Pricing section buttons
4. [ ] Add proper href/onClick to Final CTA buttons
5. [ ] Fix EmailCapture form to use actual API endpoint

### Priority 2 (Important for Polish)

6. [ ] Add proper href/onClick to FAQ "Contact Support" button
7. [ ] Create actual pages for Footer navigation links OR remove them
8. [ ] Replace Footer social links with actual branded URLs

## 🎯 SUGGESTED ACTIONS

**For Hero & Pricing Buttons**:

- Link to pricing section or external payment/enrollment page
- Consider using scroll-to functionality for internal sections

**For Email Capture**:

- Integrate with existing `/api/subscribe` endpoint
- Ensure proper error handling and user feedback

**For Download Buttons**:

- Link to actual course syllabus PDF or lead magnet content

**For Contact/Support**:

- Link to contact form, email mailto:, or support chat

---

*This audit ensures all interactive elements function properly for the public launch.*
