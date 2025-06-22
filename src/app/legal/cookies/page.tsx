import { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';
import { parseLegalHTML } from '@/lib/legal-parser';

export const metadata: Metadata = {
  title: 'Cookie Policy | Tesseract n8n Masterclass',
  description: 'Cookie Policy for the Tesseract n8n AI Orchestration Masterclass. How we use cookies and similar tracking technologies.',
};

function CookiePolicyPageClient({ content }: { content: string }) {
  return (
    <LegalLayout title="Cookie Policy">
      <div 
        className="legal-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </LegalLayout>
  );
}

export default function CookiePolicyPage() {
  const content = parseLegalHTML('cookies.html');
  return <CookiePolicyPageClient content={content} />;
}