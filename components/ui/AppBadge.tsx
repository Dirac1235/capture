import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface AppBadgeProps {
  children: React.ReactNode;
  className?: string;
  /** Overline label style — uppercase tracking-widest */
  overline?: boolean;
}

export function AppBadge({
  children,
  className,
  overline = false,
}: AppBadgeProps) {
  return (
    <Badge
      className={cn(
        "bg-secondary text-muted-foreground font-sans text-xs font-medium",
        "rounded-full px-3 py-1 border-0",
        overline && "uppercase tracking-widest text-xs",
        className,
      )}
    >
      {children}
    </Badge>
  );
}
