
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Megaphone, 
  Goal, 
  Search, 
  ShoppingBag 
} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">
            Should You{" "}
            <span className="highlight-text-primary">Build</span> or{" "}
            <span className="highlight-text-secondary">Buy</span>
            <br />
            Your AI Solution?
          </h1>
          <p className="text-xl mb-8 text-theme-light/90">
            Let InsightPulseAI guide your decision—for free.
          </p>
          <p className="text-lg mb-10 text-theme-light/80 max-w-3xl mx-auto">
            We help organizations unlock ROI with tailor-fit AI—whether through custom
            development or trusted platforms. Start with our Free AI Diagnostic to find out what's
            right for your business.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link to="/diagnostic">
              <Button className="bg-theme-accent1 text-theme-darker hover:bg-theme-accent1/90 px-8 py-6 text-lg w-full sm:w-auto">
                Take the Free Diagnostic
              </Button>
            </Link>
            <Link to="/appointment">
              <Button variant="outline" className="border-theme-accent1/30 text-theme-accent1 hover:bg-theme-accent1/10 px-8 py-6 text-lg w-full sm:w-auto">
                Book a Strategy Call
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-theme-light/70 uppercase text-sm tracking-wider mb-6">
            TRUSTED BY FORWARD-THINKING TEAMS IN MARKETING, RETAIL, RESEARCH, AND STRATEGY
          </p>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <div className="bg-theme-darker/80 px-6 py-3 rounded-md flex items-center gap-2">
              <Megaphone className="text-theme-accent1" size={24} />
              <span>Marketing</span>
            </div>
            <div className="bg-theme-darker/80 px-6 py-3 rounded-md flex items-center gap-2">
              <Goal className="text-theme-accent2" size={24} />
              <span>Strategy</span>
            </div>
            <div className="bg-theme-darker/80 px-6 py-3 rounded-md flex items-center gap-2">
              <Search className="text-theme-blue" size={24} />
              <span>Research</span>
            </div>
            <div className="bg-theme-darker/80 px-6 py-3 rounded-md flex items-center gap-2">
              <ShoppingBag className="text-theme-gray" size={24} />
              <span>Retail</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 -left-10 w-40 h-40 bg-theme-accent1/20 rounded-full filter blur-[80px]"></div>
        <div className="absolute bottom-1/3 right-10 w-60 h-60 bg-theme-accent2/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute top-1/2 right-1/3 w-30 h-30 bg-theme-blue/20 rounded-full filter blur-[70px]"></div>
      </div>
    </section>
  );
};

export default HeroSection;
