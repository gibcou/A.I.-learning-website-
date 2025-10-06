export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600/20 to-purple-600/20"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-down">
        {/* Premium Badge */}
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-bold mb-8 border border-white/20 animate-pulse-slow">
          🚀 Transform Your Career Today
        </div>

        {/* Main Content */}
        <div className="mb-16 animate-fade-in-left">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight animate-shimmer">
            Start Your AI Journey<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 animate-glow">
              With AI Master Today!
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-indigo-100 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            Learn today, take control of your future, and grow your income with cutting-edge digital skills and AI expertise
          </p>
        </div>

        {/* Enhanced Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fade-in-up stagger-1">
          <div className="text-center group hover-lift" style={{animationDelay: '0s'}}>
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-xl border-4 border-white/20 animate-bounce-slow">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-black text-white mb-3">Quick Results</h3>
            <p className="text-indigo-200 text-lg font-medium">See improvements in just 15 minutes a day</p>
          </div>
          
          <div className="text-center group hover-lift" style={{animationDelay: '0.1s'}}>
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-xl border-4 border-white/20 animate-bounce-slow">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-xl font-black text-white mb-3">Increase Income</h3>
            <p className="text-indigo-200 text-lg font-medium">Boost your earning potential with AI skills</p>
          </div>
          
          <div className="text-center group hover-lift" style={{animationDelay: '0.2s'}}>
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-xl border-4 border-white/20 animate-bounce-slow">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-black text-white mb-3">Proven Method</h3>
            <p className="text-indigo-200 text-lg font-medium">Join 1,180,774+ successful learners</p>
          </div>
        </div>

        {/* Premium CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fade-in-up stagger-3">
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-12 py-5 rounded-full font-black text-xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 inline-flex items-center group border-4 border-white/20 button-glow">
            Start Learning Now
            <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <button className="border-3 border-white/40 text-white px-12 py-5 rounded-full font-bold text-xl hover:border-white/60 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover-lift">
            Try Free Demo
          </button>
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-indigo-200 text-base font-medium">
          <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <svg className="w-6 h-6 mr-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <svg className="w-6 h-6 mr-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <svg className="w-6 h-6 mr-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>30-day money back guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}