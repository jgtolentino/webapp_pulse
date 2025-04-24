import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrismaAnalysis = () => {
  return (
    <>
      <Helmet>
        <title>Prisma Analysis & Research Support | InsightPulseAI</title>
        <meta 
          name="description" 
          content="Professional support for PRISMA-compliant reviews and graduate-level research across healthcare, AI, education, and policy." 
        />
      </Helmet>
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Prisma Analysis & Research Support</h1>
          <p className="text-lg text-gray-600">
            We support PRISMA-compliant reviews and graduate-level research across healthcare, AI, education, and policy. Whether you're publishing, defending, or validating your methodology, we can help.
          </p>
          <a
            href="https://calendly.com/insightpulseai/diagnostic"
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Book a Research Diagnostic
          </a>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is PRISMA?</h2>
          <p className="text-gray-700 mb-4">
            PRISMA (Preferred Reporting Items for Systematic Reviews and Meta-Analyses) is an evidence-based minimum set of items for reporting in systematic reviews and meta-analyses. It helps authors improve the reporting of systematic reviews and meta-analyses.
          </p>
          <p className="text-gray-700">
            Using the PRISMA guidelines ensures that your research follows established methodological standards and improves the transparency, completeness, and quality of your systematic review or meta-analysis.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Research Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Systematic Reviews</h3>
              <p className="text-gray-700">
                Comprehensive literature search, screening, and synthesis following PRISMA guidelines to identify, select, and critically appraise relevant research.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Meta-Analysis</h3>
              <p className="text-gray-700">
                Statistical analysis that combines the results of multiple scientific studies to derive conclusions about research questions with greater statistical power.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Research Methodology</h3>
              <p className="text-gray-700">
                Development and validation of research methodologies, including study design, data collection methods, and analytical frameworks.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Statistical Analysis</h3>
              <p className="text-gray-700">
                Advanced statistical analyses, including regression modeling, factor analysis, structural equation modeling, and other quantitative techniques.
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">For Graduate & Postgraduate Researchers</h2>
          <p className="text-gray-700 mb-4">
            We assist thesis candidates, journal authors, and research groups with literature reviews, systematic methods, feasibility analyses, and statistical modeling for publication or defense.
          </p>
          <p className="text-gray-700">
            Our team of experienced researchers and statisticians can help you at any stage of your research journey, from conceptualization to publication.
          </p>
        </section>
        
        <section className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Elevate Your Research?</h2>
          <p className="text-gray-700 mb-6">
            Let us help you achieve the highest standards of methodological rigor and academic excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://calendly.com/insightpulseai/diagnostic"
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
            >
              Book a Research Diagnostic
            </a>
            <a
              href="/contact"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded hover:bg-gray-300"
            >
              Contact Our Research Team
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default PrismaAnalysis;