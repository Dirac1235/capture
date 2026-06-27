import FoundationsDesktop from "@/components/figma/foundations/desktop";
import FoundationsMobile from "@/components/figma/foundations/mobile";
import { ResponsiveFrame } from "@/components/layout/ResponsiveFrame";

export default function FoundationsPage() {
  return (
    <>
      {/* Mobile frame — below 1024px, scaled to fit */}
      <div className="block desktop:hidden">
        <ResponsiveFrame width={438} height={4954} collapsibleTopPx={84}>
          <FoundationsMobile />
        </ResponsiveFrame>
      </div>

      {/* Desktop frame — 1024px and up, scaled to fit */}
      <div className="hidden desktop:block">
        <ResponsiveFrame width={1920} height={2741} collapsibleTopPx={52}>
          <FoundationsDesktop />
        </ResponsiveFrame>
      </div>
    </>
  );
}
