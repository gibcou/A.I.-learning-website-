import { useState, useEffect } from 'react';
import { 
  User, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';

interface UserProfile {
  hasCompletedQuiz: boolean;
  hasFreeAccess?: boolean;
  quizResults?: {
    answers: QuizAnswer[];
    knowledgeLevel: {
      level: string;
      color: string;
      description: string;
    };
    completedAt: string;
  };
  recommendedCourses?: string[];
}

interface QuizAnswer {
  questionId: number;
  answer: string;
  points: number;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      
      if (user) {
        // Fetch user profile from Firestore
        try {
          const userDocRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);
          
          if (userDoc.exists()) {
            setUserProfile(userDoc.data() as UserProfile);
          } else {
            // Create new user profile for first-time users
            const newProfile: UserProfile = {
              hasCompletedQuiz: false,
              recommendedCourses: []
            };
            await setDoc(userDocRef, newProfile);
            setUserProfile(newProfile);
          }
        } catch (error) {
          console.error('Error fetching user profile:', error);
          setUserProfile(null);
        }
      } else {
        setUserProfile(null);
      }
      
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return { user: result.user, error: null };
    } catch (error: unknown) {
      return { user: null, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      return { user: result.user, error: null };
    } catch (error: unknown) {
      return { user: null, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  };

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      return { user: result.user, error: null };
    } catch (error: unknown) {
      return { user: null, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  };

  const signInWithGithub = async () => {
    try {
      const provider = new GithubAuthProvider();
      const result = await signInWithPopup(auth, provider);
      return { user: result.user, error: null };
    } catch (error: unknown) {
      return { user: null, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      return { error: null };
    } catch (error: unknown) {
      return { error: error instanceof Error ? error.message : 'Unknown error' };
    }
  };

  const updateQuizCompletion = async (
    quizResults: {
      answers: QuizAnswer[];
      knowledgeLevel: {
        level: string;
        color: string;
        description: string;
      };
      completedAt: string;
    }, 
    recommendedCourses: string[]
  ) => {
    if (!user) return { error: 'No user logged in' };

    try {
      const userDocRef = doc(db, 'users', user.uid);
      
      // Check if user should get free access (your email)
      const hasFreeAccess = user.email === 'raycoutley646@gmail.com';
      
      const updatedProfile: UserProfile = {
        hasCompletedQuiz: true,
        hasFreeAccess,
        quizResults,
        recommendedCourses
      };
      
      await setDoc(userDocRef, updatedProfile, { merge: true });
      setUserProfile(updatedProfile);
      
      return { error: null };
    } catch (error: unknown) {
      console.error('Error updating quiz completion:', error);
      return { error: error instanceof Error ? error.message : 'Unknown error' };
    }
  };

  return {
    user,
    userProfile,
    loading,
    signIn,
    signUp,
    signInWithGoogle,
    signInWithGithub,
    logout,
    updateQuizCompletion
  };
};