"use client";

import { useLayoutEffect, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useBannerDismissed } from "@/components/ui/bannerStore";

interface ResponsiveFrameProps {
  /** Intrinsic design width of the Figma frame, e.g. 1920 (desktop) or 430 (mobile). */
  width: number;
  /** Intrinsic design height of the Figma frame. */
  height: number;
  /**
   * Design-px height occupied by the dismissable banner at the very top of the
   * frame. When the banner is dismissed, the frame crops this band away so the
   * content pulls up to reclaim the space (and the frame shortens to match).
   */
  collapsibleTopPx?: number;
  /**
   * Upper bound on the scale factor. Omitted (the default) the canvas scales to
   * fill any width — i.e. full-bleed, used for the desktop frame. Set it on the
   * mobile frame so a narrow 438px phone canvas is not magnified into an
   * oversized layout on tablet-width viewports: past this cap the canvas holds
   * its size and is centered with side margins instead of stretching to 2×+.
   */
  maxScale?: number;
  className?: string;
  children: React.ReactNode;
}

// useLayoutEffect on the client, useEffect on the server (avoids the SSR warning).
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Fits a fixed-width Figma export to the available width by uniformly scaling it.
 *
 * The Figma frames are absolutely-positioned canvases authored at a single fixed
 * width (1920px desktop / 430px mobile). This wrapper renders the canvas at its
 * native size and applies `transform: scale()` so it always fills the available
 * width — pixel-faithful to Figma, just sized to fit. It scales down on narrow
 * screens (no cut-off) and up past native size on wide screens (full-bleed).
 *
 * The scale factor must be a unitless number, which CSS cannot derive from
 * container-query units, so a ResizeObserver measures the real available width.
 * The outer box uses `aspect-ratio` so its height tracks the width with pure CSS
 * (correct even before JS runs) — no layout shift.
 *
 * `width`/`height` are intrinsic data about each export (the literals that already
 * lived in the page files), passed as props — not styling values.
 */
export function ResponsiveFrame({
  width,
  height,
  collapsibleTopPx = 0,
  maxScale = Infinity,
  className,
  children,
}: ResponsiveFrameProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [containerWidth, setContainerWidth] = useState(0);
  const bannerDismissed = useBannerDismissed();
  const cropTop = bannerDismissed ? collapsibleTopPx : 0;

  useIsomorphicLayoutEffect(() => {
    const el = outerRef.current;
    if (!el) return;
    const update = () => {
      setContainerWidth(el.clientWidth);
      setScale(Math.min(el.clientWidth / width, maxScale));
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [width, maxScale]);

  // When the scale is capped the canvas is narrower than its container, so we
  // centre it horizontally and pin the container height to the real scaled
  // height (the full-width aspect-ratio assumes scale === clientWidth/width and
  // would otherwise leave a tall empty band below the content).
  const scaledWidth = width * scale;
  const offsetX = containerWidth > scaledWidth ? (containerWidth - scaledWidth) / 2 : 0;
  const capped = offsetX > 0;

  return (
    <div
      ref={outerRef}
      className={cn("w-full overflow-hidden transition-[aspect-ratio,height] duration-200", className)}
      style={
        capped
          ? { height: `${(height - cropTop) * scale}px` }
          : { aspectRatio: `${width} / ${height - cropTop}` }
      }
    >
      <div
        className="origin-top-left transition-transform duration-200"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          transform: `translateX(${offsetX}px) scale(${scale}) translateY(${-cropTop}px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
