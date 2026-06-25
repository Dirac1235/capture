import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  inverted?: boolean;
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
  inverted = false,
}: FeatureCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col gap-3 p-6 rounded-xl",
        inverted
          ? "bg-white/5 border border-white/10 text-white"
          : "bg-surface border border-border",
        className,
      )}
    >
      {icon && (
        <div
          className={cn(
            "w-10 h-10 rounded-md flex items-center justify-center",
            inverted ? "bg-white/10" : "bg-secondary",
          )}
        >
          {icon}
        </div>
      )}
      <h3
        className={cn(
          "font-sans text-base font-semibold",
          inverted ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "font-sans text-sm leading-relaxed",
          inverted ? "text-white/70" : "text-muted-foreground",
        )}
      >
        {description}
      </p>
    </article>
  );
}
