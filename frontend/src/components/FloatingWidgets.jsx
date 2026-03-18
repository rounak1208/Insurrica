import { Phone as PhoneIcon, MessageCircle } from "lucide-react";

const PHONE_NUMBER = "919727692000";
const DISPLAY_PHONE = "+91 97276 92000";

export const FloatingWidgets = () => {
  return (
    <div data-testid="floating-widgets" className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Widget */}
      <a
        href={`https://wa.me/${PHONE_NUMBER}?text=Hi%20Insurrica%2C%20I%27d%20like%20to%20know%20more%20about%20insurance%20plans.`}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="whatsapp-widget"
        className="group flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full pl-4 pr-5 h-12 shadow-lg hover:shadow-xl"
        style={{
          transitionProperty: "background-color, box-shadow",
          transitionDuration: "300ms",
        }}
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm font-semibold hidden sm:inline">WhatsApp</span>
      </a>

      {/* Click to Call Widget */}
      <a
        href={`tel:${DISPLAY_PHONE.replace(/\s/g, "")}`}
        data-testid="call-widget"
        className="group flex items-center gap-2 bg-[#0088CC] hover:bg-[#006fa8] text-white rounded-full pl-4 pr-5 h-12 shadow-lg hover:shadow-xl"
        style={{
          transitionProperty: "background-color, box-shadow",
          transitionDuration: "300ms",
        }}
        title="Call Us"
      >
        <PhoneIcon className="w-5 h-5" />
        <span className="text-sm font-semibold hidden sm:inline">Call Now</span>
      </a>
    </div>
  );
};
