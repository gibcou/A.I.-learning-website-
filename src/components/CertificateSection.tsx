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
            <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-all duration-500 hover:scale-105 border-2 border-gradient-to-r from-gold-400 to-amber-500">
              <div className="border-8 border-double border-gradient-to-r from-amber-400 via-yellow-500 to-gold-500 rounded-2xl p-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
                {/* Elegant background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 to-purple-600"></div>
                  <div className="absolute top-4 left-4 w-8 h-8 border-2 border-blue-300 rounded-full"></div>
                  <div className="absolute top-8 right-8 w-6 h-6 border-2 border-purple-300 rounded-full"></div>
                  <div className="absolute bottom-4 left-8 w-4 h-4 border-2 border-indigo-300 rounded-full"></div>
                  <div className="absolute bottom-8 right-4 w-10 h-10 border-2 border-amber-300 rounded-full"></div>
                </div>
                
                <div className="text-center relative z-10">
                  {/* Certificate Header */}
                  <div className="w-24 h-24 bg-gradient-to-br from-amber-400 via-yellow-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl border-4 border-white">
                    <svg className="w-12 h-12 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-3xl font-black text-slate-800 mb-3 tracking-wide">Certificate of Excellence</h3>
                  <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 via-yellow-500 to-gold-500 mx-auto mb-6 rounded-full shadow-sm"></div>
                  <p className="text-blue-700 font-bold text-xl mb-8 tracking-wide">AI Mastery Program</p>
                  
                  <div className="text-sm text-slate-600 mb-3 font-semibold tracking-wider uppercase">This certifies that</div>
                  <div className="text-3xl font-black text-slate-800 mb-6 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent tracking-wide">
                    Sarah Johnson
                  </div>
                  <div className="text-base text-slate-700 mb-10 leading-relaxed font-medium max-w-md mx-auto">
                    has successfully completed the comprehensive AI Master course<br />
                    and demonstrated exceptional proficiency in artificial intelligence
                  </div>
                  
                  {/* Signature Lines */}
                  <div className="flex justify-between items-end mb-6 px-8">
                    <div className="text-center">
                      <div className="w-32 h-0.5 bg-slate-400 mb-2"></div>
                      <div className="text-xs text-slate-600 font-semibold">Director Signature</div>
                    </div>
                    <div className="text-center">
                      <div className="w-32 h-0.5 bg-slate-400 mb-2"></div>
                      <div className="text-xs text-slate-600 font-semibold">Date of Completion</div>
                    </div>
                  </div>
                  
                  {/* Certificate Footer */}
                  <div className="flex justify-between items-center text-xs text-slate-600 pt-6 border-t-2 border-gradient-to-r from-blue-200 to-purple-200">
                    <div className="text-left">
                      <div className="font-bold text-blue-700 text-sm">AI Master Academy</div>
                      <div className="text-slate-500">Certificate ID: #AM2024-001</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-slate-700">December 2024</div>
                      <div className="text-slate-500">Verified & Authentic</div>
                    </div>
                  </div>
                  
                  {/* Official Seal */}
                  <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                    <div className="text-center">
                      <div className="text-white text-xs font-bold leading-tight">OFFICIAL</div>
                      <div className="text-white text-xs font-bold leading-tight">SEAL</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Floating Achievement Badges */}
            <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-amber-400 via-yellow-500 to-gold-600 rounded-full flex items-center justify-center shadow-xl animate-bounce border-4 border-white">
              <span className="text-3xl drop-shadow-lg">🏆</span>
            </div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
              <span className="text-2xl drop-shadow-lg">✨</span>
            </div>
            <div className="absolute top-1/2 -right-10 w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
              <span className="text-xl drop-shadow-lg">🎯</span>
            </div>
            
            {/* Enhanced Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200/40 via-indigo-200/40 to-purple-200/40 rounded-3xl filter blur-3xl -z-10 transform scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-amber-200/20 to-gold-200/20 rounded-3xl filter blur-2xl -z-10 transform scale-105"></div>
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