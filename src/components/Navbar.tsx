
import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Menu, 
  Search, 
  X, 
  Sun, 
  Moon, 
  LogIn, 
  UserPlus,
  Home,
  User,
  Mail,
  LogOut
} from "lucide-react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, isLoggedIn, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState('/fmelogolight.svg');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Fallback to text logo since we don't have the actual logo files
    setLogoSrc(theme === "light" ? '/fmelogodark.svg' : '/fmelogolight.svg');
  }, [theme]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [location.pathname]);

  // Handle transition state for smoother navigation
  const handleNavigation = useCallback(() => {
    setIsTransitioning(true);
    // Let transition finish before allowing new navigation
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  }, []);

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo & Brand */}
        <div className="flex items-center">
          <Link to="/" onClick={handleNavigation} className="transition-opacity duration-300 hover:opacity-90">
            <span className="text-xl font-bold">Event<span className="text-eventgo-teal">Go</span></span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-sm font-medium transition-all duration-300 border-b-2 py-1 ${
                isActive 
                  ? "border-primary text-primary" 
                  : "border-transparent hover:text-primary hover:border-primary/30"
              }`
            }
            onClick={handleNavigation}
          >
            Home
          </NavLink>
          <NavLink 
            to="/vendors" 
            className={({ isActive }) => 
              `text-sm font-medium transition-all duration-300 border-b-2 py-1 ${
                isActive 
                  ? "border-primary text-primary" 
                  : "border-transparent hover:text-primary hover:border-primary/30"
              }`
            }
            onClick={handleNavigation}
          >
            Vendors
          </NavLink>
          <NavLink 
            to="/categories" 
            className={({ isActive }) => 
              `text-sm font-medium transition-all duration-300 border-b-2 py-1 ${
                isActive 
                  ? "border-primary text-primary" 
                  : "border-transparent hover:text-primary hover:border-primary/30"
              }`
            }
            onClick={handleNavigation}
          >
            Categories
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `text-sm font-medium transition-all duration-300 border-b-2 py-1 ${
                isActive 
                  ? "border-primary text-primary" 
                  : "border-transparent hover:text-primary hover:border-primary/30"
              }`
            }
            onClick={handleNavigation}
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `text-sm font-medium transition-all duration-300 border-b-2 py-1 ${
                isActive 
                  ? "border-primary text-primary" 
                  : "border-transparent hover:text-primary hover:border-primary/30"
              }`
            }
            onClick={handleNavigation}
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Desktop Search */}
        <div className="hidden md:flex relative w-full max-w-sm mx-4">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search vendors, services..."
            className="pl-8 bg-muted/50"
          />
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
          
          {isLoggedIn ? (
            <>
              {user?.email && (
                <span className="text-sm mr-2">{user.email}</span>
              )}
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" size="sm" asChild>
                <Link to="/login" onClick={handleNavigation} className="transition-all duration-300">
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Link>
              </Button>
              
              <Button size="sm" asChild>
                <Link to="/signup" onClick={handleNavigation} className="transition-all duration-300">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Sign Up
                </Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile View */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Search Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Button>
          
          {/* Theme Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
          
          {/* Mobile Menu Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="md:hidden border-b border-border px-4 py-2 bg-background animate-in slide-in-from-top-5 duration-300">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search vendors, services..."
              className="pl-8 w-full bg-muted/50"
              autoFocus
            />
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-b border-border pb-4 bg-background animate-in slide-in-from-top-5 duration-300">
          <nav className="flex flex-col gap-2 p-4">
            {isLoggedIn && user?.email && (
              <div className="px-3 py-2 mb-1 bg-muted/50 rounded-md">
                <p className="text-sm font-medium">Signed in as:</p>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>
            )}
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-all duration-300 ${
                  isActive 
                    ? "bg-primary/10 text-primary font-medium" 
                    : "hover:bg-muted"
                }`
              }
              onClick={handleNavigation}
            >
              <Home className="h-4 w-4" />
              Home
            </NavLink>
            <NavLink 
              to="/vendors" 
              className={({ isActive }) => 
                `flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-all duration-300 ${
                  isActive 
                    ? "bg-primary/10 text-primary font-medium" 
                    : "hover:bg-muted"
                }`
              }
              onClick={handleNavigation}
            >
              <User className="h-4 w-4" />
              Vendors
            </NavLink>
            <NavLink 
              to="/categories" 
              className={({ isActive }) => 
                `flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-all duration-300 ${
                  isActive 
                    ? "bg-primary/10 text-primary font-medium" 
                    : "hover:bg-muted"
                }`
              }
              onClick={handleNavigation}
            >
              <Search className="h-4 w-4" />
              Categories
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-all duration-300 ${
                  isActive 
                    ? "bg-primary/10 text-primary font-medium" 
                    : "hover:bg-muted"
                }`
              }
              onClick={handleNavigation}
            >
              <User className="h-4 w-4" />
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-all duration-300 ${
                  isActive 
                    ? "bg-primary/10 text-primary font-medium" 
                    : "hover:bg-muted"
                }`
              }
              onClick={handleNavigation}
            >
              <Mail className="h-4 w-4" />
              Contact Us
            </NavLink>
            
            <div className="border-t border-border my-2"></div>
            
            <div className="flex gap-2 px-3">
              {isLoggedIn ? (
                <Button className="w-full" variant="outline" size="sm" onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              ) : (
                <>
                  <Button className="w-full" variant="outline" size="sm" asChild>
                    <Link to="/login" onClick={handleNavigation} className="transition-all duration-300">
                      <LogIn className="mr-2 h-4 w-4" />
                      Login
                    </Link>
                  </Button>
                  
                  <Button className="w-full" size="sm" asChild>
                    <Link to="/signup" onClick={handleNavigation} className="transition-all duration-300">
                      <UserPlus className="mr-2 h-4 w-4" />
                      Sign Up
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
