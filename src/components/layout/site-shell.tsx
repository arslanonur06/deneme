import type { ReactNode } from "react";
import { Suspense } from "react";
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import {
  StickySuratbetBar,
  StickySuratbetBarFallback,
} from "./sticky-suratbet-bar";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="flex-1 pb-20 sm:pb-16">{children}</div>
      <Footer />
      <Suspense fallback={<StickySuratbetBarFallback />}>
        <StickySuratbetBar />
      </Suspense>
    </>
  );
}
