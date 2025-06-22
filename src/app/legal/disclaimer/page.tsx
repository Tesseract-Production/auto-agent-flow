import { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';
import { parseLegalHTML } from '@/lib/legal-parser';

export const metadata: Metadata = {
  title: 'Legal Disclaimer | Tesseract n8n Masterclass',
  description: 'Legal Disclaimer for the Tesseract n8n AI Orchestration Masterclass. Important disclaimers and limitations of liability.',
};

function LegalDisclaimerPageClient({ content }: { content: string }) {
  return (
    <LegalLayout title="Legal Disclaimer">
      <div 
        className="legal-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </LegalLayout>
  );
}

export default function LegalDisclaimerPage() {
  const content = parseLegalHTML('legal-disclaimer.html');
  return <LegalDisclaimerPageClient content={content} />;
}