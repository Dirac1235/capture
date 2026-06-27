import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

/**
 * The single pill button used across the marketing pages.
 *
 * Consolidates the former PrimaryButton / OutlineButton / BrandButton wrappers,
 * which shared an identical shape (rounded-full pill, sizing, transitions, focus
 * ring, disabled styles) and differed only in colour. Pick the colour with
 * `variant`; on dark backgrounds pass `inverted` to the outline variant.
 */
const appButton = cva(
  cn(
    "font-sans text-sm font-medium rounded-full px-6 py-3 h-auto",
    "active:scale-95 transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    "disabled:opacity-50 disabled:pointer-events-none",
  ),
  {
    variants: {
      variant: {
        primary: "bg-foreground text-background hover:opacity-80",
        brand: "bg-brand text-primary-foreground hover:bg-brand-dark",
        outline: "bg-transparent border",
      },
      /** Only meaningful for the outline variant, on dark sections. */
      inverted: { true: "", false: "" },
    },
    compoundVariants: [
      { variant: "outline", inverted: false, class: "border-foreground text-foreground hover:bg-foreground/5" },
      { variant: "outline", inverted: true, class: "border-white text-white hover:bg-white/10" },
    ],
    defaultVariants: { variant: "primary", inverted: false },
  },
);

type AppButtonProps = Omit<React.ComponentProps<typeof Button>, "variant"> &
  VariantProps<typeof appButton>;

export function AppButton({
  className,
  variant,
  inverted,
  type = "button",
  ...props
}: AppButtonProps) {
  return (
    <Button
      type={type}
      // The shadcn primitive's "outline" variant supplies the border reset the
      // outline look builds on; every other variant starts from "default".
      variant={variant === "outline" ? "outline" : "default"}
      className={cn(appButton({ variant, inverted }), className)}
      {...props}
    />
  );
}
