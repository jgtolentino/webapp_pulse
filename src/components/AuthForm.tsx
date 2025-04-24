
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

type AuthMode = "login" | "signup";

interface AuthFormProps {
  mode: AuthMode;
}

const AuthForm = ({ mode }: AuthFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here's where we would handle auth when integrated with Supabase
    setMessage("Supabase authentication not yet integrated. Please connect Supabase to your Lovable project.");
    
    // This is just placeholder code for the UI demonstration
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setMessage(`${mode === "login" ? "Login" : "Signup"} simulation complete! Please connect Supabase.`);
    }, 1500);
  };

  return (
    <div className="max-w-md w-full mx-auto bg-theme-darker p-8 rounded-lg shadow-lg border border-theme-darkgray/30">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {mode === "login" ? "Sign In" : "Create Account"}
      </h2>
      
      {error && (
        <div className="bg-theme-accent2/20 border border-theme-accent2/30 text-theme-light p-3 rounded-md mb-6">
          {error}
        </div>
      )}
      
      {message && (
        <div className="bg-theme-accent1/20 border border-theme-accent1/30 text-theme-light p-3 rounded-md mb-6">
          {message}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        {mode === "signup" && (
          <div className="mb-4">
            <Label htmlFor="name" className="block mb-2">
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-theme-dark border-theme-darkgray/50 text-theme-light"
              placeholder="John Doe"
              required
            />
          </div>
        )}
        
        <div className="mb-4">
          <Label htmlFor="email" className="block mb-2">
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
        
        <div className="mb-6">
          <Label htmlFor="password" className="block mb-2">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-theme-dark border-theme-darkgray/50 text-theme-light"
            placeholder="••••••••"
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
              Processing...
            </span>
          ) : (
            mode === "login" ? "Sign In" : "Create Account"
          )}
        </Button>
        
        <div className="mt-4 text-center text-theme-light/70">
          {mode === "login" ? (
            <>
              Don't have an account?{" "}
              <Link to="/signup" className="text-theme-accent1 hover:underline">
                Sign up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link to="/login" className="text-theme-accent1 hover:underline">
                Sign in
              </Link>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
