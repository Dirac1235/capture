import Desktop99 from "@/components/figma/Desktop99";
import IPhone1617ProMax2 from "@/components/figma/IPhone1617ProMax2";

export default function PageTwo() {
  return (
    <>
      {/* Desktop frame — shown on md+ screens */}
      <div className="hidden md:block overflow-x-auto">
        <div style={{ width: "1920px", height: "4900px", position: "relative" }}>
          <Desktop99 />
        </div>
      </div>

      {/* Mobile frame — shown on small screens */}
      <div className="block md:hidden overflow-x-hidden">
        <div style={{ width: "430px", height: "8400px", position: "relative", margin: "0 auto" }}>
          <IPhone1617ProMax2 />
        </div>
      </div>
    </>
  );
}
