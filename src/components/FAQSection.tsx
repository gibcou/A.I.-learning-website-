'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is AI Master?",
      answer: "AI Master is a comprehensive learning platform designed to help you master artificial intelligence skills for work, business, and side hustles. We offer courses, interactive lessons, and practical tools to help you increase your income potential through AI."
    },
    {
      question: "How to download and use AI Master?",
      answer: "AI Master is available as a web platform and mobile app. You can access our courses directly through your browser or download our app from the App Store or Google Play Store. Simply create an account and start learning immediately."
    },
    {
      question: "How to log in into AI Master?",
      answer: "You can log in to AI Master using your email and password on our website or mobile app. We also support social login options like Google and LinkedIn for your convenience."
    },
    {
      question: "How to cancel AI Master subscription?",
      answer: "You can cancel your subscription at any time through your account settings. Go to &apos;Billing & Subscription&apos; in your profile, and click &apos;Cancel Subscription&apos;. You&apos;ll continue to have access until the end of your current billing period."
    },
    {
      question: "How long does it take to complete a course?",
      answer: "Our courses are designed to be completed in just 15 minutes per day. Most courses can be finished within 2-4 weeks, depending on your pace and the specific course content."
    },
    {
      question: "Do I get a certificate after completing a course?",
      answer: "Yes! Upon successful completion of any course, you&apos;ll receive a digital certificate that you can share on LinkedIn, add to your resume, or showcase in your professional portfolio."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-purple-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-200/20 to-indigo-200/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-indigo-200/20 to-blue-200/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-r from-pink-200/10 to-purple-200/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 text-sm font-semibold mb-6">
            ❓ Got Questions?
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Frequently Asked
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              {" "}Questions
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 font-medium">
            Find answers to common questions about AI Master
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden card-hover"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-8 text-left flex justify-between items-center hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold text-gray-900 pr-6 group-hover:text-purple-700 transition-colors">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 flex items-center justify-center transform transition-all duration-300 ${
                    openIndex === index ? 'rotate-180 from-purple-500 to-indigo-500' : 'group-hover:from-purple-200 group-hover:to-indigo-200'
                  }`}>
                    <svg
                      className={`w-6 h-6 transition-colors duration-300 ${
                        openIndex === index ? 'text-white' : 'text-purple-600 group-hover:text-purple-700'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8">
                  <div className="w-full h-px bg-gradient-to-r from-purple-200 to-indigo-200 mb-6"></div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-100 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-indigo-50/50"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-indigo-200/20 rounded-full filter blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full filter blur-2xl"></div>
            
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Still have questions?
              </h3>
              <p className="text-xl text-gray-600 mb-8 font-medium">
                Our support team is here to help you get started with AI Master
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-12 py-5 rounded-full font-black text-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 inline-flex items-center group border-4 border-purple-200/50">
                  Contact Support
                  <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <button className="border-3 border-purple-300 text-purple-700 px-12 py-5 rounded-full font-bold text-xl hover:border-purple-400 hover:bg-purple-50 transition-all duration-300 backdrop-blur-sm">
                  Browse Help Center
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}