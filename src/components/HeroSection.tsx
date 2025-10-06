import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white section-padding">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200 text-indigo-700 text-sm font-semibold mb-8 shadow-sm">
            <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 animate-pulse"></div>
            #1 AI Learning Platform
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-8 leading-tight">
            Master AI in{' '}
            <span className="gradient-text">
              28 Days
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            Transform your career with practical AI skills. Join thousands of professionals who&apos;ve already boosted their income by 40% or more.
          </p>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 border-3 border-white flex items-center justify-center text-white text-sm font-bold shadow-lg"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <div className="flex items-center text-yellow-400 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 font-semibold">
                  <span className="text-indigo-600 font-bold">1,180,774+</span> learners
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="/quiz"
              className="btn-primary text-white px-10 py-5 rounded-full font-bold text-lg inline-flex items-center group"
            >
              Start Free Assessment
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/demo"
              className="border-2 border-indigo-200 text-indigo-700 px-10 py-5 rounded-full font-bold text-lg hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300 inline-flex items-center"
            >
              Watch Success Stories
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-indigo-100 card-hover">
              <div className="text-3xl font-black gradient-text mb-2">15min</div>
              <div className="text-sm text-gray-600 font-medium">Daily Learning</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-indigo-100 card-hover">
              <div className="text-3xl font-black gradient-text mb-2">1M+</div>
              <div className="text-sm text-gray-600 font-medium">Active Users</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-indigo-100 card-hover">
              <div className="text-3xl font-black gradient-text mb-2">10k+</div>
              <div className="text-sm text-gray-600 font-medium">Learning Hours</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-indigo-100 card-hover">
              <div className="text-3xl font-black gradient-text mb-2">121k+</div>
              <div className="text-sm text-gray-600 font-medium">AI Prompts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}