import Desktop98 from "@/components/figma/Desktop98";
import IPhone1617ProMax1 from "@/components/figma/IPhone1617ProMax1";

export default function HomePage() {
  return (
    <>
      {/* Desktop frame — shown on md+ screens */}
      <div className="hidden md:block overflow-x-auto">
        <div style={{ width: "1920px", height: "14000px", position: "relative" }}>
          <Desktop98 />
        </div>
      </div>

      {/* Mobile frame — shown on small screens */}
      <div className="block md:hidden overflow-x-hidden">
        <div style={{ width: "430px", height: "20400px", position: "relative", margin: "0 auto" }}>
          <IPhone1617ProMax1 />
        </div>
      </div>
    </>
  );
}
