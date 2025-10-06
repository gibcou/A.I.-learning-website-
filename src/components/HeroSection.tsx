import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600/20 to-purple-600/20"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full filter blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-white/5 rounded-full filter blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-white/5 rounded-full filter blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-8 py-3 mb-8 animate-fade-in-down">
            <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-3 animate-pulse-slow"></div>
            <span className="text-yellow-300 font-bold text-lg tracking-wide">🔥 TRENDING: 50,000+ Students Enrolled</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight animate-fade-in-up">
            Become the Ultimate
            <span className="block text-yellow-400 font-black">
              Master of AI
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-medium animate-fade-in-up stagger-2">
            Learn how AI can <span className="text-yellow-400 font-bold">increase your income</span> and <span className="text-yellow-400 font-bold">improve your life</span>. 
            Join the AI revolution with our comprehensive masterclass.
          </p>

          {/* Social Proof */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12 animate-fade-in-up stagger-3">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20 hover-lift">
              <div className="flex -space-x-2 mr-4">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full border-2 border-white"></div>
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full border-2 border-white"></div>
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full border-2 border-white"></div>
                <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-bold">
                  +1M
                </div>
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-lg">1,180,774+ Students</div>
                <div className="text-slate-300 text-sm">Already Learning AI</div>
              </div>
            </div>
            
            <div className="flex items-center text-yellow-400">
              <div className="flex mr-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 fill-current animate-bounce-slow" style={{animationDelay: `${i * 0.1}s`}} viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <span className="text-white font-bold text-lg">4.9/5 Rating</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up stagger-4">
            <Link href="/quiz" className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-12 py-5 rounded-full font-black text-xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25 transform hover:scale-105 border-4 border-yellow-200/50 btn-premium inline-flex items-center justify-center">
              <span className="flex items-center justify-center">
                Start Learning AI Now
                <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            
            <button className="group border-3 border-white/40 text-white px-12 py-5 rounded-full font-black text-xl hover:border-white/60 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm">
              <span className="flex items-center justify-center">
                Watch Free Preview
                <svg className="w-6 h-6 ml-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-slate-400 animate-fade-in-up stagger-5">
            <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/10 hover-lift">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">No Credit Card Required</span>
            </div>
            <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/10 hover-lift">
              <svg className="w-5 h-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Instant Access</span>
            </div>
            <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/10 hover-lift">
              <svg className="w-5 h-5 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">30-Day Money Back</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}