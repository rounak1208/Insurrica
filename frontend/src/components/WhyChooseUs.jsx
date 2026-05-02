import { ShieldCheck, Clock, BadgeIndianRupee } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "50+ Insurer Partners",
    desc: "Compare policies from India's top trusted brands — ICICI, HDFC, Star Health, Bajaj, and more.",
    color: "#0088CC",
    bgColor: "#F0F9FF",
  },
  {
    icon: Clock,
    title: "30-Min Claims Support",
    desc: "Dedicated claims manager to ensure fastest settlement. We handle the paperwork, you stay stress-free.",
    color: "#10B981",
    bgColor: "#F0FDF4",
  },
  {
    icon: BadgeIndianRupee,
    title: "Best Price Guarantee",
    desc: "We match or beat any direct quote from the insurer. Same policy, lower premium — guaranteed.",
    color: "#FF9F1C",
    bgColor: "#FFFBEB",
  },
];

export const WhyChooseUs = () => {
  return (
    <section
      data-testid="why-choose-section"
      className="px-6 md:px-12 lg:px-24 py-20 md:py-32"
      style={{ background: "#F8FAFC" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-[#0369A1] uppercase tracking-wider mb-3">
            Why Insurrica
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1A1A4E] mb-4"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Why 10,000+ Indians Trust Us
          </h2>
          <p className="text-base text-[#64748B]">
            We're not just a comparison tool. We're your insurance partner for life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                data-testid={`feature-card-${i}`}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1"
                style={{
                  transitionProperty: "box-shadow, transform",
                  transitionDuration: "300ms",
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: feature.bgColor }}
                >
                  <Icon className="w-7 h-7" style={{ color: feature.color }} />
                </div>
                <h3
                  className="text-xl font-bold text-[#1A1A4E] mb-3"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
