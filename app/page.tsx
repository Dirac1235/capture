import CaptureDesktop from "@/components/figma/capture/desktop";
import CaptureMobile from "@/components/figma/capture/mobile";
import { ResponsiveFrame } from "@/components/layout/ResponsiveFrame";

export default function CapturePage() {
  return (
    <>
      {/* Mobile frame — below 1024px, scaled to fit */}
      <div className="block desktop:hidden">
        <ResponsiveFrame width={438} height={20410}>
          <CaptureMobile />
        </ResponsiveFrame>
      </div>

      {/* Desktop frame — 1024px and up, scaled to fit */}
      <div className="hidden desktop:block">
        <ResponsiveFrame width={1920} height={13914}>
          <CaptureDesktop />
        </ResponsiveFrame>
      </div>
    </>
  );
}
