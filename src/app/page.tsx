import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import StatsSection from '@/components/StatsSection';
import SuccessStoriesSection from '@/components/SuccessStoriesSection';
import CertificateSection from '@/components/CertificateSection';
import ChallengeSection from '@/components/ChallengeSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <SuccessStoriesSection />
      <CertificateSection />
      <ChallengeSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
