import { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';
import { parseLegalHTML } from '@/lib/legal-parser';

export const metadata: Metadata = {
  title: 'Privacy Policy | Tesseract n8n Masterclass',
  description: 'Privacy Policy for the Tesseract n8n AI Orchestration Masterclass. Learn how we collect, use, and protect your personal information.',
};

function PrivacyPolicyPageClient({ content }: { content: string }) {
  return (
    <LegalLayout title="Privacy Policy">
      <div 
        className="legal-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </LegalLayout>
  );
}

export default function PrivacyPolicyPage() {
  const content = parseLegalHTML('privacy-policy.html');
  return <PrivacyPolicyPageClient content={content} />;
}