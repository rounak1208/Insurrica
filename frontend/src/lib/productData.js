import { Heart, Car, Shield, Users, Home, Plane, Briefcase, Activity, PlusSquare, HeartPulse, ShieldAlert, BadgeCheck, Clock, Zap, FileText } from "lucide-react";

export const productData = {
  health: {
    id: "health",
    title: "Health Insurance",
    subtitle: "100% Cashless Treatment at 10,000+ Network Hospitals. Secure your family's health today.",
    tagline: "Comprehensive coverage for medical emergencies.",
    color: "#EF4444",
    bgColor: "#FEF2F2",
    features: [
      { title: "Cashless Claims", desc: "Get cashless treatment across a wide network of hospitals.", icon: Zap },
      { title: "Pre & Post Hospitalization", desc: "Coverage for medical expenses before and after hospitalization.", icon: Clock },
      { title: "No Claim Bonus", desc: "Get increased sum assured for every claim-free year.", icon: BadgeCheck },
      { title: "Tax Benefits", desc: "Save tax up to ₹75,000 under section 80D.", icon: FileText }
    ],
    whyChoose: [
      {
        title: "Protection from Rising Medical Costs",
        text: "Medical inflation is growing fast. A health policy ensures you don't exhaust your savings during an emergency."
      },
      {
        title: "Access to Top Hospitals",
        text: "With a large network of hospitals, you can get quality treatment without worrying about arranging immediate cash."
      },
      {
        title: "Coverage for Day Care Procedures",
        text: "Many modern treatments don't require 24-hour hospitalization. Our plans cover a wide range of day care procedures."
      }
    ],
    riders: [
      { title: "Maternity Cover", desc: "Covers delivery expenses and newborn baby coverage." },
      { title: "Critical Illness", desc: "Lump sum payout upon diagnosis of listed critical illnesses." },
      { title: "OPD Cover", desc: "Reimbursement for doctor consultations and pharmacy bills." }
    ],
    faqs: [
      { q: "What is a waiting period in Health Insurance?", a: "It's the time you must wait before certain diseases or conditions are covered. Typical waiting periods are 2-4 years for pre-existing diseases." },
      { q: "Can I add my parents to my health insurance?", a: "Yes, you can buy a family floater plan or a separate senior citizen plan for your parents." },
      { q: "What is cashless hospitalization?", a: "Cashless hospitalization allows you to get treated at network hospitals without paying out of pocket. The insurer pays the bill directly to the hospital." }
    ]
  },
  motor: {
    id: "motor",
    title: "Motor Insurance",
    subtitle: "Protect your vehicle from theft, accidents, and natural disasters. Instant policy issuance.",
    tagline: "Drive with peace of mind.",
    color: "#0088CC",
    bgColor: "#F0F9FF",
    features: [
      { title: "Own Damage Cover", desc: "Protection against accidents, fire, and natural disasters.", icon: Car },
      { title: "Third-Party Liability", desc: "Mandatory cover for damages to third-party property or person.", icon: Users },
      { title: "Zero Depreciation", desc: "Get full claim without depreciation deductions.", icon: Shield },
      { title: "24x7 Roadside Assistance", desc: "Help is just a call away if your car breaks down.", icon: Clock }
    ],
    whyChoose: [
      {
        title: "Legal Compliance",
        text: "Third-party motor insurance is mandatory by law in India to legally drive on the roads."
      },
      {
        title: "Financial Protection",
        text: "Repairs can be expensive. Motor insurance pays for repairing your vehicle after an accident."
      },
      {
        title: "Protection Against Theft",
        text: "If your car is stolen, comprehensive insurance pays you the Insured Declared Value (IDV)."
      }
    ],
    riders: [
      { title: "Engine Protection", desc: "Covers repair costs for engine damage due to water ingression or oil leaks." },
      { title: "Return to Invoice", desc: "In case of total loss, get the invoice value of the car (on-road price) instead of IDV." },
      { title: "Consumables Cover", desc: "Pays for consumables like engine oil, nuts, bolts during accident repairs." }
    ],
    faqs: [
      { q: "What is IDV?", a: "Insured Declared Value (IDV) is the maximum Sum Assured fixed by the insurer which is provided on theft or total loss of vehicle." },
      { q: "What happens if I don't renew before expiry?", a: "If your policy expires, you might lose your No Claim Bonus (NCB), and your car might need a physical inspection before renewal." },
      { q: "Is Zero Depreciation available for old cars?", a: "Most insurers offer Zero Depreciation add-on for cars up to 5 years old, though some offer it up to 7 years." }
    ]
  },
  term: {
    id: "term",
    title: "Term Life Insurance",
    subtitle: "Secure your family's future with large coverage at just ₹15/day.",
    tagline: "Pure financial protection for your loved ones.",
    color: "#1A1A4E",
    bgColor: "#EEF2FF",
    features: [
      { title: "High Sum Assured", desc: "Get life cover up to ₹5 Crore at affordable premiums.", icon: Shield },
      { title: "Fixed Premiums", desc: "Lock in your premium amount for the entire policy term.", icon: Clock },
      { title: "Tax Benefits", desc: "Tax savings under Section 80C and Section 10(10D).", icon: FileText },
      { title: "Flexible Payouts", desc: "Nominee can receive payout as lump sum or monthly income.", icon: Zap }
    ],
    whyChoose: [
      {
        title: "Income Replacement",
        text: "If you are the sole breadwinner, a term plan pays a large amount to ensure your family's lifestyle isn't compromised."
      },
      {
        title: "Pay Off Liabilities",
        text: "A term plan can help pay off a home loan or multiple debts, ensuring your family isn't burdened with loans."
      },
      {
        title: "Affordable Protection",
        text: "Compared to other life insurance products, pure term insurance offers the highest cover for the lowest premiums."
      }
    ],
    riders: [
      { title: "Critical Illness Rider", desc: "Pays a lump sum if diagnosed with listed critical illnesses like cancer or heart attack." },
      { title: "Accidental Death Benefit", desc: "Provides an additional payout to the nominee in case of death due to an accident." },
      { title: "Waiver of Premium", desc: "Waives off all future premiums if you suffer an accidental total permanent disability." }
    ],
    faqs: [
      { q: "Who should buy Term Insurance?", a: "Anyone with financial dependents (spouse, children, aging parents) or financial liabilities (loans)." },
      { q: "What happens if I survive the policy term?", a: "In a standard pure term plan, there is no maturity benefit. If you buy a Term Return of Premium (TROP) plan, you get back the premiums paid." },
      { q: "Can I increase my cover later?", a: "Some term plans offer a life stage benefit where you can increase your cover upon marriage or childbirth." }
    ]
  },
  life: {
    id: "life",
    title: "Life Insurance (Savings & Investment)",
    subtitle: "Build your wealth while staying protected with complete peace of mind.",
    tagline: "Insurance that gives you returns.",
    color: "#10B981",
    bgColor: "#F0FDF4",
    features: [
      { title: "Guaranteed Returns", desc: "Enjoy maturity benefits along with life cover.", icon: BadgeCheck },
      { title: "Wealth Creation", desc: "Choose ULIPs to invest in market-linked funds.", icon: Activity },
      { title: "Tax Saving", desc: "Save tax on premiums paid and maturity amount.", icon: FileText },
      { title: "Loan Facility", desc: "Avail a loan against your policy during emergencies.", icon: PlusSquare }
    ],
    whyChoose: [
      {
        title: "Achieve Financial Goals",
        text: "Life insurance plans are excellent tools for long-term goals like a child's higher education or marriage."
      },
      {
        title: "Retirement Planning",
        text: "Use endowment or pension plans to build a steady corpus for your post-retirement life."
      },
      {
        title: "Dual Benefit",
        text: "Unlike pure protection plans, you get both a life cover for uncertainties and a lump-sum maturity benefit."
      }
    ],
    riders: [
      { title: "Premium Waiver", desc: "In case of disability, the insurer pays future premiums and the maturity benefit is retained." },
      { title: "Accidental Rider", desc: "Additional payout in case of accidental death." }
    ],
    faqs: [
      { q: "What is an Endowment Plan?", a: "It is a life insurance policy which provides life cover along with a maturity benefit if the insured survives the policy term." },
      { q: "What are ULIPs?", a: "Unit Linked Insurance Plans (ULIPs) combine insurance and investment. A portion goes towards life cover and the rest is invested in equity/debt markets." }
    ]
  },
  home: {
    id: "home",
    title: "Home Insurance",
    subtitle: "Protect your biggest asset from natural disasters, fire, and burglary.",
    tagline: "Complete security for your house and belongings.",
    color: "#F59E0B",
    bgColor: "#FFFBEB",
    features: [
      { title: "Fire & Perils", desc: "Protection against fire, lightning, storms, and floods.", icon: ShieldAlert },
      { title: "Burglary Cover", desc: "Covers loss of valuable items and structural damage due to theft.", icon: Home },
      { title: "Alternate Accommodation", desc: "Pays for your rent if your home is rendered uninhabitable.", icon: Users },
      { title: "Tenant Coverage", desc: "Tenants can buy cover exclusively for contents.", icon: BadgeCheck }
    ],
    whyChoose: [
      {
        title: "Safeguard Your Investment",
        text: "Your home is likely your most expensive asset. Rebuilding costs after a disaster can be catastrophic without insurance."
      },
      {
        title: "Peace of Mind",
        text: "Whether you are on a vacation or sleeping, you know your finances are protected against unforeseen disasters."
      }
    ],
    riders: [
      { title: "Electronic Equipment Cover", desc: "Covers breakdown of high-value electronics." },
      { title: "Jewellery Cover", desc: "Insures valuable ornaments against theft." }
    ],
    faqs: [
      { q: "Does home insurance cover earthquakes?", a: "Most comprehensive home insurance plans cover earthquakes, but checking the policy wording is recommended." },
      { q: "Can I buy insurance as a tenant?", a: "Yes, tenants can buy a 'Contents Only' policy to protect their appliances, furniture, and valuables." }
    ]
  },
  travel: {
    id: "travel",
    title: "Travel Insurance",
    subtitle: "Travel without worries. Covers medical emergencies, flight delays, and baggage loss.",
    tagline: "Your best companion on foreign trips.",
    color: "#8B5CF6",
    bgColor: "#F5F3FF",
    features: [
      { title: "Medical Cover", desc: "Covers unexpected hospitalization in foreign countries.", icon: HeartPulse },
      { title: "Flight Delays", desc: "Reimbursement for meals and stay if your flight is delayed.", icon: Clock },
      { title: "Loss of Baggage", desc: "Compensation for lost or delayed checked-in bags.", icon: Briefcase },
      { title: "Loss of Passport", desc: "Assistance and cost coverage to obtain a duplicate passport.", icon: FileText }
    ],
    whyChoose: [
      {
        title: "High Medical Costs Abroad",
        text: "Medical treatments in the US or Europe can bankrupt you. Travel insurance handles medical emergencies up to millions of dollars."
      },
      {
        title: "Schengen Visa Requirement",
        text: "It is legally mandatory to have travel insurance to obtain visas for several countries, including the Schengen area."
      }
    ],
    riders: [
      { title: "Pre-existing Disease Cover", desc: "Covers life-threatening complications related to an existing health condition." },
      { title: "Adventure Sports Rider", desc: "Covers injuries sustained while participating in adventure activities like scuba diving." }
    ],
    faqs: [
      { q: "Is travel insurance necessary for domestic travel?", a: "It is highly recommended as it covers flight delays, baggage losses, and domestic medical emergencies during your trip." },
      { q: "Can I extend my policy while abroad?", a: "Yes, you can usually apply for an extension online before your current policy expires." }
    ]
  },
  business: {
    id: "business",
    title: "Business / Commercial Insurance",
    subtitle: "Tailor-made coverage for MSMEs, Startups, and large corporations.",
    tagline: "Protect your enterprise.",
    color: "#06B6D4",
    bgColor: "#ECFEFF",
    features: [
      { title: "Group Health", desc: "Provide health benefits to your employees.", icon: Users },
      { title: "Fire & Burglary", desc: "Cover your office, warehouse, and inventory.", icon: ShieldAlert },
      { title: "Cyber Insurance", desc: "Protection against data breaches and cyber extortion.", icon: Activity },
      { title: "Marine & Transit", desc: "Cover goods during transit via air, water, or road.", icon: Plane }
    ],
    whyChoose: [
      {
        title: "Employee Retention",
        text: "Offering group health and term insurance shows employees you care, reducing attrition and improving morale."
      },
      {
        title: "Business Continuity",
        text: "Property or fire insurance ensures your business can rebuild and run smoothly even after a major disaster."
      },
      {
        title: "Liability Protection",
        text: "Protects your business from lawsuits and claims made by third parties due to negligence or product issues."
      }
    ],
    riders: [
      { title: "Directors and Officers (D&O) Liability", desc: "Protects the personal assets of management from lawsuits." },
      { title: "Professional Indemnity", desc: "Essential for professionals to protect against claims of negligence or errors." }
    ],
    faqs: [
      { q: "What is Workmen's Compensation?", a: "It is an insurance that covers medical and legal liabilities if a worker is injured during employment." },
      { q: "How much does a Group Health plan cost?", a: "Cost depends on the number of employees, average age, sum assured, and covers chosen. Premiums are significantly lower than retail plans." }
    ]
  }
};
