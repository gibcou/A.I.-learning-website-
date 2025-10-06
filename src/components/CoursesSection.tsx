'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';

const CoursesSection = () => {
  const { user, userProfile } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const courses = [
    {
      id: 1,
      title: "AI Fundamentals for Beginners",
      category: "beginner",
      duration: "4 weeks",
      lessons: 28,
      difficulty: "Beginner",
      rating: 4.9,
      students: 15420,
      price: "$49",
      originalPrice: "$99",
      description: "Master the basics of artificial intelligence with hands-on projects and real-world applications.",
      features: [
        "Introduction to Machine Learning",
        "Understanding Neural Networks", 
        "AI Tools & Platforms Overview",
        "Practical AI Applications",
        "Ethics in AI Development"
      ],
      outcomes: [
        "Build your first AI model",
        "Understand AI terminology and concepts",
        "Identify AI opportunities in your field",
        "Use popular AI tools confidently"
      ],
      icon: "🤖",
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      title: "AI for Business & Marketing",
      category: "business",
      duration: "3 weeks",
      lessons: 21,
      difficulty: "Intermediate",
      rating: 4.8,
      students: 12350,
      price: "$79",
      originalPrice: "$149",
      description: "Transform your business operations with AI-powered marketing strategies and automation tools.",
      features: [
        "AI Marketing Automation",
        "Customer Behavior Analysis",
        "Content Generation with AI",
        "Predictive Analytics",
        "ROI Optimization Strategies"
      ],
      outcomes: [
        "Increase marketing ROI by 40%",
        "Automate repetitive business tasks",
        "Create AI-powered content strategies",
        "Implement predictive customer analytics"
      ],
      icon: "📈",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 3,
      title: "Creative AI & Content Creation",
      category: "creative",
      duration: "5 weeks",
      lessons: 35,
      difficulty: "Intermediate",
      rating: 4.9,
      students: 9870,
      price: "$89",
      originalPrice: "$179",
      description: "Unleash your creativity with AI tools for content creation, design, and multimedia production.",
      features: [
        "AI Image & Video Generation",
        "Automated Content Writing",
        "Voice & Audio Synthesis",
        "Design Automation Tools",
        "Creative Workflow Optimization"
      ],
      outcomes: [
        "Create professional content 10x faster",
        "Master leading AI creative tools",
        "Build automated content pipelines",
        "Develop unique creative AI workflows"
      ],
      icon: "🎨",
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      title: "Advanced AI Development",
      category: "advanced",
      duration: "8 weeks",
      lessons: 56,
      difficulty: "Advanced",
      rating: 4.7,
      students: 5420,
      price: "$149",
      originalPrice: "$299",
      description: "Deep dive into AI development with Python, TensorFlow, and advanced machine learning techniques.",
      features: [
        "Deep Learning Architectures",
        "Custom Model Development",
        "AI Model Deployment",
        "Performance Optimization",
        "Production AI Systems"
      ],
      outcomes: [
        "Build and deploy custom AI models",
        "Optimize AI system performance",
        "Create production-ready AI applications",
        "Master advanced ML algorithms"
      ],
      icon: "⚡",
      color: "from-orange-500 to-red-600"
    },
    {
      id: 5,
      title: "AI for Side Hustles & Freelancing",
      category: "business",
      duration: "6 weeks",
      lessons: 42,
      difficulty: "Beginner",
      rating: 4.8,
      students: 18750,
      price: "$69",
      originalPrice: "$129",
      description: "Launch profitable AI-powered side businesses and freelancing services with proven strategies.",
      features: [
        "AI Service Business Models",
        "Client Acquisition Strategies",
        "Pricing & Packaging AI Services",
        "Scaling Your AI Business",
        "Legal & Ethical Considerations"
      ],
      outcomes: [
        "Launch your AI service business",
        "Generate $1000+ monthly income",
        "Build a client acquisition system",
        "Scale to full-time AI entrepreneur"
      ],
      icon: "💰",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 6,
      title: "AI Productivity & Automation",
      category: "productivity",
      duration: "4 weeks",
      lessons: 28,
      difficulty: "Beginner",
      rating: 4.9,
      students: 22100,
      price: "$59",
      originalPrice: "$119",
      description: "Supercharge your productivity with AI automation tools and workflows for personal and professional use.",
      features: [
        "Personal AI Assistants",
        "Workflow Automation",
        "Email & Communication AI",
        "Task & Project Management",
        "Time Optimization Strategies"
      ],
      outcomes: [
        "Save 10+ hours per week",
        "Automate repetitive tasks",
        "Build personal AI workflows",
        "Maximize daily productivity"
      ],
      icon: "⚙️",
      color: "from-teal-500 to-cyan-600"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Courses', count: courses.length },
    { id: 'beginner', name: 'Beginner', count: courses.filter(c => c.category === 'beginner').length },
    { id: 'business', name: 'Business', count: courses.filter(c => c.category === 'business').length },
    { id: 'creative', name: 'Creative', count: courses.filter(c => c.category === 'creative').length },
    { id: 'advanced', name: 'Advanced', count: courses.filter(c => c.category === 'advanced').length },
    { id: 'productivity', name: 'Productivity', count: courses.filter(c => c.category === 'productivity').length }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Master AI with Our
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Expert Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From complete beginner to AI expert - choose your path and transform your career with hands-on, practical AI education designed for real-world success.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              {/* Course Header */}
              <div className={`bg-gradient-to-r ${course.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative">
                  <div className="text-4xl mb-3">{course.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(course.difficulty)}`}>
                      {course.difficulty}
                    </span>
                    <div className="flex items-center text-sm">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {course.rating}
                    </div>
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>

                {/* Course Stats */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {course.lessons} lessons
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                    {course.students.toLocaleString()}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What You&apos;ll Learn:</h4>
                  <ul className="space-y-2">
                    {course.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing & CTA */}
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                      <span className="text-lg text-gray-500 line-through">{course.originalPrice}</span>
                      <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full">
                        50% OFF
                      </span>
                    </div>
                  </div>
                  
                  {/* Check if user has completed quiz before allowing course access */}
                  {user && userProfile?.hasCompletedQuiz ? (
                    <button className={`w-full bg-gradient-to-r ${course.color} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                      Start Learning Now
                    </button>
                  ) : (
                    <Link 
                      href="/quiz" 
                      className={`w-full bg-gradient-to-r ${course.color} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center`}
                    >
                      Take Quiz First
                    </Link>
                  )}
                  
                  <button className="w-full mt-2 text-gray-600 hover:text-gray-900 py-2 text-sm font-medium transition-colors">
                    View Full Curriculum →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-900 to-purple-900 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              Ready to Start Your AI Journey?
            </h3>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Join over 84,000+ students who have transformed their careers with our AI courses. Start with any course and get lifetime access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {user && userProfile?.hasCompletedQuiz ? (
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Browse All Courses
                </button>
              ) : (
                <Link 
                  href="/quiz" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  Take Quiz to Access Courses
                </Link>
              )}
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200">
                Try Free Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;