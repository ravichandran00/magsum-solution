
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import Index from "./pages/Index";
import About from "./pages/About";
import Magnifyze from "./pages/Magnifyze";
import Proneurz from "./pages/Proneurz";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms-condition";
import Privacy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import ScrollToTop from './components/theme/ScrollToTop';
import Faq from "./pages/Faq";
import AdvisoryPanel from "./pages/AdvisoryPanel";
import VirtualCxo from "./pages/VirtualCxo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/magnifyze" element={<Magnifyze />} />
            <Route path="/proneurz" element={<Proneurz />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms-and-conditions" element={<Terms />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/advisorypanel" element={<AdvisoryPanel />} />
             <Route path="/virtual-cxo" element={<VirtualCxo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
