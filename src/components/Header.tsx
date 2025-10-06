'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold text-gray-900">AI Master</span>
            </Link>
          </div>

          {/* Desktop Navigation - moved to right side */}
          <div className="hidden md:flex items-center space-x-8">
            {user ? (
              <>
                {/* User Navigation */}
                <Link href="/dashboard?tab=courses" className="text-gray-600 hover:text-gray-900 transition-colors">
                  My Courses
                </Link>
                <Link href="/dashboard?tab=portfolio" className="text-gray-600 hover:text-gray-900 transition-colors">
                  My Portfolio
                </Link>
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Home
                </Link>
                <button 
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/quiz" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Take Quiz
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </Link>
                <Link 
                  href="/login" 
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Log In
                </Link>
                <Link 
                  href="/signup" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium"
                >
                  Start Learning
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-100">
              {user ? (
                <>
                  {/* User Navigation for Mobile */}
                  <Link href="/dashboard?tab=courses" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                    My Courses
                  </Link>
                  <Link href="/dashboard?tab=portfolio" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                    My Portfolio
                  </Link>
                  <Link href="/" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                    Home
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="mx-3 mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors w-full"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link href="/quiz" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                    Take Quiz
                  </Link>
                  <Link href="/about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                    About
                  </Link>
                  <Link href="/contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                    Contact
                  </Link>
                  <Link href="/login" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                    Log In
                  </Link>
                  <Link 
                    href="/signup" 
                    className="block mx-3 mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-center font-medium"
                  >
                    Start Learning
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}