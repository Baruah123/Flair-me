
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'sonner';

// Define the user type
interface User {
  email: string;
  firstName?: string;
  lastName?: string;
}

// Define the authentication context type
interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (userData: SignupData) => Promise<boolean>;
  logout: () => void;
}

// Define signup data type
interface SignupData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType | null>(null);

// Custom hook for using the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Dummy user database for demo purposes
const dummyUsers: User[] = [
  { email: 'test@example.com' }
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check localStorage on initial load
  useEffect(() => {
    const checkAuth = () => {
      const storedUser = localStorage.getItem('user');
      const storedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      
      if (storedIsLoggedIn && storedUser) {
        try {
          setUser(JSON.parse(storedUser));
          setIsLoggedIn(true);
        } catch (error) {
          console.error('Failed to parse stored user:', error);
          // Clear invalid data
          localStorage.removeItem('user');
          localStorage.removeItem('isLoggedIn');
        }
      }
    };
    
    checkAuth();
  }, []);

  // Redirect logic
  useEffect(() => {
    const publicRoutes = ['/login', '/signup', '/forgot-password'];
    const pathIsPublic = publicRoutes.includes(location.pathname);
    
    if (!isLoggedIn && !pathIsPublic) {
      // Redirect to login if not logged in and not on a public route
      navigate('/login');
    } else if (isLoggedIn && pathIsPublic) {
      // Redirect to home if logged in and on a public route
      navigate('/');
    }
  }, [isLoggedIn, location.pathname, navigate]);

  // Login function
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // For demo, any non-empty email and password works, but we'll check for the dummy user
      if (email && password) {
        const foundUser = dummyUsers.find(u => u.email === email);
        const user = foundUser || { email };
        
        // Store in state
        setUser(user);
        setIsLoggedIn(true);
        
        // Store in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user', JSON.stringify(user));
        
        toast.success('Successfully logged in!');
        return true;
      }
      
      toast.error('Invalid credentials');
      return false;
    } catch (error) {
      console.error('Login error:', error);
      toast.error('An error occurred during login');
      return false;
    }
  };

  // Signup function
  const signup = async (userData: SignupData): Promise<boolean> => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      if (userData.email && userData.password) {
        const newUser = {
          email: userData.email,
          firstName: userData.firstName,
          lastName: userData.lastName
        };
        
        // Store in state
        setUser(newUser);
        setIsLoggedIn(true);
        
        // Store in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user', JSON.stringify(newUser));
        
        // Add to dummy database
        dummyUsers.push(newUser);
        
        toast.success('Account created successfully!');
        return true;
      }
      
      toast.error('Invalid user data');
      return false;
    } catch (error) {
      console.error('Signup error:', error);
      toast.error('An error occurred during signup');
      return false;
    }
  };

  // Logout function
  const logout = () => {
    // Clear state
    setUser(null);
    setIsLoggedIn(false);
    
    // Clear localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    
    toast.info('You have been logged out');
    
    // Redirect to login
    navigate('/login');
  };

  // Provide the context value
  const contextValue: AuthContextType = {
    user,
    isLoggedIn,
    login,
    signup,
    logout
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
