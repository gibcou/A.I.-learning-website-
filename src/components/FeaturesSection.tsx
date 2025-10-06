export default function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "15-Minute Daily Sessions",
      description: "Bite-sized lessons designed for busy professionals. Master AI concepts without overwhelming your schedule.",
      color: "from-blue-600 to-indigo-700",
      bgColor: "from-blue-50 to-indigo-100"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Multi-Format Learning",
      description: "Interactive courses, video tutorials, hands-on projects, and AI tool practice sessions tailored to your learning style.",
      color: "from-indigo-600 to-purple-700",
      bgColor: "from-indigo-50 to-purple-100"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Learn Anywhere",
      description: "Mobile-optimized platform with offline capabilities. Continue your AI journey on any device, anytime.",
      color: "from-purple-600 to-violet-700",
      bgColor: "from-purple-50 to-violet-100"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Real-World Applications",
      description: "Immediately applicable skills with proven ROI. Our graduates report 40%+ income increases within 6 months.",
      color: "from-violet-600 to-blue-700",
      bgColor: "from-violet-50 to-blue-100"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-blue-200/30 to-indigo-300/30 rounded-full filter blur-3xl opacity-40 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-r from-purple-200/20 to-blue-200/20 rounded-full filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 border-2 border-blue-200/50 text-blue-800 text-sm font-bold mb-8 shadow-lg backdrop-blur-sm">
            <span className="mr-2">✨</span>
            <span className="tracking-wide">WHY CHOOSE AI MASTER</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
            The <span className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 bg-clip-text text-transparent">Smartest Way</span><br />
            to Learn AI
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-slate-700 max-w-5xl mx-auto font-medium leading-relaxed tracking-wide">
            Join over <span className="font-bold text-blue-700">1M+ professionals</span> who&apos;ve transformed their careers with our <span className="font-bold text-slate-800">proven AI learning methodology</span>
          </p>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 animate-fade-in-up stagger-2">
          {features.map((feature, index) => (
            <div key={index} className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-slate-200/50 hover:border-blue-300/50 hover-lift">
              {/* Feature background glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br ${feature.color} text-white rounded-2xl mb-8 group-hover:scale-110 transition-all duration-500 shadow-xl border-4 border-white animate-float`} style={{animationDelay: `${index * 0.2}s`}}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-6 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-slate-700 leading-relaxed font-medium text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center bg-white rounded-3xl p-12 shadow-xl border border-indigo-100">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Ready to <span className="gradient-text">10x Your Income</span> with AI?
            </h3>
            <p className="text-xl text-gray-600 mb-8 font-medium">
              Our proven system has helped professionals increase their earning potential by an average of 40% in just 28 days
            </p>
            
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <div className="text-2xl font-black gradient-text mb-2">40%</div>
                <div className="text-sm text-gray-600 font-medium">Average Income Boost</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black gradient-text mb-2">28</div>
                <div className="text-sm text-gray-600 font-medium">Days to Results</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black gradient-text mb-2">1M+</div>
                <div className="text-sm text-gray-600 font-medium">Success Stories</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-white px-10 py-4 rounded-full font-bold text-lg inline-flex items-center group">
                Start Your Transformation
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="border-2 border-indigo-200 text-indigo-700 px-10 py-4 rounded-full font-bold text-lg hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300">
                View Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}