import {
  Heart, Shield, Clock, Zap, BadgeCheck, Activity,
  HeartPulse, PlusSquare, Stethoscope, Pill, Syringe,
  Baby, Sparkles, RefreshCw, Star, Globe, Plane
} from "./icons";

/**
 * Niva Bupa Health Insurance — Company profile and plan data.
 *
 * Sources:
 *   - Health Premia (MAXHLIP21176V022021)
 *   - Health Assurance (IRDAI/HLT/MBHI/P-H/V.II/175/2016-17)
 */

export const profile = {
  "niva-bupa": {
    id: "niva-bupa",
    name: "Niva Bupa Health Insurance",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Niva_Bupa_Health_Insurance_Logo.svg/200px-Niva_Bupa_Health_Insurance_Logo.svg.png",
    tagline: "Your Health Deserves Nothing Less",
    description: "Niva Bupa Health Insurance Company Ltd. is a leading standalone health insurance provider serving millions of customers. They focus on helping customers live healthier and more successful lives by providing expert healthcare partnerships, not just transactional insurance.",
    highlights: [
      "30 Minute Cashless Claim Processing",
      "10,000+ Network Hospitals",
      "Point of Care (POC) Desks",
      "Direct Claims Settlement (In-house)",
    ],
    established: 2010,
    headquarters: "New Delhi",
    tabLabel: "Niva Bupa",
    accentColor: "#00A651",
    whyBlurb: {
      title: "Why Niva Bupa?",
      text: "Niva Bupa offers incredibly robust loyalty additions (up to 200%), ultra-premium plans featuring built-in international travel insurance, and an unparalleled commitment to processing cashless claims within 30 minutes. Their 'Health Premia' product is an industry benchmark for premium coverage.",
      color: "#00A651",
    },
  },
};

export const planOrder = [
  "niva-bupa-health-premia",
  "niva-bupa-health-assurance"
];

