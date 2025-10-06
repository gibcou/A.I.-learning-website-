export default function CertificateSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-indigo-200/20 to-purple-200/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-200/10 to-orange-200/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-semibold mb-6">
              🏆 Professional Certification
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Earn Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                {" "}AI Certificate
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-medium">
              Complete your AI journey and receive an industry-recognized certificate that showcases your expertise to employers and peers worldwide.
            </p>
            
            {/* Certificate Benefits */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start space-x-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 card-hover">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Industry Recognition</h4>
                  <p className="text-gray-600">Validated by leading AI professionals and organizations</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 card-hover">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Social Media Ready</h4>
                  <p className="text-gray-600">Perfect for LinkedIn, resume, and professional profiles</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 card-hover">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Career Advancement</h4>
                  <p className="text-gray-600">Boost your earning potential by up to 40% on average</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center group">
                Get Certified Today
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="border-2 border-indigo-200 text-indigo-700 px-10 py-4 rounded-full font-bold text-lg hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300">
                View Sample Certificate
              </button>
            </div>
          </div>

          {/* Certificate Visual */}
          <div className="relative">
            {/* Main Certificate */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-all duration-500 hover:scale-105 border border-gray-100">
              <div className="border-4 border-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-8 bg-gradient-to-br from-indigo-50 to-purple-50">
                <div className="text-center">
                  {/* Certificate Header */}
                  <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-black text-gray-900 mb-2">Certificate of Excellence</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-4 rounded-full"></div>
                  <p className="text-indigo-600 font-bold text-lg mb-6">AI Mastery Program</p>
                  
                  <div className="text-sm text-gray-600 mb-2 font-medium">This certifies that</div>
                  <div className="text-2xl font-black text-gray-900 mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Sarah Johnson
                  </div>
                  <div className="text-sm text-gray-600 mb-8 leading-relaxed">
                    has successfully completed the comprehensive AI Master course<br />
                    and demonstrated proficiency in artificial intelligence
                  </div>
                  
                  {/* Certificate Footer */}
                  <div className="flex justify-between items-center text-xs text-gray-500 pt-4 border-t border-gray-200">
                    <div className="text-left">
                      <div className="font-bold text-indigo-600">AI Master</div>
                      <div>Certificate ID: #AM2024-001</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">December 2024</div>
                      <div>Verified & Authentic</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Achievement Badges */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <span className="text-2xl">🏆</span>
            </div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-xl">✨</span>
            </div>
            <div className="absolute top-1/2 -right-8 w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-lg">🎯</span>
            </div>
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-200/30 to-purple-200/30 rounded-3xl filter blur-3xl -z-10 transform scale-110"></div>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 mb-8 text-lg font-medium">Trusted by professionals at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">Google</div>
            <div className="text-2xl font-bold text-gray-400">Microsoft</div>
            <div className="text-2xl font-bold text-gray-400">Amazon</div>
            <div className="text-2xl font-bold text-gray-400">Meta</div>
            <div className="text-2xl font-bold text-gray-400">Tesla</div>
          </div>
        </div>
      </div>
    </section>
  );
}