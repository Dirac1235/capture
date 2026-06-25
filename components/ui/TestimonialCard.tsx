import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  name?: string;
  handle?: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  name,
  handle,
  className,
}: TestimonialCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col gap-4 p-6 rounded-xl",
        "bg-surface border border-border shadow-sm",
        className,
      )}
    >
      <p className="font-sans text-sm font-medium text-foreground leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>
      {(name || handle) && (
        <footer className="flex flex-col gap-0.5">
          {name && (
            <span className="font-sans text-sm font-semibold text-foreground">
              {name}
            </span>
          )}
          {handle && (
            <span className="font-sans text-xs text-muted-foreground">
              {handle}
            </span>
          )}
        </footer>
      )}
    </article>
  );
}
