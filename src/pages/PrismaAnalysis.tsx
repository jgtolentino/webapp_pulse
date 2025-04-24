import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrismaAnalysis = () => {
  // Update meta tags when component mounts
  useEffect(() => {
    // Update document title
    document.title = "PRISMA Analysis & Research Support | InsightPulseAI";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "We support PRISMA-compliant research for academic, AI, and policy work. Transparent, data-backed, and audit-ready.");
    }
    
    // Update OG meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    
    if (ogTitle) ogTitle.setAttribute("content", "PRISMA Analysis & Research Support | InsightPulseAI");
    if (ogDescription) ogDescription.setAttribute("content", "We support PRISMA-compliant research for academic, AI, and policy work. Transparent, data-backed, and audit-ready.");
    if (ogUrl) ogUrl.setAttribute("content", "https://www.insightpulseai.com/prisma-analysis");
    if (ogImage) ogImage.setAttribute("content", "https://www.insightpulseai.com/ogcards/og.md.png");
    
    // Update Twitter meta tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    
    if (twitterTitle) twitterTitle.setAttribute("content", "PRISMA Analysis & Research Support | InsightPulseAI");
    if (twitterDescription) twitterDescription.setAttribute("content", "Transparent, audit-ready, and powered by data. Book a free research diagnostic today.");
    if (twitterImage) twitterImage.setAttribute("content", "https://www.insightpulseai.com/ogcards/og.md.png");
    
    // Reset meta tags when component unmounts
    return () => {
      document.title = "InsightPulseAI - AI Consulting & Development Solutions";
      
      if (metaDescription) {
        metaDescription.setAttribute("content", "InsightPulseAI helps organizations unlock ROI with tailor-fit AI solutions. Take our free diagnostic to discover whether to build or buy your AI solution.");
      }
      
      if (ogTitle) ogTitle.setAttribute("content", "InsightPulseAI – AI Consulting & Development");
      if (ogDescription) ogDescription.setAttribute("content", "Unlock ROI with tailor-fit AI solutions. Book a free diagnostic today.");
      if (ogUrl) ogUrl.setAttribute("content", "https://insightpulseai.com");
      if (ogImage) ogImage.setAttribute("content", "https://insightpulseai.com/ogcards/og-cover.png");
      
      if (twitterTitle) twitterTitle.setAttribute("content", "InsightPulseAI – AI Consulting & Development");
      if (twitterDescription) twitterDescription.setAttribute("content", "Unlock ROI with tailor-fit AI solutions. Book a free diagnostic today.");
      if (twitterImage) twitterImage.setAttribute("content", "https://insightpulseai.com/ogcards/og-cover.png");
    };
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Floating CTA Button */}
      <a
        href="https://calendly.com/insightpulseai/diagnostic"
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300"
      >
        📅 Book a Diagnostic
      </a>
      
      <main className="container mx-auto px-4 py-12">
        <section className="pt-24 text-center mb-12">
          <h1 id="prisma" className="scroll-mt-24 text-4xl font-bold text-white dark:text-white mb-4">Prisma Analysis & Research Support</h1>
          <p className="text-lg text-gray-300 dark:text-gray-300 max-w-3xl mx-auto">
            We support PRISMA-compliant reviews and graduate-level research across healthcare, AI, education, and policy. Whether you're publishing, defending, or validating your methodology, we can help.
          </p>
          <div className="text-center mt-6">
            <a
              href="https://calendly.com/insightpulseai/diagnostic"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
            >
              Book a Research Diagnostic
            </a>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white dark:text-white mb-4">What is PRISMA?</h2>
          <p className="text-gray-300 dark:text-gray-300 mb-4">
            PRISMA (Preferred Reporting Items for Systematic Reviews and Meta-Analyses) is an evidence-based minimum set of items for reporting in systematic reviews and meta-analyses. It helps authors improve the reporting of systematic reviews and meta-analyses.
          </p>
          <p className="text-gray-300 dark:text-gray-300">
            Using the PRISMA guidelines ensures that your research follows established methodological standards and improves the transparency, completeness, and quality of your systematic review or meta-analysis.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white dark:text-white mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-300 dark:text-gray-300 space-y-2 ml-4">
            <li>Feasibility analysis for meta-research projects</li>
            <li>Bayesian modeling via PyMC</li>
            <li>Meta-regressions using R (meta, metafor) and Python (statsmodels)</li>
            <li>Survival analysis via lifelines</li>
            <li>Publication bias and forest/funnel plots</li>
            <li>Fully reproducible reports using Jupyter or RMarkdown</li>
          </ul>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white dark:text-white mb-4">Support for Any Valid Toolchain</h2>
          <p className="text-gray-300 dark:text-gray-300">
            While we often work in Python and R, we also support projects built in:
          </p>
          <ul className="list-disc list-inside text-gray-300 dark:text-gray-300 mt-3 space-y-2 ml-4">
            <li>Stata – reproducible syntax and policy-ready modeling</li>
            <li>SAS – FDA/EMA-aligned compliance workflows</li>
            <li>SPSS – for social science and government-facing deliverables</li>
            <li>Mixed-language pipelines and legacy tools welcome</li>
          </ul>
          <p className="text-gray-400 dark:text-gray-400 mt-4 italic">
            If it passes peer review, we'll work with it.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white dark:text-white mb-4">Our Research Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white dark:text-white mb-2">Systematic Reviews</h3>
              <p className="text-gray-300 dark:text-gray-300">
                Comprehensive literature search, screening, and synthesis following PRISMA guidelines to identify, select, and critically appraise relevant research.
              </p>
            </div>
            
            <div className="bg-gray-800 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white dark:text-white mb-2">Meta-Analysis</h3>
              <p className="text-gray-300 dark:text-gray-300">
                Statistical analysis that combines the results of multiple scientific studies to derive conclusions about research questions with greater statistical power.
              </p>
            </div>
            
            <div className="bg-gray-800 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white dark:text-white mb-2">Research Methodology</h3>
              <p className="text-gray-300 dark:text-gray-300">
                Development and validation of research methodologies, including study design, data collection methods, and analytical frameworks.
              </p>
            </div>
            
            <div className="bg-gray-800 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white dark:text-white mb-2">Statistical Analysis</h3>
              <p className="text-gray-300 dark:text-gray-300">
                Advanced statistical analyses, including regression modeling, factor analysis, structural equation modeling, and other quantitative techniques.
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white dark:text-white mb-4">For Graduate & Postgraduate Researchers</h2>
          <p className="text-gray-300 dark:text-gray-300 mb-4">
            We assist thesis candidates, journal authors, and research groups with literature reviews, systematic methods, feasibility analyses, and statistical modeling for publication or defense.
          </p>
          <p className="text-gray-300 dark:text-gray-300">
            Our team of experienced researchers and statisticians can help you at any stage of your research journey, from conceptualization to publication.
          </p>
        </section>
        
        <section className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-white dark:text-white mb-4">Ready to Elevate Your Research?</h2>
          <p className="text-gray-300 dark:text-gray-300 mb-6">
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
        
        {/* Trust Badge */}
        <div className="py-8 px-6 bg-gray-900 dark:bg-gray-900 rounded-lg text-center mx-auto max-w-3xl mb-12">
          <div className="text-xl font-semibold text-blue-400 mb-2">Tool-agnostic. Trust-aligned.</div>
          <p className="text-gray-300 dark:text-gray-300">
            We support whatever tool your research, publisher, or regulator requires.
          </p>
        </div>

        {/* Additional Bottom CTA */}
        <section className="text-center mt-20 py-12 border-t border-gray-700">
          <h2 className="text-2xl font-semibold text-white mb-4">Need Help with a Thesis or Meta-Review?</h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Whether you're publishing, paraphrasing, or validating a research question — we're here to help.
          </p>
          <a
            href="https://calendly.com/insightpulseai/diagnostic"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Book a Free Research Diagnostic
          </a>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default PrismaAnalysis;