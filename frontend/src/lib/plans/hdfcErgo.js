import {
  Heart, Shield, Clock, Zap, BadgeCheck, Activity,
  HeartPulse, PlusSquare, Stethoscope, Pill, Syringe,
  Baby, Sparkles, RefreshCw, Star,
} from "./icons";

/**
 * HDFC Ergo Health Insurance — Company profile and plan data.
 *
 * Sources:
 *   - HDFC ERGO Group Health Insurance Policy Wording (UIN: HDHHGP21544V012021)
 *   - HDFC Click 2 Protect Health Brochure
 *
 * ── ADDING A NEW PLAN ──────────────────────────────────
 *  1. Add the plan object below with a unique `id` and `insurerId: "hdfc-ergo"`
 *  2. Add the id to the `planOrder` array
 *  3. That's it — the central registry and UI will pick it up automatically.
 */

/** Insurer profile shown in the sidebar */
export const profile = {
  "hdfc-ergo": {
    id: "hdfc-ergo",
    name: "HDFC Ergo Health Insurance",
    logo: "https://www.hdfcergo.com/images/default-source/default-album/hdfc_ergo_logo.svg",
    tagline: "Comprehensive health protection backed by HDFC's trust",
    description: "HDFC Ergo General Insurance Company Limited is a joint venture between HDFC Ltd. and ERGO International AG. With IRDAI Reg. No. 146, they offer innovative health, motor, travel, and home insurance products across India with a strong digital-first approach and 14,500+ network hospitals.",
    highlights: [
      "14,500+ Network Hospitals",
      "IRDAI Registered (Reg. No. 146)",
      "Stay Active Discount (up to 8%)",
      "Cashless Claims & E-Opinion",
    ],
    established: 2007,
    headquarters: "Mumbai",
    /** Short label for the tab button */
    tabLabel: "HDFC Ergo",
    /** Accent colour for the sidebar icon */
    accentColor: "#004B87",
    /** "Why X?" blurb shown in the sidebar callout */
    whyBlurb: {
      title: "Why HDFC Ergo?",
      text: "Backed by HDFC's trust, HDFC Ergo offers industry-leading features like Stay Active Discount, Double Restore, and a worldwide Critical Advantage Rider — combining innovation with extensive coverage.",
      color: "#004B87",
    },
  },
};

/** Ordered plan IDs for display on the listing page */
export const planOrder = ["hdfc-ergo-group-health", "hdfc-click2protect-health"];

