
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import DiagnosticStep from "./DiagnosticStep";

const DiagnosticSection = () => {
  return (
    <section className="py-24 bg-[#0F121A] text-[#F0F2F5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Free AI Readiness Diagnostic</h2>
          <p className="text-xl mb-10 text-[#F0F2F5]/70">
            Wondering where to start?
          </p>
          <p className="mb-12 text-[#F0F2F5]/80">
            Take our 2-minute assessment to instantly receive:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <DiagnosticStep 
              number={1}
              title="A Build or Buy AI Strategy Score"
              className="bg-gradient-to-br from-[#1C1F27] to-[#232832] border border-[#2A2E37] hover:scale-[1.02] hover:shadow-lg transition-transform"
            />
            <DiagnosticStep 
              number={2}
              title="Your Business' AI Maturity Profile"
              className="bg-gradient-to-br from-[#1C1F27] to-[#232832] border border-[#2A2E37] hover:scale-[1.02] hover:shadow-lg transition-transform"
            />
            <DiagnosticStep 
              number={3}
              title="Personalized recommendations"
              className="bg-gradient-to-br from-[#1C1F27] to-[#232832] border border-[#2A2E37] hover:scale-[1.02] hover:shadow-lg transition-transform"
            />
          </div>

          <Link to="/diagnostic">
            <Button className="bg-theme-accent1 text-theme-darker hover:bg-theme-accent1/90 px-8 py-6 text-lg">
              Start the Free Diagnostic
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticSection;
