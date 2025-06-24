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
  title: 'n8n Masterclass - Master AI Orchestration & Automation',
  description:
    'Transform your career with the most comprehensive n8n automation course. Learn to build AI-powered workflows that scale. Join 2,847+ students.',
  keywords:
    'n8n, automation, ai orchestration, workflow automation, no-code, low-code, ai agents, tesseract nexus',
  authors: [{ name: 'Tesseract Nexus' }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'n8n Masterclass - Master AI Orchestration & Automation',
    description: 'Transform your career with the most comprehensive n8n automation course.',
    url: 'https://tesseract-nexus.com',
    siteName: 'Tesseract n8n Masterclass',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'n8n Masterclass - Master AI Orchestration',
    description: 'Transform your career with the most comprehensive n8n automation course.',
    images: ['/og-image.png'],
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8QHK6F230J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8QHK6F230J');
          `}
        </Script>
        
        {process.env.NODE_ENV === 'development' && (
          <Script id="dev-monitoring" strategy="afterInteractive">
            {`console.warn('🚀 Performance monitoring enabled for development');`}
          </Script>
        )}
      </body>
    </html>
  );
}
