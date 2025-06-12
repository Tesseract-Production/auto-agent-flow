import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { VideoPreview } from '@/components/VideoPreview';
import { CourseOutline } from '@/components/CourseOutline';
import { TechStack } from '@/components/TechStack';
import { Testimonials } from '@/components/Testimonials';
import { Instructor } from '@/components/Instructor';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { EmailCapture } from '@/components/EmailCapture';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { SocialProofPopup } from '@/components/SocialProofPopup';
import { FreeEbookResources } from '@/components/FreeEbookResources';
import { ResourcesBonuses } from '@/components/ResourcesBonuses';
import { NodeversePromotion } from '@/components/NodeversePromotion';
import { LaunchDiscountPopup } from '@/components/LaunchDiscountPopup';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <Hero />
        <VideoPreview />
        <FreeEbookResources />
        <CourseOutline />
        <TechStack />
        <ResourcesBonuses />
        <Testimonials />
        <NodeversePromotion />
        <Instructor />
        <Pricing />
        <FAQ />
        <EmailCapture />
        <FinalCTA />
      </main>
      <Footer />
      <LaunchDiscountPopup />
      <SocialProofPopup />
    </>
  );
}
