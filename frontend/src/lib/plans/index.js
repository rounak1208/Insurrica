/**
 * Central plan registry — auto-merges all company modules.
 *
 * ── HOW TO ADD A NEW COMPANY ───────────────────────────
 *  1. Create a new file in this folder (e.g., nivaBupa.js)
 *     exporting  { profile, plans, planOrder }
 *  2. Import it here and add it to the `companies` array below
 *  3. Remove it from comingSoon.js
 *  4. Done! The UI will pick it up automatically.
 * ───────────────────────────────────────────────────────
 */

import * as starHealth from "./starHealth";
import * as hdfcErgo from "./hdfcErgo";
import * as iciciLombard from "./iciciLombard";
import * as bajajAllianz from "./bajajAllianz";
import * as nivaBupa from "./nivaBupa";
import * as careHealth from "./careHealth";
import { comingSoonInsurers } from "./comingSoon";

// ─── Register all active company modules here ──────────
const companies = [starHealth, hdfcErgo, iciciLombard, bajajAllianz, nivaBupa, careHealth];
// ───────────────────────────────────────────────────────

/**
 * Merged insurer profiles — keyed by insurer ID.
 * Each profile includes tabLabel, accentColor, whyBlurb for the UI.
 */
export const insurerProfiles = Object.assign(
  {},
  ...companies.map((c) => c.profile)
);

/**
 * Merged health insurance plans — keyed by plan ID.
 * Every plan has an `insurerId` linking back to its insurer profile.
 */
export const healthInsurancePlans = Object.assign(
  {},
  ...companies.map((c) => c.plans)
);

/**
 * Per-insurer plan ordering — used by the listing page to show plans in order.
 * e.g. { "star-health": ["super-star", "star-health-assure"], ... }
 */
export const planOrderByInsurer = Object.fromEntries(
  companies.map((c) => {
    const insurerId = Object.keys(c.profile)[0];
    return [insurerId, c.planOrder];
  })
);

/**
 * Flat ordered list of all plan IDs across all insurers.
 * Useful for sitemaps, search indexing, etc.
 */
export const healthPlanOrder = companies.flatMap((c) => c.planOrder);

/**
 * Ordered list of active insurer IDs — drives the tab order on the listing page.
 */
export const activeInsurers = companies.map(
  (c) => Object.keys(c.profile)[0]
);

// Re-export coming soon list
export { comingSoonInsurers };
