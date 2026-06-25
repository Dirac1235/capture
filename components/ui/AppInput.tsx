import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface AppInputProps {
  id: string;
  label?: string;
  placeholder?: string;
  type?: string;
  className?: string;
}

export function AppInput({
  id,
  label,
  placeholder,
  type = "text",
  className,
}: AppInputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <Label
          htmlFor={id}
          className="text-sm font-medium font-sans text-foreground"
        >
          {label}
        </Label>
      )}
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        className={cn(
          "border-border rounded-md font-sans text-base text-foreground bg-surface",
          "focus-visible:ring-ring",
          className,
        )}
      />
    </div>
  );
}
