import Desktop98 from "@/components/figma/Desktop98";
import IPhone1617ProMax1 from "@/components/figma/IPhone1617ProMax1";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Mobile layout — base (no prefix), hidden at custom desktop breakpoint (1024px) */}
      <div className="block desktop:hidden overflow-x-hidden">
        <div style={{ width: "438px", height: "20400px", position: "relative", margin: "0 auto" }}>
          <IPhone1617ProMax1 />
        </div>
      </div>

      {/* Desktop layout — hidden by default, shown at custom desktop breakpoint (1024px) */}
      <div className="hidden desktop:block overflow-x-auto">
        <div style={{ width: "1920px", height: "14000px", position: "relative" }}>
          <Desktop98 />
        </div>
      </div>
    </div>
  );
}
