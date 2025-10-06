'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import PaymentModal from './PaymentModal';

interface Course {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  duration: string;
  lessons: number;
  description: string;
  features: string[];
}

interface QuizAnswer {
  questionId: number;
  answer: string;
  points: number;
}

const QuizSection = () => {
  const { updateQuizCompletion } = useAuth();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const questions = [
    {
      id: 1,
      question: "How familiar are you with AI and machine learning concepts?",
      options: [
        { text: "Complete beginner - never used AI tools", points: 1 },
        { text: "Basic understanding - used ChatGPT a few times", points: 2 },
        { text: "Intermediate - regularly use AI tools for work", points: 3 },
        { text: "Advanced - understand AI algorithms and models", points: 4 }
      ]
    },
    {
      id: 2,
      question: "Which AI tools have you used before?",
      options: [
        { text: "None", points: 1 },
        { text: "ChatGPT only", points: 2 },
        { text: "Multiple AI tools (ChatGPT, Claude, Midjourney)", points: 3 },
        { text: "Advanced AI tools and APIs", points: 4 }
      ]
    },
    {
      id: 3,
      question: "What's your primary goal with AI learning?",
      options: [
        { text: "Personal curiosity and basic understanding", points: 1 },
        { text: "Improve productivity in current job", points: 2 },
        { text: "Career advancement and new opportunities", points: 3 },
        { text: "Start an AI-focused business or consultancy", points: 4 }
      ]
    },
    {
      id: 4,
      question: "How comfortable are you with technology in general?",
      options: [
        { text: "Basic user - email, web browsing", points: 1 },
        { text: "Comfortable - use various apps and software", points: 2 },
        { text: "Tech-savvy - quick to learn new tools", points: 3 },
        { text: "Expert - work in tech or very advanced user", points: 4 }
      ]
    },
    {
      id: 5,
      question: "What's your experience with prompt engineering?",
      options: [
        { text: "What's prompt engineering?", points: 1 },
        { text: "Basic - ask simple questions to AI", points: 2 },
        { text: "Intermediate - craft detailed prompts", points: 3 },
        { text: "Advanced - optimize prompts for specific outcomes", points: 4 }
      ]
    },
    {
      id: 6,
      question: "Which area interests you most for AI application?",
      options: [
        { text: "Content creation and writing", points: 2 },
        { text: "Business automation and efficiency", points: 3 },
        { text: "Data analysis and insights", points: 4 },
        { text: "Creative projects (art, music, design)", points: 2 }
      ]
    },
    {
      id: 7,
      question: "How much time can you dedicate to AI learning daily?",
      options: [
        { text: "15-30 minutes", points: 1 },
        { text: "30-60 minutes", points: 2 },
        { text: "1-2 hours", points: 3 },
        { text: "More than 2 hours", points: 4 }
      ]
    },
    {
      id: 8,
      question: "What's your experience with data and analytics?",
      options: [
        { text: "No experience with data", points: 1 },
        { text: "Basic Excel/Google Sheets usage", points: 2 },
        { text: "Comfortable with data analysis tools", points: 3 },
        { text: "Advanced - SQL, Python, or similar", points: 4 }
      ]
    },
    {
      id: 9,
      question: "How do you prefer to learn new skills?",
      options: [
        { text: "Reading articles and documentation", points: 2 },
        { text: "Watching video tutorials", points: 2 },
        { text: "Hands-on practice and experimentation", points: 3 },
        { text: "Structured courses with assignments", points: 3 }
      ]
    },
    {
      id: 10,
      question: "What's your current profession or field?",
      options: [
        { text: "Student or entry-level", points: 1 },
        { text: "Marketing, Sales, or Business", points: 2 },
        { text: "Creative or Content-focused role", points: 2 },
        { text: "Technical or Engineering role", points: 4 }
      ]
    },
    {
      id: 11,
      question: "How familiar are you with machine learning concepts?",
      options: [
        { text: "Never heard of it", points: 1 },
        { text: "Basic understanding of the concept", points: 2 },
        { text: "Understand different ML types", points: 3 },
        { text: "Can explain algorithms and models", points: 4 }
      ]
    },
    {
      id: 12,
      question: "What's your experience with AI ethics and limitations?",
      options: [
        { text: "Haven't thought about it", points: 1 },
        { text: "Aware there are some concerns", points: 2 },
        { text: "Understand key ethical considerations", points: 3 },
        { text: "Well-versed in AI ethics and bias", points: 4 }
      ]
    },
    {
      id: 13,
      question: "How comfortable are you with learning programming concepts?",
      options: [
        { text: "No programming experience", points: 1 },
        { text: "Basic HTML/CSS or similar", points: 2 },
        { text: "Some programming experience", points: 3 },
        { text: "Proficient programmer", points: 4 }
      ]
    },
    {
      id: 14,
      question: "What's your goal timeline for AI mastery?",
      options: [
        { text: "Just exploring, no timeline", points: 1 },
        { text: "Basic competency in 3-6 months", points: 2 },
        { text: "Job-ready skills in 6-12 months", points: 3 },
        { text: "Expert level in 1-2 years", points: 4 }
      ]
    },
    {
      id: 15,
      question: "How do you handle complex problem-solving?",
      options: [
        { text: "Prefer simple, step-by-step guidance", points: 1 },
        { text: "Can work through moderate complexity", points: 2 },
        { text: "Enjoy challenging problems", points: 3 },
        { text: "Thrive on complex, multi-step challenges", points: 4 }
      ]
    },
    {
      id: 16,
      question: "What's your experience with AI in your current work?",
      options: [
        { text: "No AI use at work", points: 1 },
        { text: "Occasional use for simple tasks", points: 2 },
        { text: "Regular integration in workflow", points: 3 },
        { text: "Leading AI initiatives at work", points: 4 }
      ]
    },
    {
      id: 17,
      question: "How important is understanding AI's technical details to you?",
      options: [
        { text: "Just want to use AI tools effectively", points: 1 },
        { text: "Basic understanding is enough", points: 2 },
        { text: "Want solid technical foundation", points: 3 },
        { text: "Need deep technical expertise", points: 4 }
      ]
    },
    {
      id: 18,
      question: "What's your experience with project management?",
      options: [
        { text: "No formal project management", points: 1 },
        { text: "Manage personal projects", points: 2 },
        { text: "Lead small team projects", points: 3 },
        { text: "Experienced project/program manager", points: 4 }
      ]
    },
    {
      id: 19,
      question: "How do you stay updated with technology trends?",
      options: [
        { text: "Don't actively follow tech news", points: 1 },
        { text: "Occasional reading of tech articles", points: 2 },
        { text: "Regular tech news and podcasts", points: 3 },
        { text: "Active in tech communities and forums", points: 4 }
      ]
    },
    {
      id: 20,
      question: "What's your biggest challenge with adopting new technology?",
      options: [
        { text: "Fear of complexity and learning curve", points: 1 },
        { text: "Time constraints and busy schedule", points: 2 },
        { text: "Keeping up with rapid changes", points: 3 },
        { text: "Finding practical applications", points: 3 }
      ]
    }
  ];

  const handleAnswer = (answer: string, points: number) => {
    const newAnswer: QuizAnswer = {
      questionId: questions[currentQuestion].id,
      answer,
      points
    };
    const newAnswers = [...answers, newAnswer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz completed - calculate results and update user profile
      const finalAnswers = [...newAnswers];
      const recommendedCourses = getRecommendedCourses(finalAnswers);
      const quizResults = {
        answers: finalAnswers,
        knowledgeLevel: calculateKnowledgeLevel(finalAnswers),
        completedAt: new Date().toISOString()
      };
      
      // Update user profile with quiz completion
      updateQuizCompletion(quizResults, recommendedCourses.map(course => course.id.toString()));
      
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const calculateKnowledgeLevel = (quizAnswers = answers) => {
    const totalPoints = quizAnswers.reduce((sum, answer) => sum + answer.points, 0);
    const maxPoints = questions.length * 4;
    const percentage = (totalPoints / maxPoints) * 100;

    if (percentage <= 25) return { level: "Beginner", color: "bg-red-500", description: "New to AI with basic understanding" };
    if (percentage <= 50) return { level: "Intermediate", color: "bg-yellow-500", description: "Some AI experience with room to grow" };
    if (percentage <= 75) return { level: "Advanced", color: "bg-blue-500", description: "Strong AI knowledge and practical experience" };
    return { level: "Expert", color: "bg-green-500", description: "Comprehensive AI expertise and leadership potential" };
  };

  const getProgressionPrediction = () => {
    const currentLevel = calculateKnowledgeLevel();
    const progressions = {
      "Beginner": {
        current: "Basic AI tool usage",
        fourWeeks: "Confident with multiple AI platforms, basic prompt engineering, simple automation workflows"
      },
      "Intermediate": {
        current: "Regular AI tool usage for productivity",
        fourWeeks: "Advanced prompt engineering, AI workflow optimization, basic model fine-tuning concepts"
      },
      "Advanced": {
        current: "Strong AI integration in work processes",
        fourWeeks: "AI strategy development, custom solution design, team AI training capabilities"
      },
      "Expert": {
        current: "Leading AI initiatives and innovation",
        fourWeeks: "AI thought leadership, advanced model development, enterprise AI architecture"
      }
    };

    return progressions[currentLevel.level as keyof typeof progressions];
  };

  const getRecommendedCourses = (quizAnswers = answers) => {
    const knowledgeLevel = calculateKnowledgeLevel(quizAnswers);
    
    // Analyze specific answer patterns for better recommendations
    const goalAnswer = quizAnswers.find(a => a.questionId === 3)?.points || 1; // Primary goal
    const professionAnswer = quizAnswers.find(a => a.questionId === 10)?.points || 1; // Profession
    const programmingAnswer = quizAnswers.find(a => a.questionId === 13)?.points || 1; // Programming comfort
    const timelineAnswer = answers.find(a => a.questionId === 14)?.points || 1; // Timeline
    const technicalDepthAnswer = answers.find(a => a.questionId === 17)?.points || 1; // Technical depth preference

    const courses = [
      {
        id: 1,
        title: "AI Fundamentals for Beginners",
        duration: "4 weeks",
        difficulty: "Beginner",
        price: "$49",
        originalPrice: "$99",
        description: "Master the basics of artificial intelligence with hands-on projects and real-world applications.",
        icon: "🤖",
        color: "from-blue-500 to-indigo-600",
        matchScore: 0
      },
      {
        id: 2,
        title: "AI for Business & Marketing",
        duration: "3 weeks",
        difficulty: "Intermediate",
        price: "$79",
        originalPrice: "$149",
        description: "Transform your business operations with AI-powered marketing strategies and automation tools.",
        icon: "📈",
        color: "from-green-500 to-emerald-600",
        matchScore: 0
      },
      {
        id: 3,
        title: "Creative AI & Content Creation",
        duration: "5 weeks",
        difficulty: "Intermediate",
        price: "$89",
        originalPrice: "$179",
        description: "Unleash your creativity with AI tools for content creation, design, and multimedia production.",
        icon: "🎨",
        color: "from-purple-500 to-pink-600",
        matchScore: 0
      },
      {
        id: 4,
        title: "Advanced AI Development",
        duration: "8 weeks",
        difficulty: "Advanced",
        price: "$149",
        originalPrice: "$299",
        description: "Deep dive into AI development with Python, TensorFlow, and advanced machine learning techniques.",
        icon: "⚡",
        color: "from-orange-500 to-red-600",
        matchScore: 0
      },
      {
        id: 5,
        title: "AI for Side Hustles & Freelancing",
        duration: "6 weeks",
        difficulty: "Beginner",
        price: "$69",
        originalPrice: "$129",
        description: "Launch profitable AI-powered side businesses and freelancing services with proven strategies.",
        icon: "💰",
        color: "from-yellow-500 to-orange-500",
        matchScore: 0
      },
      {
        id: 6,
        title: "AI Productivity & Automation",
        duration: "4 weeks",
        difficulty: "Beginner",
        price: "$59",
        originalPrice: "$119",
        description: "Supercharge your productivity with AI automation tools and workflows for personal and professional use.",
        icon: "⚙️",
        color: "from-teal-500 to-cyan-600",
        matchScore: 0
      }
    ];

    // Calculate match scores based on quiz responses
    courses.forEach(course => {
      let score = 0;

      // Base score on knowledge level match
      if (knowledgeLevel.level === "Beginner" && course.difficulty === "Beginner") score += 30;
      if (knowledgeLevel.level === "Intermediate" && (course.difficulty === "Intermediate" || course.difficulty === "Beginner")) score += 25;
      if (knowledgeLevel.level === "Advanced" && course.difficulty !== "Beginner") score += 20;
      if (knowledgeLevel.level === "Expert" && course.difficulty === "Advanced") score += 25;

      // Goal-based scoring
      if (goalAnswer === 4 && course.id === 5) score += 25; // Business goal + Side Hustles
      if (goalAnswer === 3 && (course.id === 2 || course.id === 4)) score += 20; // Career advancement
      if (goalAnswer === 2 && (course.id === 6 || course.id === 2)) score += 20; // Productivity improvement
      if (goalAnswer === 1 && course.id === 1) score += 25; // Personal curiosity + Fundamentals

      // Profession-based scoring
      if (professionAnswer === 2 && course.id === 2) score += 20; // Business/Marketing profession
      if (professionAnswer === 2 && course.id === 3) score += 15; // Creative profession
      if (professionAnswer === 4 && course.id === 4) score += 25; // Technical profession
      if (professionAnswer === 1 && course.id === 1) score += 20; // Student/entry-level

      // Programming comfort scoring
      if (programmingAnswer >= 3 && course.id === 4) score += 15; // Programming experience + Advanced AI
      if (programmingAnswer <= 2 && course.difficulty === "Beginner") score += 10; // Low programming + Beginner courses

      // Timeline scoring
      if (timelineAnswer <= 2 && course.duration.includes("3") || course.duration.includes("4")) score += 10; // Short timeline + shorter courses
      if (timelineAnswer >= 3 && course.duration.includes("6") || course.duration.includes("8")) score += 10; // Long timeline + longer courses

      // Technical depth preference
      if (technicalDepthAnswer >= 3 && course.id === 4) score += 20; // Want technical depth + Advanced AI
      if (technicalDepthAnswer <= 2 && (course.id === 1 || course.id === 6)) score += 15; // Just want to use tools

      course.matchScore = score;
    });

    // Sort by match score and return top 3
    return courses.sort((a, b) => b.matchScore - a.matchScore).slice(0, 3);
  };

  if (showResults) {
    const knowledgeLevel = calculateKnowledgeLevel();
    const progression = getProgressionPrediction();
    const recommendedCourses = getRecommendedCourses();
    const totalPoints = answers.reduce((sum, answer) => sum + answer.points, 0);

    return (
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Your AI Knowledge Assessment
              </h2>
              
              <p className="text-xl text-gray-600 mb-8">
                Based on your 20 responses, here&apos;s your personalized AI learning profile
              </p>
            </div>

            {/* Current Knowledge Level */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Current Knowledge Level</h3>
                <div className="text-right">
                  <div className="text-sm text-gray-600">Score: {totalPoints}/80</div>
                  <div className="text-sm text-gray-600">{Math.round((totalPoints/80)*100)}%</div>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <div className={`w-4 h-4 ${knowledgeLevel.color} rounded-full mr-3`}></div>
                <span className="text-2xl font-bold text-gray-900">{knowledgeLevel.level}</span>
              </div>
              
              <p className="text-gray-700 mb-4">{knowledgeLevel.description}</p>
              
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className={`${knowledgeLevel.color} h-3 rounded-full transition-all duration-1000`}
                  style={{ width: `${(totalPoints/80)*100}%` }}
                ></div>
              </div>
            </div>

            {/* Recommended Courses */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                🎯 Your Personalized Course Recommendations
              </h3>
              <p className="text-gray-600 text-center mb-8">
                Based on your quiz results, here are the top 3 courses perfectly matched to your goals and experience level:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {recommendedCourses.map((course, index) => (
                  <div key={course.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden relative">
                    {index === 0 && (
                      <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-bl-lg text-xs font-bold">
                        BEST MATCH
                      </div>
                    )}
                    
                    {/* Course Header */}
                    <div className={`bg-gradient-to-r ${course.color} p-4 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                      <div className="relative">
                        <div className="text-2xl mb-2">{course.icon}</div>
                        <h4 className="font-bold text-lg mb-1">{course.title}</h4>
                        <div className="flex items-center justify-between text-sm">
                          <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                            {course.difficulty}
                          </span>
                          <span>{course.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Course Content */}
                    <div className="p-4">
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{course.description}</p>
                      
                      {/* Match Score */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                          <span>Match Score</span>
                          <span>{Math.min(Math.round((course.matchScore / 100) * 100), 100)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`bg-gradient-to-r ${course.color} h-2 rounded-full transition-all duration-1000`}
                            style={{ width: `${Math.min((course.matchScore / 100) * 100, 100)}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-gray-900">{course.price}</span>
                          <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
                        </div>
                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full">
                          50% OFF
                        </span>
                      </div>
                      
                      <button 
                        onClick={() => {
                          setSelectedCourse({
                            id: course.id,
                            title: course.title,
                            price: parseInt(course.price.replace('$', '')),
                            originalPrice: parseInt(course.originalPrice.replace('$', '')),
                            duration: course.duration,
                            lessons: 25, // Default lesson count
                            description: course.description,
                            features: [
                              'Lifetime access to course materials',
                              'Interactive coding exercises',
                              'Real-world project portfolio',
                              'Certificate of completion',
                              '24/7 community support',
                              'Monthly live Q&A sessions'
                            ]
                          });
                          setShowPaymentModal(true);
                        }}
                        className={`w-full bg-gradient-to-r ${course.color} text-white py-2 px-4 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                      >
                        {index === 0 ? 'Start My Personalized Journey' : 'Enroll Now'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4-Week Progression */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your 4-Week AI Journey</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Where You Are Now</h4>
                  <p className="text-gray-700 text-sm">{progression.current}</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                  <h4 className="font-semibold text-gray-900 mb-2">After 4 Weeks with AI Master</h4>
                  <p className="text-gray-700 text-sm">{progression.fourWeeks}</p>
                </div>
              </div>

              {/* Progress Timeline */}
              <div className="mt-6">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <span>Week 1</span>
                  <span>Week 2</span>
                  <span>Week 3</span>
                  <span>Week 4</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full w-full"></div>
                </div>
                <div className="grid grid-cols-4 gap-2 text-xs text-gray-600">
                  <div>Foundation Building</div>
                  <div>Skill Development</div>
                  <div>Advanced Techniques</div>
                  <div>Mastery & Application</div>
                </div>
              </div>
            </div>

            {/* Recommended Learning Path */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Personalized Learning Path</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <p className="text-sm font-medium">AI Fundamentals</p>
                  <p className="text-xs text-gray-600">Core concepts & tools</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-indigo-600 font-bold">2</span>
                  </div>
                  <p className="text-sm font-medium">Practical Applications</p>
                  <p className="text-xs text-gray-600">Real-world projects</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <p className="text-sm font-medium">Advanced Mastery</p>
                  <p className="text-xs text-gray-600">Expert techniques</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/dashboard"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                Go to My Dashboard
              </Link>
              <button 
                onClick={resetQuiz}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
              >
                Retake Assessment
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI Knowledge Assessment
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete our comprehensive 20-question assessment to discover your AI knowledge level and personalized learning path
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm font-medium text-gray-600">
                {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              {questions[currentQuestion].question}
            </h3>

            <div className="grid gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.text, option.points)}
                  className="text-left p-6 border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group"
                >
                  <div className="flex items-center">
                    <div className="w-6 h-6 border-2 border-gray-300 rounded-full mr-4 group-hover:border-blue-500 transition-colors duration-300"></div>
                    <span className="text-lg font-medium text-gray-700 group-hover:text-blue-700 transition-colors duration-300">
                      {option.text}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Quiz Info */}
          <div className="text-center text-sm text-gray-500">
            <p>This comprehensive assessment takes about 5-7 minutes to complete</p>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && selectedCourse && (
        <PaymentModal
          isOpen={showPaymentModal}
          onClose={() => {
            setShowPaymentModal(false);
            setSelectedCourse(null);
          }}
          course={selectedCourse}
          onPaymentSuccess={() => {
            // Handle successful payment - could redirect to course dashboard
            console.log('Payment successful for course:', selectedCourse.title);
            setShowPaymentModal(false);
            setSelectedCourse(null);
          }}
        />
      )}
    </section>
  );
};

export default QuizSection;