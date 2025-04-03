
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedVendors from "@/components/FeaturedVendors";
import CategoryBrowser from "@/components/CategoryBrowser";
import TrendingReels from "@/components/TrendingReels";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { useEffect } from "react";

const Index = () => {
  const { user, isLoggedIn } = useAuth();

  // Welcome toast when user first logs in
  useEffect(() => {
    if (isLoggedIn && user) {
      const welcomeShown = sessionStorage.getItem('welcomeShown');
      if (!welcomeShown) {
        const firstName = user.firstName || '';
        toast.success(
          `Welcome ${firstName ? firstName : 'back'} to EventGo!`, 
          { 
            description: "Discover the best event vendors and services.",
            duration: 5000
          }
        );
        sessionStorage.setItem('welcomeShown', 'true');
      }
    }
  }, [isLoggedIn, user]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {isLoggedIn && user && (
        <div className="container mx-auto px-4 py-2 bg-primary/10 rounded-lg mt-4 text-center">
          <p className="text-primary font-medium">
            Welcome {user.firstName ? `${user.firstName} ${user.lastName || ''}` : user.email}!
          </p>
        </div>
      )}
      <Hero />
      <FeaturedVendors />
      <CategoryBrowser />
      <TrendingReels />
      <Footer />
    </div>
  );
};

export default Index;
