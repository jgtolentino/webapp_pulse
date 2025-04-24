
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Globe } from "lucide-react";
import newLogo from "@/assets/new_logo.png";

const Footer = () => {
  return (
    <footer className="bg-theme-darker pt-16 pb-8 text-theme-light/80">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-medium text-lg mb-4">About</h3>
            <img 
              src={newLogo} 
              alt="Company Logo" 
              className="h-[40px] mb-4 object-contain ml-auto mr-auto md:mr-0 md:ml-0" 
            />
            <p className="text-theme-light/70 mb-4">
              Helping organizations unlock ROI
              <br />
              with tailor-fit AI solutions.
            </p>
          </div>

          <div>
            <h3 className="text-white font-medium text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="hover:text-theme-accent1 transition-colors">
                  Custom AI Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-theme-accent1 transition-colors">
                  AI Systems Deployment
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-theme-accent1 transition-colors">
                  AI Strategy
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-theme-accent1 transition-colors">
                  Insight Frameworks
                </Link>
              </li>
              <li>
                <Link to="/prisma-analysis" className="hover:text-theme-accent1 transition-colors">
                  Prisma Meta-Analysis
                </Link>
              </li>
              <li>
                <a href="https://genz.insightpulseai.com" className="hover:text-pink-500 transition-colors">
                  Gen Z Marketing Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-theme-accent1 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/why-us" className="hover:text-theme-accent1 transition-colors">
                  Why InsightPulseAI
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-theme-accent1 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-theme-accent1 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium text-lg mb-4">Contact</h3>
            <div className="flex items-center mb-2 gap-2">
              <Mail className="w-4 h-4 text-theme-accent1" />
              <span><a href="mailto:info@insightpulseai.com" className="hover:text-theme-accent1">info@insightpulseai.com</a></span>
            </div>
            <div className="flex items-center mb-2 gap-2">
              <Phone className="w-4 h-4 text-theme-accent1" />
              <span><a href="tel:+639682699265" className="hover:text-theme-accent1">+63 968 269 9265</a></span>
            </div>
            <div className="flex items-center mb-2 gap-2">
              <MapPin className="w-4 h-4 text-theme-accent2" />
              <span>Pasig City, 1609, Philippines</span>
            </div>
            <div className="flex items-center mb-2 gap-2">
              <Globe className="w-4 h-4 text-theme-blue" />
              <span>
                <a
                  href="https://www.insightpulseai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-theme-accent1"
                >
                  insightpulseai.com
                </a>
              </span>
            </div>
            <div className="flex items-center mb-2 gap-2">
              <Linkedin className="w-4 h-4 text-theme-accent1" />
              <span>
                <a
                  href="https://www.linkedin.com/company/insightpulseai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-theme-accent2"
                >
                  LinkedIn
                </a>
              </span>
            </div>
            <div className="mt-2 text-xs text-theme-light/60">Timezone: UTC+8 (Philippine Standard Time)</div>
          </div>
        </div>

        <div className="border-t border-theme-darkgray/20 mt-8 pt-8 text-center text-sm text-theme-light/60">
          <p>&copy; {new Date().getFullYear()} InsightPulseAI. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/terms" className="hover:text-theme-accent1 transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="hover:text-theme-accent1 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
