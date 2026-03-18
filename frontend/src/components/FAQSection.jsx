import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does Insurrica compare insurance plans?",
    a: "We aggregate real-time quotes from 50+ insurance partners and present them side by side. You can compare premiums, coverage, claim settlement ratios, and policy features — all in one place.",
  },
  {
    q: "Is there any cost for using Insurrica?",
    a: "Absolutely not. Our comparison and advisory service is 100% free for customers. We earn a commission from insurance companies, which means you pay the exact same premium as buying directly.",
  },
  {
    q: "How quickly can I get my policy issued?",
    a: "Most policies can be issued within minutes of completing the application. For some products like term or health insurance that require medical tests, the process may take 2-5 business days.",
  },
  {
    q: "What happens when I need to make a claim?",
    a: "Our dedicated claims support team guides you through the entire process. For cashless health claims, we coordinate directly with the hospital and insurer. For reimbursement claims, we handle all documentation.",
  },
  {
    q: "Are the insurance companies on Insurrica verified?",
    a: "Yes, we only partner with IRDAI (Insurance Regulatory and Development Authority of India) licensed insurance companies. All our partner insurers are regulated and financially sound.",
  },
  {
    q: "Can I renew my existing policy through Insurrica?",
    a: "Yes! You can renew your existing policy through us and even explore better options from other insurers. We ensure seamless portability without any break in coverage.",
  },
];

export const FAQSection = () => {
  return (
    <section data-testid="faq-section" className="px-6 md:px-12 lg:px-24 py-20 md:py-32 bg-[#F8FAFC]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#0088CC] uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1A1A4E] mb-4"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#64748B]">
            Everything you need to know about insurance with Insurrica.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              data-testid={`faq-item-${i}`}
              className="bg-white rounded-xl border border-gray-100 px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-left text-[#1A1A4E] font-semibold hover:no-underline py-5 text-sm">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-[#64748B] text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
