"use client";

import svgPaths from "@/lib/figma/svg-j898oj6jf2";
import { dismissBanner, useBannerDismissed } from "@/components/ui/bannerStore";

/**
 * Global top announcement bar.
 *
 * The Figma design renders this identically on every page. It's a fragment of
 * absolutely-positioned elements in the frame's 1920-wide coordinate space, so it
 * scales with the page. Compared to the export it's shifted up 12px so it sits
 * flush to the top (removing the original white gap), and the ✕ dismisses it.
 */
export function AnnouncementBanner() {
  const dismissed = useBannerDismissed();
  if (dismissed) return null;

  return (
    <>
      <div className="-translate-x-1/2 absolute bg-dark-bg h-[52px] left-1/2 top-0 w-[1920px]" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter_Tight:Medium',sans-serif] leading-[normal] left-[calc(50%+15.5px)] not-italic text-[16px] text-center text-white top-[17px] whitespace-nowrap">{`Capture by Company update 2026: Discover Smart keyboard that learns your behavioral patterns as you type `}</p>
      <div className="absolute left-[555px] size-[26px] top-[13px]" data-name="noto:fire">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
          <g>
            <path d={svgPaths.p2bae3480} fill="url(#paint0_radial_banner)" />
            <path d={svgPaths.p1af75280} fill="url(#paint1_radial_banner)" />
          </g>
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="matrix(-14.338 -0.0622268 -0.10223 23.5258 12.6377 25.2486)" gradientUnits="userSpaceOnUse" id="paint0_radial_banner" r="1">
              <stop offset="0.314" stopColor="#FF9800" />
              <stop offset="0.662" stopColor="#FF6D00" />
              <stop offset="0.972" stopColor="#F44336" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="matrix(-0.151528 15.0013 11.2896 0.114021 13.4429 10.9806)" gradientUnits="userSpaceOnUse" id="paint1_radial_banner" r="1">
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
      </div>
      <button
        type="button"
        aria-label="Dismiss announcement"
        onClick={() => dismissBanner()}
        className="absolute left-[1850px] size-[32px] top-[10px] cursor-pointer rounded-full transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p1559e140} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
        </svg>
      </button>
    </>
  );
}
