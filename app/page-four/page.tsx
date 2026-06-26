import Desktop101 from "@/components/figma/Desktop101";
import IPhone1617ProMax4 from "@/components/figma/IPhone1617ProMax4";
import { ResponsiveFrame } from "@/components/layout/ResponsiveFrame";

export default function PageFour() {
  return (
    <>
      {/* Mobile frame — below 1024px, scaled to fit */}
      <div className="block desktop:hidden">
        <ResponsiveFrame width={438} height={4954}>
          <IPhone1617ProMax4 />
        </ResponsiveFrame>
      </div>

      {/* Desktop frame — 1024px and up, scaled to fit */}
      <div className="hidden desktop:block">
        <ResponsiveFrame width={1920} height={2741}>
          <Desktop101 />
        </ResponsiveFrame>
      </div>
    </>
  );
}
