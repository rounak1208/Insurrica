import { HeroSection } from "@/components/HeroSection";
import { ProductsSection } from "@/components/ProductsSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { StatsSection } from "@/components/StatsSection";
import { PartnersSection } from "@/components/PartnersSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { ConsultationSection } from "@/components/ConsultationSection";

export const Home = () => {
  return (
    <>
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
      <div id="partners">
        <PartnersSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <ConsultationSection />
      <div id="faq">
        <FAQSection />
      </div>
    </>
  );
};
