"use client";

import { MotionConfig } from "framer-motion";

/**
 * Wraps the app so all Framer Motion animations honour the user's
 * `prefers-reduced-motion` setting (transform/layout animations are dropped,
 * opacity is kept) without each call site having to opt in.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
