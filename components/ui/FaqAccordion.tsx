"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export interface FaqEntry {
  question: string;
  answer: string;
}

type FaqVariant = "desktop" | "mobile" | "plusDesktop" | "plusMobile";

/**
 * Real, accessible FAQ accordion that replaces the Figma exports' fake versions
 * (static <p> questions with decorative, non-interactive chevron/divider SVGs).
 *
 * One item open at a time; all collapsed by default. The collapsed state is a
 * pixel-faithful match of each export per breakpoint — it just actually opens
 * now, with a smooth height + chevron-rotation animation. Two layouts:
 *   - "list" (home/Capture): rows split by hairline dividers; the active
 *     question switches Medium/0.47 -> SemiBold/100 and the chevron dims.
 *   - "card" (Plus): each item is a white rounded card; Plus desktop adds a
 *     leading brand-circle + star icon, mobile does not.
 * Geometry differs between the 1920 desktop and 438 mobile frames, so the exact
 * values live in VARIANTS.
 */
const VARIANTS = {
  desktop: {
    layout: "list",
    rootGap: "",
    pad: "py-[31px]",
    chevronPad: "pr-[25px]",
    gap: "gap-4",
    cardPad: "",
    questionSize: "text-[19.837px]",
    activeQuestion: true,
    dimChevron: true,
    leadingIcon: false,
    answerSize: "text-[15px]",
    answerExtra: "w-[578px] pb-[31px]",
    chevron: {
      box: "h-[6.873px] w-[13.747px]",
      viewBox: "0 0 16.0381 9.16465",
      path: "M1.14558 1.14558L8.01907 8.01907L14.8926 1.14558",
      strokeWidth: "2.29116",
    },
  },
  mobile: {
    layout: "list",
    rootGap: "",
    pad: "py-[23px]",
    chevronPad: "pr-0",
    gap: "gap-4",
    cardPad: "",
    questionSize: "text-[14.742px]",
    activeQuestion: true,
    dimChevron: true,
    leadingIcon: false,
    answerSize: "text-[11.147px]",
    answerExtra: "w-[331px] pb-[23px]",
    chevron: {
      box: "h-[5.108px] w-[10.216px]",
      viewBox: "0 0 11.9189 6.81077",
      path: "M0.851347 0.851347L5.95943 5.95943L11.0675 0.851347",
      strokeWidth: "1.70269",
    },
  },
  plusDesktop: {
    layout: "card",
    rootGap: "gap-[25px]",
    pad: "",
    chevronPad: "",
    gap: "gap-[43px]",
    cardPad: "min-h-[109px] pl-[46px] pr-[53px]",
    questionSize: "text-[25px]",
    activeQuestion: false,
    dimChevron: false,
    leadingIcon: true,
    answerSize: "text-[20px]",
    answerExtra: "max-w-[788px] pl-[129px] pr-[53px] pb-[38px]",
    chevron: {
      box: "h-[10.873px] w-[21.747px]",
      viewBox: "0 0 25.3715 14.498",
      path: "M1.81225 1.81225L12.6857 12.6857L23.5592 1.81225",
      strokeWidth: "3.6245",
    },
  },
  plusMobile: {
    layout: "card",
    rootGap: "gap-[25px]",
    pad: "",
    chevronPad: "",
    gap: "gap-4",
    cardPad: "min-h-[109px] px-[35px]",
    questionSize: "text-[22px]",
    activeQuestion: false,
    dimChevron: false,
    leadingIcon: false,
    answerSize: "text-[20px]",
    answerExtra: "max-w-[373px] px-[35px] pb-[30px]",
    chevron: {
      box: "h-[10.873px] w-[21.747px]",
      viewBox: "0 0 25.3715 14.498",
      path: "M1.81225 1.81225L12.6857 12.6857L23.5592 1.81225",
      strokeWidth: "3.6245",
    },
  },
} as const;

export function FaqAccordion({
  items,
  variant = "desktop",
  className,
}: {
  items: FaqEntry[];
  variant?: FaqVariant;
  className?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const v = VARIANTS[variant];
  const card = v.layout === "card";

  return (
    <div className={cn("flex flex-col", v.rootGap, className)}>
      {items.map((item, i) => {
        const open = openIndex === i;

        const question = (
          <span
            className={cn(
              "text-near-black leading-[1.37]",
              v.questionSize,
              card && "flex-1",
              v.activeQuestion
                ? open
                  ? "font-['Stack_Sans_Headline:SemiBold',sans-serif] font-semibold opacity-100"
                  : "font-['Stack_Sans_Headline:Medium',sans-serif] font-medium opacity-[0.47]"
                : "font-['Stack_Sans_Headline:SemiBold',sans-serif] font-semibold",
            )}
          >
            {item.question}
          </span>
        );

        const chevron = (
          <span
            aria-hidden
            className={cn(
              "relative block shrink-0 transition-transform duration-300 ease-out",
              v.chevron.box,
              open ? "rotate-180 opacity-100" : v.dimChevron ? "opacity-[0.62]" : "opacity-100",
            )}
          >
            <span className="absolute inset-[-16.67%_-8.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={v.chevron.viewBox}>
                <path
                  d={v.chevron.path}
                  stroke="#101010"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={v.chevron.strokeWidth}
                />
              </svg>
            </span>
          </span>
        );

        const answer = (
          <div
            className={cn(
              "grid transition-[grid-template-rows] duration-300 ease-out",
              open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
            )}
          >
            <div className="overflow-hidden">
              <p
                className={cn(
                  "font-['Stack_Sans_Headline:Light',sans-serif] font-light leading-[1.37] text-slate-text opacity-[0.85] max-w-full",
                  v.answerSize,
                  v.answerExtra,
                )}
              >
                {item.answer}
              </p>
            </div>
          </div>
        );

        if (card) {
          return (
            <div
              key={i}
              className={cn(
                "bg-white backdrop-blur-[7.9px] shadow-[0px_4px_132.8px_0px_rgba(0,0,0,0.05)] transition-[border-radius] duration-300",
                open ? "rounded-[22px]" : "rounded-[17px]",
              )}
            >
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? null : i)}
                className={cn(
                  "flex w-full items-center text-left rounded-[inherit]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  v.cardPad,
                  v.gap,
                )}
              >
                {v.leadingIcon && (
                  <span
                    aria-hidden
                    className="grid size-[40.353px] shrink-0 place-items-center rounded-full bg-brand"
                  >
                    <span className="block size-[16.875px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.875 16.875">
                        <path
                          d="M8.43751 0L10.7164 6.15862L16.875 8.43751L10.7164 10.7164L8.43751 16.875L6.15862 10.7164L0 8.43751L6.15862 6.15862L8.43751 0Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </span>
                )}
                {question}
                {chevron}
              </button>
              {answer}
            </div>
          );
        }

        return (
          <div key={i} className={cn(i > 0 && "border-t border-black/[0.19]")}>
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : i)}
              className={cn(
                "flex w-full items-center justify-between gap-4 text-left",
                "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                v.pad,
                v.chevronPad,
              )}
            >
              {question}
              {chevron}
            </button>
            {answer}
          </div>
        );
      })}
    </div>
  );
}
