import {
  Heart, Shield, Clock, Zap, BadgeCheck, Activity,
  HeartPulse, PlusSquare, Stethoscope, Pill, Syringe,
  Baby, Sparkles, RefreshCw, Star, Globe
} from "./icons";

/**
 * Care Health Insurance — Company profile and plan data.
 *
 * Sources:
 *   - Supreme Enhance (CHIHLIP25036V012425)
 *   - Care Advanced Add-on (CHIHLIA25043V012425)
 */

export const profile = {
  "care-health": {
    id: "care-health",
    name: "Care Health Insurance",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Care_Health_Insurance_Logo.png/220px-Care_Health_Insurance_Logo.png",
    tagline: "Health ki Guarantee",
    description: "Care Health Insurance (formerly Religare Health Insurance) is a specialized health insurer offering products in the retail segment for Health Insurance, Top-up Coverage, Personal Accident, Maternity, International Travel Insurance and Critical Illness.",
    highlights: [
      "Specialized Health Insurer",
      "Wide range of Add-ons & Shields",
      "Robust Cashless Network",
      "Strong Claim Settlement Track Record",
    ],
    established: 2012,
    headquarters: "Gurgaon",
    tabLabel: "Care Health",
    accentColor: "#FF6B00",
    whyBlurb: {
      title: "Why Care Health?",
      text: "Care Health offers incredibly flexible 'Shield' add-ons that protect your No Claim Bonus, cover non-payable consumables, and inflation-proof your sum insured. Their base plans offer strong modern treatment coverage with no room rent capping.",
      color: "#FF6B00",
    },
  },
};

export const planOrder = [
  "care-supreme-enhance",
  "care-advanced-addon"
];

