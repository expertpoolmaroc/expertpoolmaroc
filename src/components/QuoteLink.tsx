"use client";

import { usePathname } from "next/navigation";
import { quoteMailto } from "@/lib/quote";

export function QuoteLink({ className, children }: { className: string; children: React.ReactNode }) {
  const pathname = usePathname();
  return <a className={className} href={quoteMailto(pathname)}>{children}</a>;
}
