
const WhyUsSection = () => {
  return (
    <section className="py-24 bg-theme-dark relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">Why InsightPulseAI?</h2>
          <p className="text-lg text-theme-light/70 max-w-3xl mx-auto">
            Our expert team helps you navigate the complex AI landscape with 
            practical, results-driven solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          <FeatureCard
            icon={<CertificationIcon />}
            title="Certified Microsoft AI/Cloud Experts"
            description="Our team holds advanced certifications in Azure AI services and cloud architecture."
          />
          
          <FeatureCard
            icon={<AgencyIcon />}
            title="Built by advertising and analytics insiders"
            description="We understand your business challenges because we've been there."
          />
          
          <FeatureCard
            icon={<DeliveryIcon />}
            title="Fast MVP delivery in as little as 2 weeks"
            description="Get your AI solution up and running quickly without compromising quality."
          />
          
          <FeatureCard
            icon={<ComplianceIcon />}
            title="Enterprise-grade compliance + startup speed"
            description="We maintain the highest security standards without bureaucratic slowdowns."
          />
        </div>
      </div>
      
      {/* Background effects */}
      <div className="absolute bottom-0 left-0 w-full h-1/2">
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-theme-accent1/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute -bottom-20 left-1/4 w-40 h-40 bg-theme-accent2/10 rounded-full filter blur-[80px]"></div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 mr-6 mt-1">
        <div className="w-12 h-12 text-theme-accent1">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-theme-light/70">{description}</p>
      </div>
    </div>
  );
};

// Icons
const CertificationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const AgencyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const DeliveryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const ComplianceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

export default WhyUsSection;
