import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - AI Master | Leading AI Education Platform',
  description: 'Learn about AI Master\'s mission to democratize AI education and empower individuals to master artificial intelligence for career growth and business success.',
};

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              About AI Master
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              We&apos;re on a mission to democratize AI education and empower millions to master artificial intelligence for career growth and business success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-black text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  At AI Master, we believe that artificial intelligence shouldn&apos;t be limited to tech giants and PhD researchers. Our mission is to make AI education accessible, practical, and transformative for everyone.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We&apos;ve helped over 84,000+ students worldwide increase their income, advance their careers, and build successful AI-powered businesses through our comprehensive courses and hands-on training programs.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-black text-blue-600 mb-2">84,000+</div>
                    <div className="text-gray-700 font-medium">Students Trained</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-purple-600 mb-2">4.9/5</div>
                    <div className="text-gray-700 font-medium">Average Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-green-600 mb-2">150+</div>
                    <div className="text-gray-700 font-medium">Countries Reached</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-orange-600 mb-2">95%</div>
                    <div className="text-gray-700 font-medium">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-gray-900 text-center mb-16">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Practical Focus</h3>
                <p className="text-gray-700 leading-relaxed">
                  We prioritize real-world applications over theoretical concepts. Every lesson is designed to provide immediate, actionable value.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-700 leading-relaxed">
                  We stay at the forefront of AI developments, continuously updating our curriculum to reflect the latest tools and techniques.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Community</h3>
                <p className="text-gray-700 leading-relaxed">
                  We foster a supportive learning environment where students can connect, collaborate, and grow together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black text-gray-900 mb-8">
              Our Story
            </h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                AI Master was founded in 2021 by a team of AI researchers, industry experts, and educators who saw the growing gap between AI&apos;s potential and people&apos;s ability to harness it.
              </p>
              <p>
                We started with a simple question: &quot;How can we make AI education practical, accessible, and immediately valuable for working professionals?&quot;
              </p>
              <p>
                Today, we&apos;re proud to be the leading platform for practical AI education, with students from Fortune 500 companies, startups, and individuals looking to transform their careers through AI mastery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with AI Master. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/signup" 
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Learning Now
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}