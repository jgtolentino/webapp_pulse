
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SignupSuccess from "./pages/SignupSuccess";
import QuoteRequest from "./pages/QuoteRequest";
import QuoteSuccess from "./pages/QuoteSuccess";
import Diagnostic from "./pages/Diagnostic";
import DiagnosticSuccess from "./pages/DiagnosticSuccess";
import AppointmentBooking from "./pages/AppointmentBooking";
import AppointmentSuccess from "./pages/AppointmentSuccess";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import PrismaAnalysis from "./pages/PrismaAnalysis";
import AutoSDR from "./pages/AutoSDR";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup-success" element={<SignupSuccess />} />
          <Route path="/quote-request" element={<QuoteRequest />} />
          <Route path="/quote-success" element={<QuoteSuccess />} />
          <Route path="/diagnostic" element={<Diagnostic />} />
          <Route path="/diagnostic-success" element={<DiagnosticSuccess />} />
          <Route path="/appointment" element={<AppointmentBooking />} />
          <Route path="/appointment-success" element={<AppointmentSuccess />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/prisma-analysis" element={<PrismaAnalysis />} />
          <Route path="/research" element={<PrismaAnalysis />} />
          <Route path="/autosdr" element={<AutoSDR />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
