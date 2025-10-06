'use client';

import { useState } from 'react';

interface SuccessStory {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  achievement: string;
  incomeIncrease: string;
  timeframe: string;
  quote: string;
  beforeAfter: {
    before: string;
    after: string;
  };
  skills: string[];
}

export default function SuccessStoriesSection() {
  const [activeStory, setActiveStory] = useState(0);

  const successStories: SuccessStory[] = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Marketing Manager",
      company: "TechFlow Solutions",
      image: "👩‍💼",
      achievement: "Promoted to VP of Marketing",
      incomeIncrease: "+65%",
      timeframe: "6 months",
      quote: "AI Master completely transformed my career. I went from struggling with basic automation to leading AI initiatives across our entire marketing department. The practical approach and real-world projects gave me the confidence to implement AI solutions that saved our company over $200K annually.",
      beforeAfter: {
        before: "Manual campaign management, spending 40+ hours/week on repetitive tasks",
        after: "AI-powered marketing automation, leading a team of 12, strategic focus on growth"
      },
      skills: ["AI Marketing Automation", "Predictive Analytics", "Content Generation", "Customer Segmentation"]
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Freelance Consultant",
      company: "AI Solutions Pro",
      image: "👨‍💻",
      achievement: "Built 6-figure AI consultancy",
      incomeIncrease: "+180%",
      timeframe: "8 months",
      quote: "I was a struggling freelancer making $30K/year. After completing AI Master, I launched my AI consultancy and now help businesses implement AI solutions. Last month alone, I made more than my entire previous year. The business modules were game-changers.",
      beforeAfter: {
        before: "Freelance web developer earning $2,500/month with inconsistent work",
        after: "AI consultant with 15+ clients, $25K+ monthly revenue, booked 3 months ahead"
      },
      skills: ["AI Strategy Consulting", "Process Automation", "ChatGPT Integration", "Business AI Implementation"]
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      role: "Research Scientist",
      company: "BioTech Innovations",
      image: "👩‍🔬",
      achievement: "Led breakthrough AI research project",
      incomeIncrease: "+45%",
      timeframe: "4 months",
      quote: "As a traditional researcher, I was skeptical about AI. But AI Master showed me how to leverage AI for data analysis and research acceleration. I published 3 papers in 6 months using AI-assisted research methods - more than I had in the previous 2 years combined.",
      beforeAfter: {
        before: "Traditional research methods, 18-month project timelines, limited data analysis",
        after: "AI-accelerated research, 6-month project completion, advanced predictive modeling"
      },
      skills: ["AI Research Methods", "Data Science", "Machine Learning Models", "Scientific AI Applications"]
    },
    {
      id: 4,
      name: "James Thompson",
      role: "Small Business Owner",
      company: "Thompson&apos;s Retail Chain",
      image: "👨‍💼",
      achievement: "Automated entire business operations",
      incomeIncrease: "+90%",
      timeframe: "10 months",
      quote: "Running 3 retail stores was overwhelming until I discovered AI Master. Now I have AI handling inventory, customer service, and marketing. I work 20 hours less per week while revenue increased by 90%. It&apos;s like having a team of experts working 24/7.",
      beforeAfter: {
        before: "Working 70+ hours/week, manual inventory, struggling with customer retention",
        after: "Automated operations, AI-driven inventory, personalized customer experiences, 50-hour work weeks"
      },
      skills: ["Business Automation", "AI Customer Service", "Inventory Management", "Predictive Analytics"]
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Content Creator",
      company: "Creative AI Studio",
      image: "👩‍🎨",
      achievement: "Scaled content agency to 7-figures",
      incomeIncrease: "+220%",
      timeframe: "12 months",
      quote: "I was a solo content creator barely making ends meet. AI Master taught me how to use AI for content creation, client management, and scaling. Now I run a 7-figure content agency with 20+ clients and a team of 8. AI didn't replace creativity - it amplified it.",
      beforeAfter: {
        before: "Solo creator, $3K/month, working nights and weekends, burnout",
        after: "Agency owner, $85K/month, team of 8, serving Fortune 500 clients"
      },
      skills: ["AI Content Creation", "Creative Automation", "Client Management Systems", "Team Scaling"]
    },
    {
      id: 6,
      name: "David Kim",
      role: "Financial Analyst",
      company: "Global Investment Partners",
      image: "👨‍💼",
      achievement: "Became Head of AI Strategy",
      incomeIncrease: "+75%",
      timeframe: "7 months",
      quote: "The financial industry is being revolutionized by AI, and AI Master put me at the forefront. I developed AI models that improved our investment returns by 23%. My insights are now used across the entire firm, and I was promoted to head our new AI strategy division.",
      beforeAfter: {
        before: "Junior analyst, manual data processing, basic Excel modeling",
        after: "Head of AI Strategy, leading algorithmic trading initiatives, managing $50M+ portfolio"
      },
      skills: ["Financial AI Models", "Algorithmic Trading", "Risk Assessment", "Predictive Market Analysis"]
    }
  ];

  const stats = [
    { number: "1,180,774+", label: "Success Stories", icon: "🎉" },
    { number: "67%", label: "Average Income Increase", icon: "💰" },
    { number: "4.2 months", label: "Average Time to Results", icon: "⚡" },
    { number: "94%", label: "Career Advancement Rate", icon: "📈" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-green-200/15 to-blue-200/15 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-100 to-blue-100 text-green-700 text-sm font-bold mb-8 animate-fade-in-down">
            ✨ Real Success Stories
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight animate-fade-in-up">
            Meet Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}Success Stories
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-medium animate-fade-in-up stagger-1">
            Real people, real results. See how AI Master students transformed their careers and lives with practical AI skills.
          </p>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-black text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Success Story */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16 border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Story Content */}
            <div className="p-12 lg:p-16">
              <div className="flex items-center mb-8">
                <div className="text-6xl mr-6">{successStories[activeStory].image}</div>
                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-1">{successStories[activeStory].name}</h3>
                  <p className="text-lg text-gray-600 font-medium">{successStories[activeStory].role}</p>
                  <p className="text-blue-600 font-bold">{successStories[activeStory].company}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                  <div className="text-2xl font-black text-green-600 mb-1">{successStories[activeStory].incomeIncrease}</div>
                  <div className="text-sm text-green-700 font-medium">Income Increase</div>
                </div>
                <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                  <div className="text-2xl font-black text-blue-600 mb-1">{successStories[activeStory].timeframe}</div>
                  <div className="text-sm text-blue-700 font-medium">Timeframe</div>
                </div>
                <div className="text-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
                  <div className="text-lg font-black text-purple-600 mb-1">🏆</div>
                  <div className="text-sm text-purple-700 font-medium">Achievement</div>
                </div>
              </div>

              <blockquote className="text-lg text-gray-700 leading-relaxed mb-8 italic border-l-4 border-blue-500 pl-6">
                &quot;{successStories[activeStory].quote}&quot;
              </blockquote>

              <div className="mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Key Achievement:</h4>
                <p className="text-blue-600 font-bold text-xl">{successStories[activeStory].achievement}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {successStories[activeStory].skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Before/After Comparison */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-12 lg:p-16 flex flex-col justify-center">
              <h4 className="text-2xl font-black text-gray-900 mb-8 text-center">Transformation Journey</h4>
              
              <div className="space-y-8">
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold text-xs">Before</span>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-red-700 mb-2">The Challenge</h5>
                      <p className="text-red-700 text-sm leading-relaxed">{successStories[activeStory].beforeAfter.before}</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold text-xs">After</span>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-green-700 mb-2">The Success</h5>
                      <p className="text-green-700 text-sm leading-relaxed">{successStories[activeStory].beforeAfter.after}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {successStories.map((story, index) => (
            <button
              key={story.id}
              onClick={() => setActiveStory(index)}
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                activeStory === index
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <span className="text-2xl mr-3">{story.image}</span>
              <div className="text-left">
                <div className="font-bold text-sm">{story.name}</div>
                <div className="text-xs opacity-75">{story.incomeIncrease} increase</div>
              </div>
            </button>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-black mb-6">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
            Join over 1.1 million students who&apos;ve transformed their careers with AI Master. Your success story could be next.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-blue-600 px-12 py-5 rounded-full font-black text-xl hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center group">
              Start Your AI Journey
              <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="border-2 border-white/30 text-white px-12 py-5 rounded-full font-black text-xl hover:border-white/50 hover:bg-white/10 transition-all duration-300">
              View All Success Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}