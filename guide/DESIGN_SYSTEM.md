# Tesseract n8n Masterclass - Design System Documentation

## Brand Identity

The design system is built around a bold, modern aesthetic that represents automation, AI orchestration, and technical sophistication.

## Color System

### Brand Colors

- **Brand Dark**: `#171717` / `rgb(23, 23, 23)`
  - Primary dark theme background
  - Used for high contrast text on light backgrounds
- **Brand Primary**: `#da3229` / `rgb(218, 50, 41)`
  - Core brand color representing energy and action
  - Used for hover states on primary buttons
- **Brand Secondary**: `#5c2623` / `rgb(92, 38, 35)`
  - Darker variant for depth and sophistication
  - Supporting brand color for accents
- **Brand Accent**: `#e0392f` / `rgb(224, 57, 47)`
  - Main CTA color
  - Used for primary buttons and key interactive elements

### Background Colors

- **Background Light**: `#ffffff` / `rgb(255, 255, 255)`
- **Background Dark**: `#171717` / `rgb(23, 23, 23)`

### Surface Colors

- **Surface Light**: `#f9fafb` / `rgb(249, 250, 251)`
  - Light gray for cards and elevated surfaces
- **Surface Dark**: `#1e1e1e` / `rgb(30, 30, 30)`
  - Dark mode elevated surfaces

### Text Colors

- **Foreground Light**: `#171717` / `rgb(23, 23, 23)`
  - Primary text on light backgrounds
- **Foreground Dark**: `#f5f5f5` / `rgb(245, 245, 245)`
  - Primary text on dark backgrounds

### Muted Colors

- **Muted Light**: `#9ca3af` / `rgb(156, 163, 175)`
  - Secondary text and borders on light theme
- **Muted Dark**: `#6b7280` / `rgb(107, 114, 128)`
  - Secondary text and borders on dark theme

## Typography

- **Font Family**: Inter (Primary), System fallbacks
- **Font Smoothing**: Antialiased for crisp text rendering

## Vertical Spacing System

### Section Spacing
Based on 2025 best practices and your preference for 80-148px spacing:

- **Hero Section**: `120px` bottom padding (mobile: `80px`)
- **Section Large**: `120px` top/bottom padding (mobile: `80px`)
  - Used for major content sections
- **Section Medium**: `96px` top/bottom padding (mobile: `64px`)
  - Used for supporting sections
- **Section Small**: `80px` top/bottom padding (mobile: `48px`)
  - Used for compact sections like CTAs

### Component Spacing

- **Component Gap Large**: `48px` (mobile: `32px`)
  - Space between major components within a section
- **Component Gap Medium**: `32px` (mobile: `24px`)
  - Space between related components
- **Component Gap Small**: `24px` (mobile: `16px`)
  - Space between tightly related elements

### Content Spacing

- **Content Gap**: `16px` (mobile: `12px`)
  - Space between paragraphs, list items
- **Element Gap**: `8px`
  - Space between inline elements, small gaps

### Spacing Utilities (Tailwind)

```css
/* Section spacing classes */
.section-spacing-lg { @apply py-[120px] md:py-[120px] sm:py-20; }
.section-spacing-md { @apply py-24 md:py-24 sm:py-16; }
.section-spacing-sm { @apply py-20 md:py-20 sm:py-12; }

/* Component spacing classes */
.component-gap-lg { @apply space-y-12 md:space-y-12 sm:space-y-8; }
.component-gap-md { @apply space-y-8 md:space-y-8 sm:space-y-6; }
.component-gap-sm { @apply space-y-6 md:space-y-6 sm:space-y-4; }
```

### Spacing Principles

1. **Consistency**: Use the same spacing scale throughout
2. **Hierarchy**: Larger spacing between sections, smaller within
3. **Responsive**: Reduce spacing on mobile by ~33%
4. **Breathing Room**: Double spacing when in doubt
5. **Visual Rhythm**: Maintain 2:3:4 ratio (small:medium:large)

## Border Radius System

- **Small**: `8px` - Subtle rounding for compact elements
- **Default**: `12px` - Standard rounding for buttons and cards
- **Large**: `16px` - Prominent rounding for feature cards
- **Extra Large**: `24px` - Maximum rounding for hero elements

## Shadow System

- **Shadow Small**: `0 1px 2px 0 rgb(0 0 0 / 0.05)`
  - Subtle elevation for hover states
- **Shadow Default**: `0 10px 15px -3px rgb(0 0 0 / 0.1)`
  - Standard card elevation
- **Shadow Large**: `0 20px 25px -5px rgb(0 0 0 / 0.1)`
  - Prominent elevation for modals
- **Shadow Extra Large**: `0 25px 50px -12px rgb(0 0 0 / 0.25)`
  - Dramatic elevation for hero elements
- **Shadow Glow**: `0 0 32px -8px rgba(224, 57, 47, 0.25)`
  - Brand accent glow for CTAs and hover states

## Component Classes

### Buttons

- **Primary Button** (`.btn-primary`)
  - Background: Brand Accent (#e0392f)
  - Hover: Brand Primary (#da3229)
  - Text: White
  - Padding: 32px horizontal, 16px vertical
  - Border Radius: 12px
  - Effects: Scale on hover (105%), glow shadow, active scale (95%)
- **Secondary Button** (`.btn-secondary`)
  - Background: Surface color
  - Border: 2px muted color
  - Hover: Brand accent border with shadow
  - Text: Adapts to theme

### Special Effects

- **Gradient Text** (`.gradient-text`)
  - Animated gradient from primary → accent → primary
  - 6-second infinite animation
  - 200% background size for smooth transition
- **Glass Effect** (`.glass-effect`)
  - Backdrop blur: 12px (xl)
  - Background: 80% opacity white/dark
  - Border: 20% white (light) / 10% white (dark)

## Animation Guidelines

- **Gradient Animation**: 6s ease infinite
- **Hover Transitions**: 300ms all properties
- **Transform Scales**:
  - Hover: 105%
  - Active: 95%

## Dark Mode

The design system fully supports dark mode with:

- Automatic color inversion for backgrounds and text
- Adjusted opacity values for glass effects
- Maintained brand color consistency
- Enhanced contrast for accessibility

## Usage in Marketing Materials

When creating marketing graphics or conforming pages:

1. Always use the exact hex values provided
2. Maintain the border radius system for consistency
3. Apply shadows according to element hierarchy
4. Use the glass effect for overlays and floating elements
5. Ensure CTAs use the brand accent color (#e0392f)
6. Keep text contrast ratios WCAG AA compliant

## Interactive Elements

- **Node Network Background**: Uses brand colors with varied opacity
- **Hover States**: Include scale transforms and glow shadows
- **Focus States**: Should use brand accent with appropriate contrast
- **Loading States**: Utilize gradient animations with brand colors
