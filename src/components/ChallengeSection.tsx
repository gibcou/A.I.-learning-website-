'use client';

import { useState } from 'react';

export default function ChallengeSection() {
  const [selectedDay, setSelectedDay] = useState(1);

  const challengeContent = {
    1: { title: "Introduction to AI", description: "Learn the basics of artificial intelligence and its applications", icon: "🤖" },
    2: { title: "AI Tools Overview", description: "Discover the most popular AI tools for productivity", icon: "🛠️" },
    3: { title: "Prompt Engineering", description: "Master the art of writing effective AI prompts", icon: "✍️" },
    4: { title: "AI for Content Creation", description: "Use AI to create compelling content and copy", icon: "📝" },
    5: { title: "AI in Business", description: "Implement AI solutions in your business workflow", icon: "💼" },
    6: { title: "Data Analysis with AI", description: "Leverage AI for data insights and decision making", icon: "📊" },
    7: { title: "Week 1 Review", description: "Consolidate your learning from the first week", icon: "🎯" },
    8: { title: "Advanced Prompting", description: "Learn advanced techniques for better AI responses", icon: "🚀" }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-indigo-200/30 to-purple-200/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-200/30 to-orange-200/30 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-semibold mb-6">
            🎯 28-Day Challenge
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Master AI in Just
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              {" "}28 Days
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-medium leading-relaxed mb-8">
            Transform your career with our structured daily learning program. 15 minutes a day, maximum results.
          </p>
          
          {/* Challenge Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-black text-indigo-600 mb-1">15min</div>
              <div className="text-sm text-gray-600 font-medium">Daily Commitment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-purple-600 mb-1">28</div>
              <div className="text-sm text-gray-600 font-medium">Days to Mastery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-pink-600 mb-1">100%</div>
              <div className="text-sm text-gray-600 font-medium">Practical Focus</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Day Selector */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">
                📅
              </span>
              Choose Your Day
            </h3>
            
            <div className="grid grid-cols-7 gap-3 mb-8">
              {Array.from({ length: 28 }, (_, i) => i + 1).map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`w-12 h-12 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                    selectedDay === day
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg scale-105'
                      : day <= 8
                      ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 hover:from-green-200 hover:to-emerald-200 shadow-sm'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={day > 8}
                >
                  {day}
                </button>
              ))}
            </div>

            {/* Enhanced Legend */}
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 font-medium">Currently Selected</span>
                </div>
                <span className="text-indigo-600 font-bold">Day {selectedDay}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-3"></div>
                  <span className="text-gray-700 font-medium">Available Now</span>
                </div>
                <span className="text-green-600 font-bold">8 Lessons</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-300 rounded-full mr-3"></div>
                  <span className="text-gray-700 font-medium">Coming Soon</span>
                </div>
                <span className="text-gray-500 font-bold">20 More</span>
              </div>
            </div>
          </div>

          {/* Day Content */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 card-hover">
            <div className="flex items-start mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-2xl mr-6 shadow-lg">
                {challengeContent[selectedDay as keyof typeof challengeContent]?.icon || "🔒"}
              </div>
              <div className="flex-1">
                <div className="text-sm text-indigo-600 uppercase tracking-wide font-bold mb-1">Day {selectedDay}</div>
                <h4 className="text-2xl font-black text-gray-900 mb-2">
                  {challengeContent[selectedDay as keyof typeof challengeContent]?.title || "Coming Soon"}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {challengeContent[selectedDay as keyof typeof challengeContent]?.description || "This lesson will be available soon. Stay tuned for more exciting AI learning content!"}
                </p>
              </div>
            </div>

            {/* Lesson Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900">15 Minutes Daily</div>
                  <div className="text-sm text-gray-600">Perfect for busy schedules</div>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Hands-On Practice</div>
                  <div className="text-sm text-gray-600">Real-world exercises included</div>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Certificate Ready</div>
                  <div className="text-sm text-gray-600">Earn recognition for completion</div>
                </div>
              </div>
            </div>

            <button 
              className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                selectedDay <= 8
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 shadow-lg hover:shadow-xl'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
              disabled={selectedDay > 8}
            >
              {selectedDay <= 8 ? (
                <span className="flex items-center justify-center">
                  Start Day {selectedDay} Lesson
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              ) : (
                'Coming Soon - Stay Tuned!'
              )}
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 bg-gradient-to-r from-indigo-900 to-purple-900 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join 50,000+ professionals who&apos;ve already started their AI journey. Your future self will thank you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center group">
                Start Your 28-Day Journey
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:border-white/50 hover:bg-white/10 transition-all duration-300">
                View Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}