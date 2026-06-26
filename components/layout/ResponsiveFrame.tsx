"use client";

import { useLayoutEffect, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ResponsiveFrameProps {
  /** Intrinsic design width of the Figma frame, e.g. 1920 (desktop) or 430 (mobile). */
  width: number;
  /** Intrinsic design height of the Figma frame. */
  height: number;
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
  className,
  children,
}: ResponsiveFrameProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useIsomorphicLayoutEffect(() => {
    const el = outerRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / width);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [width]);

  return (
    <div
      ref={outerRef}
      className={cn("w-full overflow-hidden", className)}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <div
        className="origin-top-left"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
