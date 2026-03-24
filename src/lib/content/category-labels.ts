import type { Article } from "./articles";

/** UI’da gösterilen Türkçe kategori başlıkları (URL segmenti İngilizce kalır). */
export const kategoriEtiketi: Record<Article["category"], string> = {
  guides: "Rehberler",
  slots: "Slotlar",
  reviews: "İncelemeler",
};
