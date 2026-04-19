import { siteConfig } from "@/lib/content/site";

/** Ortaklık yönlendirmesinde korunacak sorgu parametreleri (btag dahil). */
export const PARTNER_TRACKING_PARAM_KEYS = [
  "btag",
  "tag",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "clickid",
  "gclid",
  "fbclid",
] as const;

export const PARTNER_TRACKING_STORAGE_KEY = "robinbet-partner-tracking";

export function mergePartnerTrackingParams(
  incoming: URLSearchParams,
  storedQuery: string | null,
): URLSearchParams {
  const merged = new URLSearchParams(storedQuery ?? undefined);

  for (const key of PARTNER_TRACKING_PARAM_KEYS) {
    const v = incoming.get(key);
    if (v !== null && v !== "") merged.set(key, v);
  }

  return merged;
}

export function buildPartnerAffiliateUrlWithMerged(
  merged: URLSearchParams,
): string {
  const url = new URL(siteConfig.partner.affiliateUrl);
  merged.forEach((value, key) => {
    url.searchParams.set(key, value);
  });
  return url.toString();
}
