import { Heart, Car, Users, Home, Plane, Briefcase, Shield, ArrowUpRight } from "lucide-react";

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

export const ProductsSection = () => {
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
                  <span
                    className="inline-flex items-center gap-1 text-sm font-semibold group-hover:gap-2"
                    style={{
                      color: product.color,
                      transitionProperty: "gap",
                      transitionDuration: "300ms",
                    }}
                  >
                    Explore
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