export const plans = {
  "niva-bupa-health-premia": {
    id: "niva-bupa-health-premia",
    insurerId: "niva-bupa",
    name: "Niva Bupa Health Premia",
    fullName: "Niva Bupa Health Premia Policy",
    uin: "MAXHLIP21176V022021",
    tagline: "Ultra-premium health coverage with global benefits",
    description: "A comprehensive health insurance plan providing the perfect coverage for your family's needs and lifestyle. Whether it's newborn child benefits, robust loyalty additions, or emergency medical treatments abroad, Health Premia ensures you get the best in healthcare.",
    color: "#00A651",
    bgColor: "#E6F9EF",

    cardHighlights: [
      "Up to ₹3 Crores Sum Insured",
      "International Coverage (Platinum)",
      "Built-in Travel Insurance",
      "Loyalty Additions up to 200%",
      "Re-fill Benefit for any illness",
    ],

    sumInsuredRange: "₹10 Lakh – ₹3 Crores",
    sumInsuredOptions: ["Gold: 10L, 15L, 20L, 30L, 50L", "Silver: Base Options", "Platinum: 1Cr, 2Cr, 3Cr"],

    entryAge: {
      adults: "18 years and above",
      children: "Covered",
      note: "Available on Individual, Family Floater, and Family First (up to 19 relationships) basis.",
    },
    familyDefinition: "Self, Spouse, Dependent Children, Parents, Extended Family (Family First)",
    maxFamilySize: "Up to 19 relationships (Family First variant)",
    policyTerm: "1 / 2 / 3 years",

    coverageDetails: [
      {
        title: "Comprehensive In-Patient Care",
        desc: "Covers room rent (no sub-limits except suite categories), nursing, ICU, surgeon fees, and modern treatments.",
        icon: HeartPulse,
      },
      {
        title: "International Coverage & Travel (Platinum)",
        desc: "Covers emergency hospitalization, medical evacuation, OPD, loss of passport/baggage, and trip cancellation globally.",
        icon: Globe,
      },
      {
        title: "Pre & Post Hospitalization",
        desc: "Coverage for 90 days before admission and 180 days after discharge.",
        icon: Clock,
      },
      {
        title: "Maternity & Newborn Cover",
        desc: "Covered up to ₹2 Lakhs (Platinum). Platinum includes worldwide maternity coverage and newborn vaccinations for 1 year.",
        icon: Baby,
      },
      {
        title: "OPD & e-Consultations",
        desc: "Unlimited tele/online consultations. OPD cover up to ₹50,000 per policy depending on the plan.",
        icon: Stethoscope,
      },
      {
        title: "Mental Health & LASER",
        desc: "Comprehensive cover for mental health disorders and modern LASER procedures up to Sum Insured.",
        icon: Sparkles,
      },
    ],

    cumulativeBonus: "Loyalty Additions: 10% (up to 100%) annually. Enhanced: 20% (up to 200%) annually, regardless of claims!",
    restoration: "Re-fill Benefit: Base Sum Insured is refilled and made available for any illness in a policy year.",

    waitingPeriods: [
      { period: "30 days", description: "Initial waiting period (waived for accidents)" },
      { period: "12 months", description: "Specific illnesses (e.g. cataract, hernia, spinal disorders)" },
      { period: "24 months", description: "Pre-existing conditions" },
      { period: "36 months", description: "Mental disorder treatment and LASER surgery cover" },
      { period: "48 months", description: "HIV/AIDS cover" },
    ],

    copay: "Zone 2 pricing opt-in requires 20% co-pay if treated in Zone 1 (Delhi/NCR, Mumbai, Kolkata, Gujarat).",

    discounts: [
      { name: "Tenure Discount", detail: "7.5% discount for 2-year term, 15% discount for 3-year term." },
    ],

    optionalCovers: [
      { name: "Safeguard & Safeguard+", detail: "Riders to cover non-payable items (consumables) and inflation-linked SI increases." },
      { name: "Personal Accident & Critical Illness", detail: "PA cover up to ₹1 Crore. CI cover up to ₹25/50/100 Lakhs." },
      { name: "Enhanced Geographical Scope", detail: "Extends international coverage to include USA & Canada." },
      { name: "Hospital Cash", detail: "Additional payout up to ₹7,500 per day for up to 30 days." },
    ],

    additionalFeatures: [
      "Health Check-up from Day 1 (up to ₹10,000/year)",
      "Premium Waiver: Next year's premium waived if policyholder passes away or is diagnosed with a specified illness.",
      "Second Medical Opinion globally",
    ],

    keyExclusions: [
      "Unproven Treatments or Hazardous/Adventure sports",
      "Dental/oral treatment and Sleep disorders",
      "Treatment for alcoholism, drug or substance abuse",
    ],
  },

  "niva-bupa-health-assurance": {
    id: "niva-bupa-health-assurance",
    insurerId: "niva-bupa",
    name: "Niva Bupa Health Assurance",
    fullName: "Niva Bupa Health Assurance",
    uin: "IRDAI/HLT/MBHI/P-H/V.II/175/2016-17",
    tagline: "Triple-layered advantage for essential coverage",
    description: "A specialized policy designed to give you peace of mind irrespective of your age. It focuses on fixed-benefit payouts and the 'CritiCare' cover, providing a financial safety net against major illnesses.",
    color: "#276749",
    bgColor: "#F0FFF4",

    cardHighlights: [
      "Fixed Benefit Structure",
      "CritiCare Cover Included",
      "Triple-Layered Advantage",
      "Flexible Family Options",
      "Lump Sum Payouts",
    ],

    sumInsuredRange: "Variable",
    sumInsuredOptions: ["Contact advisor for specific tiers"],

    entryAge: {
      adults: "18 years and above",
      children: "Applicable",
      note: "Under CritiCare cover, only 2 Adults family option is available.",
    },
    familyDefinition: "Self, Spouse (Specific covers limited to 2 Adults)",
    maxFamilySize: "2 Adults (CritiCare)",
    policyTerm: "1 year",

    coverageDetails: [
      {
        title: "CritiCare Cover",
        desc: "Lump sum fixed benefit payout upon diagnosis of covered critical illnesses.",
        icon: HeartPulse,
      },
      {
        title: "Triple Layered Advantage",
        desc: "Combines three essential covers to provide a robust financial safety net during medical crises.",
        icon: Shield,
      },
      {
        title: "Lump Sum Payouts",
        desc: "Unlike indemnity policies, pays a fixed amount directly to you, which can be used for treatment, debts, or income replacement.",
        icon: Activity,
      },
    ],

    cumulativeBonus: "Not applicable (Fixed Benefit)",
    restoration: "Not applicable (Fixed Benefit)",

    waitingPeriods: [
      { period: "30 days", description: "Initial waiting period" },
      { period: "90 days", description: "Critical Illness survival period / initial waiting period (typical)" },
    ],

    copay: null,

    discounts: [
      { name: "Tax Benefits", detail: "Tax benefits under Section 80D of the Income Tax Act." },
    ],

    optionalCovers: [],

    additionalFeatures: [
      "15-day Free Look Period",
      "Direct claim settlements by Niva Bupa",
    ],

    keyExclusions: [
      "Any pre-existing conditions not declared",
      "Intentional self-injury",
      "Non-medical expenses not covered under fixed benefits",
    ],
  },
};