export const plans = {
  "care-supreme-enhance": {
    id: "care-supreme-enhance",
    insurerId: "care-health",
    name: "Care Supreme Enhance",
    fullName: "Care Supreme Enhance Policy",
    uin: "CHIHLIP25036V012425",
    tagline: "Comprehensive baseline coverage with no room rent capping",
    description: "A highly robust base health policy that provides comprehensive coverage against hospitalization expenses. It ensures you have access to modern treatments like robotic surgeries without worrying about room rent caps or strict sub-limits.",
    color: "#FF6B00",
    bgColor: "#FFF0E6",

    cardHighlights: [
      "No Room Rent Capping",
      "Pre (60d) & Post (90d) Hosp.",
      "Advance & Modern Treatments",
      "AYUSH Treatments Covered",
      "Domiciliary Hospitalization",
    ],

    sumInsuredRange: "Flexible Options",
    sumInsuredOptions: ["Contact advisor for specific base limits"],

    entryAge: {
      adults: "18 years to Lifelong",
      children: "90 days to 24/25 years",
      note: "Available on Individual (up to 6 persons) and Family Floater basis (up to 2A2C).",
    },
    familyDefinition: "Self, Spouse, Children, Parents, Parents-in-law, Grandparents",
    maxFamilySize: "6 persons (Individual) or 2A2C (Floater)",
    policyTerm: "1 / 2 / 3 years",

    coverageDetails: [
      {
        title: "In-Patient Care",
        desc: "Covers minimum 24-hr hospitalization including room charges, nursing, intensive care unit, surgeon's fee, doctor's fee, anesthesia, blood, oxygen, etc.",
        icon: HeartPulse,
      },
      {
        title: "Pre & Post Hospitalization",
        desc: "Medical expenses covered for 60 days prior to admission and 90 days after discharge.",
        icon: Clock,
      },
      {
        title: "Day Care Treatments",
        desc: "Covers all day care treatments where 24-hour hospitalization is not required.",
        icon: Activity,
      },
      {
        title: "Advance Technology Methods",
        desc: "Coverage for Robotic surgeries, Deep Brain stimulation, Stem cell therapy, Oral chemotherapy, and Immunotherapy.",
        icon: Sparkles,
      },
      {
        title: "AYUSH Therapies",
        desc: "Covers non-allopathic treatments like Ayurveda, Unani, Siddha, and Homeopathy up to the Sum Insured.",
        icon: PlusSquare,
      },
      {
        title: "Domiciliary Hospitalization",
        desc: "Covers treatment at home exceeding 3 consecutive days if a hospital room is unavailable or the patient cannot be moved.",
        icon: Shield,
      },
    ],

    cumulativeBonus: "Available per base policy terms",
    restoration: "Automatic restoration terms apply as per base policy",

    waitingPeriods: [
      { period: "30 days", description: "Initial waiting period (except accidents)" },
      { period: "Specific", description: "Standard waiting periods apply for pre-existing and named ailments based on exact plan chosen." },
    ],

    copay: "Standard co-pay clauses may apply based on entry age or zone (check specific quotation).",

    discounts: [
      { name: "Tenure Discount", detail: "7.5% discount for 2-year term, 10% discount for 3-year term." },
      { name: "Family Discount", detail: "5% discount when covering 2 or more members on an individual basis." },
      { name: "Direct/Renewal Discount", detail: "Up to 10% direct discount and renewal discounts if paid before due date." },
    ],

    optionalCovers: [
      { name: "Global Coverage", detail: "Extends In-patient and Day Care treatments globally." },
      { name: "Air Ambulance Cover", detail: "Provides coverage for emergency air transport." },
      { name: "Daily Cash Allowance", detail: "Fixed daily payout during hospitalization." },
    ],

    additionalFeatures: [
      "Eligible for Tax Benefits under Section 80D of the Income Tax Act.",
      "Road Ambulance Cover included.",
      "Organ Donor Cover included."
    ],

    keyExclusions: [
      "Any treatments not medically necessary",
      "Cosmetic or plastic surgery",
      "Self-inflicted injuries",
    ],
  },

  "care-advanced-addon": {
    id: "care-advanced-addon",
    insurerId: "care-health",
    name: "Care Advanced (Add-on Package)",
    fullName: "Care Advanced Add-on Policy",
    uin: "CHIHLIA25043V012425",
    tagline: "Powerful shields to protect your bonus and combat inflation",
    description: "An optional but highly recommended Add-on package that attaches to your Base Policy. It upgrades your coverage by shielding your No Claim Bonus, inflating your Sum Insured, and covering non-payable consumable items.",
    color: "#D35400",
    bgColor: "#FDEBD0",

    cardHighlights: [
      "Inflation Shield (SI Boost)",
      "Claim Shield (Non-Payables)",
      "NCB Shield (Bonus Protection)",
      "Return of Premium (5 yr)",
      "Be-fit+ (Fitness Centers)",
    ],

    sumInsuredRange: "Enhances Base Sum Insured",
    sumInsuredOptions: ["Attached to Base Policy limits"],

    entryAge: {
      adults: "As per Base Policy",
      children: "As per Base Policy",
      note: "Must be purchased alongside a Care Health retail base policy.",
    },
    familyDefinition: "Same as Base Policy",
    maxFamilySize: "Same as Base Policy",
    policyTerm: "Matches Base Policy",

    coverageDetails: [
      {
        title: "Inflation Shield",
        desc: "Protects your Sum Insured against inflation. It cumulatively increases each renewal based on the previous year's inflation rate.",
        icon: RefreshCw,
      },
      {
        title: "Claim Shield & Claim Shield+",
        desc: "Covers non-payable items (like gloves, masks, and specific consumables listed in Annexure 1) during a hospitalization claim.",
        icon: Shield,
      },
      {
        title: "No Claim Bonus Shield",
        desc: "If your annual claim is less than 25% of the Base Policy Sum Insured, your accrued No Claim Bonus will not be reduced at renewal.",
        icon: Star,
      },
      {
        title: "Return of Premium",
        desc: "If no claims are made for 5 consecutive years, the 1st year premium of the base plan is adjusted against the upcoming renewal.",
        icon: BadgeCheck,
      },
      {
        title: "Be-fit+",
        desc: "For members above 12 years, avail unlimited visits to empaneled network fitness centers and workout classes.",
        icon: Activity,
      },
    ],

    cumulativeBonus: "Protects Base Policy Bonus (NCB Shield)",
    restoration: "Not applicable directly",

    waitingPeriods: [
      { period: "Modification", description: "Wait Period Modification benefits can be opted to reduce PED (from 36 months) or Named Ailment (from 24 months) waiting periods." },
    ],

    copay: "As per Base Policy",

    discounts: [
      { name: "Policyholder-Child Protection", detail: "In case of policyholder death, 25% discount on renewal premium until dependent child turns 30." },
    ],

    optionalCovers: [
      { name: "Assisted Reproductive Treatment", detail: "Indemnifies expenses for ART/IVF subject to 36-month wait period." },
      { name: "Spouse Care", detail: "Spouse is eligible for the Bonus already available in the Base Policy if added within 180 days of marriage." },
    ],

    additionalFeatures: [
      "Durable Medical Equipment (e.g., crutches, wheelchairs) covered if prescribed at discharge.",
      "Modification of Robotic Surgery limits.",
      "Additional Sum Insured for Defined Critical Illnesses (triggers after base SI exhausts)."
    ],

    keyExclusions: [
      "Only applies to admissible claims under the Base Policy.",
      "Cannot be bought in isolation without a Base Policy."
    ],
  },
};
