import React, { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

const QuoteRequest = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phoneNumber: "",
    industry: "",
    projectType: "",
    budget: "",
    projectDescription: "",
    deadline: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Track page view for LinkedIn when component mounts
  useEffect(() => {
    // LinkedIn page view tracking
    if (window.lintrk) {
      window.lintrk('track', { page_view: true });
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // In a real implementation, you'd send the form data to your backend
      // Here we're just simulating a successful submission
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Redirect to success page
      navigate("/quote-success");
    } catch (err) {
      setError("There was an error submitting your request. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-4 max-w-4xl mx-auto w-full">
        <div className="bg-theme-darker p-8 rounded-lg shadow-lg border border-theme-darkgray/30">
          <h1 className="text-3xl font-bold mb-2 text-theme-light">Request a Custom Quote</h1>
          <p className="text-theme-light/70 mb-8">
            Fill out the form below and our business development team will prepare a tailored quote for your project.
          </p>
          
          {error && (
            <div className="bg-theme-accent2/20 border border-theme-accent2/30 text-theme-light p-3 rounded-md mb-6">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="fullName" className="block mb-2">
                  Full Name*
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="bg-theme-dark border-theme-darkgray/50 text-theme-light"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="block mb-2">
                  Business Email*
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-theme-dark border-theme-darkgray/50 text-theme-light"
                  placeholder="you@company.com"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="company" className="block mb-2">
                  Company Name*
                </Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="bg-theme-dark border-theme-darkgray/50 text-theme-light"
                  placeholder="Your Company Inc."
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phoneNumber" className="block mb-2">
                  Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="bg-theme-dark border-theme-darkgray/50 text-theme-light"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              
              <div>
                <Label htmlFor="industry" className="block mb-2">
                  Industry*
                </Label>
                <Select 
                  name="industry" 
                  value={formData.industry} 
                  onValueChange={(value) => handleSelectChange("industry", value)}
                >
                  <SelectTrigger className="bg-theme-dark border-theme-darkgray/50 text-theme-light">
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent className="bg-theme-dark border-theme-darkgray/50 text-theme-light">
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="government">Government</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="projectType" className="block mb-2">
                  Project Type*
                </Label>
                <Select 
                  name="projectType" 
                  value={formData.projectType} 
                  onValueChange={(value) => handleSelectChange("projectType", value)}
                >
                  <SelectTrigger className="bg-theme-dark border-theme-darkgray/50 text-theme-light">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent className="bg-theme-dark border-theme-darkgray/50 text-theme-light">
                    <SelectItem value="aiStrategy">AI Strategy</SelectItem>
                    <SelectItem value="dataPipeline">Data Pipeline Development</SelectItem>
                    <SelectItem value="customAiModel">Custom AI Model Development</SelectItem>
                    <SelectItem value="aiIntegration">AI Integration</SelectItem>
                    <SelectItem value="aiConsulting">AI Consulting</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="budget" className="block mb-2">
                  Budget Range
                </Label>
                <Select 
                  name="budget" 
                  value={formData.budget} 
                  onValueChange={(value) => handleSelectChange("budget", value)}
                >
                  <SelectTrigger className="bg-theme-dark border-theme-darkgray/50 text-theme-light">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent className="bg-theme-dark border-theme-darkgray/50 text-theme-light">
                    <SelectItem value="under10k">Under $10,000</SelectItem>
                    <SelectItem value="10kTo25k">$10,000 - $25,000</SelectItem>
                    <SelectItem value="25kTo50k">$25,000 - $50,000</SelectItem>
                    <SelectItem value="50kTo100k">$50,000 - $100,000</SelectItem>
                    <SelectItem value="over100k">Over $100,000</SelectItem>
                    <SelectItem value="notSure">Not sure / Need guidance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="deadline" className="block mb-2">
                  Desired Timeline
                </Label>
                <Select 
                  name="deadline" 
                  value={formData.deadline} 
                  onValueChange={(value) => handleSelectChange("deadline", value)}
                >
                  <SelectTrigger className="bg-theme-dark border-theme-darkgray/50 text-theme-light">
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent className="bg-theme-dark border-theme-darkgray/50 text-theme-light">
                    <SelectItem value="asap">As soon as possible</SelectItem>
                    <SelectItem value="1Month">Within 1 month</SelectItem>
                    <SelectItem value="3Months">Within 3 months</SelectItem>
                    <SelectItem value="6Months">Within 6 months</SelectItem>
                    <SelectItem value="flexible">Flexible / Not sure</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="projectDescription" className="block mb-2">
                Project Description*
              </Label>
              <Textarea
                id="projectDescription"
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleInputChange}
                className="bg-theme-dark border-theme-darkgray/50 text-theme-light min-h-[120px]"
                placeholder="Please describe your project, requirements, and any specific challenges you're facing..."
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full md:w-auto bg-theme-accent1 text-theme-darker hover:bg-theme-accent1/90 px-8"
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
                "Submit Quote Request"
              )}
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QuoteRequest;