const partners = [
  { name: "LIC of India", domain: "licindia.in", color: "#003366" },
  { name: "HDFC Ergo", domain: "hdfcergo.com", color: "#004B8D" },
  { name: "ICICI Lombard", domain: "icicilombard.com", color: "#B02A30" },
  { name: "Star Health", domain: "starhealth.in", color: "#ED1C24" },
  { name: "Bajaj Allianz", domain: "bajajallianz.com", color: "#003DA5" },
  { name: "Tata AIG", domain: "tataaig.com", color: "#003366" },
  { name: "New India Assurance", domain: "newindia.co.in", color: "#1B3C73" },
  { name: "SBI General", domain: "sbigeneral.in", color: "#22409A" },
  { name: "Max Life", domain: "maxlifeinsurance.com", color: "#002E6E" },
  { name: "Reliance General", domain: "reliancegeneral.co.in", color: "#002F87" },
  { name: "Kotak Life", domain: "kotaklife.com", color: "#ED1C24" },
  { name: "Niva Bupa", domain: "nivabupa.com", color: "#00A89D" },
  { name: "Care Health", domain: "careinsurance.com", color: "#E8352A" },
  { name: "Aditya Birla", domain: "adityabirlacapital.com", color: "#C8102E" },
  { name: "United India", domain: "uiic.co.in", color: "#006837" },
  { name: "Oriental Insurance", domain: "orientalinsurance.org.in", color: "#003D7C" },
];

const PartnerLogo = ({ partner }) => {
  return (
    <div
      data-testid={`partner-logo-${partner.domain}`}
      className="group flex flex-col items-center justify-center p-4 rounded-xl bg-[#F8FAFC] border border-transparent hover:border-[#0088CC]/10 hover:shadow-sm"
      style={{
        transitionProperty: "border-color, box-shadow",
        transitionDuration: "300ms",
      }}
    >
      <div className="w-16 h-16 flex items-center justify-center">
        <img
          src={`https://logo.clearbit.com/${partner.domain}?size=80`}
          alt={`${partner.name} logo`}
          loading="lazy"
          className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100"
          style={{
            transitionProperty: "opacity",
            transitionDuration: "300ms",
          }}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentElement.querySelector('.fallback-logo').style.display = "flex";
          }}
        />
        <div
          className="fallback-logo w-12 h-12 rounded-xl items-center justify-center text-white font-bold text-sm hidden"
          style={{ backgroundColor: partner.color, display: "none" }}
        >
          {partner.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
        </div>
      </div>
      <p className="text-[11px] text-[#64748B] mt-2 text-center font-medium leading-tight">
        {partner.name}
      </p>
    </div>
  );
};

export const PartnersSection = () => {
  return (
    <section data-testid="partners-section" className="px-6 md:px-12 lg:px-24 py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#0088CC] uppercase tracking-wider mb-3">
            Our Partners
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1A1A4E] mb-4"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Trusted Insurer Partners
          </h2>
          <p className="text-base text-[#64748B]">
            We work with India's leading insurance companies to bring you the best plans.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {partners.map((partner) => (
            <PartnerLogo key={partner.domain} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
};
