
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DiagnosticSection from "@/components/DiagnosticSection";
import WhyUsSection from "@/components/WhyUsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <DiagnosticSection />
        <WhyUsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
