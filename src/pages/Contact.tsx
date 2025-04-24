
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h1 className="mb-6">Get in Touch</h1>
                <p className="text-xl mb-8 text-theme-light/80">
                  Ready to transform your business with AI? Contact us for a free consultation.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-theme-accent1/20 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-theme-accent1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email Us</h3>
                      <p className="text-theme-light/70">info@insightpulseai.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-theme-accent1/20 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-theme-accent1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Call Us</h3>
                      <p className="text-theme-light/70">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-theme-accent1/20 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-theme-accent1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Visit Us</h3>
                      <p className="text-theme-light/70">
                        123 AI Avenue<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-theme-darker rounded-lg p-8 border border-theme-darkgray/20 shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                {success && (
                  <div className="bg-theme-accent1/20 border border-theme-accent1/30 text-theme-light p-4 rounded-md mb-6">
                    Thank you for reaching out! We've received your message and will get back to you shortly.
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="block mb-1">
                        Your Name
                      </Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-theme-dark border-theme-darkgray/50 text-theme-light"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="block mb-1">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-theme-dark border-theme-darkgray/50 text-theme-light"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="company" className="block mb-1">
                        Company
                      </Label>
                      <Input
                        id="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="bg-theme-dark border-theme-darkgray/50 text-theme-light"
                        placeholder="Your Company"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="block mb-1">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="bg-theme-dark border-theme-darkgray/50 text-theme-light"
                        placeholder="How can we help you?"
                        rows={4}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-theme-accent1 text-theme-darker hover:bg-theme-accent1/90"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-theme-darker" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
