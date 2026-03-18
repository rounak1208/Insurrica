import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer, Bangalore",
    text: "Insurrica made it incredibly easy to compare health insurance plans. Saved ₹8,000 on my family floater and the cashless claim process was seamless!",
    rating: 5,
  },
  {
    name: "Rajesh Patel",
    role: "Business Owner, Mumbai",
    text: "Switched my motor insurance through Insurrica. Got the same coverage for 30% less. Their claims support team is responsive and professional.",
    rating: 5,
  },
  {
    name: "Anita Desai",
    role: "Teacher, Delhi",
    text: "After my husband passed, Insurrica's team handled the entire term insurance claim. They were empathetic and efficient during the hardest time of my life.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Freelancer, Jaipur",
    text: "As a freelancer, finding the right health plan was confusing. Insurrica's expert walked me through every option and helped me pick the perfect plan.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section data-testid="testimonials-section" className="px-6 md:px-12 lg:px-24 py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-semibold text-[#0088CC] uppercase tracking-wider mb-3">
            Testimonials
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1A1A4E] mb-4"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            What Our Customers Say
          </h2>
          <p className="text-base text-[#64748B]">
            Real stories from real people who trusted Insurrica with their insurance needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              data-testid={`testimonial-card-${i}`}
              className="bg-[#F8FAFC] border border-transparent rounded-2xl p-8 hover:border-[#0088CC]/10"
              style={{
                transitionProperty: "border-color",
                transitionDuration: "300ms",
              }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#FF9F1C] text-[#FF9F1C]" />
                ))}
              </div>
              <p className="text-[#334155] leading-relaxed mb-6 text-sm">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0088CC]/10 flex items-center justify-center text-[#0088CC] font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1A1A4E]">{t.name}</p>
                  <p className="text-xs text-[#94A3B8]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
