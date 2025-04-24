import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import newLogo from "@/assets/new_logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-theme-darker/80 backdrop-blur-md z-50 border-b border-theme-darkgray/20">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between max-w-6xl">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center">
            <img
              src={newLogo}
              alt="InsightPulseAI Logo"
              className="h-[40px] w-auto ml-auto"
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center justify-center gap-6">
          <NavLinks />
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button
              variant="outline"
              className="border-transparent text-white hover:bg-theme-accent1/10 hover:text-theme-accent1"
            >
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-theme-accent1 text-theme-darker hover:bg-theme-accent1/90">
              Sign Up
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-theme-darker border-t border-theme-darkgray/20 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <MobileNavLinks toggleMenu={toggleMenu} />
            <div className="flex flex-col space-y-2 pt-4 border-t border-theme-darkgray/20">
              <Link to="/login" onClick={toggleMenu}>
                <Button
                  variant="outline"
                  className="w-full border-transparent text-white hover:bg-theme-accent1/10 hover:text-theme-accent1"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup" onClick={toggleMenu}>
                <Button className="w-full bg-theme-accent1 text-theme-darker hover:bg-theme-accent1/90">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = () => {
  return (
    <>
      <Link to="/services" className="text-white hover:text-theme-accent1 transition-colors">
        Services
      </Link>
      <Link to="/diagnostic" className="text-white hover:text-theme-accent1 transition-colors">
        Free Diagnostic
      </Link>
      <Link to="/research" className="text-white hover:text-theme-accent1 transition-colors">
        Research
      </Link>
      <Link to="/why-us" className="text-white hover:text-theme-accent1 transition-colors">
        Why Us
      </Link>
      <Link to="/pricing" className="text-white hover:text-theme-accent1 transition-colors">
        Pricing
      </Link>
      <Link to="/faq" className="text-white hover:text-theme-accent1 transition-colors">
        FAQ
      </Link>
    </>
  );
};

const MobileNavLinks = ({ toggleMenu }: { toggleMenu: () => void }) => {
  return (
    <>
      <Link
        to="/services"
        className="text-white hover:text-theme-accent1 transition-colors py-2"
        onClick={toggleMenu}
      >
        Services
      </Link>
      <Link
        to="/diagnostic"
        className="text-white hover:text-theme-accent1 transition-colors py-2"
        onClick={toggleMenu}
      >
        Free Diagnostic
      </Link>
      <Link
        to="/research"
        className="text-white hover:text-theme-accent1 transition-colors py-2"
        onClick={toggleMenu}
      >
        Research
      </Link>
      <Link
        to="/why-us"
        className="text-white hover:text-theme-accent1 transition-colors py-2"
        onClick={toggleMenu}
      >
        Why Us
      </Link>
      <Link
        to="/pricing"
        className="text-white hover:text-theme-accent1 transition-colors py-2"
        onClick={toggleMenu}
      >
        Pricing
      </Link>
      <Link
        to="/faq"
        className="text-white hover:text-theme-accent1 transition-colors py-2"
        onClick={toggleMenu}
      >
        FAQ
      </Link>
    </>
  );
};

export default Navbar;
