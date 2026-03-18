import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    age: 34,
    role: "Software Engineer, Bangalore",
    text: "My father was hospitalised for a major surgery and the bill came to over \u20B910 Lakhs. Insurrica's team got the entire claim cashless-approved within hours. They coordinated everything with the hospital and insurer \u2014 we didn't have to pay a single rupee out of pocket. Truly life-saving support!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1771240730126-594a8ab66be1?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Rajesh Patel",
    age: 42,
    role: "Business Owner, Mumbai",
    text: "Switched my motor insurance through Insurrica. Got the same coverage for 30% less. Their claims support team is responsive and professional.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1752738372136-2602aaafdcb7?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Anita Desai",
    age: 38,
    role: "Teacher, Delhi",
    text: "After my husband passed, Insurrica's team handled the entire term insurance claim. They were empathetic and efficient during the hardest time of my life.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1528082414335-adbd64f18d12?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Vikram Singh",
    age: 29,
    role: "Freelancer, Jaipur",
    text: "As a freelancer, finding the right health plan was confusing. Insurrica's expert walked me through every option and helped me pick the perfect plan.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1699860777054-13e8d1d6245a?w=150&h=150&fit=crop&crop=face",
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
              style={{ transitionProperty: "border-color", transitionDuration: "300ms" }}
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
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <p className="text-sm font-semibold text-[#1A1A4E]">{t.name}, {t.age}</p>
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
