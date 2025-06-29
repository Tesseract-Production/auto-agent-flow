import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SubtleNodeBackground } from '@/components/SubtleNodeBackground';
import { EmailSubmissionProvider } from '@/contexts/EmailSubmissionContext';
import { ClarityProvider } from '@/components/ClarityProvider';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ThemeScript } from '@/components/ThemeScript';
// import { PageLoader } from '@/components/PageLoader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Auto Agent Flow Academy - n8n AI Orchestration Masterclass',
  description:
    'Master AI automation with Auto Agent Flow Academy. Premier development agency & learning platform for AI developers. Build production-ready workflows with n8n, AI agents, and advanced orchestration systems.',
  keywords:
    'auto agent flow, ai development agency, ai academy, n8n masterclass, automation, ai orchestration, workflow automation, no-code, low-code, ai agents, ai developers, tesseract nexus',
  authors: [{ name: 'Auto Agent Flow' }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Auto Agent Flow Academy - AI Development Agency & Learning Platform',
    description: 'Leading development agency and academy for AI developers. Master n8n automation, AI orchestration, and build production-ready workflows that scale.',
    url: 'https://tesseract-nexus.com',
    siteName: 'Auto Agent Flow Academy',
    images: [
      {
        url: '/assets/images/og-banner-1280-720.jpeg',
        width: 1280,
        height: 720,
        alt: 'Auto Agent Flow Academy - AI Development Agency & Learning Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auto Agent Flow Academy - AI Development & Learning Platform',
    description: 'Leading development agency and academy for AI developers. Master AI automation and orchestration systems.',
    images: ['/assets/images/og-banner-1280-720.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body
        className={cn(
          inter.className,
          'min-h-screen bg-white dark:bg-[#060606] text-gray-900 dark:text-gray-100 antialiased'
        )}
      >
        <ThemeProvider defaultTheme="system" storageKey="theme">
          <EmailSubmissionProvider>
            <ClarityProvider />
            <SubtleNodeBackground />
            {/* <PageLoader /> */}
            {children}
          </EmailSubmissionProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
        
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
                  page_title: 'Auto Agent Flow Academy - n8n AI Orchestration Masterclass',
                  custom_map: {'custom_parameter': 'custom_value'},
                  send_page_view: true
                });
              `}
            </Script>
          </>
        )}
        
        {process.env.NODE_ENV === 'development' && (
          <Script id="dev-monitoring" strategy="afterInteractive">
            {`console.warn('🚀 Performance monitoring enabled for development');`}
          </Script>
        )}
      </body>
    </html>
  );
}
