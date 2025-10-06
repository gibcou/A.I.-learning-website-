'use client';

import { useState, useEffect } from 'react';

interface StatItemProps {
  value: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

function StatItem({ value, label, description, icon, color }: StatItemProps) {
  return (
    <div className="text-center group card-hover bg-white rounded-3xl p-8">
      <div className={`inline-flex items-center justify-center w-16 h-16 ${color} rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
        {icon}
      </div>
      <div className="text-4xl md:text-5xl font-black gradient-text mb-3">
        {value}
      </div>
      <div className="text-gray-900 font-bold text-lg mb-2">
        {label}
      </div>
      <div className="text-gray-600 text-sm font-medium">
        {description}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const stats = [
    {
      value: "1.2M+",
      label: "Active Learners",
      description: "Professionals transforming their careers",
      color: "bg-gradient-to-r from-indigo-500 to-purple-500",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      )
    },
    {
      value: "10M+", 
      label: "Learning Hours",
      description: "Content consumed and skills mastered",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      value: "121K+",
      label: "AI Prompts",
      description: "Created by our community members",
      color: "bg-gradient-to-r from-pink-500 to-red-500",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      value: "40%",
      label: "Income Increase",
      description: "Average salary boost within 6 months",
      color: "bg-gradient-to-r from-red-500 to-orange-500",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  return (
    <section id="stats-section" className="section-padding bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600/20 to-purple-600/20"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-semibold mb-6">
            📊 Our Impact
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Transforming Careers<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Worldwide
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-indigo-100 max-w-4xl mx-auto font-medium leading-relaxed">
            Real results from real people. See how AI Master is revolutionizing professional development across the globe.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <StatItem {...stat} />
            </div>
          ))}
        </div>

        {/* Success Stories CTA */}
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Start your AI transformation today and become part of our growing community of successful professionals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center group">
              Start Your Journey
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
    </section>
  );
}