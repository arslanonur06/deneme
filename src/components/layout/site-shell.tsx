import type { ReactNode } from "react";
import { Suspense } from "react";
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import {
  StickyRobinbetBar,
  StickyRobinbetBarFallback,
} from "./sticky-robinbet-bar";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="flex-1 pb-20 sm:pb-16">{children}</div>
      <Footer />
      <Suspense fallback={<StickyRobinbetBarFallback />}>
        <StickyRobinbetBar />
      </Suspense>
    </>
  );
}
