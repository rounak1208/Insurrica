import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ShieldCheck, ArrowRight, CheckCircle, Phone } from "lucide-react";
import { useLeadForm } from "../hooks/useLeadForm";

const INSURANCE_PRODUCTS = [
  { value: "health", label: "Health Insurance" },
  { value: "motor", label: "Motor Insurance" },
  { value: "life", label: "Life Insurance" },
  { value: "term", label: "Term Life Insurance" },
  { value: "travel", label: "Travel Insurance" },
  { value: "home", label: "Home Insurance" },
  { value: "business", label: "Business Insurance" },
];

export const HeroSection = () => {
  const {
    name, setName,
    phone, handlePhoneChange,
    product, setProduct,
    loading, submitted, setSubmitted,
    handleSubmit, reset,
  } = useLeadForm({
    onSuccess: () => {
      setTimeout(() => {
        reset();
        setSubmitted(false);
      }, 4000);
    },
  });

  return (
    <section
      data-testid="hero-section"
      className="relative min-h-[92vh] flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 50%, #F8FAFC 100%)" }}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-[#0088CC]/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#FF9F1C]/5 blur-3xl" />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 py-20 md:py-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#0088CC]/10 rounded-full px-4 py-2 text-sm font-medium text-[#1A1A4E]">
              <ShieldCheck className="w-4 h-4 text-[#0088CC]" />
              Trusted by 10,000+ families across India
            </div>

            <h1
              data-testid="hero-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A4E] leading-[1.1]"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Compare smarter.
              <br />
              <span className="text-[#0088CC]">Insure better.</span>
            </h1>

            <p className="text-base md:text-lg text-[#475569] max-w-lg leading-relaxed">
              Instant quotes from India's top insurers. Zero paperwork. 100% claims assistance. Find the perfect policy in under 2 minutes.
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-[#64748B]">
              {["50+ Insurers", "Best Prices", "Free Claims Support"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10B981]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Lead Form */}
          <div className="w-full max-w-md mx-auto lg:ml-auto">
            <div
              data-testid="lead-form-card"
              className="backdrop-blur-xl bg-white/90 border border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.08)] rounded-2xl p-8 space-y-6"
            >
              <div className="space-y-2">
                <h2
                  className="text-xl font-bold text-[#1A1A4E]"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  Get Free Quotes
                </h2>
                <p className="text-sm text-[#64748B]">
                  Fill in your details and our expert will call you back
                </p>
              </div>

              {submitted ? (
                <div data-testid="form-success-message" className="flex flex-col items-center justify-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-[#10B981]/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-[#10B981]" />
                  </div>
                  <p className="text-lg font-semibold text-[#1A1A4E]">Thank You!</p>
                  <p className="text-sm text-[#64748B] text-center">
                    Our insurance expert will reach out to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={(e) => handleSubmit(e)} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">
                      Full Name
                    </Label>
                    <Input
                      data-testid="lead-form-name"
                      id="name"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-white border-gray-200 focus:border-[#0088CC] focus:ring-4 focus:ring-[#0088CC]/10 rounded-xl h-12 px-4"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">
                      Phone Number
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                      <Input
                        data-testid="lead-form-phone"
                        id="phone"
                        type="tel"
                        placeholder="Enter 10-digit mobile number"
                        value={phone}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        className="bg-white border-gray-200 focus:border-[#0088CC] focus:ring-4 focus:ring-[#0088CC]/10 rounded-xl h-12 pl-11 pr-4"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="product" className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">
                      Insurance Type
                    </Label>
                    <Select value={product} onValueChange={setProduct}>
                      <SelectTrigger
                        data-testid="lead-form-product"
                        aria-label="Select insurance type"
                        className="bg-white border-gray-200 focus:border-[#0088CC] focus:ring-4 focus:ring-[#0088CC]/10 rounded-xl h-12 px-4"
                      >
                        <SelectValue placeholder="Select insurance type" />
                      </SelectTrigger>
                      <SelectContent>
                        {INSURANCE_PRODUCTS.map((p) => (
                          <SelectItem key={p.value} value={p.value} data-testid={`product-option-${p.value}`}>
                            {p.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    data-testid="lead-form-submit"
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#FF9F1C] hover:bg-[#FF9F1C]/90 text-[#1A1A4E] font-bold rounded-full h-12 shadow-[0_0_20px_rgba(255,159,28,0.3)] hover:shadow-[0_0_30px_rgba(255,159,28,0.5)] transition-shadow duration-300"
                  >
                    {loading ? "Submitting..." : "Get Free Quote"}
                    {!loading && <ArrowRight className="w-4 h-4 ml-1" />}
                  </Button>

                  <p className="text-xs text-center text-[#94A3B8]">
                    By submitting, you agree to our Terms & Privacy Policy
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
