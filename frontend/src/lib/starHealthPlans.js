import {
  Heart, Shield, Clock, Zap, BadgeCheck, FileText, Users, Activity,
  HeartPulse, ShieldAlert, PlusSquare, Stethoscope, Pill, Syringe,
  Baby, Sparkles, RefreshCw, Star
} from "lucide-react";

/**
 * Health insurance plan data extracted from Star Health Insurance PDFs.
 *
 * Sources:
 *   - Star Health Assure: Brochure V5, Policy V9, Prospectus V3
 *   - Super Star: Brochure V2, Policy V3, Prospectus V2
 */

export const insurerProfiles = {
  "star-health": {
    id: "star-health",
    name: "Star Health Insurance",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Star_Health_Logo.svg/200px-Star_Health_Logo.svg.png",
    tagline: "India's first standalone health insurance company",
    description: "Star Health and Allied Insurance Co. Ltd., headquartered in Chennai, began operations in 2006 as India's first standalone Health Insurance provider. With a network of 14,000+ hospitals, they serve lakhs of families across India with innovative health, personal accident, and travel insurance products.",
    highlights: [
      "14,000+ Network Hospitals",
      "IRDAI Registered (Reg. No. 129)",
      "24/7 Claims Assistance",
      "Free Tele-health Consultations",
    ],
    established: 2006,
    headquarters: "Chennai",
  },
};

