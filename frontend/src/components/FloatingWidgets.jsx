import { useState } from "react";
import { Phone as PhoneIcon, MessageCircle, FileText, X, ArrowRight, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const PHONE_NUMBER = "919727692000";

const INSURANCE_PRODUCTS = [
  { value: "health", label: "Health Insurance" },
  { value: "motor", label: "Motor Insurance" },
  { value: "life", label: "Life Insurance" },
  { value: "term", label: "Term Life Insurance" },
  { value: "travel", label: "Travel Insurance" },
  { value: "home", label: "Home Insurance" },
  { value: "business", label: "Business Insurance" },
];

const MobileFormPopup = ({ onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone || !product) { toast.error("Please fill in all fields"); return; }
    if (phone.length < 10) { toast.error("Please enter a valid phone number"); return; }
    setLoading(true);
    try {
      await axios.post(`${API}/leads`, { name, phone, insurance_product: product });
      setSubmitted(true);
      toast.success("We'll call you back shortly!");
    } catch { toast.error("Something went wrong. Please try again."); }
    finally { setLoading(false); }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center px-0 sm:px-4" data-testid="mobile-form-overlay">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div
        data-testid="mobile-form-popup"
        className="relative bg-white rounded-t-2xl sm:rounded-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.15)] w-full sm:max-w-md p-6 sm:p-8 space-y-5 max-h-[90vh] overflow-y-auto"
      >
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-[#64748B]">
          <X className="w-5 h-5" />
        </button>
        <div>
          <h3 className="text-lg font-bold text-[#1A1A4E]" style={{ fontFamily: "Outfit, sans-serif" }}>Get Free Quote</h3>
          <p className="text-sm text-[#64748B] mt-1">Our expert will call you back</p>
        </div>
        {submitted ? (
          <div className="flex flex-col items-center py-6 space-y-3">
            <div className="w-14 h-14 bg-[#10B981]/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-7 h-7 text-[#10B981]" />
            </div>
            <p className="text-base font-semibold text-[#1A1A4E]">Thank You!</p>
            <p className="text-sm text-[#64748B]">We'll reach out shortly.</p>
            <Button onClick={onClose} className="bg-[#0088CC] hover:bg-[#0088CC]/90 text-white rounded-full px-8 mt-2">Close</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">Full Name</Label>
              <Input data-testid="mobile-form-name" placeholder="Your full name" value={name} onChange={(e) => setName(e.target.value)} className="bg-white border-gray-200 rounded-xl h-11 px-4" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">Phone Number</Label>
              <Input data-testid="mobile-form-phone" type="tel" placeholder="10-digit mobile number" value={phone} onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))} className="bg-white border-gray-200 rounded-xl h-11 px-4" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">Insurance Type</Label>
              <div className="relative" data-testid="mobile-form-product">
                <select
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-white text-sm text-[#1A1A4E] appearance-none cursor-pointer focus:border-[#0088CC] focus:ring-4 focus:ring-[#0088CC]/10 focus:outline-none"
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
            <Button data-testid="mobile-form-submit" type="submit" disabled={loading} className="w-full bg-[#FF9F1C] hover:bg-[#FF9F1C]/90 text-[#1A1A4E] font-bold rounded-full h-11 shadow-[0_0_20px_rgba(255,159,28,0.3)] transition-shadow duration-300">
              {loading ? "Submitting..." : "Get Free Quote"}
              {!loading && <ArrowRight className="w-4 h-4 ml-1" />}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export const FloatingWidgets = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {/* Desktop floating widgets */}
      <div data-testid="floating-widgets" className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col gap-3">
        <a
          href={`https://wa.me/${PHONE_NUMBER}?text=Hi%20Insurrica%2C%20I%27d%20like%20to%20know%20more%20about%20insurance%20plans.`}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="whatsapp-widget"
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full pl-4 pr-5 h-12 shadow-lg hover:shadow-xl"
          style={{ transitionProperty: "background-color, box-shadow", transitionDuration: "300ms" }}
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-semibold">WhatsApp</span>
        </a>
        <a
          href="tel:+919727692000"
          data-testid="call-widget"
          className="flex items-center gap-2 bg-[#0088CC] hover:bg-[#006fa8] text-white rounded-full pl-4 pr-5 h-12 shadow-lg hover:shadow-xl"
          style={{ transitionProperty: "background-color, box-shadow", transitionDuration: "300ms" }}
        >
          <PhoneIcon className="w-5 h-5" />
          <span className="text-sm font-semibold">Call Now</span>
        </a>
      </div>

      {/* Mobile sticky CTA bar - positioned above Emergent badge */}
      <div data-testid="mobile-cta-bar" className="fixed bottom-0 left-0 right-0 z-[9998] md:hidden">
        <div className="bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
          <div className="grid grid-cols-3 h-14">
            <button
              data-testid="mobile-cta-form"
              onClick={() => setShowForm(true)}
              className="flex flex-col items-center justify-center gap-0.5 text-[#0088CC] active:bg-[#0088CC]/5"
            >
              <FileText className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Get Quote</span>
            </button>
            <a
              href={`https://wa.me/${PHONE_NUMBER}?text=Hi%20Insurrica%2C%20I%27d%20like%20to%20know%20more%20about%20insurance%20plans.`}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="mobile-cta-whatsapp"
              className="flex flex-col items-center justify-center gap-0.5 text-[#25D366] active:bg-[#25D366]/5 border-x border-gray-100"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
            </a>
            <a
              href="tel:+919727692000"
              data-testid="mobile-cta-call"
              className="flex flex-col items-center justify-center gap-0.5 text-[#FF9F1C] active:bg-[#FF9F1C]/5"
            >
              <PhoneIcon className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Call Now</span>
            </a>
          </div>
        </div>
      </div>

      {showForm && <MobileFormPopup onClose={() => setShowForm(false)} />}
    </>
  );
};
