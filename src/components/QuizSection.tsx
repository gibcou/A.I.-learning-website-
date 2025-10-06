'use client';

import { useState } from 'react';

interface QuizAnswer {
  questionId: number;
  answer: string;
  points: number;
}

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [showResults, setShowResults] = useState(false);

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
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const calculateKnowledgeLevel = () => {
    const totalPoints = answers.reduce((sum, answer) => sum + answer.points, 0);
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

  if (showResults) {
    const knowledgeLevel = calculateKnowledgeLevel();
    const progression = getProgressionPrediction();
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
                Based on your 20 responses, here's your personalized AI learning profile
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
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start My Personalized Journey
              </button>
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
    </section>
  );
};

export default QuizSection;