import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowRight, ArrowLeft, CheckCircle, Phone, Clock, Shield, AlertTriangle,
  Sparkles, Star, BadgePercent, ShieldPlus
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useLeadForm } from "../hooks/useLeadForm";
import { healthInsurancePlans, insurerProfiles } from "../lib/starHealthPlans";
import { ConsultationSection } from "../components/ConsultationSection";

export const PlanDetailPage = () => {
  const { planId } = useParams();
  const navigate = useNavigate();
  const plan = healthInsurancePlans[planId];

  const {
    name, setName,
    phone, handlePhoneChange,
    loading, submitted,
    handleSubmit,
  } = useLeadForm({ defaultProduct: "health" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [planId]);

  if (!plan) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <h2 className="text-2xl font-bold text-[#1A1A4E] mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>
          Plan Not Found
        </h2>
        <p className="text-[#64748B] mb-6">The plan you're looking for doesn't exist.</p>
        <Button onClick={() => navigate("/health-insurance")} className="bg-[#0088CC] text-white rounded-full">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Health Insurance
        </Button>
      </div>
    );
  }

  const insurer = insurerProfiles[plan.insurerId];

  return (
    <div className="bg-[#F8FAFC] pb-24">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at top right, ${plan.color}, transparent 60%)` }} />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <button
            onClick={() => navigate("/health-insurance")}
            className="flex items-center gap-2 text-sm text-[#64748B] hover:text-[#0088CC] mb-8 group"
            style={{ transitionProperty: "color", transitionDuration: "200ms" }}
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1" style={{ transitionProperty: "transform", transitionDuration: "200ms" }} />
            Back to Health Insurance
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Plan Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: plan.bgColor }}>
                  <Star className="w-5 h-5" style={{ color: plan.color }} />
                </div>
                <span className="text-sm text-[#64748B] font-medium">{insurer.name}</span>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A4E] leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
                    {plan.name}
                  </h1>
                  {plan.id === "super-star" && (
                    <span className="px-3 py-1 bg-[#8B5CF6]/10 text-[#8B5CF6] text-xs font-bold uppercase tracking-wider rounded-full">
                      Premium
                    </span>
                  )}
                </div>
                <p className="text-sm text-[#94A3B8] mb-3">UIN: {plan.uin}</p>
                <p className="text-base text-[#64748B] leading-relaxed max-w-xl">{plan.tagline}</p>
              </div>

              {/* Quick Stats Row */}
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="bg-[#F8FAFC] border border-gray-100 rounded-xl px-4 py-3 text-center">
                  <p className="text-xs text-[#94A3B8] uppercase tracking-wider">Sum Insured</p>
                  <p className="text-sm font-bold text-[#1A1A4E] mt-1">{plan.sumInsuredRange}</p>
                </div>
                <div className="bg-[#F8FAFC] border border-gray-100 rounded-xl px-4 py-3 text-center">
                  <p className="text-xs text-[#94A3B8] uppercase tracking-wider">Entry Age</p>
                  <p className="text-sm font-bold text-[#1A1A4E] mt-1">{plan.entryAge.adults}</p>
                </div>
                <div className="bg-[#F8FAFC] border border-gray-100 rounded-xl px-4 py-3 text-center">
                  <p className="text-xs text-[#94A3B8] uppercase tracking-wider">Family Size</p>
                  <p className="text-sm font-bold text-[#1A1A4E] mt-1">{plan.maxFamilySize.split("(")[0].trim()}</p>
                </div>
              </div>
            </div>

            {/* Lead Form */}
            <div className="lg:justify-self-end w-full max-w-md">
              <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A4E]" style={{ fontFamily: "Outfit, sans-serif" }}>Get a Free Quote</h3>
                  <p className="text-sm text-[#64748B] mt-1">Our expert will find the best {plan.name} plan for you.</p>
                </div>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-8 space-y-4">
                    <div className="w-16 h-16 bg-[#10B981]/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-[#10B981]" />
                    </div>
                    <p className="text-lg font-semibold text-[#1A1A4E]">Thank You!</p>
                    <p className="text-sm text-[#64748B] text-center">Our insurance expert will reach out shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => handleSubmit(e, { insuranceProduct: `health-${plan.id}`, requireProduct: false })} className="space-y-5">
                    <div className="space-y-2">
                      <Label className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">Full Name</Label>
                      <Input placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} className="bg-[#F8FAFC] border-transparent focus:bg-white focus:border-[#0088CC] focus:ring-4 focus:ring-[#0088CC]/10 rounded-xl h-12 px-4" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                        <Input type="tel" placeholder="10-digit mobile number" value={phone} onChange={(e) => handlePhoneChange(e.target.value)} className="bg-[#F8FAFC] border-transparent focus:bg-white focus:border-[#0088CC] focus:ring-4 focus:ring-[#0088CC]/10 rounded-xl h-12 pl-11 pr-4" />
                      </div>
                    </div>
                    <Button type="submit" disabled={loading} className="w-full bg-[#FF9F1C] hover:bg-[#FF9F1C]/90 text-[#1A1A4E] font-bold rounded-full h-12 shadow-[0_0_20px_rgba(255,159,28,0.3)] hover:shadow-[0_0_30px_rgba(255,159,28,0.5)]" style={{ transitionProperty: "box-shadow", transitionDuration: "300ms" }}>
                      {loading ? "Submitting..." : "Get Free Quote"}
                      {!loading && <ArrowRight className="w-4 h-4 ml-1" />}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mt-16 space-y-20">

        {/* Coverage Details */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: plan.bgColor }}>
              <ShieldPlus className="w-5 h-5" style={{ color: plan.color }} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A4E]" style={{ fontFamily: "Outfit, sans-serif" }}>
              What's Covered
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plan.coverageDetails.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-md group" style={{ transitionProperty: "box-shadow", transitionDuration: "300ms" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: plan.bgColor }}>
                    <Icon className="w-5 h-5" style={{ color: plan.color }} />
                  </div>
                  <h4 className="font-bold text-[#1A1A4E] mb-2 text-sm">{item.title}</h4>
                  <p className="text-sm text-[#64748B] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bonus & Restoration */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#F0FDF4] border border-[#10B981]/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-[#10B981]" />
              <h3 className="text-lg font-bold text-[#1A1A4E]" style={{ fontFamily: "Outfit, sans-serif" }}>Cumulative Bonus</h3>
            </div>
            <p className="text-sm text-[#475569] leading-relaxed">{plan.cumulativeBonus}</p>
          </div>
          <div className="bg-[#F0F9FF] border border-[#0088CC]/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-[#0088CC]" />
              <h3 className="text-lg font-bold text-[#1A1A4E]" style={{ fontFamily: "Outfit, sans-serif" }}>Sum Insured Restoration</h3>
            </div>
            <p className="text-sm text-[#475569] leading-relaxed">{plan.restoration}</p>
          </div>
        </section>

        {/* Waiting Periods */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#FFF7ED] flex items-center justify-center">
              <Clock className="w-5 h-5 text-[#F59E0B]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A4E]" style={{ fontFamily: "Outfit, sans-serif" }}>
              Waiting Periods
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            {plan.waitingPeriods.map((wp, idx) => (
              <div key={idx} className={`flex items-start gap-4 p-6 ${idx !== plan.waitingPeriods.length - 1 ? "border-b border-gray-100" : ""}`}>
                <div className="px-3 py-1.5 bg-[#FFF7ED] rounded-lg shrink-0">
                  <span className="text-sm font-bold text-[#F59E0B]">{wp.period}</span>
                </div>
                <p className="text-sm text-[#475569] leading-relaxed">{wp.description}</p>
              </div>
            ))}
          </div>
          {plan.copay && (
            <div className="mt-4 p-4 bg-[#FEF2F2] rounded-xl border border-[#EF4444]/10 flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-[#EF4444] mt-0.5 shrink-0" />
              <p className="text-sm text-[#64748B]"><span className="font-semibold text-[#1A1A4E]">Co-payment:</span> {plan.copay}</p>
            </div>
          )}
        </section>

        {/* Discounts */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#F0FDF4] flex items-center justify-center">
              <BadgePercent className="w-5 h-5 text-[#10B981]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A4E]" style={{ fontFamily: "Outfit, sans-serif" }}>
              Available Discounts
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {plan.discounts.map((d, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-100 p-5 flex gap-4">
                <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-[#1A1A4E] text-sm mb-1">{d.name}</h4>
                  <p className="text-sm text-[#64748B]">{d.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Optional Covers (Super Star only) */}
        {plan.optionalCovers && (
          <section>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#F5F3FF] flex items-center justify-center">
                <ShieldPlus className="w-5 h-5 text-[#8B5CF6]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A4E]" style={{ fontFamily: "Outfit, sans-serif" }}>
                {plan.optionalCovers.length} Optional Covers
              </h2>
            </div>
            <p className="text-sm text-[#64748B] mb-8 ml-[52px]">Customize your policy with add-ons tailored to your needs, including Star Flexi packages.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {plan.optionalCovers.map((oc, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-gray-100 p-5">
                  <h4 className="font-bold text-[#1A1A4E] text-sm mb-1.5">{oc.name}</h4>
                  <p className="text-sm text-[#64748B] leading-relaxed">{oc.detail}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Additional Features */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#F0F9FF] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#0088CC]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A4E]" style={{ fontFamily: "Outfit, sans-serif" }}>
              Additional Benefits
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {plan.additionalFeatures.map((f, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#0088CC] mt-0.5 shrink-0" />
                  <span className="text-sm text-[#475569]">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Exclusions */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#FEF2F2] flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-[#EF4444]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A4E]" style={{ fontFamily: "Outfit, sans-serif" }}>
              Key Exclusions
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-8">
            <div className="space-y-3">
              {plan.keyExclusions.map((ex, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FEF2F2] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs text-[#EF4444] font-bold">✕</span>
                  </div>
                  <span className="text-sm text-[#475569]">{ex}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Options */}
        <ConsultationSection />

      </div>
    </div>
  );
};
