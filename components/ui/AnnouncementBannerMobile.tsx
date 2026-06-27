"use client";

import svgPaths from "@/lib/figma/svg-j898oj6jf2";
import { dismissBanner, useBannerDismissed } from "@/components/ui/bannerStore";

/**
 * Mobile announcement bar.
 *
 * Replaces the broken static banner baked into the mobile Figma export (a
 * 1518px-wide bar with no close button and clipped text). This is a real flex
 * bar in the 438-wide mobile frame space: full width, flush to the top, with the
 * text wrapping to fit narrow widths. Dismissed via the shared banner store, so
 * closing it on any page or breakpoint persists everywhere. [[banner-store]]
 */
export function AnnouncementBannerMobile() {
  const dismissed = useBannerDismissed();
  if (dismissed) return null;

  return (
    <div className="absolute left-0 top-0 flex h-[52px] w-[438px] items-center justify-center gap-[6px] bg-dark-bg px-[44px]">
      <span className="block size-[18px] shrink-0" data-name="noto:fire">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
          <g>
            <path d={svgPaths.p2bae3480} fill="url(#paint0_radial_banner_m)" />
            <path d={svgPaths.p1af75280} fill="url(#paint1_radial_banner_m)" />
          </g>
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="matrix(-14.338 -0.0622268 -0.10223 23.5258 12.6377 25.2486)" gradientUnits="userSpaceOnUse" id="paint0_radial_banner_m" r="1">
              <stop offset="0.314" stopColor="#FF9800" />
              <stop offset="0.662" stopColor="#FF6D00" />
              <stop offset="0.972" stopColor="#F44336" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="matrix(-0.151528 15.0013 11.2896 0.114021 13.4429 10.9806)" gradientUnits="userSpaceOnUse" id="paint1_radial_banner_m" r="1">
              <stop offset="0.214" stopColor="#FFF176" />
              <stop offset="0.328" stopColor="#FFF27D" />
              <stop offset="0.487" stopColor="#FFF48F" />
              <stop offset="0.672" stopColor="#FFF7AD" />
              <stop offset="0.793" stopColor="#FFF9C4" />
              <stop offset="0.822" stopColor="#FFF8BD" stopOpacity="0.804" />
              <stop offset="0.863" stopColor="#FFF6AB" stopOpacity="0.529" />
              <stop offset="0.91" stopColor="#FFF38D" stopOpacity="0.209" />
              <stop offset="0.941" stopColor="#FFF176" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </span>
      <p className="font-['Inter_Tight:Medium',sans-serif] text-center text-[10.5px] leading-[1.2] text-white">
        Capture by Company update 2026: Discover Smart keyboard that learns your behavioral patterns as you type
      </p>
      <button
        type="button"
        aria-label="Dismiss announcement"
        onClick={() => dismissBanner()}
        className="absolute right-[12px] top-1/2 size-[24px] -translate-y-1/2 cursor-pointer rounded-full transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p1559e140} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
        </svg>
      </button>
    </div>
  );
}
