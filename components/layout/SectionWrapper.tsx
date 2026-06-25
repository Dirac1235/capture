import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  /** Use bg-dark-bg or bg-dark-bg-alt for dark sections */
  dark?: boolean;
}

export function SectionWrapper({
  children,
  className,
  dark = false,
}: SectionWrapperProps) {
  return (
    <section
      className={cn(
        "w-full px-4 py-16 md:px-20 md:py-24",
        dark && "bg-dark-bg text-foreground-inv",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-[1440px]">{children}</div>
    </section>
  );
}
