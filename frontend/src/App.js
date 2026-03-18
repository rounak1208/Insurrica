import "@/App.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProductsSection } from "@/components/ProductsSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Toaster position="top-center" richColors />
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="products">
        <ProductsSection />
      </div>
      <div id="why-us">
        <WhyChooseUs />
      </div>
      <StatsSection />
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
