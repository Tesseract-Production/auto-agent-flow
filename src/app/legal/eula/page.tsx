import { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';
import { parseLegalHTML } from '@/lib/legal-parser';

export const metadata: Metadata = {
  title: 'End User License Agreement | Tesseract n8n Masterclass',
  description: 'End User License Agreement for the Tesseract n8n AI Orchestration Masterclass. Software licensing terms for our products and services.',
};

function EULAPageClient({ content }: { content: string }) {
  return (
    <LegalLayout title="End User License Agreement">
      <div 
        className="legal-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </LegalLayout>
  );
}

export default function EULAPage() {
  const content = parseLegalHTML('eula.html');
  return <EULAPageClient content={content} />;
}