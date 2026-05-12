import {
  Heart, Shield, Clock, Zap, BadgeCheck, Activity,
  HeartPulse, PlusSquare, Stethoscope, Pill, Syringe,
  Baby, Sparkles, RefreshCw, Star,
} from "./icons";

/**
 * Bajaj Allianz Health Insurance — Company profile and plan data.
 *
 * Sources:
 *   - Health Care Supreme (IRDA/NL-HLT/BAGI/P-H/V.I/22/13-14)
 *   - Health Guard (BAJHLIP25035V072425)
 *   - Health Ensure (BAJHLIP21127V032021)
 */

export const profile = {
  "bajaj-allianz": {
    id: "bajaj-allianz",
    name: "Bajaj Allianz General Insurance",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Bajaj_Allianz_General_Insurance_Logo.svg/200px-Bajaj_Allianz_General_Insurance_Logo.svg.png",
    tagline: "Caringly Yours",
    description: "Bajaj Allianz General Insurance Company Limited is a joint venture between Bajaj Finserv Limited and Allianz SE. They offer comprehensive, innovative solutions combining global expertise with local experience, ensuring robust health coverage and quick honest response to customer needs.",
    highlights: [
      "Extensive Cashless Network",
      "In-house Claim Settlement",
      "Comprehensive Add-ons & Riders",
      "Innovative Coverage Options",
    ],
    established: 2001,
    headquarters: "Pune",
    tabLabel: "Bajaj Allianz",
    accentColor: "#0077C8",
    whyBlurb: {
      title: "Why Bajaj Allianz?",
      text: "Bajaj Allianz offers highly customizable plans with unique features like Air Ambulance cover, Convalescence benefits, and extensive coverage for modern treatments like robotic surgeries. Their joint venture brings global expertise to your family's healthcare.",
      color: "#0077C8",
    },
  },
};

export const planOrder = [
  "bajaj-allianz-health-guard",
  "bajaj-allianz-health-care-supreme",
  "bajaj-allianz-health-ensure"
];

