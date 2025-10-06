import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import StatsSection from '@/components/StatsSection';
import CertificateSection from '@/components/CertificateSection';
import ChallengeSection from '@/components/ChallengeSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <CertificateSection />
      <ChallengeSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