export const healthInsurancePlans = {
  "star-health-assure": {
    id: "star-health-assure",
    insurerId: "star-health",
    name: "Star Health Assure",
    fullName: "Star Health Assure Insurance Policy",
    uin: "SHAHLIP26048V032526",
    tagline: "Comprehensive family health protection with new-age features",
    description: "A feature-rich health insurance plan with automatic Sum Insured restoration, wellness rewards, and coverage for up to 9 family members including parents and parents-in-law.",
    color: "#EF4444",
    bgColor: "#FEF2F2",

    // Card highlights (shown on comparison cards)
    cardHighlights: [
      "Sum Insured up to ₹2 Crore",
      "Any Room (₹10L+ SI)",
      "Unlimited SI Restoration",
      "Up to 9 family members",
      "Wellness discount up to 20%",
    ],

    // Sum Insured
    sumInsuredRange: "₹5 Lakh – ₹2 Crore",
    sumInsuredOptions: ["₹5L", "₹7.5L", "₹10L", "₹15L", "₹20L", "₹25L", "₹50L", "₹75L", "₹1Cr", "₹2Cr"],

    // Eligibility
    entryAge: {
      adults: "18 – 75 years",
      children: "16 days – 25 years",
      note: "SI up to ₹2Cr available for entry up to 65 years. Above 65 years, SI restricted to ₹50L.",
    },
    familyDefinition: "Self + Spouse + Children + Parents + Parents-in-law",
    maxFamilySize: "6 Adults + 3 Children (up to 9 members)",
    policyTerm: "1 / 2 / 3 years",

    // Key Coverage
    coverageDetails: [
      {
        title: "In-Patient Hospitalization",
        desc: "Full coverage for hospitalization expenses including room rent, surgeon fees, ICU, medicines, diagnostics, and surgical appliances up to Sum Insured.",
        icon: HeartPulse,
      },
      {
        title: "Room Rent",
        desc: "₹5-7.5L SI: Up to 1% of SI/day. ₹10-25L SI: Any Room (except suite). ₹50L+ SI: Any Room.",
        icon: Shield,
      },
      {
        title: "Day Care Procedures",
        desc: "All Day Care treatments requiring less than 24-hour hospitalization are covered up to Sum Insured.",
        icon: Activity,
      },
      {
        title: "Pre & Post Hospitalization",
        desc: "60 days pre-hospitalization and 180 days post-hospitalization expenses covered.",
        icon: Clock,
      },
      {
        title: "Modern Treatments",
        desc: "Coverage for robotic surgeries, immunotherapy, stem cell therapy, oral chemotherapy, and more.",
        icon: Zap,
      },
      {
        title: "AYUSH Treatment",
        desc: "In-patient treatment under Ayurveda, Unani, Siddha, and Homeopathy covered up to Sum Insured.",
        icon: Pill,
      },
      {
        title: "Organ Donor Expenses",
        desc: "Transplantation expenses from Donor to Insured covered over and above the Sum Insured.",
        icon: Heart,
      },
      {
        title: "Home Care Treatment",
        desc: "Treatment at home for specified conditions covered up to 10% of SI (max ₹5 Lakh per year).",
        icon: PlusSquare,
      },
      {
        title: "Delivery & Newborn Cover",
        desc: "Delivery expenses up to 10% of SI (24-month waiting). Newborn treatment from Day 1 up to ₹2-4L.",
        icon: Baby,
      },
      {
        title: "Ambulance Cover",
        desc: "Road ambulance for hospital transport. Air ambulance up to 10% of Sum Insured per year.",
        icon: Syringe,
      },
      {
        title: "Rehabilitation & Pain Management",
        desc: "Up to 20% of SI for rehabilitation (poly trauma, head injury, stroke, spine) and pain management.",
        icon: Stethoscope,
      },
      {
        title: "Assisted Reproduction",
        desc: "IVF/ART coverage: ₹1L (up to ₹7.5L SI), ₹2L (₹10-25L SI), ₹4L (₹50L+ SI). 24-month wait.",
        icon: Sparkles,
      },
    ],

    // Bonus & Restoration
    cumulativeBonus: "25% of Sum Insured per claim-free year, maximum up to 100%",
    restoration: "Automatic unlimited restoration of 100% Sum Insured after each claim for subsequent hospitalization",

    // Waiting Periods
    waitingPeriods: [
      { period: "30 days", description: "Initial waiting period for all illnesses (accidents covered from Day 1)" },
      { period: "24 months", description: "Specific diseases/procedures: Cataract, ENT, Thyroid, Hernia, Joint Replacement, Gallbladder, Kidney Stones, Varicose Veins, etc." },
      { period: "36 months", description: "Pre-existing diseases (30 months for 3-year policy term)" },
      { period: "24 months", description: "Delivery Expenses, Assisted Reproduction, In Utero Fetal Surgery" },
    ],

    // Co-payment
    copay: "10% co-payment for insured persons with entry age 61 years and above",

    // Discounts
    discounts: [
      { name: "Floater Discount", detail: "40% for child (on becoming 18), 10% per parent added" },
      { name: "Long-Term Discount", detail: "10% on 2nd and 3rd year premium" },
      { name: "Early Entry Discount", detail: "5% one-time discount for entry age up to 45 years" },
      { name: "Wellness Discount", detail: "Up to 20% based on wellness points (200-1000 points)" },
      { name: "Deductible Discount", detail: "Up to 55% discount by choosing ₹50K or ₹1L aggregate deductible" },
    ],

    // Additional Features
    additionalFeatures: [
      "Unlimited Tele-Consultation via Star Health App",
      "AI-driven Face Scan (heart rate, oxygen, respiration)",
      "E-Domestic Second Medical Opinion",
      "Preventive Health Check-up",
      "Compassionate Travel (₹10,000 for family member)",
      "Repatriation of Mortal Remains (₹15,000)",
      "Coverage for Consumables",
      "Treatment in Valuable Service Provider Network bonus",
      "Shared Accommodation allowance (₹1,000/day)",
      "Instalment payment (Monthly/Quarterly/Half-yearly)",
    ],

    // Key Exclusions (customer-relevant summary)
    keyExclusions: [
      "Cosmetic/plastic surgery (unless post-accident or cancer)",
      "Dental treatment (unless due to accident requiring hospitalization)",
      "Obesity surgery (unless BMI ≥ 40 or ≥ 35 with co-morbidities)",
      "Adventure/hazardous sports injuries",
      "Treatment for alcoholism or substance abuse",
      "Unproven or experimental treatments",
      "Refractive error correction (below 7.5 dioptres)",
    ],
  },

  "super-star": {
    id: "super-star",
    insurerId: "star-health",
    name: "Super Star",
    fullName: "Super Star Health Insurance Policy",
    uin: "SHAHLIP25036V012425",
    tagline: "Future ke har move, Covered! — No limits, just benefits",
    description: "Star Health's premium, fully customizable health insurance with Unlimited Sum Insured option, Freeze Your Age feature, Star Flexi add-on packages (Preferred & Secure), no mandatory co-payment, and Any Room eligibility at all Sum Insured levels.",
    color: "#8B5CF6",
    bgColor: "#F5F3FF",

    cardHighlights: [
      "Unlimited Sum Insured option",
      "Freeze Your Age — lock premiums",
      "Any Room at ALL SI levels",
      "No mandatory co-payment",
      "Star Flexi add-on packages",
      "50% Cumulative Bonus/year",
      "Premium Return after 5 claim-free years",
    ],

    // Sum Insured
    sumInsuredRange: "₹5 Lakh – ₹1 Crore + Unlimited",
    sumInsuredOptions: ["₹5L", "₹7.5L", "₹10L", "₹15L", "₹20L", "₹25L", "₹50L", "₹1Cr", "Unlimited"],

    // Eligibility
    entryAge: {
      adults: "18 years – Any age (no upper limit)",
      children: "91 days – 25 years",
      note: "₹1Cr and Unlimited SI available only for entry up to 65 years.",
    },
    familyDefinition: "Self + Spouse / Live-in Partner + Dependent Children",
    maxFamilySize: "2 Adults + 4 Children (up to 6 members)",
    policyTerm: "1 / 2 / 3 / 4 / 5 years",

    // Key Coverage
    coverageDetails: [
      {
        title: "In-Patient Hospitalization",
        desc: "Complete hospitalization coverage: Any Room at all SI levels, ICU, surgeon/specialist fees, medicines, diagnostics, and all surgical expenses.",
        icon: HeartPulse,
      },
      {
        title: "Any Room — No Restrictions",
        desc: "Unlike most plans, Super Star offers Any Room eligibility across ALL Sum Insured levels with no proportionate deductions.",
        icon: Shield,
      },
      {
        title: "Day Care Procedures",
        desc: "All Day Care treatments requiring less than 24-hour hospitalization covered up to Sum Insured.",
        icon: Activity,
      },
      {
        title: "Pre & Post Hospitalization",
        desc: "90 days pre-hospitalization and 180 days post-hospitalization expenses covered — longer pre-hospitalization than most plans.",
        icon: Clock,
      },
      {
        title: "Modern Treatments",
        desc: "Robotic surgeries, immunotherapy, stem cell therapy for bone marrow transplant, deep brain stimulation, and 12 more advanced procedures.",
        icon: Zap,
      },
      {
        title: "Freeze Your Age",
        desc: "Lock your entry age for premiums — pay the same premium as when you first bought until a claim or age 56, whichever comes first.",
        icon: Sparkles,
      },
      {
        title: "Premium Waiver",
        desc: "If the proposer is diagnosed with a critical illness or dies in an accident, the next year's premium is fully waived.",
        icon: BadgeCheck,
      },
      {
        title: "AYUSH Treatment",
        desc: "Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy — all covered up to Sum Insured in AYUSH hospitals.",
        icon: Pill,
      },
      {
        title: "Home Care Treatment",
        desc: "Treatment at home for 12+ specified conditions covered up to Sum Insured — including IV chemotherapy and palliative cancer care.",
        icon: PlusSquare,
      },
      {
        title: "Organ Donor Expenses",
        desc: "Transplantation + donor screening + post-donation complications covered up to and over the Sum Insured.",
        icon: Heart,
      },
      {
        title: "Dental Check-up & Cleaning",
        desc: "Free dental consultation, X-ray (IOPA), and scaling for one insured per year (available from 2nd policy year).",
        icon: Stethoscope,
      },
      {
        title: "Air Ambulance",
        desc: "Reimbursement up to ₹5,00,000 per year for air ambulance services when advised by a medical practitioner.",
        icon: Syringe,
      },
    ],

    // Bonus & Restoration
    cumulativeBonus: "50% of Sum Insured per claim-free year, maximum up to 100% — double the industry standard",
    restoration: "Automatic unlimited restoration of 100% Sum Insured after each claim for subsequent hospitalization",

    // Waiting Periods
    waitingPeriods: [
      { period: "30 days", description: "Initial waiting period for all illnesses (accidents covered from Day 1)" },
      { period: "24 months", description: "Specific diseases/procedures (reducible to 12 months via optional cover)" },
      { period: "36 months", description: "Pre-existing diseases (reducible to 24 or 12 months via optional covers)" },
    ],

    // Co-payment
    copay: "No mandatory co-payment (voluntary co-pay available as optional cover for premium discount)",

    // Discounts
    discounts: [
      { name: "CIBIL Score Discount", detail: "Up to 15% based on credit score (850+ = 15%)" },
      { name: "Long-Term Discount", detail: "10% (2yr), 12.5% (3yr), 14% (4yr), 16% (5yr)" },
      { name: "Online Purchase Discount", detail: "5% on premium when purchased from starhealth.in" },
      { name: "Early Renewal Discount", detail: "2.5% for renewing 30+ days before due date" },
      { name: "Health Questionnaire Discount", detail: "Up to 10% by answering lifestyle and habit questions" },
      { name: "Wellness Discount", detail: "Up to 20% on renewal premium via Star Wellness Program" },
      { name: "Co-terminus Discount", detail: "2.5-7.5% when buying separate policy for parents" },
    ],

    // Optional Covers (including Star Flexi add-on)
    optionalCovers: [
      { name: "Smart Network", detail: "15% premium discount with 15% co-pay outside smart network hospitals" },
      { name: "Quick Shield", detail: "Waives PED waiting for Diabetes, Hypertension, Asthma, Hyperlipidemia, certain Coronary diseases from Day 31" },
      { name: "Consumables Cover", detail: "68-item non-medical consumables coverage" },
      { name: "Future Shield", detail: "Continuity benefits for newly added spouse (all waiting periods carried forward)" },
      { name: "Maternity & Newborn", detail: "Delivery cover ₹30K-₹1L (12-24 month wait) + Newborn cover from Day 1 up to ₹2-5L" },
      { name: "Women Care (Mamta)", detail: "Comprehensive online women's wellness services on digital platforms — available from age 12+" },
      { name: "High-end Diagnostics", detail: "Up to ₹25,000 for specific OPD diagnostic tests" },
      { name: "Personal Accident", detail: "Up to 2x basic SI (max ₹2Cr) for accidental death/disability" },
      { name: "Preventive Health Check-up", detail: "Annual check-up packages (A/B/C) for all insured aged 18+" },
      { name: "Voluntary Co-pay/Deductible", detail: "Choose 10-20% co-pay or ₹25K-₹5L deductible for premium savings" },
      { name: "Long Term Deductible", detail: "Aggregate deductible across entire policy term for multi-year policies" },
      { name: "Room Rent Modification", detail: "Downgrade room eligibility for premium discount" },
      { name: "E-International Second Opinion", detail: "Second medical opinion from international panel, twice per policy year" },
      { name: "Durable Medical Equipment", detail: "₹1L per year for wheelchairs, oxygen concentrators, etc." },
      { name: "Compassionate Visit", detail: "₹10,000 for family member travel during emergencies" },
      { name: "Hospital Cash", detail: "₹1,000-₹5,000/day for 30-180 days during hospitalization" },
      { name: "Reduced Waiting Periods", detail: "Reduce PED from 36→12 months or specific diseases from 24→12 months" },
      { name: "Limitless Care", detail: "Unlimited Sum Insured for one claim in lifetime (from ₹10L SI)" },
      { name: "Super Star Bonus", detail: "100% guaranteed bonus after each renewal (no max cap)" },
      { name: "NRI Advantage", detail: "10% discount on premium for NRI/OCI cardholders" },
      { name: "Nursing at Home", detail: "₹1,000/day, up to 10 days post-hospitalization for qualified nursing services" },
      { name: "StayFit", detail: "Access to fitness centres (gyms/studios) up to 7 sessions per week — ages 18-60" },
      { name: "Param Seva (Senior Care)", detail: "Comprehensive online wellness services for insured aged 56+" },
      { name: "In-clinic Consultation", detail: "4-8 in-person consultations with GPs & specialists per year (up to 60 years)" },
      { name: "Value Network", detail: "15% discount when choosing value network hospitals" },
      { name: "Grace Period Cover", detail: "Coverage remains active during the grace period for policies due for renewal" },
    ],

    additionalFeatures: [
      "Unlimited Tele-Consultation (GP, Specialist, Psychiatrist, Dietician)",
      "AI-driven Face Scan (heart rate, SpO2, respiration rate)",
      "E-Domestic Second Medical Opinion",
      "Value-Added Services (pharmacy/diagnostics/consultation discounts)",
      "Dental Check-up & Cleaning (from 2nd year)",
      "Star Wellness Program with 1,000+ earnable points",
      "Instalment payment (Monthly/Quarterly/Half-yearly/Yearly)",
      "Up to 5-year policy term with long-term discounts",
      "Midterm inclusion for spouse, newborn, adopted child",
      "Limitless Loyalty Bonus — 100% additional SI each renewal (no cap)",
      "Sum Insured Multiplier — combine annual SI across multi-year terms",
      "Premium Return — 1st year premium refunded after 5 claim-free years",
      "Health Booster — 100% extra SI for every 7 claim-free years",
      "E-Connect — virtual fitness sessions + international second opinion",
      "Grace Period Cover — coverage active during renewal grace period",
    ],

    // Key Exclusions
    keyExclusions: [
      "Cosmetic/plastic surgery (unless post-accident or cancer)",
      "Dental treatment (unless due to accident requiring hospitalization)",
      "Obesity surgery (unless BMI ≥ 40 or ≥ 35 with co-morbidities)",
      "Adventure/hazardous sports injuries",
      "Treatment for alcoholism or substance abuse",
      "Unproven or experimental treatments",
      "Refractive error correction (below 7.5 dioptres)",
    ],
  },
};

/** Ordered list of plan IDs for display */
export const healthPlanOrder = ["super-star", "star-health-assure"];

/** Other insurance companies (Coming Soon) */
export const comingSoonInsurers = [
  { id: "hdfc-ergo", name: "HDFC Ergo", color: "#004B87", bgColor: "#E8F4FD" },
  { id: "icici-lombard", name: "ICICI Lombard", color: "#B02A30", bgColor: "#FDEAEB" },
  { id: "bajaj-allianz", name: "Bajaj Allianz", color: "#003DA5", bgColor: "#E6EEFF" },
  { id: "niva-bupa", name: "Niva Bupa", color: "#00A651", bgColor: "#E6F9EF" },
  { id: "care-health", name: "Care Health", color: "#FF6B00", bgColor: "#FFF0E6" },
];
