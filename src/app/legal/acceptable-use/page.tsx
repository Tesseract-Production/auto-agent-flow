import { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';
import { parseLegalHTML } from '@/lib/legal-parser';

export const metadata: Metadata = {
  title: 'Acceptable Use Policy | Tesseract n8n Masterclass',
  description: 'Acceptable Use Policy for the Tesseract n8n AI Orchestration Masterclass. Guidelines for appropriate and responsible use of our platform.',
};

function AcceptableUsePageClient({ content }: { content: string }) {
  return (
    <LegalLayout title="Acceptable Use Policy">
      <div 
        className="legal-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </LegalLayout>
  );
}

export default function AcceptableUsePage() {
  const content = parseLegalHTML('acceptable-use.html');
  return <AcceptableUsePageClient content={content} />;
}