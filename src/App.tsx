
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HomePageLayout1 from "./components/HomePage-Layout1";
import HomePageLayout2 from "./components/HomePage-Layout2";
import HomePageLayout4 from "./components/HomePage-Layout4";
import HomePageLayout5 from "./components/HomePage-Layout5";
import HomePageLayout6 from "./components/HomePage-Layout6";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/preview-layout1" element={<HomePageLayout1 />} />
          <Route path="/preview-layout2" element={<HomePageLayout2 />} />
          <Route path="/preview-layout4" element={<HomePageLayout4 />} />
          <Route path="/preview-layout5" element={<HomePageLayout5 />} />
          <Route path="/preview-layout6" element={<HomePageLayout6 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
