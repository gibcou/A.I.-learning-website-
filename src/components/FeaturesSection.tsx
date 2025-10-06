export default function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "15-Minute Daily Sessions",
      description: "Bite-sized lessons designed for busy professionals. Master AI concepts without overwhelming your schedule.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Multi-Format Learning",
      description: "Interactive courses, video tutorials, hands-on projects, and AI tool practice sessions tailored to your learning style.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Learn Anywhere",
      description: "Mobile-optimized platform with offline capabilities. Continue your AI journey on any device, anytime.",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Real-World Applications",
      description: "Immediately applicable skills with proven ROI. Our graduates report 40%+ income increases within 6 months.",
      color: "from-red-500 to-orange-500"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-indigo-100 to-purple-100 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-6">
            ✨ Why Choose AI Master
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            The <span className="gradient-text">Smartest Way</span><br />
            to Learn AI
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-medium leading-relaxed">
            Join over 1M+ professionals who&apos;ve transformed their careers with our proven AI learning methodology
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="group card-hover bg-white rounded-3xl p-8 text-center">
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${feature.color} text-white rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                {feature.description}
              </p>
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