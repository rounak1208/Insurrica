const partners = [
  { name: "LIC", domain: "licindia.in" },
  { name: "HDFC Ergo", domain: "hdfcergo.com" },
  { name: "ICICI Lombard", domain: "icicilombard.com" },
  { name: "Star Health", domain: "starhealth.in" },
  { name: "Bajaj Allianz", domain: "bajajallianz.com" },
  { name: "Tata AIG", domain: "tataaig.com" },
  { name: "New India Assurance", domain: "newindia.co.in" },
  { name: "SBI General", domain: "sbigeneral.in" },
  { name: "Max Life", domain: "maxlifeinsurance.com" },
  { name: "Reliance General", domain: "reliancegeneral.co.in" },
  { name: "Kotak Life", domain: "kotaklife.com" },
  { name: "Aditya Birla Health", domain: "adityabirlacapital.com" },
  { name: "United India", domain: "uiic.co.in" },
  { name: "Oriental Insurance", domain: "orientalinsurance.org.in" },
  { name: "Niva Bupa", domain: "nivabupa.com" },
  { name: "Care Health", domain: "careinsurance.com" },
];

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

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.domain}
              data-testid={`partner-logo-${partner.domain}`}
              className="group flex flex-col items-center justify-center p-4 rounded-xl bg-[#F8FAFC] border border-transparent hover:border-[#0088CC]/10 hover:shadow-sm"
              style={{
                transitionProperty: "border-color, box-shadow",
                transitionDuration: "300ms",
              }}
            >
              <img
                src={`https://logo.clearbit.com/${partner.domain}?size=80`}
                alt={partner.name}
                className="w-12 h-12 object-contain grayscale group-hover:grayscale-0"
                style={{
                  transitionProperty: "filter",
                  transitionDuration: "300ms",
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div
                className="w-12 h-12 rounded-full bg-[#0088CC]/10 items-center justify-center text-[#0088CC] font-bold text-xs hidden"
              >
                {partner.name.charAt(0)}
              </div>
              <p className="text-[10px] text-[#94A3B8] mt-2 text-center font-medium leading-tight">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
