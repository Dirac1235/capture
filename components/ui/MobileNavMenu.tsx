"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/**
 * Real mobile nav menu that replaces the static hamburger icon baked into every
 * mobile Figma export (a circle outline + three decorative lines that did
 * nothing). The button toggles a dropdown of the primary nav links; the icon
 * morphs to an ✕ while open, an invisible backdrop closes it on outside-click,
 * and the current route is highlighted.
 *
 * Positioned at the export's exact hamburger coordinates (left-372 / top-112,
 * 47px) inside the 438-wide mobile canvas, so it scales with everything else.
 */
const LINKS = [
  { label: "Capture", href: "/" },
  { label: "Syni", href: "/syni" },
  { label: "Plus", href: "/plus" },
  { label: "Foundations", href: "/foundations" },
];

export function MobileNavMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "absolute left-[372px] top-[112px] z-50 size-[47px] cursor-pointer rounded-full border border-black/[0.18]",
          "transition-colors hover:bg-black/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        )}
      >
        {open ? (
          <>
            <span className="absolute left-[14px] top-[22.5px] h-[2px] w-[19px] rotate-45 rounded-[4px] bg-deep-black" />
            <span className="absolute left-[14px] top-[22.5px] h-[2px] w-[19px] -rotate-45 rounded-[4px] bg-deep-black" />
          </>
        ) : (
          <>
            <span className="absolute left-[20px] top-[17px] h-[2px] w-[12px] rounded-[4px] bg-deep-black" />
            <span className="absolute left-[13px] top-[23px] h-[2px] w-[19px] rounded-[4px] bg-deep-black" />
            <span className="absolute left-[16px] top-[29px] h-[2px] w-[12px] rounded-[4px] bg-deep-black" />
          </>
        )}
      </button>

      {open && (
        <>
          <button
            type="button"
            aria-hidden
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="absolute inset-0 z-40 cursor-default bg-transparent"
          />
          <nav
            aria-label="Mobile navigation"
            className="absolute right-[24px] top-[170px] z-50 flex w-[240px] flex-col overflow-hidden rounded-[16px] bg-white shadow-[0px_25px_40px_0px_rgba(0,0,0,0.12)]"
          >
            {LINKS.map((link) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "px-[24px] py-[16px] font-['Inter_Tight:SemiBold',sans-serif] text-[18px] transition-colors",
                    active ? "bg-brand/10 text-brand" : "text-dark-bg hover:bg-black/[0.04]",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </>
      )}
    </>
  );
}
