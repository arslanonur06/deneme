"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import {
  buildPartnerAffiliateUrlWithMerged,
  mergePartnerTrackingParams,
  PARTNER_TRACKING_STORAGE_KEY,
} from "@/lib/partner-affiliate-url";

/**
 * Ortak Telegram URL’sine mevcut sayfadaki btag / UTM vb. parametreleri ekler;
 * oturum boyunca sessionStorage ile sonraki sayfa geçişlerinde de korunur.
 */
export function usePartnerAffiliateHref(): string {
  const searchParams = useSearchParams();

  return useMemo(() => {
    const incoming = new URLSearchParams(searchParams.toString());
    const stored =
      typeof window !== "undefined"
        ? sessionStorage.getItem(PARTNER_TRACKING_STORAGE_KEY)
        : null;

    const merged = mergePartnerTrackingParams(incoming, stored);

    if (typeof window !== "undefined") {
      const serialized = merged.toString();
      if (serialized) {
        sessionStorage.setItem(PARTNER_TRACKING_STORAGE_KEY, serialized);
      }
    }

    return buildPartnerAffiliateUrlWithMerged(merged);
  }, [searchParams]);
}
