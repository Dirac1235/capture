import Desktop101 from "@/components/figma/Desktop101";
import IPhone1617ProMax4 from "@/components/figma/IPhone1617ProMax4";

export default function PageFour() {
  return (
    <>
      {/* Desktop frame — shown on md+ screens */}
      <div className="hidden md:block overflow-x-auto">
        <div style={{ width: "1920px", height: "2796px", position: "relative" }}>
          <Desktop101 />
        </div>
      </div>

      {/* Mobile frame — shown on small screens */}
      <div className="block md:hidden overflow-x-hidden">
        <div style={{ width: "430px", height: "5070px", position: "relative", margin: "0 auto" }}>
          <IPhone1617ProMax4 />
        </div>
      </div>
    </>
  );
}
