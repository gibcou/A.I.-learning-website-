import QuizSection from '@/components/QuizSection';

export default function QuizPage() {
  return (
    <div className="min-h-screen">
      <QuizSection />
    </div>
  );
}

export const metadata = {
  title: 'AI Readiness Quiz - AI Master',
  description: 'Take our personalized quiz to discover your ideal AI learning path and get customized recommendations based on your goals and experience level.',
};