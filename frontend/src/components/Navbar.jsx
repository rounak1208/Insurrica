import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Menu, X, Phone, ArrowRight, CheckCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLeadForm } from "../hooks/useLeadForm";

const LOGO_URL = "/logo.jpeg";

const INSURANCE_PRODUCTS = [
  { value: "health", label: "Health Insurance" },
  { value: "motor", label: "Motor Insurance" },
  { value: "life", label: "Life Insurance" },
  { value: "term", label: "Term Life Insurance" },
  { value: "travel", label: "Travel Insurance" },
  { value: "home", label: "Home Insurance" },
  { value: "business", label: "Business Insurance" },
];

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const NavPopup = ({ onClose }) => {
  const navigate = useNavigate();
  const {
    name, setName,
    phone, handlePhoneChange,
    product, setProduct,
    loading, submitted,
    handleSubmit,
  } = useLeadForm({
    onSuccess: () => {},
  });

  const onSubmit = async (e) => {
    const success = await handleSubmit(e);
    if (success) {
      setTimeout(() => {
        onClose();
        navigate(`/${product}-insurance`);
      }, 1500);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" data-testid="nav-popup-overlay">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div
        data-testid="nav-popup-form"
        className="relative bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] w-full max-w-md p-8 space-y-6"
        style={{ animation: "fadeInUp 0.3s ease-out" }}
      >
        <button onClick={onClose} data-testid="nav-popup-close" className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-[#64748B]">
          <X className="w-5 h-5" />
        </button>

        <div>
          <h3 className="text-xl font-bold text-[#1A1A4E]" style={{ fontFamily: "Outfit, sans-serif" }}>Get Free Insurance Quote</h3>
          <p className="text-sm text-[#64748B] mt-1">Our expert will call you with the best plans</p>
        </div>

        {submitted ? (
          <div data-testid="nav-popup-success" className="flex flex-col items-center justify-center py-8 space-y-4">
            <div className="w-16 h-16 bg-[#10B981]/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-[#10B981]" />
            </div>
            <p className="text-lg font-semibold text-[#1A1A4E]">Thank You!</p>
            <p className="text-sm text-[#64748B] text-center">Our insurance expert will reach out shortly.</p>
            <Button onClick={onClose} className="bg-[#0088CC] hover:bg-[#0088CC]/90 text-white rounded-full px-8 mt-2">Close</Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">Full Name</Label>
              <Input data-testid="nav-popup-name" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} className="bg-white border-gray-200 focus:border-[#0088CC] focus:ring-4 focus:ring-[#0088CC]/10 rounded-xl h-12 px-4" />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">Phone Number</Label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                <Input data-testid="nav-popup-phone" type="tel" placeholder="Enter 10-digit mobile number" value={phone} onChange={(e) => handlePhoneChange(e.target.value)} className="bg-white border-gray-200 focus:border-[#0088CC] focus:ring-4 focus:ring-[#0088CC]/10 rounded-xl h-12 pl-11 pr-4" />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">Insurance Type</Label>
              <div className="relative" data-testid="nav-popup-product">
                <select
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-white text-sm text-[#1A1A4E] appearance-none cursor-pointer focus:border-[#0088CC] focus:ring-4 focus:ring-[#0088CC]/10 focus:outline-none"
                >
                  <option value="" disabled>Select insurance type</option>
                  {INSURANCE_PRODUCTS.map((p) => (
                    <option key={p.value} value={p.value}>{p.label}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 4.5L6 7.5L9 4.5" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
              </div>
            </div>
            <Button data-testid="nav-popup-submit" type="submit" disabled={loading} className="w-full bg-[#FF9F1C] hover:bg-[#FF9F1C]/90 text-[#1A1A4E] font-bold rounded-full h-12 shadow-[0_0_20px_rgba(255,159,28,0.3)] hover:shadow-[0_0_30px_rgba(255,159,28,0.5)] transition-shadow duration-300">
              {loading ? "Submitting..." : "Get Free Quote"}
              {!loading && <ArrowRight className="w-4 h-4 ml-1" />}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Handle hash scrolling when coming from a different route
  useEffect(() => {
    if (location.hash && location.pathname === "/") {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  const scrollTo = (href) => {
    setMobileOpen(false);
    if (location.pathname !== "/") {
      navigate(`/${href}`);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        data-testid="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${scrolled || location.pathname !== '/' ? "bg-white/20 backdrop-blur-3xl border-b border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.08)]" : "bg-transparent"
          }`}
      >
        <button onClick={() => navigate("/")} data-testid="navbar-logo" aria-label="Go to homepage" className="absolute left-4 md:left-8 top-0 h-20 flex items-center z-10 transition-transform hover:scale-105">
          <img src={LOGO_URL} alt="Insurrica Logo" width="80" height="80" fetchpriority="high" className="h-16 md:h-20 w-auto object-contain" style={{ borderRadius: 0, mixBlendMode: "multiply" }} />
        </button>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-end h-20">
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button key={link.href} onClick={() => scrollTo(link.href)} className="text-sm font-medium text-[#475569] hover:text-[#0088CC] transition-colors duration-200">
                {link.label}
              </button>
            ))}
            <Button data-testid="navbar-cta" onClick={() => setShowPopup(true)} className="bg-[#0077AA] hover:bg-[#006999] text-white rounded-full px-6 h-9 text-sm font-semibold shadow-md">
              Get Free Quote
            </Button>
          </div>
          <button data-testid="mobile-menu-toggle" aria-label="Toggle mobile menu" aria-expanded={mobileOpen} className="md:hidden text-[#1A1A4E]" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {mobileOpen && (
          <div data-testid="mobile-menu" className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <button key={link.href} onClick={() => scrollTo(link.href)} className="block w-full text-left text-sm font-medium text-[#475569] hover:text-[#0088CC] py-2">
                  {link.label}
                </button>
              ))}
              <Button onClick={() => { setMobileOpen(false); setShowPopup(true); }} className="w-full bg-[#0088CC] hover:bg-[#0088CC]/90 text-white rounded-full h-10 text-sm font-semibold mt-2">
                Get Free Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
      {showPopup && <NavPopup onClose={() => setShowPopup(false)} />}
    </>
  );
};
