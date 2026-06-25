import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AppCardProps {
  children: React.ReactNode;
  className?: string;
}

export function AppCard({ children, className }: AppCardProps) {
  return (
    <Card
      className={cn(
        "bg-surface border border-border",
        "rounded-xl shadow-sm p-6",
        className,
      )}
    >
      {children}
    </Card>
  );
}
