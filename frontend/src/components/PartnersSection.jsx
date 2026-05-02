import { useState } from "react";

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
  const [primaryFailed, setPrimaryFailed] = useState(false);
  const [secondaryFailed, setSecondaryFailed] = useState(false);
  const initials = partner.name.split(" ").map(w => w[0]).join("").slice(0, 3);

  const primarySrc = `https://logo.clearbit.com/${partner.domain}?size=128`;
  const secondarySrc = `https://www.google.com/s2/favicons?domain=${partner.domain}&sz=128`;

  return (
    <div
      data-testid={`partner-logo-${partner.domain}`}
      className="group flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-white border border-gray-100 hover:border-[#0088CC]/20 hover:shadow-md"
      style={{ transitionProperty: "border-color, box-shadow", transitionDuration: "300ms" }}
    >
      <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white overflow-hidden">
        {!primaryFailed ? (
          <img
            src={primarySrc}
            alt={`${partner.name} logo`}
            width="56"
            height="56"
            loading="lazy"
            className="max-w-[48px] max-h-[48px] sm:max-w-[56px] sm:max-h-[56px] object-contain opacity-80 group-hover:opacity-100"
            style={{ transitionProperty: "opacity", transitionDuration: "300ms" }}
            onError={() => setPrimaryFailed(true)}
          />
        ) : !secondaryFailed ? (
          <img
            src={secondarySrc}
            alt={`${partner.name} logo`}
            width="48"
            height="48"
            loading="lazy"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain opacity-80 group-hover:opacity-100"
            style={{ transitionProperty: "opacity", transitionDuration: "300ms" }}
            onError={() => setSecondaryFailed(true)}
          />
        ) : (
          <div
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center text-white font-bold text-xs"
            style={{ backgroundColor: partner.color }}
          >
            {initials}
          </div>
        )}
      </div>
      <p className="text-[10px] sm:text-[11px] text-[#64748B] mt-2 text-center font-medium leading-tight min-h-[24px] flex items-center">
        {partner.name}
      </p>
    </div>
  );
};

export const PartnersSection = () => {
  return (
    <section data-testid="partners-section" className="px-6 md:px-12 lg:px-24 py-16 md:py-24 bg-[#F8FAFC]">
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

        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4">
          {partners.map((partner) => (
            <PartnerLogo key={partner.domain} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
};
