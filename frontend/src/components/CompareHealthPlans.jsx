import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Building2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  insurerProfiles,
  healthInsurancePlans,
  planOrderByInsurer,
  activeInsurers,
  comingSoonInsurers,
} from "../lib/plans";

export const CompareHealthPlans = () => {
  const [selectedInsurer, setSelectedInsurer] = useState("star-health");
  const navigate = useNavigate();

  const insurer = insurerProfiles[selectedInsurer];
  const planIds = planOrderByInsurer[selectedInsurer] || [];
  const plans = planIds.map((id) => healthInsurancePlans[id]);

  // UI config pulled from the insurer profile (set in each company file)
  const accentColor = insurer?.accentColor || "#0088CC";
  const whyBlurb = insurer?.whyBlurb;

  const handleComingSoon = (name) => {
    toast.info(`${name} plans coming soon! Stay tuned.`);
  };

  return (
    <section className="px-6 md:px-12 lg:px-24 py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold text-[#0088CC] uppercase tracking-wider mb-3">
            Compare Plans
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1A1A4E] mb-4"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Choose from Top Health Insurers
          </h2>
          <p className="text-base text-[#64748B] max-w-2xl leading-relaxed">
            Select an insurance company to explore their best health insurance plans. Compare features, coverage, and find the perfect fit for your family.
          </p>
        </div>

        {/* Company Tabs — dynamically rendered from activeInsurers */}
        <div className="flex flex-wrap gap-3 mb-12">
          {activeInsurers.map((insurerId) => {
            const profile = insurerProfiles[insurerId];
            const isSelected = selectedInsurer === insurerId;
            return (
              <button
                key={insurerId}
                onClick={() => setSelectedInsurer(insurerId)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border-2 ${
                  isSelected
                    ? "border-[#0088CC] bg-[#0088CC]/5 text-[#0088CC] shadow-[0_0_20px_rgba(0,136,204,0.15)]"
                    : "border-gray-200 text-[#475569] hover:border-[#0088CC]/30"
                }`}
                style={{ transitionProperty: "border-color, background-color, box-shadow", transitionDuration: "300ms" }}
              >
                <Building2 className="w-4 h-4" />
                {profile?.tabLabel || profile?.name || insurerId}
              </button>
            );
          })}

          {/* Coming Soon insurers */}
          {comingSoonInsurers.map((ins) => (
            <button
              key={ins.id}
              onClick={() => handleComingSoon(ins.name)}
              className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border-2 border-gray-200 hover:border-gray-300 cursor-pointer"
              style={{
                color: ins.color,
                transitionProperty: "border-color, background-color",
                transitionDuration: "300ms",
              }}
            >
              <Building2 className="w-4 h-4" />
              {ins.name}
            </button>
          ))}
        </div>

        {/* Content: Insurer Description + Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Insurer Brief */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-gray-100 sticky top-28">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100">
                  <Building2 className="w-6 h-6" style={{ color: accentColor }} />
                </div>
                <div>
                  <h3
                    className="text-lg font-bold text-[#1A1A4E]"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {insurer.name}
                  </h3>
                  <p className="text-xs text-[#64748B]">Est. {insurer.established} • {insurer.headquarters}</p>
                </div>
              </div>

              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                {insurer.description}
              </p>

              <div className="space-y-3">
                {insurer.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span className="text-sm text-[#334155] font-medium">{h}</span>
                  </div>
                ))}
              </div>

              {whyBlurb && (
                <div
                  className="mt-8 p-4 rounded-xl border"
                  style={{
                    backgroundColor: `${whyBlurb.color}08`,
                    borderColor: `${whyBlurb.color}18`,
                  }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-1"
                    style={{ color: whyBlurb.color }}
                  >
                    {whyBlurb.title}
                  </p>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {whyBlurb.text}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right: Plan Cards */}
          <div className="lg:col-span-8 space-y-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="group bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-gray-200 cursor-pointer relative overflow-hidden"
                style={{ transitionProperty: "box-shadow, border-color", transitionDuration: "300ms" }}
                onClick={() => navigate(`/health-insurance/plans/${plan.id}`)}
              >
                {/* Decorative accent */}
                <div
                  className="absolute top-0 left-0 w-1.5 h-full rounded-l-2xl"
                  style={{ backgroundColor: plan.color }}
                />

                <div className="pl-4">
                  {/* Plan Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3
                          className="text-xl font-bold text-[#1A1A4E]"
                          style={{ fontFamily: "Outfit, sans-serif" }}
                        >
                          {plan.name}
                        </h3>
                        {plan.id === "super-star" && (
                          <span className="px-2.5 py-0.5 bg-[#8B5CF6]/10 text-[#8B5CF6] text-[10px] font-bold uppercase tracking-wider rounded-full">
                            Premium
                          </span>
                        )}
                        {plan.id === "hdfc-click2protect-health" && (
                          <span className="px-2.5 py-0.5 bg-[#004B87]/10 text-[#004B87] text-[10px] font-bold uppercase tracking-wider rounded-full">
                            Combo
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-[#64748B] leading-relaxed max-w-lg">
                        {plan.description}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs text-[#94A3B8] uppercase tracking-wider mb-1">Sum Insured</p>
                      <p className="text-lg font-bold text-[#1A1A4E]" style={{ fontFamily: "Outfit, sans-serif" }}>
                        {plan.sumInsuredRange}
                      </p>
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {plan.cardHighlights.slice(0, 6).map((h, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: plan.bgColor }}>
                          <CheckCircle className="w-3 h-3" style={{ color: plan.color }} />
                        </div>
                        <span className="text-sm text-[#475569]">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Quick Stats */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="px-3 py-1.5 bg-[#F0FDF4] rounded-lg">
                      <span className="text-xs text-[#10B981] font-semibold">
                        Bonus: {plan.cumulativeBonus?.includes("50%") ? "50%" : "25%"}/yr
                      </span>
                    </div>
                    <div className="px-3 py-1.5 bg-[#F0F9FF] rounded-lg">
                      <span className="text-xs text-[#0088CC] font-semibold">
                        {plan.copay ? "Co-pay Applicable" : "No Mandatory Co-pay"}
                      </span>
                    </div>
                    <div className="px-3 py-1.5 bg-[#FFF7ED] rounded-lg">
                      <span className="text-xs text-[#F59E0B] font-semibold">
                        {plan.maxFamilySize?.split("(")[0]?.trim() || "Family Cover"}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    className="bg-[#1A1A4E] hover:bg-[#1A1A4E]/90 text-white rounded-full px-6 h-10 text-sm font-semibold group-hover:shadow-md"
                    style={{ transitionProperty: "box-shadow", transitionDuration: "300ms" }}
                  >
                    View Full Details
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
