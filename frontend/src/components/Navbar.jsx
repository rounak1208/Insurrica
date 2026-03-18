import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_e5ad9e76-2dfd-4be2-9284-b82c004c3b00/artifacts/qbnkrpu9_IMG_6121.jpeg";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" data-testid="navbar-logo" className="flex items-center gap-2">
          <img src={LOGO_URL} alt="Insurrica Logo" className="h-10 w-auto rounded" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-[#475569] hover:text-[#0088CC] transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <Button
            data-testid="navbar-cta"
            onClick={() => scrollTo("#hero")}
            className="bg-[#0088CC] hover:bg-[#0088CC]/90 text-white rounded-full px-6 h-9 text-sm font-semibold shadow-md"
          >
            Get Free Quote
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          data-testid="mobile-menu-toggle"
          className="md:hidden text-[#1A1A4E]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div data-testid="mobile-menu" className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="block w-full text-left text-sm font-medium text-[#475569] hover:text-[#0088CC] py-2"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollTo("#hero")}
              className="w-full bg-[#0088CC] hover:bg-[#0088CC]/90 text-white rounded-full h-10 text-sm font-semibold mt-2"
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
