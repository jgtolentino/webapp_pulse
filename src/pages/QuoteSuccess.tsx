import React, { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const QuoteSuccess = () => {
  const navigate = useNavigate();
  
  // Track conversion when this page loads
  useEffect(() => {
    // LinkedIn conversion tracking code
    if (window.lintrk) {
      window.lintrk('track', { conversion_id: 'quote-request-completed' });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="bg-theme-darker p-8 rounded-lg shadow-lg border border-theme-darkgray/30 max-w-2xl w-full text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-theme-accent1" />
          </div>
          
          <h1 className="text-3xl font-bold mb-4 text-theme-light">Quote Request Received!</h1>
          
          <p className="text-theme-light/80 text-lg mb-8">
            Thank you for submitting your quote request. Our business development team will review your requirements and get back to you within 1-2 business days with a tailored proposal.
          </p>
          
          <div className="bg-theme-accent1/10 border border-theme-accent1/20 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-3 text-theme-accent1">What happens next?</h2>
            <ul className="text-left text-theme-light/80 space-y-2">
              <li className="flex items-start">
                <span className="text-theme-accent1 mr-2">1.</span>
                <span>Our team will review your project requirements in detail</span>
              </li>
              <li className="flex items-start">
                <span className="text-theme-accent1 mr-2">2.</span>
                <span>A business development specialist will reach out to schedule an initial consultation</span>
              </li>
              <li className="flex items-start">
                <span className="text-theme-accent1 mr-2">3.</span>
                <span>We'll prepare a detailed proposal and pricing tailored to your specific needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-theme-accent1 mr-2">4.</span>
                <span>You'll receive your custom quote within 1-2 business days</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="border-theme-accent1/50 text-theme-accent1 hover:bg-theme-accent1/10"
            >
              Return to Home
            </Button>
            
            <Button
              onClick={() => navigate('/diagnostic')}
              className="bg-theme-accent1 text-theme-darker hover:bg-theme-accent1/90"
            >
              Take Our AI Readiness Diagnostic
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QuoteSuccess;