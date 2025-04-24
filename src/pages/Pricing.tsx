
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Pricing = () => {
  const [annual, setAnnual] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="mb-6">Transparent Pricing for Every Need</h1>
              <p className="text-xl mb-6 text-theme-light/80 max-w-3xl mx-auto">
                Select the right plan for your AI journey. All plans include our expert consultation.
              </p>
              
              <div className="flex items-center justify-center mb-10">
                <span className={`mr-3 ${!annual ? 'text-theme-light' : 'text-theme-light/60'}`}>Monthly</span>
                <button
                  onClick={() => setAnnual(!annual)}
                  className="relative inline-flex h-6 w-12 items-center rounded-full bg-theme-darker"
                >
                  <span className="sr-only">Toggle annual billing</span>
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-theme-accent1 transition ${
                      annual ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`ml-3 ${annual ? 'text-theme-light' : 'text-theme-light/60'}`}>
                  Annual <span className="text-theme-accent1">(Save 20%)</span>
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <PricingCard
                title="Strategy"
                description="Perfect for businesses just starting their AI journey"
                price={annual ? 799 : 999}
                annual={annual}
                features={[
                  "AI Readiness Assessment",
                  "Custom Strategy Roadmap",
                  "Build vs. Buy Analysis",
                  "2 Strategy Sessions",
                  "Technology Recommendations"
                ]}
                cta="Get Started"
                highlighted={false}
              />
              
              <PricingCard
                title="Implementation"
                description="For businesses ready to deploy their first AI solution"
                price={annual ? 1599 : 1999}
                annual={annual}
                features={[
                  "Everything in Strategy",
                  "Custom AI Solution Development",
                  "Azure AI Integration",
                  "Training & Documentation",
                  "30 Days Post-Launch Support",
                  "Technical Architecture Design"
                ]}
                cta="Get Started"
                highlighted={true}
              />
              
              <PricingCard
                title="Enterprise"
                description="For established businesses scaling AI across operations"
                price={annual ? 3199 : 3999}
                annual={annual}
                features={[
                  "Everything in Implementation",
                  "Multi-Solution Integration",
                  "Enterprise Security Compliance",
                  "Ongoing Optimization",
                  "Dedicated Account Manager",
                  "Quarterly Business Reviews",
                  "Custom AI Model Training"
                ]}
                cta="Contact Sales"
                highlighted={false}
              />
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-theme-light/70 mb-4">
                Need a custom solution? Contact our sales team for a tailored quote.
              </p>
              <Link to="/contact">
                <Button variant="outline" className="border-theme-light/30 text-theme-light hover:bg-white/10">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

interface PricingCardProps {
  title: string;
  description: string;
  price: number;
  annual: boolean;
  features: string[];
  cta: string;
  highlighted: boolean;
}

const PricingCard = ({ title, description, price, annual, features, cta, highlighted }: PricingCardProps) => {
  return (
    <div className={`rounded-lg p-6 ${
      highlighted 
        ? 'bg-gradient-to-b from-theme-accent1/20 to-theme-darker border-theme-accent1/30 transform scale-105 shadow-lg' 
        : 'bg-theme-darker border-theme-darkgray/20'
      } border transition-all hover:shadow-xl relative flex flex-col`}
    >
      {highlighted && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-theme-accent1 text-theme-darker px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-theme-light/70 mb-4">{description}</p>
        <div className="mt-4 mb-6">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-theme-light/70 ml-1">{annual ? '/year' : '/month'}</span>
        </div>
      </div>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check size={18} className={`${highlighted ? 'text-theme-accent1' : 'text-theme-blue'} mt-0.5 mr-2 flex-shrink-0`} />
            <span className="text-theme-light/80">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-auto">
        <Link to={cta === "Contact Sales" ? "/contact" : "/signup"}>
          <Button 
            className={`w-full ${
              highlighted 
                ? 'bg-theme-accent1 text-theme-darker hover:bg-theme-accent1/90' 
                : 'bg-theme-dark text-theme-light hover:bg-theme-darkgray'
            }`}
          >
            {cta}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Pricing;