export const plans = {
  "bajaj-allianz-health-guard": {
    id: "bajaj-allianz-health-guard",
    insurerId: "bajaj-allianz",
    name: "Bajaj Allianz Health Guard",
    fullName: "Bajaj Allianz Health Guard Policy",
    uin: "BAJHLIP25035V072425",
    tagline: "Comprehensive protection with Silver, Gold & Platinum tiers",
    description: "A robust health insurance policy designed to suit all your health care needs. It protects you from the financial burden of hospitalization, offering variants from ₹1.5 Lakh up to ₹1 Crore sum insured with extensive coverage.",
    color: "#0077C8",
    bgColor: "#E5F1FA",

    cardHighlights: [
      "Up to ₹1 Crore Sum Insured",
      "Pre (60 days) & Post (90 days) Hosp.",
      "Convalescence Benefit",
      "Bariatric Surgery Cover",
      "Daily Cash for Insured Child",
    ],

    sumInsuredRange: "₹1.5 Lakh – ₹1 Crore",
    sumInsuredOptions: ["Silver: 1.5L, 2L", "Gold: 3L to 50L", "Platinum: 5L to 1Cr"],

    entryAge: {
      adults: "18 – 65 years",
      children: "3 months – 30 years",
      note: "Available on Individual and Family Floater basis.",
    },
    familyDefinition: "Self, Spouse, Dependent Children, Parents",
    maxFamilySize: "Flexible",
    policyTerm: "1 / 2 / 3 years",

    coverageDetails: [
      {
        title: "In-Patient Hospitalization",
        desc: "Covers room rent (no limit in Gold/Platinum, 1% in Silver), boarding, nursing, ICU, surgeon fees, and medicines.",
        icon: HeartPulse,
      },
      {
        title: "Pre & Post Hospitalization",
        desc: "Extensive coverage for 60 days prior to admission and 90 days after discharge.",
        icon: Clock,
      },
      {
        title: "Day Care Procedures",
        desc: "Covers all day care treatments where 24-hour hospitalization is not required.",
        icon: Activity,
      },
      {
        title: "Convalescence Benefit",
        desc: "Lump sum amount paid if hospitalization exceeds 10 continuous days (ranges from ₹5,000 to ₹7,500 depending on plan).",
        icon: Shield,
      },
      {
        title: "Maternity & Newborn Cover",
        desc: "Available in Gold & Platinum plans. Covers normal/caesarean delivery and newborn baby expenses.",
        icon: Baby,
      },
      {
        title: "Bariatric Surgery Cover",
        desc: "Covers expenses related to bariatric surgery subject to specific policy terms and waiting periods.",
        icon: Stethoscope,
      },
    ],

    cumulativeBonus: "10% per claim-free year (max 100% of Sum Insured)",
    restoration: "Yes (Reinstatement Benefit applicable if base Sum Insured exhausts)",

    waitingPeriods: [
      { period: "30 days", description: "Initial waiting period (waived for accidents)" },
      { period: "24 months", description: "Specific surgeries and treatments (e.g. cataracts, joint replacement)" },
      { period: "36 months", description: "Pre-existing diseases" },
      { period: "72/36 months", description: "Maternity (72 mos for Gold, 36 mos for Platinum)" },
    ],

    copay: "20% co-pay applicable if age at entry is 66 years or above.",

    discounts: [
      { name: "Long-Term Discount", detail: "4% discount for 2-year tenure, 8% discount for 3-year tenure." },
      { name: "Family Discount", detail: "10% discount when covering 2 or more family members on individual basis." },
    ],

    optionalCovers: [
      { name: "Daily Cash Benefit", detail: "₹500/day allowance for accompanying an insured child under 12 years." },
      { name: "Preventive Health Check-Up", detail: "Free check-up at empanelled centers after every 3 continuous claim-free years." },
    ],

    additionalFeatures: [
      "AYUSH Treatment covered up to limits",
      "Organ Donor Expenses covered",
      "Road Ambulance expenses up to ₹20,000 per policy year",
    ],

    keyExclusions: [
      "Cosmetic or aesthetic treatments",
      "Unproven or experimental treatments",
      "Substance abuse or self-inflicted injuries",
      "Dental treatment or surgery unless requiring hospitalization",
    ],
  },

  "bajaj-allianz-health-care-supreme": {
    id: "bajaj-allianz-health-care-supreme",
    insurerId: "bajaj-allianz",
    name: "Health Care Supreme",
    fullName: "Bajaj Allianz Health Care Supreme",
    uin: "IRDA/NL-HLT/BAGI/P-H/V.I/22/13-14",
    tagline: "Premium coverage with Air Ambulance & comprehensive OPD",
    description: "An elite health plan offering a wide range of benefits ensuring maximum coverage for illnesses and accidents. Designed in Vital, Smart, and Ultimo sub-plans, it includes unparalleled add-ons like Air Ambulance, OPD, and Physiotherapy expenses.",
    color: "#2C5282",
    bgColor: "#EBF8FF",

    cardHighlights: [
      "Air Ambulance Cover",
      "Comprehensive OPD & Dental",
      "100% SI Reinstatement",
      "Physiotherapy (10 sittings)",
      "Free Annual Health Check-Up",
    ],

    sumInsuredRange: "₹5 Lakh – ₹50 Lakh",
    sumInsuredOptions: ["Vital: 5L - 50L", "Smart: 5L - 50L", "Ultimo: 5L - 50L"],

    entryAge: {
      adults: "18 years to Lifetime",
      children: "3 months – 25 years",
      note: "Available on Individual and Family Floater basis.",
    },
    familyDefinition: "Self, Spouse, Dependent Children, Parents",
    maxFamilySize: "Flexible",
    policyTerm: "1 year",

    coverageDetails: [
      {
        title: "Comprehensive Hospitalization",
        desc: "Full coverage for In-patient treatment, Day Care procedures, and Pre (60 days)/Post (90 days) hospitalization.",
        icon: HeartPulse,
      },
      {
        title: "Air Ambulance",
        desc: "Covers airplane or helicopter transportation for life-threatening emergencies from site to nearest hospital.",
        icon: Zap,
      },
      {
        title: "Outpatient (OPD)",
        desc: "Covers specialist consultations, diagnostics, medicines, dental procedures (root canals/extractions), and psych consultations.",
        icon: Stethoscope,
      },
      {
        title: "Physiotherapy Expenses",
        desc: "Covers up to 10 sittings of physiotherapy sessions per illness/injury on an OPD basis.",
        icon: Activity,
      },
      {
        title: "Maternity & Newborn Cover",
        desc: "Covers delivery expenses (max 2 deliveries), lawful termination, and newborn baby up to 90 days (including vaccines).",
        icon: Baby,
      },
      {
        title: "Sum Insured Reinstatement",
        desc: "100% of hospitalization Sum Insured is reinstated if exhausted during the policy period for a different illness.",
        icon: RefreshCw,
      },
    ],

    cumulativeBonus: "Not specified in base plan",
    restoration: "100% Sum Insured Reinstatement Benefit",

    waitingPeriods: [
      { period: "30 days", description: "Initial waiting period" },
      { period: "24 months", description: "Maternity & Newborn expenses" },
      { period: "90 days", description: "Physiotherapy expenses (first year only, waived on renewal)" },
    ],

    copay: null,

    discounts: [
      { name: "Group Options", detail: "Can be issued as a group policy with corresponding premium discounts." },
    ],

    optionalCovers: [
      { name: "Ancillary Expenses Benefit", detail: "Daily allowance for non-ICU (up to 30/60 days) and double allowance for ICU (up to 15/30 days)." },
      { name: "Personal Accident Cover", detail: "Coverage up to 60x monthly income for death, permanent total/partial disability, plus child education benefit." },
      { name: "Critical Illness Cover", detail: "Lump sum payment on first diagnosis of 15 specified critical illnesses (Cancer, Stroke, Heart Attack, etc)." },
    ],

    additionalFeatures: [
      "Free Annual Preventive Health Check-up after each renewal (full medical report, ECG, etc).",
      "Ayurvedic & Homeopathic treatment covered in government recognized hospitals.",
      "Recovery Benefit: Lump sum if hospitalized > 7 continuous days.",
    ],

    keyExclusions: [
      "Any unproven or experimental treatments",
      "Intentional self-injury",
      "Ectopic pregnancy (under maternity benefit)",
    ],
  },

  "bajaj-allianz-health-ensure": {
    id: "bajaj-allianz-health-ensure",
    insurerId: "bajaj-allianz",
    name: "Bajaj Allianz Health Ensure",
    fullName: "Bajaj Allianz Health Ensure",
    uin: "BAJHLIP21127V032021",
    tagline: "Affordable protection with modern treatment coverage",
    description: "A highly cost-effective policy that ensures your family's health is secured without breaking the bank. Features zone-based pricing and coverage for cutting-edge modern treatments like robotic surgery and stem cell therapy.",
    color: "#4A5568",
    bgColor: "#EDF2F7",

    cardHighlights: [
      "12 Modern Treatments Covered",
      "Zone-based Pricing (Co-pay)",
      "Domiciliary Hospitalization",
      "Pre (30d) & Post (60d) Hosp.",
      "AYUSH & Organ Donor included",
    ],

    sumInsuredRange: "₹1 Lakh – ₹10 Lakh",
    sumInsuredOptions: ["1L", "2L", "3L", "4L", "5L", "7.5L", "10L"],

    entryAge: {
      adults: "18 years to Lifetime",
      children: "3 months – 25 years",
      note: "Available on Individual and Family Floater basis.",
    },
    familyDefinition: "Self, Spouse, Dependent Children, Parents, Parents-in-law",
    maxFamilySize: "Flexible",
    policyTerm: "1 year",

    coverageDetails: [
      {
        title: "Modern Treatments",
        desc: "Covers 12 modern treatments (including robotic surgeries, immunotherapy, and stem cell therapy) up to 50% of Sum Insured.",
        icon: Sparkles,
      },
      {
        title: "In-Patient Hospitalization",
        desc: "Room rent capped at 1% of SI per day. ICU charges capped at 2% of SI per day. Surgeon/consultant fees included.",
        icon: HeartPulse,
      },
      {
        title: "Pre & Post Hospitalization",
        desc: "Covers medical expenses 30 days before admission and 60 days after discharge.",
        icon: Clock,
      },
      {
        title: "Domiciliary Hospitalization",
        desc: "Covers medical treatment at home exceeding 3 days when hospitalization is not possible due to condition or lack of rooms.",
        icon: PlusSquare,
      },
      {
        title: "AYUSH & Organ Donor",
        desc: "AYUSH treatment and Organ Donor expenses are covered up to the Sum Insured.",
        icon: Shield,
      },
    ],

    cumulativeBonus: "Not specified",
    restoration: "Not specified",

    waitingPeriods: [
      { period: "30 days", description: "Initial waiting period (except accidents)" },
      { period: "24 months", description: "Specific diseases and procedures (cataract, hernia, etc)" },
      { period: "36 months", description: "Pre-existing diseases" },
    ],

    copay: "Zone-based Co-pay: If treatment is taken in a higher tier city zone than your residence zone, a 20% co-pay applies.",

    discounts: [
      { name: "Family Discount", detail: "5% discount when 2 or more family members are covered under individual basis." },
      { name: "Co-pay Waiver Discount", detail: "Options to waive zone-based co-pay available at premium adjustment." },
    ],

    optionalCovers: [
      { name: "Waiver of Co-payment", detail: "Option to waive the zone-based co-payment clause by paying an extra premium." },
    ],

    additionalFeatures: [
      "All Day Care Procedures covered",
      "Road Ambulance expenses up to specified limits",
    ],

    keyExclusions: [
      "Obesity/Weight Control treatments",
      "Change-of-Gender treatments",
      "Cosmetic or plastic surgery",
      "Hazardous or adventure sports injuries",
    ],
  },
};
