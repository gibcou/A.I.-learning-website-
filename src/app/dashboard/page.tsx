'use client';

import { useEffect, useMemo, memo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import ProtectedRoute from '@/components/ProtectedRoute';

interface Course {
  id: string;
  title: string;
  description: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  thumbnail: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  status: 'In Progress' | 'Completed' | 'Planning';
  completedDate?: string;
  githubUrl?: string;
  liveUrl?: string;
}

// Memoized course card component
const CourseCard = memo(({ course, getDifficultyColor }: { course: Course; getDifficultyColor: (difficulty: string) => string }) => (
  <div className="bg-gray-50 rounded-lg p-6 border">
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center">
        <span className="text-3xl mr-3">{course.thumbnail}</span>
        <div>
          <h3 className="font-bold text-gray-900">{course.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{course.description}</p>
        </div>
      </div>
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(course.difficulty)}`}>
        {course.difficulty}
      </span>
    </div>
    <div className="mb-4">
      <div className="flex justify-between text-sm text-gray-600 mb-1">
        <span>Progress</span>
        <span>{course.completedLessons}/{course.totalLessons} lessons</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
          style={{ width: `${course.progress}%` }}
        ></div>
      </div>
    </div>
    <div className="flex justify-between items-center">
      <span className="text-sm text-gray-500">{course.estimatedTime}</span>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
        Continue Learning
      </button>
    </div>
  </div>
));

// Memoized project card component
const ProjectCard = memo(({ project, getStatusColor }: { project: Project; getStatusColor: (status: string) => string }) => (
  <div className="bg-gray-50 rounded-lg p-6 border">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-sm text-gray-600 mb-3">{project.description}</p>
      </div>
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
        {project.status}
      </span>
    </div>
    <div className="mb-4">
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
            {tech}
          </span>
        ))}
      </div>
    </div>
    {project.completedDate && (
      <p className="text-xs text-gray-500 mb-3">Completed: {project.completedDate}</p>
    )}
    <div className="flex gap-2">
      {project.githubUrl && (
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" 
           className="text-blue-600 hover:text-blue-800 text-sm">
          GitHub
        </a>
      )}
      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" 
           className="text-green-600 hover:text-green-800 text-sm">
          Live Demo
        </a>
      )}
    </div>
  </div>
));

// Loading skeleton component for better perceived performance
const LoadingSkeleton = memo(() => (
  <div className="animate-pulse">
    <div className="bg-gray-50 rounded-lg p-6 border">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-200 rounded mr-3"></div>
          <div>
            <div className="h-4 bg-gray-200 rounded w-48 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-64"></div>
          </div>
        </div>
        <div className="h-6 bg-gray-200 rounded-full w-20"></div>
      </div>
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <div className="h-3 bg-gray-200 rounded w-16"></div>
          <div className="h-3 bg-gray-200 rounded w-20"></div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2"></div>
      </div>
      <div className="flex justify-between items-center">
        <div className="h-3 bg-gray-200 rounded w-16"></div>
        <div className="h-8 bg-gray-200 rounded w-32"></div>
      </div>
    </div>
  </div>
));

CourseCard.displayName = 'CourseCard';
ProjectCard.displayName = 'ProjectCard';
LoadingSkeleton.displayName = 'LoadingSkeleton';

export default function Dashboard() {
  const { user, userProfile, loading } = useAuth();
  const router = useRouter();
  const activeTab = 'courses'; // Fixed tab since there's no navigation

  // Memoize utility functions
  const getDifficultyColor = useCallback((difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }, []);

  // Memoize mock data to prevent recreation on every render
  const courses = useMemo<Course[]>(() => [
    {
      id: '1',
      title: 'Machine Learning Fundamentals',
      description: 'Learn the basics of machine learning algorithms and applications',
      progress: 65,
      totalLessons: 20,
      completedLessons: 13,
      category: 'Machine Learning',
      difficulty: 'Beginner',
      estimatedTime: '8 weeks',
      thumbnail: '🤖'
    },
    {
      id: '2',
      title: 'Deep Learning with Neural Networks',
      description: 'Advanced neural network architectures and deep learning techniques',
      progress: 30,
      totalLessons: 25,
      completedLessons: 8,
      category: 'Deep Learning',
      difficulty: 'Advanced',
      estimatedTime: '12 weeks',
      thumbnail: '🧠'
    },
    {
      id: '3',
      title: 'Natural Language Processing',
      description: 'Process and analyze human language with AI',
      progress: 85,
      totalLessons: 15,
      completedLessons: 13,
      category: 'NLP',
      difficulty: 'Intermediate',
      estimatedTime: '6 weeks',
      thumbnail: '💬'
    }
  ], []);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]); // Added router to dependencies

  // Early return for loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome back, {user.displayName || user.email?.split('@')[0]}! 👋
              </h1>
              <p className="text-gray-600 mt-1">Continue your AI learning journey</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Content */}
        <div className="bg-white rounded-xl shadow-sm border mb-8">
          <div className="p-6">
            {activeTab === 'courses' && (
              <div className="space-y-6">
                {!userProfile?.hasCompletedQuiz ? (
                  // Show quiz prompt for users who haven't completed the quiz
                  <div className="text-center py-12">
                    <div className="max-w-md mx-auto">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Discover Your Perfect AI Learning Path
                      </h2>
                      <p className="text-gray-600 mb-8">
                        Take our personalized quiz to unlock courses tailored specifically to your goals, experience level, and interests. Get recommendations that match your learning style!
                      </p>
                      <Link
                        href="/quiz"
                        className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Take Personalization Quiz
                      </Link>
                      <p className="text-sm text-gray-500 mt-4">
                        ⏱️ Takes only 2-3 minutes • 🎯 Get instant recommendations
                      </p>
                    </div>
                  </div>
                ) : (
                  // Show courses for users who have completed the quiz
                  <>
                    <div className="flex justify-between items-center">
                      <h2 className="text-xl font-bold text-gray-900">Your Personalized Learning Path</h2>
                      <Link
                        href="/courses"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Browse More Courses
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {(userProfile?.recommendedCourses && userProfile.recommendedCourses.length > 0) ? (
                        // Show recommended courses based on quiz results
                        userProfile.recommendedCourses.slice(0, 4).map((courseId, index) => {
                          // Find the course from the mock data (in a real app, this would be from your database)
                          const course = courses.find(c => c.id === courseId) || courses[index % courses.length];
                          return (
                            <CourseCard 
                              key={course.id} 
                              course={course} 
                              getDifficultyColor={getDifficultyColor} 
                            />
                          );
                        })
                      ) : (
                        // Show default courses if no recommendations
                        courses.slice(0, 4).map((course) => (
                          <CourseCard 
                            key={course.id} 
                            course={course} 
                            getDifficultyColor={getDifficultyColor} 
                          />
                        ))
                      )}
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
    </ProtectedRoute>
  );
}