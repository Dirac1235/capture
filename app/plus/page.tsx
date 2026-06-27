import PlusDesktop from "@/components/figma/plus/desktop";
import PlusMobile from "@/components/figma/plus/mobile";
import { ResponsiveFrame } from "@/components/layout/ResponsiveFrame";

export default function PlusPage() {
  return (
    <>
      {/* Mobile frame — below 1024px, scaled to fit */}
      <div className="block desktop:hidden">
        <ResponsiveFrame width={438} height={11746} collapsibleTopPx={84} maxScale={1.5}>
          <PlusMobile />
        </ResponsiveFrame>
      </div>

      {/* Desktop frame — 1024px and up, scaled to fit */}
      <div className="hidden desktop:block">
        <ResponsiveFrame width={1920} height={8976} collapsibleTopPx={52}>
          <PlusDesktop />
        </ResponsiveFrame>
      </div>
    </>
  );
}
