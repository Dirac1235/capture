"use client";

import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface FaqItemProps {
  question: string;
  answer: string;
  className?: string;
}

export function FaqItem({ question, answer, className }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("w-full", className)}>
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "w-full flex items-center justify-between py-5 gap-4",
          "font-sans text-base font-medium text-foreground text-left",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm",
        )}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span
          className={cn(
            "shrink-0 text-muted-foreground transition-transform duration-200",
            open && "rotate-45",
          )}
          aria-hidden
        >
          +
        </span>
      </button>
      {open && (
        <p className="pb-5 font-sans text-sm text-muted-foreground leading-relaxed">
          {answer}
        </p>
      )}
      <Separator className="bg-border" />
    </div>
  );
}
