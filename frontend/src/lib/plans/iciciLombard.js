import {
  Heart, Shield, Clock, Zap, BadgeCheck, Activity,
  HeartPulse, PlusSquare, Stethoscope, Pill, Syringe,
  Baby, Sparkles, RefreshCw, Star,
} from "./icons";

/**
 * ICICI Lombard Health Insurance — Company profile and plan data.
 *
 * Sources:
 *   - ICICI Lombard Group Health Insurance (UIN : ICIHLGP02001V030102)
 *   - ICICI Lombard Complete Health Insurance (UIN: ICIHLIP21383V052021)
 */

export const profile = {
  "icici-lombard": {
    id: "icici-lombard",
    name: "ICICI Lombard General Insurance",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/ICICI_Lombard_Logo.svg/200px-ICICI_Lombard_Logo.svg.png",
    tagline: "Nibhaye Vaade — Comprehensive health protection",
    description: "ICICI Lombard General Insurance Company Limited is one of the leading private sector general insurance companies in India. With IRDAI Reg. No. 115, they offer diverse health, motor, travel, and home insurance products with a vast hospital network and a strong commitment to customer service.",
    highlights: [
      "Extensive Network Hospitals",
      "IRDAI Registered (Reg. No. 115)",
      "Cashless Claims Settlement",
      "Comprehensive Add-on Options",
    ],
    established: 2001,
    headquarters: "Mumbai",
    tabLabel: "ICICI Lombard",
    accentColor: "#B02A30",
    whyBlurb: {
      title: "Why ICICI Lombard?",
      text: "ICICI Lombard offers robust and customizable health plans including benefits like Unlimited Reset, Super No Claim Bonus, and comprehensive wellness programs, backed by a massive cashless hospital network.",
      color: "#B02A30",
    },
  },
};

export const planOrder = ["icici-lombard-complete-health", "icici-lombard-group-health"];

