
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-[80vh] px-4">
        <h1 className="text-7xl font-bold text-eventgo-teal mb-4">404</h1>
        <p className="text-xl text-white/70 mb-8 text-center">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Button asChild className="rounded-full bg-eventgo-teal text-black hover:bg-eventgo-teal/90">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
