"use client";

import { usePathname } from "next/navigation";
import { quoteHref } from "@/lib/quote";

export function QuoteLink({ className, children }: { className: string; children: React.ReactNode }) {
  const pathname = usePathname();
  return <a className={className} href={quoteHref(pathname)}>{children}</a>;
}