export const plans = {
  "icici-lombard-group-health": {
    id: "icici-lombard-group-health",
    insurerId: "icici-lombard",
    name: "ICICI Lombard Group Health",
    fullName: "ICICI Lombard Group Health Insurance",
    uin: "ICIHLGP02001V030102",
    tagline: "Group protection with extensive add-ons",
    description: "A solid group health insurance plan providing indemnification of medical expenses incurred during day care treatment, hospitalization, and domiciliary hospitalization, with options for maternity, OPD, and baby day one covers.",
    color: "#B02A30",
    bgColor: "#FDEAEB",

    cardHighlights: [
      "In-patient & Day Care Treatment",
      "Pre & Post Hospitalization Cover",
      "Maternity & Baby Day 1 options",
      "Critical Illnesses Cover",
      "Cashless or Reimbursement",
    ],

    sumInsuredRange: "Customizable Group Limits",
    sumInsuredOptions: ["Custom Limits"],

    entryAge: {
      adults: "Flexible (Group policies)",
      children: "From Day 1 (if opted)",
      note: "Coverage details subject to group policy terms.",
    },
    familyDefinition: "Self + Dependents (as per group terms)",
    maxFamilySize: "Flexible",
    policyTerm: "1 year",

    coverageDetails: [
      {
        title: "In-Patient Hospitalization",
        desc: "Covers medical expenses for hospitalization due to illness or injury.",
        icon: HeartPulse,
      },
      {
        title: "Day Care Treatment",
        desc: "Covers medical expenses for treatments undertaken in less than 24 hours.",
        icon: Activity,
      },
      {
        title: "Domiciliary Hospitalization",
        desc: "Medical treatment at home exceeding 3 days when the patient cannot be moved to a hospital.",
        icon: PlusSquare,
      },
      {
        title: "Pre & Post Hospitalization",
        desc: "Available as an optional add-on cover.",
        icon: Clock,
      },
      {
        title: "Loss Sharing",
        desc: "Requires you to share costs for expenses exceeding sub-limits or Room/ICU charges.",
        icon: Shield,
      },
    ],

    cumulativeBonus: "Not Applicable (Group Policy)",
    restoration: "Not Applicable",

    waitingPeriods: [
      { period: "30 days", description: "Initial Waiting Period (unless waived)" },
      { period: "1 year", description: "Pre Existing Disease" },
      { period: "9 months", description: "Maternity Expenses (if opted)" },
    ],

    copay: null,

    discounts: [
      { name: "Group Discount", detail: "Premium discounts based on group size and claims experience." },
    ],

    optionalCovers: [
      { name: "Cover for Pre-Existing Diseases", detail: "Pre-existing diseases covered after 1 year." },
      { name: "Maternity Expenses", detail: "Cover for delivery or lawful medical termination with a 9-month wait." },
      { name: "Out Patient Department (OPD) Expenses", detail: "Reimbursement for outpatient visits." },
      { name: "Cost of Prescribed External Medical Aid", detail: "Covers hearing aids, spectacles, contact lenses, etc." },
      { name: "Baby Day One Cover", detail: "Medical expenses for newborn baby up to 91 days." },
      { name: "Critical Illnesses Cover", detail: "Sum insured paid on first diagnosis of specified critical illnesses." },
      { name: "Travel Expenses For Medical Treatment", detail: "Reimbursement for required medical travel." },
      { name: "Dental Expenses", detail: "Reimbursement for dental treatment expenses." },
      { name: "Alternate Methods Of Treatment", detail: "Covers homeopathic, Ayurvedic, Siddha treatments." },
      { name: "Donor Expenses", detail: "Covers donor hospitalization for organ harvesting." },
      { name: "Ambulance Charges", detail: "Covers emergency ambulance transportation." },
      { name: "Pre and Post Hospitalization", detail: "Medical expenses incurred before and after hospitalization." },
    ],

    additionalFeatures: [
      "Customizable for groups",
      "Cashless claims facility",
    ],

    keyExclusions: [
      "Pre-Existing Diseases (unless opted/completed wait)",
      "Circumcision, plastic surgery",
      "Cost of spectacles, contact lenses, hearing aids (unless opted)",
      "Dental treatment or surgery not requiring hospitalization (unless opted)",
      "Convalescence, Sterility, general debility",
      "HIV/AIDS",
      "Intentional self-injury and use of intoxicating drugs/alcohol",
      "Voluntary medical termination of pregnancy in first 12 weeks",
      "Naturopathy treatment",
    ],
  },

  "icici-lombard-complete-health": {
    id: "icici-lombard-complete-health",
    insurerId: "icici-lombard",
    name: "ICICI Lombard Complete Health",
    fullName: "ICICI Lombard Complete Health Insurance",
    uin: "ICIHLIP21383V052021",
    tagline: "Comprehensive protection with Unlimited Reset & Super No Claim Bonus",
    description: "A holistic individual and family floater health insurance plan featuring Unlimited Reset Benefit, Super No Claim Bonus up to 200%, and worldwide coverage options.",
    color: "#E23E3E",
    bgColor: "#FDEDED",

    cardHighlights: [
      "Sum Insured up to ₹50 Lakh",
      "Unlimited Reset Benefit",
      "Super No Claim Bonus up to 200%",
      "Worldwide Cover (10% co-pay)",
      "Domiciliary Hospitalization",
    ],

    sumInsuredRange: "Up to ₹50 Lakh",
    sumInsuredOptions: ["Up to 10L", "15L", "20L", "25L", "50L"],

    entryAge: {
      adults: "18 – 65 years",
      children: "From Day 1 (if opted)",
      note: "Available on Individual and Family Floater basis.",
    },
    familyDefinition: "Self + Spouse + Children + Dependent Parents",
    maxFamilySize: "Flexible",
    policyTerm: "1 / 2 years",

    coverageDetails: [
      {
        title: "Unlimited Reset Benefit",
        desc: "Automatically reinstates the entire sum insured if exhausted due to claims in the policy year for subsequent hospitalizations.",
        icon: RefreshCw,
      },
      {
        title: "Super No Claim Bonus",
        desc: "50% bonus for every claim-free year, up to 100% for SI up to ₹10L and up to 200% for SI ₹15L and above (if opted).",
        icon: Star,
      },
      {
        title: "Worldwide Cover",
        desc: "Covers hospitalization expenses incurred abroad with a co-pay of 10% (subject to plan selection).",
        icon: Zap,
      },
      {
        title: "Domiciliary Hospitalization",
        desc: "Coverage for medical expenses when the insured cannot be moved to a hospital or room is unavailable.",
        icon: PlusSquare,
      },
      {
        title: "In-Patient Hospitalization",
        desc: "Complete hospitalization coverage including room rent, ICU, surgeon fees, medicines, etc.",
        icon: HeartPulse,
      },
      {
        title: "Day Care Procedures",
        desc: "All Day Care treatments covered where 24 hours hospitalization is not required.",
        icon: Activity,
      },
    ],

    cumulativeBonus: "50% per claim-free year (up to 100% or 200% based on SI and Super NCB add-on)",
    restoration: "Unlimited Reset Benefit available",

    waitingPeriods: [
      { period: "30 days", description: "Initial waiting period for all illnesses" },
      { period: "24 months", description: "Specific diseases/procedures" },
      { period: "36 months", description: "Pre-existing diseases" },
    ],

    copay: "10% co-pay for worldwide cover",

    discounts: [
      { name: "Long-Term Discount", detail: "Discounts available on 2-year policy premium." },
      { name: "Family Discount", detail: "Discount when 2 or more family members are covered." },
    ],

    optionalCovers: [
      { name: "Super No Claim Bonus", detail: "Boosts NCB up to 200% for higher Sum Insured options." },
      { name: "Worldwide Cover", detail: "Cover abroad with 10% co-payment." },
    ],

    additionalFeatures: [
      "Increase Sum Insured at renewal (fresh waiting period applies to enhanced amount)",
      "Cashless treatment at network hospitals",
      "Easy portability",
    ],

    keyExclusions: [
      "Pre-Existing Diseases until waiting period expires",
      "Cosmetic surgery",
      "Non-allopathic treatment (unless specified)",
      "Unproven or experimental treatments",
      "Substance abuse or self-inflicted injuries",
    ],
  },
};
