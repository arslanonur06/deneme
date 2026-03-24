"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { usePartnerAffiliateHref } from "@/hooks/use-partner-affiliate-href";

type PartnerOutboundLinkProps = Omit<
  ComponentPropsWithoutRef<"a">,
  "href" | "children"
> & {
  children: ReactNode;
};

export function PartnerOutboundLink({
  children,
  ...rest
}: PartnerOutboundLinkProps) {
  const href = usePartnerAffiliateHref();
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}
