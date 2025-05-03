import React, { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, Mail } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { trackConversionWithUTM } from "@/utils/utmTracker";

interface DiagnosticSuccessProps {
  result?: {
    buildOrBuyScore: number;
    maturityLevel: string;
    recommendations: string[];
  };
}

const DiagnosticSuccess: React.FC<DiagnosticSuccessProps> = ({ result }) => {
  const navigate = useNavigate();
  
  // Track conversion when this page loads
  useEffect(() => {
    // LinkedIn conversion tracking code
    if (window.lintrk) {
      window.lintrk('track', { conversion_id: 'diagnostic-completed' });
      // Also track with UTM data if available
      trackConversionWithUTM('diagnostic-completed');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="bg-theme-darker p-8 rounded-lg shadow-lg border border-theme-darkgray/30 max-w-2xl w-full">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-theme-accent1" />
          </div>
          
          <h1 className="text-3xl font-bold mb-4 text-theme-light text-center">AI Readiness Diagnostic Complete!</h1>
          
          <p className="text-theme-light/80 text-lg mb-8 text-center">
            Thank you for completing our AI readiness diagnostic. Your results provide valuable insights into your organization's AI maturity and next steps.
          </p>
          
          <div className="bg-theme-accent1/10 border border-theme-accent1/20 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4 text-theme-accent1 text-center">Get Your Full Results</h2>
            
            <form className="space-y-4 mb-6">
              <div>
                <label className="block mb-2 text-theme-light/80">Email Address</label>
                <input 
                  type="email" 
                  className="w-full p-3 bg-theme-dark border border-theme-darkgray/50 rounded-md text-theme-light"
                  placeholder="you@company.com"
                  required
                />
              </div>
              <div className="flex items-start">
                <input 
                  type="checkbox" 
                  id="consent" 
                  className="mr-2 mt-1"
                  required 
                />
                <label htmlFor="consent" className="text-sm text-theme-light/70">
                  I agree to receive my diagnostic results and occasional insights from InsightPulseAI. You can unsubscribe at any time.
                </label>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  type="submit"
                  className="flex-1 bg-theme-accent1 text-theme-darker hover:bg-theme-accent1/90 flex items-center justify-center gap-2"
                >
                  <Mail size={18} />
                  Email Results
                </Button>
                <Button 
                  type="button"
                  variant="outline"
                  className="flex-1 border-theme-accent1/30 text-theme-accent1 hover:bg-theme-accent1/10 flex items-center justify-center gap-2"
                >
                  <Download size={18} />
                  Download PDF
                </Button>
              </div>
            </form>
          </div>
          
          <div className="text-center space-y-6">
            <p className="text-theme-light/80">
              Want to discuss your results with an AI expert?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                variant="outline"
                onClick={() => navigate('/')}
                className="border-theme-light/30 text-theme-light hover:bg-white/10"
              >
                Return to Home
              </Button>
              
              <Button
                onClick={() => navigate('/quote-request')}
                className="bg-theme-accent1 text-theme-darker hover:bg-theme-accent1/90"
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DiagnosticSuccess;