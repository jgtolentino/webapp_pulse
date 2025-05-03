
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-theme-accent1/20 via-theme-blue/20 to-theme-accent2/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Ready to transform your business with AI?</h2>
          <p className="text-xl mb-10 text-theme-light/80 max-w-3xl mx-auto">
            Take the first step toward a smarter, more efficient operation. 
            Our team is ready to guide you through your AI journey.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link to="/diagnostic">
              <Button className="bg-theme-accent1 text-theme-darker hover:bg-theme-accent1/90 px-8 py-6 text-lg w-full sm:w-auto">
                Start Free Diagnostic
              </Button>
            </Link>
            <Link to="/appointment">
              <Button variant="outline" className="border-theme-accent1/50 text-white hover:bg-white/10 px-8 py-6 text-lg w-full sm:w-auto">
                Book a Strategy Call
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
