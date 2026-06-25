import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface OutlineButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  /** Use on dark section backgrounds */
  inverted?: boolean;
}

export function OutlineButton({
  children,
  className,
  onClick,
  disabled,
  type = "button",
  inverted = false,
}: OutlineButtonProps) {
  return (
    <Button
      variant="outline"
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "font-sans text-sm font-medium bg-transparent",
        "rounded-full px-6 py-3 h-auto border",
        "active:scale-95 transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        "disabled:opacity-50 disabled:pointer-events-none",
        inverted
          ? "border-white text-white hover:bg-white/10"
          : "border-foreground text-foreground hover:bg-foreground/5",
        className,
      )}
    >
      {children}
    </Button>
  );
}
