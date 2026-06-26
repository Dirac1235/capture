import SyniDesktop from "@/components/figma/syni/desktop";
import SyniMobile from "@/components/figma/syni/mobile";
import { ResponsiveFrame } from "@/components/layout/ResponsiveFrame";

export default function SyniPage() {
  return (
    <>
      {/* Mobile frame — below 1024px, scaled to fit */}
      <div className="block desktop:hidden">
        <ResponsiveFrame width={438} height={8297}>
          <SyniMobile />
        </ResponsiveFrame>
      </div>

      {/* Desktop frame — 1024px and up, scaled to fit */}
      <div className="hidden desktop:block">
        <ResponsiveFrame width={1920} height={4755}>
          <SyniDesktop />
        </ResponsiveFrame>
      </div>
    </>
  );
}
