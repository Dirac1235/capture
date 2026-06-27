import type { MotionProps } from "framer-motion";

/**
 * Shared scroll-reveal presets for the Figma pages.
 *
 * These pages are a scaled, absolutely-positioned canvas, so the only animations
 * that are guaranteed not to disturb layout are applied directly to an element
 * (never a wrapper, which would re-base its absolute children's containing block):
 *   - `revealUp`   — opacity + a small rise; use on elements WITHOUT a transform
 *                    class (no -translate-x-1/2 / rotate / scale), so Framer's
 *                    transform doesn't fight the existing one.
 *   - `revealFade` — opacity only; safe on any element, including centered /
 *                    rotated ones whose transform must be preserved.
 *
 * `whileInView` + `once` reveals each element as it scrolls into view; reduced
 * motion is honoured globally via <MotionProvider> (MotionConfig reducedMotion).
 */
export const revealUp: MotionProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export const revealFade: MotionProps = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, ease: "easeOut" },
};
