import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BrandButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export function BrandButton({
  children,
  className,
  onClick,
  disabled,
  type = "button",
}: BrandButtonProps) {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "bg-brand text-primary-foreground font-sans text-sm font-medium",
        "rounded-full px-6 py-3 h-auto",
        "hover:bg-brand-dark active:scale-95",
        "transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        "disabled:opacity-50 disabled:pointer-events-none",
        className,
      )}
    >
      {children}
    </Button>
  );
}
