import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Menu, X, Phone, ArrowRight, CheckCircle } from "lucide-react";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const LOGO_URL = "https://customer-assets.emergentagent.com/job_e5ad9e76-2dfd-4be2-9284-b82c004c3b00/artifacts/qbnkrpu9_IMG_6121.jpeg";

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
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone || !product) {
      toast.error("Please fill in all fields");
      return;
    }
    if (phone.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/leads`, { name, phone, insurance_product: product });
      setSubmitted(true);
      toast.success("We'll call you back shortly!");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
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
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">Full Name</Label>
              <Input data-testid="nav-popup-name" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} className="bg-white border-gray-200 focus:border-[#0088CC] focus:ring-4 focus:ring-[#0088CC]/10 rounded-xl h-12 px-4" />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">Phone Number</Label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                <Input data-testid="nav-popup-phone" type="tel" placeholder="Enter 10-digit mobile number" value={phone} onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))} className="bg-white border-gray-200 focus:border-[#0088CC] focus:ring-4 focus:ring-[#0088CC]/10 rounded-xl h-12 pl-11 pr-4" />
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
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 4.5L6 7.5L9 4.5" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
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

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        data-testid="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-20">
          <a href="#" data-testid="navbar-logo" className="flex items-center gap-2">
            <img src={LOGO_URL} alt="Insurrica Logo" className="h-14 w-auto" style={{ borderRadius: 0, mixBlendMode: "multiply" }} />
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button key={link.href} onClick={() => scrollTo(link.href)} className="text-sm font-medium text-[#475569] hover:text-[#0088CC] transition-colors duration-200">
                {link.label}
              </button>
            ))}
            <Button data-testid="navbar-cta" onClick={() => setShowPopup(true)} className="bg-[#0088CC] hover:bg-[#0088CC]/90 text-white rounded-full px-6 h-9 text-sm font-semibold shadow-md">
              Get Free Quote
            </Button>
          </div>
          <button data-testid="mobile-menu-toggle" className="md:hidden text-[#1A1A4E]" onClick={() => setMobileOpen(!mobileOpen)}>
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
