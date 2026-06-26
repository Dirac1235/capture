import Desktop98 from "@/components/figma/Desktop98";
import IPhone1617ProMax1 from "@/components/figma/IPhone1617ProMax1";
import { ResponsiveFrame } from "@/components/layout/ResponsiveFrame";

export default function CapturePage() {
  return (
    <>
      {/* Mobile frame — below 1024px, scaled to fit */}
      <div className="block desktop:hidden">
        <ResponsiveFrame width={438} height={20410}>
          <IPhone1617ProMax1 />
        </ResponsiveFrame>
      </div>

      {/* Desktop frame — 1024px and up, scaled to fit */}
      <div className="hidden desktop:block">
        <ResponsiveFrame width={1920} height={13914}>
          <Desktop98 />
        </ResponsiveFrame>
      </div>
    </>
  );
}
