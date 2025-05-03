import React, { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, CalendarCheck } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { trackConversionWithUTM } from "@/utils/utmTracker";

const AppointmentSuccess = () => {
  const navigate = useNavigate();
  
  // Track conversion when this page loads
  useEffect(() => {
    // LinkedIn conversion tracking code
    if (window.lintrk) {
      window.lintrk('track', { conversion_id: 'appointment-booked' });
      // Also track with UTM data if available
      trackConversionWithUTM('appointment-booked');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="bg-theme-darker p-8 rounded-lg shadow-lg border border-theme-darkgray/30 max-w-2xl w-full text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <CheckCircle className="h-16 w-16 text-theme-accent1" />
              <CalendarCheck className="h-8 w-8 text-theme-light absolute -bottom-1 -right-1 bg-theme-darker rounded-full p-1" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold mb-4 text-theme-light">Strategy Call Scheduled!</h1>
          
          <p className="text-theme-light/80 text-lg mb-6">
            Thank you for booking a strategy call with our team. We're looking forward to discussing your AI project.
          </p>
          
          <div className="bg-theme-accent1/10 border border-theme-accent1/20 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-3 text-theme-accent1">What happens next?</h2>
            <ul className="text-left text-theme-light/80 space-y-4">
              <li className="flex items-start">
                <span className="text-theme-accent1 mr-2">1.</span>
                <span>You'll receive a confirmation email with meeting details and a calendar invite</span>
              </li>
              <li className="flex items-start">
                <span className="text-theme-accent1 mr-2">2.</span>
                <span>Our team will review your information to prepare for the call</span>
              </li>
              <li className="flex items-start">
                <span className="text-theme-accent1 mr-2">3.</span>
                <span>We'll meet at your scheduled time to discuss your project needs and potential solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-theme-accent1 mr-2">4.</span>
                <span>After the call, you'll receive a follow-up with recommendations and next steps</span>
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

export default AppointmentSuccess;