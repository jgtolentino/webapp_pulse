
import { Check } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="py-20 bg-theme-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">Our Core Offerings</h2>
          <p className="text-lg text-theme-light/70 max-w-3xl mx-auto">
            From custom AI development to strategic consulting, we offer end-to-end 
            solutions to help your business leverage artificial intelligence effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard
            title="Custom AI Bot Development"
            icon="server"
            features={[
              "Multimodal Recommendation Systems (text, voice, image)",
              "Conversational Assistants using Azure OpenAI & GPT-4",
              "Retail & E-commerce AI integrations",
              "Intelligent feedback bots for surveys and customer service"
            ]}
          />

          <ServiceCard
            title="AI Systems Deployment"
            icon="database"
            features={[
              "Azure Cognitive Services setup and optimization",
              "AI development & deployment on Azure App Services",
              "Custom domain integration with secure HTTPS",
              "Performance-tuned pipelines (FastAPI, Python, Azure CLI)"
            ]}
          />

          <ServiceCard
            title="AI Strategy & Consulting"
            icon="settings"
            features={[
              "Build vs. Buy AI Feasibility Assessments",
              "AI Architecture Audits & Cost Optimization",
              "Training Workshops for Creative & Marketing Teams",
              "End-to-End AI Integration for SMBs and Agencies"
            ]}
          />

          <ServiceCard
            title="Insight-to-Action Frameworks"
            icon="home"
            features={[
              "Visual dashboards with recommendation intelligence",
              "Custom CLI models for domain-specific NLP",
              "AI-generated strategic recommendations from raw data",
              "Integration with existing analytics/database systems"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  title: string;
  icon: string;
  features: string[];
}

const ServiceCard = ({ title, icon, features }: ServiceCardProps) => {
  return (
    <div className="feature-card">
      <div className="mb-6 flex items-center">
        <div className="bg-theme-accent1/20 p-3 rounded-lg mr-4">
          <div className="w-6 h-6 text-theme-accent1">{getIcon(icon)}</div>
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check size={18} className="text-theme-accent1 mt-0.5 mr-2 flex-shrink-0" />
            <span className="text-theme-light/80">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Helper function to get different icons
const getIcon = (iconName: string) => {
  switch(iconName) {
    case "server":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      );
    case "database":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      );
    case "settings":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "home":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      );
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
  }
};

export default ServicesSection;
