import { useState } from "react";
import { Heart, Car, Users, Home, Plane, Briefcase, Shield, ArrowUpRight, Phone, X, ArrowRight, CheckCircle } from "lucide-react";
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
import { toast } from "sonner";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const INSURANCE_PRODUCTS = [
  { value: "health", label: "Health Insurance" },
  { value: "motor", label: "Motor Insurance" },
  { value: "life", label: "Life Insurance" },
  { value: "term", label: "Term Life Insurance" },
  { value: "travel", label: "Travel Insurance" },
  { value: "home", label: "Home Insurance" },
  { value: "business", label: "Business Insurance" },
];

const products = [
  {
    id: "health",
    title: "Health Insurance",
    desc: "Comprehensive coverage for you and your family. Cashless treatment at 10,000+ hospitals.",
    icon: Heart,
    color: "#EF4444",
    bgColor: "#FEF2F2",
    size: "large",
  },
  {
    id: "motor",
    title: "Motor Insurance",
    desc: "Protect your vehicle against accidents, theft, and natural calamities.",
    icon: Car,
    color: "#0088CC",
    bgColor: "#F0F9FF",
    size: "medium",
  },
  {
    id: "term",
    title: "Term Life Insurance",
    desc: "Secure your family's future with high coverage at affordable premiums.",
    icon: Shield,
    color: "#1A1A4E",
    bgColor: "#EEF2FF",
    size: "medium",
  },
  {
    id: "life",
    title: "Life Insurance",
    desc: "Build wealth while staying protected.",
    icon: Users,
    color: "#10B981",
    bgColor: "#F0FDF4",
    size: "small",
  },
  {
    id: "home",
    title: "Home Insurance",
    desc: "Shield your home from unforeseen damages.",
    icon: Home,
    color: "#F59E0B",
    bgColor: "#FFFBEB",
    size: "small",
  },
  {
    id: "travel",
    title: "Travel Insurance",
    desc: "Travel worry-free, anywhere in the world.",
    icon: Plane,
    color: "#8B5CF6",
    bgColor: "#F5F3FF",
    size: "small",
  },
  {
    id: "business",
    title: "Business Insurance",
    desc: "Comprehensive protection for your enterprise.",
    icon: Briefcase,
    color: "#06B6D4",
    bgColor: "#ECFEFF",
    size: "small",
  },
];

