import { useEffect, useLayoutEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowRight, ArrowLeft, CheckCircle, Phone, Clock, Shield, AlertTriangle,
  Sparkles, Star, BadgePercent, ShieldPlus
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useLeadForm } from "../hooks/useLeadForm";
import { healthInsurancePlans, insurerProfiles } from "../lib/plans";
import { ConsultationSection } from "../components/ConsultationSection";
import { ScrollReveal } from "../components/ScrollReveal";

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

  useLayoutEffect(() => {
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
    <div key={planId} className="bg-[#F8FAFC] pb-24">
      {/* Hero Section - Immediate Animation */}
      <section className="relative pt-28 pb-20 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100 overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
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
            <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-1000 delay-200 fill-mode-both">
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
            <div className="lg:justify-self-end w-full max-w-md animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 fill-mode-both">
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
                      <Input placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} className="bg-[#F8FAFC] border-transparent focus:bg-white focus:border-[#0088CC] focus:ring-4 focus:ring-[#0088CC]/10 rounded-xl h-12 px-4 transition-all" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                        <Input type="tel" placeholder="10-digit mobile number" value={phone} onChange={(e) => handlePhoneChange(e.target.value)} className="bg-[#F8FAFC] border-transparent focus:bg-white focus:border-[#0088CC] focus:ring-4 focus:ring-[#0088CC]/10 rounded-xl h-12 pl-11 pr-4 transition-all" />
                      </div>
                    </div>
                    <Button type="submit" disabled={loading} className="w-full bg-[#FF9F1C] hover:bg-[#FF9F1C]/90 text-[#1A1A4E] font-bold rounded-full h-12 shadow-[0_0_20px_rgba(255,159,28,0.3)] hover:shadow-[0_0_30px_rgba(255,159,28,0.5)] transition-all active:scale-95">
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
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mt-16 space-y-24">

        {/* Coverage Details */}
        <section>
          <ScrollReveal className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: plan.bgColor }}>
              <ShieldPlus className="w-5 h-5" style={{ color: plan.color }} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A4E]" style={{ fontFamily: "Outfit, sans-serif" }}>
              What's Covered
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plan.coverageDetails.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollReveal 
                  key={idx} 
                  delay={idx * 50}
                  className="h-full"
                >
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group h-full">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110" style={{ backgroundColor: plan.bgColor }}>
                      <Icon className="w-6 h-6" style={{ color: plan.color }} />
                    </div>
                    <h4 className="font-bold text-[#1A1A4E] mb-3 text-base">{item.title}</h4>
                    <p className="text-sm text-[#64748B] leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* Bonus & Restoration */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal delay={100} className="h-full">
            <div className="bg-[#F0FDF4] border border-[#10B981]/10 rounded-3xl p-10 hover:shadow-lg transition-all h-full group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                  <Sparkles className="w-7 h-7 text-[#10B981]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A4E]" style={{ fontFamily: "Outfit, sans-serif" }}>Cumulative Bonus</h3>
              </div>
              <p className="text-base text-[#475569] leading-relaxed">{plan.cumulativeBonus}</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={300} className="h-full">
            <div className="bg-[#F0F9FF] border border-[#0088CC]/10 rounded-3xl p-10 hover:shadow-lg transition-all h-full group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                  <Shield className="w-7 h-7 text-[#0088CC]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A4E]" style={{ fontFamily: "Outfit, sans-serif" }}>Sum Insured Restoration</h3>
              </div>
              <p className="text-base text-[#475569] leading-relaxed">{plan.restoration}</p>
            </div>
          </ScrollReveal>
        </section>

        {/* Waiting Periods */}
        <section>
          <ScrollReveal className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-[#FFF7ED] flex items-center justify-center">
              <Clock className="w-5 h-5 text-[#F59E0B]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A4E]" style={{ fontFamily: "Outfit, sans-serif" }}>
              Waiting Periods
            </h2>
          </ScrollReveal>
          
          <ScrollReveal className="bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500">
            {plan.waitingPeriods.map((wp, idx) => (
              <div key={idx} className={`flex items-start gap-6 p-8 ${idx !== plan.waitingPeriods.length - 1 ? "border-b border-gray-100" : ""} hover:bg-gray-50/50 transition-colors group`}>
                <div className="px-4 py-2 bg-[#FFF7ED] rounded-xl shrink-0 group-hover:scale-105 transition-transform">
                  <span className="text-sm font-bold text-[#F59E0B] whitespace-nowrap">{wp.period}</span>
                </div>
                <p className="text-base text-[#475569] leading-relaxed">{wp.description}</p>
              </div>
            ))}
          </ScrollReveal>
          
          {plan.copay && (
            <ScrollReveal delay={500} className="mt-6 p-5 bg-[#FEF2F2] rounded-2xl border border-[#EF4444]/10 flex items-center gap-4">
              <AlertTriangle className="w-6 h-6 text-[#EF4444] shrink-0" />
              <p className="text-base text-[#64748B]"><span className="font-bold text-[#1A1A4E]">Co-payment:</span> {plan.copay}</p>
            </ScrollReveal>
          )}
        </section>

        {/* Discounts */}
        <section>
          <ScrollReveal className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-[#F0FDF4] flex items-center justify-center">
              <BadgePercent className="w-5 h-5 text-[#10B981]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A4E]" style={{ fontFamily: "Outfit, sans-serif" }}>
              Available Discounts
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {plan.discounts.map((d, idx) => (
              <ScrollReveal key={idx} delay={idx * 75}>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 flex gap-5 hover:shadow-xl hover:-translate-y-1 transition-all group h-full">
                  <div className="w-10 h-10 rounded-full bg-[#F0FDF4] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-6 h-6 text-[#10B981]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A4E] text-base mb-2">{d.name}</h4>
                    <p className="text-sm text-[#64748B] leading-relaxed">{d.detail}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Optional Covers (Super Star only) */}
        {plan.optionalCovers && (
          <section>
            <ScrollReveal className="mb-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#F5F3FF] flex items-center justify-center">
                  <ShieldPlus className="w-5 h-5 text-[#8B5CF6]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A4E]" style={{ fontFamily: "Outfit, sans-serif" }}>
                  {plan.optionalCovers.length} Optional Covers
                </h2>
              </div>
              <p className="text-base text-[#64748B] ml-[52px]">Customize your policy with add-ons tailored to your needs.</p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {plan.optionalCovers.map((oc, idx) => (
                <ScrollReveal key={idx} delay={idx * 50}>
                  <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all h-full">
                    <h4 className="font-bold text-[#1A1A4E] text-base mb-3">{oc.name}</h4>
                    <p className="text-sm text-[#64748B] leading-relaxed">{oc.detail}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}

        {/* Additional Features */}
        <section>
          <ScrollReveal className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-[#F0F9FF] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#0088CC]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A4E]" style={{ fontFamily: "Outfit, sans-serif" }}>
              Additional Benefits
            </h2>
          </ScrollReveal>
          
          <ScrollReveal className="bg-white rounded-3xl border border-gray-100 p-10 hover:shadow-xl transition-all">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {plan.additionalFeatures.map((f, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-[#F0F9FF] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#0088CC] transition-colors">
                    <CheckCircle className="w-4 h-4 text-[#0088CC] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-base text-[#475569] leading-relaxed group-hover:text-[#1A1A4E] transition-colors">{f}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* Key Exclusions */}
        <section>
          <ScrollReveal className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-[#FEF2F2] flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-[#EF4444]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A4E]" style={{ fontFamily: "Outfit, sans-serif" }}>
              Key Exclusions
            </h2>
          </ScrollReveal>
          
          <ScrollReveal className="bg-white rounded-3xl border border-gray-100 p-10 hover:shadow-xl transition-all border-t-8 border-t-[#EF4444]/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {plan.keyExclusions.map((ex, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-[#FEF2F2] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#EF4444] group-hover:rotate-12 transition-all">
                    <span className="text-xs text-[#EF4444] font-bold group-hover:text-white transition-colors">✕</span>
                  </div>
                  <span className="text-base text-[#475569] leading-relaxed group-hover:text-[#1A1A4E] transition-colors">{ex}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* Consultation Options */}
        <ScrollReveal threshold={0.05}>
          <ConsultationSection />
        </ScrollReveal>

      </div>
    </div>
  );
};
