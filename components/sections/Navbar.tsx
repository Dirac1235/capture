import Link from "next/link";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

const NAV_LINKS = [
  { label: "Product", href: "/" },
  { label: "Tool", href: "/" },
  { label: "Company", href: "/page-four" },
  { label: "Docs", href: "/" },
];

export function Navbar({ className }: NavbarProps) {
  return (
    <header
      className={cn(
        "w-full fixed top-0 left-0 z-50",
        "bg-background/90 backdrop-blur-md border-b border-border",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-20">
        <nav className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-sans font-semibold text-base text-foreground hover:opacity-80 transition-opacity"
          >
            <span
              className="w-7 h-7 rounded-md bg-foreground flex items-center justify-center"
              aria-hidden
            >
              <span className="text-background text-xs font-bold">C</span>
            </span>
            Capture
          </Link>

          {/* Nav links — hidden on mobile */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <PrimaryButton className="text-xs px-4 py-2">
            Get Capture Free
          </PrimaryButton>
        </nav>
      </div>
    </header>
  );
}
