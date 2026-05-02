import { Phone, Mail, MapPin } from "lucide-react";

const LOGO_URL = "/logo.jpeg";

export const Footer = () => {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer data-testid="footer" className="bg-[#1A1A4E] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1 space-y-4">
            <img src={LOGO_URL} alt="Insurrica" width="56" height="56" loading="lazy" className="h-14 w-auto rounded-lg" />
            <p className="text-sm text-white/60 leading-relaxed">
              Your trusted insurance broking partner. Compare, choose, and insure — all in one place.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4
              className="text-sm font-bold uppercase tracking-wider text-white/80"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Quick Links
            </h4>
            <div className="space-y-2">
              {[
                { label: "Products", href: "#products" },
                { label: "Why Choose Us", href: "#why-us" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="block text-sm text-white/50 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4
              className="text-sm font-bold uppercase tracking-wider text-white/80"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Insurance Products
            </h4>
            <div className="space-y-2">
              {["Health Insurance", "Motor Insurance", "Life Insurance", "Term Insurance", "Travel Insurance"].map(
                (product) => (
                  <p key={product} className="text-sm text-white/50">
                    {product}
                  </p>
                )
              )}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4
              className="text-sm font-bold uppercase tracking-wider text-white/80"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Contact Us
            </h4>
            <div className="space-y-3">
              <p className="text-sm text-white/70 font-medium">Rahoul Agarwaal</p>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <Phone className="w-4 h-4 text-[#0088CC]" />
                +91 97276 92000
              </div>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <Mail className="w-4 h-4 text-[#0088CC]" />
                Admin@insurrica.com
              </div>
              <div className="flex items-start gap-3 text-sm text-white/50">
                <MapPin className="w-4 h-4 text-[#0088CC] mt-0.5" />
                Bengaluru, Karnataka, India
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Insurrica. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <span className="hover:text-white/60 cursor-pointer transition-colors duration-200">Privacy Policy</span>
            <span className="hover:text-white/60 cursor-pointer transition-colors duration-200">Terms of Service</span>
            <span className="hover:text-white/60 cursor-pointer transition-colors duration-200">Disclaimer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
