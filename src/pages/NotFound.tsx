
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-6xl font-bold mb-4 text-theme-accent1">404</h1>
          <h2 className="text-2xl mb-6">Page Not Found</h2>
          <p className="text-lg text-theme-light/70 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link to="/">
            <Button className="bg-theme-accent1 text-theme-darker hover:bg-theme-accent1/90 px-6 py-2">
              Return to Home
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
