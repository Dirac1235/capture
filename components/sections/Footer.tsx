import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

const FOOTER_COLS = [
  {
    heading: "Product",
    links: ["Services", "Contact", "Team"],
  },
  {
    heading: "Download",
    links: ["iOS", "Android", "MacOS", "Windows"],
  },
  {
    heading: "Company",
    links: ["About Us", "Contact", "Services", "Team"],
  },
];

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        "w-full bg-dark-bg text-white",
        "pt-16 pb-8 px-4 md:px-20",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          {/* Logo + description */}
          <div className="flex flex-col gap-4 max-w-xs">
            <Link
              href="/"
              className="flex items-center gap-2 font-sans font-semibold text-base text-white hover:opacity-80 transition-opacity"
            >
              <span
                className="w-7 h-7 rounded-md bg-white flex items-center justify-center"
                aria-hidden
              >
                <span className="text-foreground text-xs font-bold">C</span>
              </span>
              Capture
            </Link>
            <p className="font-sans text-sm text-white/50 leading-relaxed">
              Capture is your personal AI companion for understanding your mental
              and physical state. Give us a reason to stop thinking about it.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 md:flex md:gap-20">
            {FOOTER_COLS.map((col) => (
              <div key={col.heading} className="flex flex-col gap-3">
                <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-white/40">
                  {col.heading}
                </h4>
                <ul className="flex flex-col gap-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="/"
                        className="font-sans text-sm text-white/70 hover:text-white transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <p className="font-sans text-xs text-white/30">
          © 2025 Capture. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
