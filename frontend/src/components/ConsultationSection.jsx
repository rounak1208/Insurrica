import { useState } from "react";
import { MessageSquare, Video, UserCheck, Bot, ChevronRight, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const aiOptions = [
  {
    id: "chat-ai",
    icon: Bot,
    title: "Chat with AI",
    description: "Ask quick text-based questions about insurance plans, coverage details, and claims.",
    iconBg: "bg-[#ECFDF5]",
    iconColor: "text-[#10B981]",
  },
  {
    id: "talk-ai",
    icon: MessageSquare,
    title: "Talk to AI",
    description: "Interact with an AI agent seemlessly through a simple phone call based conversation.",
    iconBg: "bg-[#E0F2FE]",
    iconColor: "text-[#0088CC]",
  },
  {
    id: "video-ai",
    icon: Video,
    title: "Video Call with AI",
    description: "Get a personalized video call assisted walkthrough of plans with our AI-powered advisor.",
    iconBg: "bg-[#F5F3FF]",
    iconColor: "text-[#8B5CF6]",
  },
];

export const ConsultationSection = () => {
  const [aiExpanded, setAiExpanded] = useState(false);

  return (
    <section className="px-6 md:px-12 lg:px-24 py-20 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#0369A1] uppercase tracking-wider mb-3">
            Need Help Deciding?
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1A1A4E] mb-4"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Talk to an Expert
          </h2>
          <p className="text-base text-[#64748B] max-w-xl mx-auto leading-relaxed">
            Choose how you'd like to get personalized insurance guidance.
          </p>
        </div>

        {/* Two cards side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* AI Consultation Card (expandable) */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-[#0088CC]/15" style={{ transitionProperty: "box-shadow, border-color", transitionDuration: "300ms" }}>
            {/* Main card content */}
            <div
              className="p-8 cursor-pointer"
              onClick={() => {
                setAiExpanded(!aiExpanded);
                if (!aiExpanded) {
                  toast.info("AI Consultation is coming soon! Explore the options below.");
                }
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0088CC]/10 to-[#8B5CF6]/10 flex items-center justify-center shrink-0">
                    <Sparkles className="w-7 h-7 text-[#0088CC]" />
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold text-[#1A1A4E] mb-2"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      AI Powered Consultation
                    </h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      Get instant help with your insurance queries via chat, voice, or video - powered by AI.
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <span className="px-2.5 py-1 bg-[#F0F9FF] rounded-lg text-xs font-semibold text-[#0369A1]">Chat</span>
                      <span className="px-2.5 py-1 bg-[#F5F3FF] rounded-lg text-xs font-semibold text-[#7C3AED]">Voice</span>
                      <span className="px-2.5 py-1 bg-[#ECFDF5] rounded-lg text-xs font-semibold text-[#047857]">Video</span>
                    </div>
                  </div>
                </div>
                <div className={`w-8 h-8 rounded-full bg-[#F8FAFC] flex items-center justify-center shrink-0 mt-1 ${aiExpanded ? "rotate-180" : ""}`} style={{ transitionProperty: "transform", transitionDuration: "300ms" }}>
                  <ChevronDown className="w-4 h-4 text-[#94A3B8]" />
                </div>
              </div>
            </div>

            {/* Expanded AI options */}
            <div
              className="overflow-hidden"
              style={{
                maxHeight: aiExpanded ? "600px" : "0",
                transitionProperty: "max-height",
                transitionDuration: "400ms",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              <div className="px-8 pb-8 space-y-3 border-t border-gray-50 pt-5">
                {aiOptions.map((opt) => {
                  const Icon = opt.icon;
                  return (
                    <div
                      key={opt.id}
                      className="flex items-center gap-4 p-4 rounded-xl bg-[#F8FAFC] hover:bg-[#F0F9FF] group cursor-pointer"
                      style={{ transitionProperty: "background-color", transitionDuration: "200ms" }}
                      onClick={(e) => { e.stopPropagation(); toast.info(`${opt.title} is coming soon! Stay tuned.`); }}
                    >
                      <div className={`w-10 h-10 rounded-xl ${opt.iconBg} flex items-center justify-center shrink-0`}>
                        <Icon className={`w-5 h-5 ${opt.iconColor}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-[#1A1A4E] text-sm">{opt.title}</h4>
                        <p className="text-xs text-[#64748B] leading-relaxed mt-0.5">{opt.description}</p>
                      </div>
                      <span className="text-xs text-[#94A3B8] font-medium italic shrink-0">Soon</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Meet Agent Card */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-lg hover:border-[#FF9F1C]/15 flex flex-col" style={{ transitionProperty: "box-shadow, border-color", transitionDuration: "300ms" }}>
            <div className="flex items-start gap-5 flex-1">
              <div className="w-14 h-14 rounded-2xl bg-[#FFF7ED] flex items-center justify-center shrink-0">
                <UserCheck className="w-7 h-7 text-[#FF9F1C]" />
              </div>
              <div>
                <h3
                  className="text-xl font-bold text-[#1A1A4E] mb-2"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  Meet an Expert
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Book a face-to-face meeting with a certified insurance expert near you. Get personalized guidance and compare plans in person.
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <span className="px-2.5 py-1 bg-[#FFF7ED] rounded-lg text-xs font-semibold text-[#B45309]">In-person</span>
                  <span className="px-2.5 py-1 bg-[#FFF7ED] rounded-lg text-xs font-semibold text-[#B45309]">Expert</span>
                </div>
              </div>
            </div>

            <Button
              disabled
              className="w-full bg-[#FF9F1C] hover:bg-[#FF9F1C]/90 text-[#1A1A4E] rounded-full h-12 font-bold opacity-80 cursor-not-allowed mt-8"
            >
              Book Meeting
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
            <p className="text-xs text-[#64748B] italic text-center mt-3">Coming Soon</p>
          </div>

        </div>
      </div>
    </section>
  );
};
