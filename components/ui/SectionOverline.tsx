import { cn } from "@/lib/utils";

interface SectionOverlineProps {
  children: React.ReactNode;
  className?: string;
  inverted?: boolean;
}

export function SectionOverline({
  children,
  className,
  inverted = false,
}: SectionOverlineProps) {
  return (
    <p
      className={cn(
        "font-sans text-xs font-semibold uppercase tracking-widest",
        inverted ? "text-white/60" : "text-muted-foreground",
        className,
      )}
    >
      {children}
    </p>
  );
}
