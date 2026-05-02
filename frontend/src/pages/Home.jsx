import { Suspense, lazy } from "react";
import { HeroSection } from "@/components/HeroSection";

// Lazy-load below-the-fold sections to reduce initial JS bundle
const ProductsSection = lazy(() => import("@/components/ProductsSection").then(m => ({ default: m.ProductsSection })));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs").then(m => ({ default: m.WhyChooseUs })));
const StatsSection = lazy(() => import("@/components/StatsSection").then(m => ({ default: m.StatsSection })));
const PartnersSection = lazy(() => import("@/components/PartnersSection").then(m => ({ default: m.PartnersSection })));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection").then(m => ({ default: m.TestimonialsSection })));
const FAQSection = lazy(() => import("@/components/FAQSection").then(m => ({ default: m.FAQSection })));
const ConsultationSection = lazy(() => import("@/components/ConsultationSection").then(m => ({ default: m.ConsultationSection })));

export const Home = () => {
  return (
    <>
      <div id="hero">
        <HeroSection />
      </div>
      <Suspense fallback={null}>
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
      </Suspense>
    </>
  );
};
