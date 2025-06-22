import { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';
import { parseLegalHTML } from '@/lib/legal-parser';

export const metadata: Metadata = {
  title: 'Terms of Service | Tesseract n8n Masterclass',
  description: 'Terms of Service for the Tesseract n8n AI Orchestration Masterclass. The terms and conditions that govern your use of our services.',
};

function TermsOfServicePageClient({ content }: { content: string }) {
  return (
    <LegalLayout title="Terms of Service">
      <div 
        className="legal-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </LegalLayout>
  );
}

export default function TermsOfServicePage() {
  const content = parseLegalHTML('tos.html');
  return <TermsOfServicePageClient content={content} />;
}