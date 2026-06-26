"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/**
 * Interactive "hotspot" overlays for the Figma frames.
 *
 * The exported designs render each control as separate, absolutely-positioned
 * background + label elements that can't simply be re-tagged. A Hotspot is a
 * transparent click target laid exactly over a control's hit area: invisible at
 * rest (pixel-perfect), with cursor, a subtle tint on hover/active, and a
 * keyboard focus ring. Pass the control's geometry (left/top/size/rounded) via
 * className so the overlay matches it precisely.
 */
const hotspotBase = cn(
  "absolute z-10 block cursor-pointer transition-colors duration-150",
  "hover:bg-black/[0.06] active:bg-black/[0.12]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
);

export function HotspotButton({
  className,
  type = "button",
  ...props
}: ComponentProps<"button">) {
  return <button type={type} className={cn(hotspotBase, className)} {...props} />;
}

export function HotspotLink({
  className,
  ...props
}: ComponentProps<typeof Link>) {
  return <Link className={cn(hotspotBase, className)} {...props} />;
}
