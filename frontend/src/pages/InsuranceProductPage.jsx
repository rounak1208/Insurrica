import { useState } from "react";
import { ArrowRight, CheckCircle, Phone, HelpCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import axios from "axios";

const API = (process.env.REACT_APP_BACKEND_URL && process.env.REACT_APP_BACKEND_URL !== "undefined") ? `${process.env.REACT_APP_BACKEND_URL}/api` : "http://localhost:8000/api";

export const InsuranceProductPage = ({ data }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Re-scroll to top when component receives new data (i.e. navigation)
  useState(() => {
    window.scrollTo(0, 0);
  }, [data.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone) {
      toast.error("Please fill in all fields");
      return;
    }
    if (phone.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/leads`, {
        name,
        phone,
        insurance_product: data.id,
      });
      setSubmitted(true);
      toast.success("We'll call you back shortly!");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F8FAFC] pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at top right, ${data.color}, transparent 60%)` }} />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold" style={{ backgroundColor: data.bgColor, color: data.color }}>
              {data.tagline}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A4E] leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
              {data.title}
            </h1>
            <p className="text-lg text-[#64748B] leading-relaxed max-w-lg">
              {data.subtitle}
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200" />
                ))}
              </div>
              <p className="text-sm text-[#475569]">
                Trusted by <span className="font-bold text-[#1A1A4E]">1M+</span> families
              </p>
            </div>
          </div>

          <div className="lg:justify-self-end w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 p-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#1A1A4E]" style={{ fontFamily: "Outfit, sans-serif" }}>Get a Free Quote Now</h3>
                <p className="text-sm text-[#64748B] mt-1">Our experts will find the best {data.title} plan for you.</p>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-[#10B981]/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-[#10B981]" />
                  </div>
                  <p className="text-lg font-semibold text-[#1A1A4E]">Thank You!</p>
                  <p className="text-sm text-[#64748B] text-center">Our insurance expert will reach out to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">Full Name</Label>
                    <Input
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-[#F8FAFC] border-transparent focus:bg-white focus:border-[#0088CC] focus:ring-4 focus:ring-[#0088CC]/10 rounded-xl h-12 px-4"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                      <Input
                        type="tel"
                        placeholder="Enter 10-digit mobile number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                        className="bg-[#F8FAFC] border-transparent focus:bg-white focus:border-[#0088CC] focus:ring-4 focus:ring-[#0088CC]/10 rounded-xl h-12 pl-11 pr-4"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#FF9F1C] hover:bg-[#FF9F1C]/90 text-[#1A1A4E] font-bold rounded-full h-12 shadow-[0_0_20px_rgba(255,159,28,0.3)] hover:shadow-[0_0_30px_rgba(255,159,28,0.5)] transition-shadow duration-300"
                  >
                    {loading ? "Submitting..." : "Get Free Quote"}
                    {!loading && <ArrowRight className="w-4 h-4 ml-1" />}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mt-20 grid grid-cols-1 lg:grid-cols-3 gap-16">

        {/* Left Comprehensive Info */}
        <div className="lg:col-span-2 space-y-16">

          {/* Features Grid */}
          <section>
            <h2 className="text-2xl font-bold text-[#1A1A4E] mb-8" style={{ fontFamily: "Outfit, sans-serif" }}>
              Key Features of {data.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {data.features.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: data.bgColor }}>
                      <Icon className="w-6 h-6" style={{ color: data.color }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1A1A4E] mb-2">{item.title}</h4>
                      <p className="text-sm text-[#64748B] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Why Choose Section */}
          <section>
            <h2 className="text-2xl font-bold text-[#1A1A4E] mb-8" style={{ fontFamily: "Outfit, sans-serif" }}>
              Why Buy {data.title}?
            </h2>
            <div className="space-y-6">
              {data.whyChoose.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#E0F2FE] flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-[#0088CC]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A4E] text-lg mb-2">{item.title}</h4>
                    <p className="text-[#64748B] leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Right Sidebar */}
        <div className="space-y-12">

          {/* Riders Section */}
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-[#1A1A4E] mb-6" style={{ fontFamily: "Outfit, sans-serif" }}>
              Popular Riders / Add-ons
            </h2>
            <div className="space-y-6">
              {data.riders.map((item, idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-[#1A1A4E] text-sm mb-1">{item.title}</h4>
                  <p className="text-sm text-[#64748B]">{item.desc}</p>
                  {idx !== data.riders.length - 1 && <div className="h-px w-full bg-gray-100 mt-4" />}
                </div>
              ))}
            </div>
          </section>

          {/* Support Banner */}
          <section className="p-8 rounded-3xl" style={{ backgroundColor: data.bgColor }}>
            <h3 className="text-xl font-bold text-[#1A1A4E] mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>
              Need Help Deciding?
            </h3>
            <p className="text-[#64748B] text-sm mb-6">Our experts are available 24x7 to guide you through the process.</p>
            <Button className="w-full bg-[#1A1A4E] hover:bg-[#1A1A4E]/90 text-white rounded-full">
              Request a Callback
            </Button>
          </section>

        </div>
      </div>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 mt-24">
        <div className="text-center mb-12">
          <HelpCircle className="w-12 h-12 text-[#0088CC] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-[#1A1A4E]" style={{ fontFamily: "Outfit, sans-serif" }}>
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-6">
          {data.faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-[#1A1A4E] text-lg mb-3">{faq.q}</h4>
              <p className="text-[#64748B] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
