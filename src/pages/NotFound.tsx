
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
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
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-grow flex items-center justify-center py-16 bg-gradient-to-b from-beauty-pink/20 to-beauty-purple/10">
        <div className="text-center max-w-lg px-4">
          <div className="font-playfair text-8xl font-bold gradient-text mb-6">404</div>
          <h1 className="text-3xl font-playfair font-bold mb-4">Page not found</h1>
          <p className="text-gray-600 mb-8">
            We're sorry, the page you requested could not be found. Please check the URL or return to our homepage.
          </p>
          <Button asChild className="beauty-button bg-pink-500 hover:bg-pink-600 text-white px-8 py-6">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
