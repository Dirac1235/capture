import Desktop99 from "@/components/figma/Desktop99";
import IPhone1617ProMax2 from "@/components/figma/IPhone1617ProMax2";
import { ResponsiveFrame } from "@/components/layout/ResponsiveFrame";

export default function SyniPage() {
  return (
    <>
      {/* Mobile frame — below 1024px, scaled to fit */}
      <div className="block desktop:hidden">
        <ResponsiveFrame width={438} height={8297}>
          <IPhone1617ProMax2 />
        </ResponsiveFrame>
      </div>

      {/* Desktop frame — 1024px and up, scaled to fit */}
      <div className="hidden desktop:block">
        <ResponsiveFrame width={1920} height={4755}>
          <Desktop99 />
        </ResponsiveFrame>
      </div>
    </>
  );
}