const ProductPopup = ({ product, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(product.id);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone || !selectedProduct) {
      toast.error("Please fill in all fields");
      return;
    }
    if (phone.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/leads`, {
        name,
        phone,
        insurance_product: selectedProduct,
      });
      setSubmitted(true);
      toast.success("We'll call you back shortly!");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" data-testid="product-popup-overlay">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div
        data-testid={`product-popup-${product.id}`}
        className="relative bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] w-full max-w-md p-8 space-y-6"
        style={{ animation: "fadeInUp 0.3s ease-out" }}
      >
        <button
          onClick={onClose}
          data-testid="popup-close-btn"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-[#64748B]"
          style={{ transitionProperty: "background-color", transitionDuration: "200ms" }}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: product.bgColor }}
          >
            {(() => { const Icon = product.icon; return <Icon className="w-6 h-6" style={{ color: product.color }} />; })()}
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#1A1A4E]" style={{ fontFamily: "Outfit, sans-serif" }}>
              Get {product.title} Quote
            </h3>
            <p className="text-xs text-[#64748B]">Our expert will call you with the best plans</p>
          </div>
        </div>

        {submitted ? (
          <div data-testid="popup-success-message" className="flex flex-col items-center justify-center py-8 space-y-4">
            <div className="w-16 h-16 bg-[#10B981]/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-[#10B981]" />
            </div>
            <p className="text-lg font-semibold text-[#1A1A4E]">Thank You!</p>
            <p className="text-sm text-[#64748B] text-center">Our insurance expert will reach out to you shortly.</p>
            <Button onClick={onClose} className="bg-[#0088CC] hover:bg-[#0088CC]/90 text-white rounded-full px-8 mt-2">
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="popup-name" className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">
                Full Name
              </Label>
              <Input
                data-testid="popup-name-input"
                id="popup-name"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white border-gray-200 focus:border-[#0088CC] focus:ring-4 focus:ring-[#0088CC]/10 rounded-xl h-12 px-4"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="popup-phone" className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">
                Phone Number
              </Label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                <Input
                  data-testid="popup-phone-input"
                  id="popup-phone"
                  type="tel"
                  placeholder="Enter 10-digit mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  className="bg-white border-gray-200 focus:border-[#0088CC] focus:ring-4 focus:ring-[#0088CC]/10 rounded-xl h-12 pl-11 pr-4"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="popup-product" className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">
                Insurance Type
              </Label>
              <Select value={selectedProduct} onValueChange={setSelectedProduct}>
                <SelectTrigger
                  data-testid="popup-product-select"
                  className="bg-white border-gray-200 focus:border-[#0088CC] focus:ring-4 focus:ring-[#0088CC]/10 rounded-xl h-12 px-4"
                >
                  <SelectValue placeholder="Select insurance type" />
                </SelectTrigger>
                <SelectContent>
                  {INSURANCE_PRODUCTS.map((p) => (
                    <SelectItem key={p.value} value={p.value}>
                      {p.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              data-testid="popup-submit-btn"
              type="submit"
              disabled={loading}
              className="w-full bg-[#FF9F1C] hover:bg-[#FF9F1C]/90 text-[#1A1A4E] font-bold rounded-full h-12 shadow-[0_0_20px_rgba(255,159,28,0.3)] hover:shadow-[0_0_30px_rgba(255,159,28,0.5)] transition-shadow duration-300"
            >
              {loading ? "Submitting..." : "Get Free Quote"}
              {!loading && <ArrowRight className="w-4 h-4 ml-1" />}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export const ProductsSection = () => {
  const [activeProduct, setActiveProduct] = useState(null);

  return (
    <section data-testid="products-section" className="px-6 md:px-12 lg:px-24 py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-semibold text-[#0088CC] uppercase tracking-wider mb-3">
            Our Products
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1A1A4E] mb-4"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Comprehensive Protection
          </h2>
          <p className="text-base text-[#64748B] leading-relaxed">
            From health to home, we've got every aspect of your life covered with the best plans from top insurers.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[200px]">
          {products.map((product) => {
            const Icon = product.icon;
            const isLarge = product.size === "large";
            const isMedium = product.size === "medium";

            return (
              <div
                key={product.id}
                data-testid={`product-card-${product.id}`}
                className={`
                  group relative bg-white border border-gray-100 rounded-2xl p-7 flex flex-col justify-between
                  hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1
                  cursor-pointer overflow-hidden
                  ${isLarge ? "sm:col-span-2 sm:row-span-2" : ""}
                  ${isMedium ? "sm:row-span-2" : ""}
                `}
                style={{
                  transitionProperty: "box-shadow, transform",
                  transitionDuration: "300ms",
                }}
                onClick={() => setActiveProduct(product)}
              >
                {/* Decorative background circle */}
                <div
                  className="absolute -right-10 -top-10 w-40 h-40 rounded-full opacity-20 group-hover:opacity-30"
                  style={{
                    background: product.color,
                    transitionProperty: "opacity",
                    transitionDuration: "300ms",
                  }}
                />

                <div className="relative z-10 space-y-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: product.bgColor }}
                  >
                    <Icon className="w-6 h-6" style={{ color: product.color }} />
                  </div>
                  <h3
                    className="text-lg font-bold text-[#1A1A4E]"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {product.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{product.desc}</p>
                </div>

                <div className="relative z-10 mt-auto pt-4">
                  <button
                    data-testid={`explore-btn-${product.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveProduct(product);
                    }}
                    className="inline-flex items-center gap-1 text-sm font-semibold group-hover:gap-2"
                    style={{
                      color: product.color,
                      transitionProperty: "gap",
                      transitionDuration: "300ms",
                    }}
                  >
                    Explore
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Product Popup */}
      {activeProduct && (
        <ProductPopup product={activeProduct} onClose={() => setActiveProduct(null)} />
      )}
    </section>
  );
};
