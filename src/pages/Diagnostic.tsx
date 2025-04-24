
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Diagnostic = () => {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<null | DiagnosticResult>(null);
  
  const startDiagnostic = () => {
    setStep(1);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
      // Mock results
      setResults({
        buildOrBuyScore: 68,
        maturityLevel: "Emerging",
        recommendations: [
          "Focus on defining clear AI use cases before development",
          "Consider a hybrid approach with managed services for initial projects",
          "Implement a data quality and governance framework"
        ]
      });
      setStep(4);
    }, 2000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {step === 0 && (
                <div className="text-center mb-12">
                  <h1 className="mb-6">Free AI Readiness Diagnostic</h1>
                  <p className="text-xl mb-8 text-theme-light/80">
                    Wondering where to start?
                  </p>
                  <p className="mb-10">
                    Take our 2-minute assessment to instantly receive personalized recommendations
                    on whether you should build or buy your AI solution.
                  </p>
                  <Button 
                    onClick={startDiagnostic}
                    className="bg-theme-accent1 text-theme-darker hover:bg-theme-accent1/90 px-8 py-6 text-lg"
                  >
                    Start the Free Diagnostic
                  </Button>
                </div>
              )}
              
              {step > 0 && step < 4 && (
                <div>
                  <div className="mb-8">
                    <div className="w-full bg-theme-darker rounded-full h-2">
                      <div 
                        className="bg-theme-accent1 h-2 rounded-full" 
                        style={{ width: `${(step / 3) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-2 text-sm text-theme-light/60">
                      <span>Start</span>
                      <span>Submit</span>
                    </div>
                  </div>
                  
                  <div className="bg-theme-darker p-8 rounded-lg shadow-lg border border-theme-darkgray/20">
                    <form onSubmit={handleSubmit}>
                      {step === 1 && <BusinessInfoStep onNext={() => setStep(2)} />}
                      {step === 2 && <AIReadinessStep onNext={() => setStep(3)} onBack={() => setStep(1)} />}
                      {step === 3 && <GoalsStep onSubmit={handleSubmit} onBack={() => setStep(2)} loading={loading} />}
                    </form>
                  </div>
                </div>
              )}
              
              {step === 4 && results && (
                <DiagnosticResults results={results} />
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

interface StepProps {
  onNext?: () => void;  // Making onNext optional with '?'
  onBack?: () => void;
  onSubmit?: (e: React.FormEvent) => void;
  loading?: boolean;
}

const BusinessInfoStep = ({ onNext }: StepProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Tell us about your business</h2>
      <div className="space-y-6 mb-8">
        <div>
          <label className="block mb-2 text-theme-light/80">
            What industry are you in?
          </label>
          <select className="w-full p-3 bg-theme-dark border border-theme-darkgray/50 rounded-md text-theme-light">
            <option value="">Select an industry</option>
            <option value="retail">Retail & E-commerce</option>
            <option value="finance">Financial Services</option>
            <option value="healthcare">Healthcare</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="media">Media & Entertainment</option>
            <option value="tech">Technology</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div>
          <label className="block mb-2 text-theme-light/80">
            How many employees does your company have?
          </label>
          <select className="w-full p-3 bg-theme-dark border border-theme-darkgray/50 rounded-md text-theme-light">
            <option value="">Select company size</option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-200">51-200</option>
            <option value="201-500">201-500</option>
            <option value="501-1000">501-1000</option>
            <option value="1000+">1000+</option>
          </select>
        </div>
      </div>
      
      <div className="flex justify-end">
        <Button 
          type="button" 
          onClick={onNext}
          className="bg-theme-accent1 text-theme-darker hover:bg-theme-accent1/90"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

const AIReadinessStep = ({ onNext, onBack }: StepProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Your AI Readiness</h2>
      <div className="space-y-6 mb-8">
        <div>
          <label className="block mb-2 text-theme-light/80">
            Do you have a data science or AI team?
          </label>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="radio" id="ai-team-yes" name="ai-team" className="mr-2" />
              <label htmlFor="ai-team-yes">Yes, we have dedicated AI specialists</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="ai-team-partial" name="ai-team" className="mr-2" />
              <label htmlFor="ai-team-partial">Partially, we have some technical expertise</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="ai-team-no" name="ai-team" className="mr-2" />
              <label htmlFor="ai-team-no">No, we don't have AI expertise in-house</label>
            </div>
          </div>
        </div>
        
        <div>
          <label className="block mb-2 text-theme-light/80">
            How would you rate your organization's data infrastructure?
          </label>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="radio" id="data-advanced" name="data-infra" className="mr-2" />
              <label htmlFor="data-advanced">Advanced - We have clean, structured data in modern systems</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="data-developing" name="data-infra" className="mr-2" />
              <label htmlFor="data-developing">Developing - We have some good data but it needs work</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="data-basic" name="data-infra" className="mr-2" />
              <label htmlFor="data-basic">Basic - Our data is scattered or not well organized</label>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between">
        <Button 
          type="button" 
          onClick={onBack}
          variant="outline"
          className="border-theme-light/30 text-theme-light hover:bg-white/10"
        >
          Back
        </Button>
        <Button 
          type="button" 
          onClick={onNext}
          className="bg-theme-accent1 text-theme-darker hover:bg-theme-accent1/90"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

const GoalsStep = ({ onSubmit, onBack, loading }: StepProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Your AI Goals</h2>
      <div className="space-y-6 mb-8">
        <div>
          <label className="block mb-2 text-theme-light/80">
            What are your primary goals for implementing AI? (Select all that apply)
          </label>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="checkbox" id="goal-efficiency" className="mr-2" />
              <label htmlFor="goal-efficiency">Improve operational efficiency</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="goal-customer" className="mr-2" />
              <label htmlFor="goal-customer">Enhance customer experience</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="goal-products" className="mr-2" />
              <label htmlFor="goal-products">Develop new products or services</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="goal-decisions" className="mr-2" />
              <label htmlFor="goal-decisions">Better decision making with data</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="goal-costs" className="mr-2" />
              <label htmlFor="goal-costs">Reduce costs</label>
            </div>
          </div>
        </div>
        
        <div>
          <label className="block mb-2 text-theme-light/80">
            What's your timeline for implementing AI solutions?
          </label>
          <select className="w-full p-3 bg-theme-dark border border-theme-darkgray/50 rounded-md text-theme-light">
            <option value="">Select timeline</option>
            <option value="immediate">Immediate (0-3 months)</option>
            <option value="short">Short term (3-6 months)</option>
            <option value="medium">Medium term (6-12 months)</option>
            <option value="long">Long term (12+ months)</option>
          </select>
        </div>
      </div>
      
      <div className="flex justify-between">
        <Button 
          type="button" 
          onClick={onBack}
          variant="outline"
          className="border-theme-light/30 text-theme-light hover:bg-white/10"
        >
          Back
        </Button>
        <Button 
          type="submit"
          className="bg-theme-accent1 text-theme-darker hover:bg-theme-accent1/90"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-theme-darker" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            "Submit"
          )}
        </Button>
      </div>
    </div>
  );
};

interface DiagnosticResult {
  buildOrBuyScore: number;
  maturityLevel: string;
  recommendations: string[];
}

const DiagnosticResults = ({ results }: { results: DiagnosticResult }) => {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="mb-6">Your AI Readiness Results</h1>
        <p className="text-xl mb-10 text-theme-light/80">
          Based on your responses, here's your personalized assessment
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-theme-darker p-6 rounded-lg border border-theme-darkgray/20">
          <h3 className="text-xl mb-4">Build vs Buy Score</h3>
          <div className="mb-2 flex justify-between text-sm">
            <span>Buy Solutions</span>
            <span>Custom Build</span>
          </div>
          <div className="w-full bg-theme-dark rounded-full h-4 mb-4">
            <div 
              className="bg-theme-accent1 h-4 rounded-full" 
              style={{ width: `${results.buildOrBuyScore}%` }}
            ></div>
          </div>
          <p className="text-theme-light/70 text-sm">
            Your score indicates a <strong>balanced approach</strong> would be most effective, with a slight preference toward building custom solutions.
          </p>
        </div>
        
        <div className="bg-theme-darker p-6 rounded-lg border border-theme-darkgray/20">
          <h3 className="text-xl mb-4">AI Maturity Level</h3>
          <div className="flex justify-center mb-4">
            <div className="bg-theme-blue/20 text-theme-accent1 px-4 py-2 rounded-full text-xl font-bold">
              {results.maturityLevel}
            </div>
          </div>
          <p className="text-theme-light/70 text-sm">
            Your organization is in the <strong>{results.maturityLevel}</strong> stage of AI maturity. You have a foundation to build upon but need strategic investments in technology and expertise.
          </p>
        </div>
      </div>
      
      <div className="bg-theme-darker p-6 rounded-lg border border-theme-darkgray/20 mb-10">
        <h3 className="text-xl mb-4">Personalized Recommendations</h3>
        <ul className="space-y-3">
          {results.recommendations.map((recommendation, index) => (
            <li key={index} className="flex items-start">
              <span className="text-theme-accent1 mr-2">•</span>
              <span className="text-theme-light/80">{recommendation}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="text-center">
        <p className="mb-6 text-theme-light/80">
          Want to discuss your results with an AI expert?
        </p>
        <Link to="/contact">
          <Button className="bg-theme-accent1 text-theme-darker hover:bg-theme-accent1/90 px-6 py-2">
            Book a Free Strategy Call
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Diagnostic;