/** Plan data keyed by plan ID */
export const plans = {
  "hdfc-ergo-group-health": {
    id: "hdfc-ergo-group-health",
    insurerId: "hdfc-ergo",
    name: "HDFC Ergo Group Health",
    fullName: "HDFC ERGO Group Health Insurance Policy",
    uin: "HDHHGP21544V012021",
    tagline: "Flexible group health protection with restore benefit and critical illness cover",
    description: "A comprehensive health insurance plan offering in-patient hospitalization, day care procedures, domiciliary treatment, and up to 26 optional covers including maternity, infertility, OPD, and critical illness benefit — all backed by HDFC Ergo's 14,500+ hospital network.",
    color: "#004B87",
    bgColor: "#E8F4FD",

    cardHighlights: [
      "Sum Insured up to ₹50 Lakh",
      "100% Restore Benefit",
      "Double Restore option available",
      "12 Critical Illness covers",
      "50% No Claim Bonus/year",
      "Air Ambulance up to ₹2.5L",
    ],

    sumInsuredRange: "₹3 Lakh – ₹50 Lakh",
    sumInsuredOptions: ["₹3L", "₹5L", "₹10L", "₹15L", "₹20L", "₹25L", "₹50L"],

    entryAge: {
      adults: "18 – 65 years",
      children: "91 days – 25 years",
      note: "Coverage available for self, spouse, dependent children, and dependent parents/parents-in-law.",
    },
    familyDefinition: "Self + Spouse + Children + Parents + Parents-in-law",
    maxFamilySize: "4 Adults + 5 Children (Individual or Family Floater)",
    policyTerm: "1 / 2 years",

    coverageDetails: [
      {
        title: "In-Patient Hospitalization",
        desc: "Complete hospitalization coverage including room rent, ICU, surgeon fees, nursing, medicines, diagnostics, and surgical appliances up to Sum Insured.",
        icon: HeartPulse,
      },
      {
        title: "Room Rent",
        desc: "Room rent and boarding charges as per Sum Insured slab. ICU charges covered. Proportionate deduction applies if room rent exceeds limits.",
        icon: Shield,
      },
      {
        title: "Day Care Procedures",
        desc: "All Day Care treatments requiring less than 24-hour hospitalization covered — including chemotherapy, dialysis, cataract surgery, and coronary angiography.",
        icon: Activity,
      },
      {
        title: "Pre & Post Hospitalization",
        desc: "60 days pre-hospitalization and 180 days post-hospitalization expenses covered for consultations, investigations, and medicines.",
        icon: Clock,
      },
      {
        title: "Domiciliary Hospitalization",
        desc: "Medical treatment at home when patient cannot be moved to hospital or room is unavailable. Pre/post hospitalization expenses included.",
        icon: PlusSquare,
      },
      {
        title: "Organ Donor Expenses",
        desc: "Medical and surgical expenses for organ donor hospitalization for harvesting, where the insured person is the recipient.",
        icon: Heart,
      },
      {
        title: "Road Ambulance",
        desc: "Up to ₹2,000 per hospitalization for emergency road ambulance transportation to hospital, between hospitals, or from hospital to home.",
        icon: Syringe,
      },
      {
        title: "Air Ambulance",
        desc: "Emergency air ambulance up to ₹2.5 Lakh per hospitalization (available for Sum Insured ₹10 Lakh and above). Subject to basic SI limit per year.",
        icon: Zap,
      },
      {
        title: "AYUSH Treatment",
        desc: "Hospitalization under Ayurveda, Unani, Siddha, and Homeopathy covered in AYUSH-registered hospitals (optional cover).",
        icon: Pill,
      },
      {
        title: "Restore Benefit",
        desc: "Instant 100% restoration of Base Sum Insured upon partial or complete utilization. Available for all insured persons on floater basis.",
        icon: RefreshCw,
      },
      {
        title: "Cumulative Bonus",
        desc: "50% of Base Sum Insured added for every claim-free year, up to a maximum of 100%. Reduced by 50% in case of a claim.",
        icon: Sparkles,
      },
      {
        title: "E-Opinion for Critical Illness",
        desc: "Second medical opinion from expert panel for 8 major critical illnesses including cancer, CABG, kidney failure, and stroke.",
        icon: Stethoscope,
      },
    ],

    cumulativeBonus: "50% of Base Sum Insured per claim-free year, maximum up to 100%",
    restoration: "100% Base Sum Insured restored once per policy year (Double Restore: 200% total available as optional cover)",

    waitingPeriods: [
      { period: "30 days", description: "Initial waiting period for all illnesses (accidents covered from Day 1)" },
      { period: "24 months", description: "Specific diseases/procedures: Cataract, ENT, Hernia, Joint Replacement, Gallbladder, Varicose Veins, Kidney Stones, etc." },
      { period: "36 months", description: "Pre-existing diseases and their direct complications" },
      { period: "48 months", description: "Maternity Cover and OPD Cover (if opted)" },
    ],

    copay: null,

    discounts: [
      { name: "Family Discount", detail: "10% discount when 2 or more family members are covered under Individual Sum Insured plan" },
      { name: "Long-Term Discount", detail: "7.5% on 2-year policy premium" },
      { name: "Stay Active Discount", detail: "Up to 8% renewal discount based on average daily step count (10,000+ steps = 8%)" },
    ],

    optionalCovers: [
      { name: "PED Waiting Modification", detail: "Reduce pre-existing disease waiting period from 36 months to a shorter duration" },
      { name: "Specific Illness Waiting Modification", detail: "Modify the 24-month waiting period for listed specific diseases/procedures" },
      { name: "Room Rent & ICU Modification", detail: "Upgrade room rent and ICU limits beyond default slab-based entitlement" },
      { name: "Double Restore Benefit", detail: "200% total restoration — a second 100% restore kicks in after the first is utilized" },
      { name: "Maternity Cover", detail: "Delivery expenses covered with 48-month waiting period. Pre/post natal expenses excluded." },
      { name: "Baby Cover from Day 1", detail: "Newborn baby medical expenses covered from birth for medically necessary treatment" },
      { name: "Infertility Cover", detail: "IVF and assisted reproductive treatment expenses for both male and female insured" },
      { name: "Hospital Cash", detail: "Per-day cash benefit during hospitalization for each completed 24-hour period" },
      { name: "Preventive Health Check-up", detail: "Annual health check-up packages based on Sum Insured slab (₹1,500 – ₹10,000)" },
      { name: "AYUSH Treatment", detail: "Coverage for Ayurvedic, Unani, Siddha, and Homeopathy hospitalization" },
      { name: "OPD Cover", detail: "Outpatient treatment expenses covered (48-month waiting period applies)" },
      { name: "Co-Payment Option", detail: "Opt for a co-payment percentage to reduce premium" },
      { name: "Aggregate Deductible", detail: "Choose an aggregate deductible amount to lower premium cost" },
      { name: "Personal Accident Cover", detail: "Accidental death and permanent disablement cover up to Sum Insured" },
      { name: "Second Medical Opinion", detail: "Expert second opinion for 8 major critical illnesses via network provider panel" },
      { name: "Critical Illness (Benefit Based)", detail: "Lump sum payout on diagnosis of 12 listed critical illnesses (90-day waiting, 30-day survival)" },
      { name: "Double SI for Critical Illness", detail: "100% increase in Sum Insured upon diagnosis of 4 major critical illnesses" },
      { name: "Corporate Buffer", detail: "Additional buffer amount after individual Sum Insured is exhausted" },
      { name: "Disease Capping", detail: "Sub-limits on specific illness claims for premium reduction" },
    ],

    additionalFeatures: [
      "Cashless treatment at 14,500+ network hospitals",
      "E-Opinion for Critical Illness (via expert panel)",
      "Daily Cash for choosing shared accommodation (₹800–₹1,000/day)",
      "Stay Active Discount — earn up to 8% off renewal premium by walking",
      "Easy portability from other insurers with accrued benefits",
      "Instalment payment options available",
      "Grace period of 30 days for renewal",
      "Sum Insured enhancement at renewal without medicals (1 grid up)",
      "Family Floater option for comprehensive family coverage",
    ],

    keyExclusions: [
      "Cosmetic/plastic surgery (unless post-accident, burns, or cancer)",
      "Dental treatment (unless requiring hospitalization)",
      "Obesity surgery (unless BMI ≥ 40 or ≥ 35 with co-morbidities)",
      "Adventure/hazardous sports injuries (professional participation)",
      "Treatment for alcoholism or substance abuse",
      "Unproven or experimental treatments",
      "Refractive error correction (below 7.5 dioptres)",
      "Congenital external diseases, defects, or anomalies",
      "Treatment outside India",
    ],
  },

  "hdfc-click2protect-health": {
    id: "hdfc-click2protect-health",
    insurerId: "hdfc-ergo",
    name: "Click 2 Protect Health",
    fullName: "HDFC Click 2 Protect Health Insurance Plan",
    uin: "HDHHGP21544V012021",
    tagline: "Protection + Health — Complete life and health coverage in one policy",
    description: "A unique combo plan combining HDFC Life's term insurance with HDFC Ergo's health coverage. Choose from 9 life plan options (Life, 3D Life, Extra Life, Income, Return of Premium, and more) while enjoying comprehensive health benefits with restore, bonus, and critical advantage rider.",
    color: "#0066A4",
    bgColor: "#E6F2FA",

    cardHighlights: [
      "Life + Health combo in one policy",
      "9 Life plan options to choose from",
      "Health SI up to ₹50 Lakh",
      "100% Restore Benefit",
      "Critical Advantage Rider (worldwide)",
      "Stay Active Discount up to 8%",
      "Return of Premium option available",
    ],

    sumInsuredRange: "₹3 Lakh – ₹50 Lakh",
    sumInsuredOptions: ["₹3L", "₹5L", "₹10L", "₹15L", "₹20L", "₹25L", "₹50L"],

    entryAge: {
      adults: "18 – 65 years",
      children: "91 days – 25 years",
      note: "Life cover for one earning member (proposer). Health cover for self, spouse, children, and dependent parents.",
    },
    familyDefinition: "Self + Spouse + Children + Parents + Parents-in-law",
    maxFamilySize: "4 Adults + 5 Children (Individual or Family Floater)",
    policyTerm: "1 / 2 years (Health) • 5 – 40 years (Life)",

    coverageDetails: [
      {
        title: "Life + Health Combo",
        desc: "Unique plan combining HDFC Life's term insurance with HDFC Ergo's health coverage in a single policy for comprehensive protection.",
        icon: Shield,
      },
      {
        title: "In-Patient Hospitalization",
        desc: "Full hospitalization coverage including room rent, ICU, surgeon fees, nursing, medicines, diagnostics, and surgical appliances.",
        icon: HeartPulse,
      },
      {
        title: "Day Care Procedures",
        desc: "All Day Care treatments covered — chemotherapy, dialysis, cataract surgery, coronary angiography, and more.",
        icon: Activity,
      },
      {
        title: "Pre & Post Hospitalization",
        desc: "60 days pre-hospitalization and 180 days post-hospitalization expenses covered.",
        icon: Clock,
      },
      {
        title: "Domiciliary Treatment",
        desc: "Treatment at home when patient cannot be moved to hospital. Pre and post hospitalization expenses included.",
        icon: PlusSquare,
      },
      {
        title: "9 Life Plan Options",
        desc: "Choose from Life, 3D Life, Extra Life, Income, Extra Life Income, Income Replacement, Return of Premium, Life Long Protection, and 3D Life Long Protection.",
        icon: BadgeCheck,
      },
      {
        title: "Critical Advantage Rider",
        desc: "Worldwide coverage at network centers for 8 major critical illnesses including cancer, CABG, organ transplant. Includes travel and accommodation.",
        icon: Sparkles,
      },
      {
        title: "Restore Benefit",
        desc: "100% restoration of Base Sum Insured upon utilization. Available for all insured persons on floater basis.",
        icon: RefreshCw,
      },
      {
        title: "Cumulative Bonus",
        desc: "50% No Claim Bonus per year, maximum 100%. Your ₹5L policy becomes ₹10L in 2 claim-free years.",
        icon: Star,
      },
      {
        title: "Air Ambulance",
        desc: "Emergency air ambulance up to ₹2.5 Lakh per hospitalization for SI ₹10L and above.",
        icon: Syringe,
      },
      {
        title: "Premium Waiver on Disability",
        desc: "All future premiums waived if the life assured suffers accidental total permanent disability. Policy continues.",
        icon: Zap,
      },
      {
        title: "Life Stage Protection",
        desc: "Increase Sum Assured without medicals on marriage (+50%, max ₹50L), birth of 1st child (+25%, max ₹25L), or birth of 2nd child (+25%, max ₹25L).",
        icon: Baby,
      },
    ],

    cumulativeBonus: "50% of Base Sum Insured per claim-free year, maximum up to 100%",
    restoration: "100% Base Sum Insured restored once per policy year upon partial or complete utilization",

    waitingPeriods: [
      { period: "30 days", description: "Initial waiting period for all illnesses (accidents covered from Day 1)" },
      { period: "24 months", description: "Specific diseases/procedures: Cataract, ENT, Hernia, Joint Replacement, Varicose Veins, Kidney Stones, etc." },
      { period: "36 months", description: "Pre-existing diseases and their direct complications" },
    ],

    copay: null,

    discounts: [
      { name: "Family Discount", detail: "10% discount when 2 or more family members are covered under Individual Sum Insured" },
      { name: "Long-Term Discount", detail: "7.5% on 2-year health policy premium" },
      { name: "Stay Active Discount", detail: "Up to 8% renewal discount based on average step count (10,000+ steps = 8%)" },
    ],

    optionalCovers: [
      { name: "Life Option", detail: "Basic term life cover with premium waiver on accidental disability" },
      { name: "3D Life Option", detail: "Life cover + premium waiver on critical illness diagnosis + accidental disability" },
      { name: "Extra Life Option", detail: "Additional Sum Assured paid on accidental death, over and above basic Sum Assured" },
      { name: "Income Option", detail: "Lump sum + monthly income to nominee for chosen period on death of life assured" },
      { name: "Extra Life Income Option", detail: "Extra Life Sum Assured on accidental death + monthly income to nominee" },
      { name: "Income Replacement Option", detail: "Level or increasing monthly income to nominee for residual policy term" },
      { name: "Return of Premium Option", detail: "All premiums returned if you survive the policy term; full Sum Assured on death" },
      { name: "Life Long Protection", detail: "Whole-of-life coverage with premium payment term = 65 minus entry age" },
      { name: "3D Life Long Protection", detail: "Whole-of-life + critical illness premium waiver + accidental disability waiver" },
      { name: "Critical Advantage Rider", detail: "Worldwide treatment for 8 major critical illnesses at network centers. Includes travel, accommodation, and second opinion." },
      { name: "Top Up Option", detail: "Systematic increase of life cover from 1st policy anniversary onwards" },
      { name: "Double Restore (Health)", detail: "200% total restoration for health coverage component" },
    ],

    additionalFeatures: [
      "Single policy for Life + Health — simplified management",
      "9 flexible life plan options to match your life stage",
      "Critical Advantage Rider — worldwide cancer and cardiac treatment",
      "Life Stage Protection — increase cover on marriage and childbirth without medicals",
      "Top Up Option — systematic annual increase in life cover",
      "Stay Active Discount — earn up to 8% off renewal by walking",
      "Preventive Health Check-up based on Sum Insured slab",
      "Easy portability from other health insurers",
      "Cashless treatment at 14,500+ network hospitals",
      "Premium waiver on accidental total permanent disability",
    ],

    keyExclusions: [
      "Cosmetic/plastic surgery (unless post-accident, burns, or cancer)",
      "Dental treatment (unless requiring hospitalization)",
      "Obesity surgery (unless BMI ≥ 40 or ≥ 35 with co-morbidities)",
      "Adventure/hazardous sports injuries",
      "Treatment for alcoholism or substance abuse",
      "Unproven or experimental treatments",
      "Refractive error correction (below 7.5 dioptres)",
      "Non-allopathic treatment (unless AYUSH cover opted)",
      "Treatment outside India (except Critical Advantage Rider)",
    ],
  },
};
