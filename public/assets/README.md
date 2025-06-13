# Assets Directory Structure

This directory contains all static assets for the Tesseract n8n Masterclass website.

## Directory Structure

```
assets/
├── logos/          # Brand logos and variations
├── images/         # General images (hero, backgrounds, etc.)
└── icons/          # Small icons and UI elements
```

## Image Optimization Guidelines

### Recommended Formats

- **WebP**: Primary format for all images (best compression)
- **PNG**: Fallback for logos/icons with transparency
- **SVG**: For simple logos and icons that need to scale

### Size Guidelines

- **Logos**:
  - Desktop: 180x48px (or maintain aspect ratio)
  - Mobile: 120x32px
  - File size: < 20KB

- **Hero Images**:
  - Desktop: 1920x1080px
  - Mobile: 640x960px
  - File size: < 150KB

- **General Images**:
  - Thumbnails: 400x300px
  - Content images: 800x600px
  - File size: < 100KB

- **Icons**:
  - Standard: 24x24px or 32x32px
  - File size: < 5KB

### Optimization Tools

1. **Squoosh.app** - Google's image optimizer
2. **TinyPNG** - For PNG compression
3. **ImageOptim** - Mac app for batch optimization
4. **Sharp** - Node.js library for automated optimization

### Naming Convention

- Use lowercase with hyphens: `tesseract-logo-dark.webp`
- Include size in filename for variants: `hero-image-mobile.webp`
- Use descriptive names: `instructor-profile.webp`

## Required Images

Place these images in their respective directories:

1. **logos/**
   - `tesseract-logo.webp` - Main logo for navigation
   - `tesseract-logo-dark.webp` - Dark mode variant (optional)

2. **images/**
   - Hero background images
   - Instructor profile photo
   - Course preview thumbnails
   - Technology stack logos
   - Student testimonial photos

3. **icons/**
   - Social media icons
   - Feature icons
   - UI elements

## Usage Example

```jsx
import Image from 'next/image'

<Image
  src="/assets/logos/tesseract-logo.webp"
  alt="Tesseract Logo"
  width={180}
  height={48}
  priority
/>
```
