import Desktop100 from "@/components/figma/Desktop100";
import IPhone1617ProMax3 from "@/components/figma/IPhone1617ProMax3";
import { ResponsiveFrame } from "@/components/layout/ResponsiveFrame";

export default function PageThree() {
  return (
    <>
      {/* Mobile frame — below 1024px, scaled to fit */}
      <div className="block desktop:hidden">
        <ResponsiveFrame width={438} height={11746}>
          <IPhone1617ProMax3 />
        </ResponsiveFrame>
      </div>

      {/* Desktop frame — 1024px and up, scaled to fit */}
      <div className="hidden desktop:block">
        <ResponsiveFrame width={1920} height={8976}>
          <Desktop100 />
        </ResponsiveFrame>
      </div>
    </>
  );
}
