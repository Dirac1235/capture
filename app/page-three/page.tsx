import Desktop100 from "@/components/figma/Desktop100";
import IPhone1617ProMax3 from "@/components/figma/IPhone1617ProMax3";

export default function PageThree() {
  return (
    <>
      {/* Desktop frame — shown on md+ screens */}
      <div className="hidden md:block overflow-x-auto">
        <div style={{ width: "1920px", height: "9000px", position: "relative" }}>
          <Desktop100 />
        </div>
      </div>

      {/* Mobile frame — shown on small screens */}
      <div className="block md:hidden overflow-x-hidden">
        <div style={{ width: "430px", height: "11200px", position: "relative", margin: "0 auto" }}>
          <IPhone1617ProMax3 />
        </div>
      </div>
    </>
  );
}
