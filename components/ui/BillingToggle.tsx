"use client";

import { cn } from "@/lib/utils";

export type Billing = "monthly" | "yearly";

/**
 * Real Monthly/Yearly switch that replaces the Figma export's fake toggle
 * (a static dark pill + a separately-positioned white circle that didn't move).
 *
 * Controlled: the page owns the `billing` state so the switch and the pricing
 * card stay in sync. Pixel-faithful to the export — 73.575×39.003 track, a
 * 30.139 knob inset 4.43px that slides to the right for "yearly". The knob is
 * absolutely positioned and vertically centred so browser button defaults can't
 * shift it. The track colour differs per frame (dark-bg desktop, #1b1b1b
 * mobile), so the caller passes the background via `className`.
 */
export function BillingToggle({
  value,
  onChange,
  className,
}: {
  value: Billing;
  onChange: (value: Billing) => void;
  className?: string;
}) {
  const yearly = value === "yearly";
  return (
    <button
      type="button"
      role="switch"
      aria-checked={yearly}
      aria-label="Toggle billing period between monthly and yearly"
      onClick={() => onChange(yearly ? "monthly" : "yearly")}
      className={cn(
        "relative block h-[39.003px] w-[73.575px] shrink-0 cursor-pointer appearance-none rounded-full border-0 p-0",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "absolute top-1/2 size-[30.139px] -translate-y-1/2 rounded-full bg-white transition-[left] duration-300 ease-out",
          yearly ? "left-[38.996px]" : "left-[4.43px]",
        )}
      />
    </button>
  );
}
