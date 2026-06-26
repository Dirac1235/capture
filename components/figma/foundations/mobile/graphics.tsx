/* eslint-disable @next/next/no-img-element */

import { imgBlurEvenly, imgBlurEvenly1, imgImage834, imgImage835 } from "./assets";

export function MaskGroup() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%-218.5px)] top-[173px]" data-name="Mask group">
      <div className="-translate-x-1/2 absolute h-[1465px] left-[calc(50%-323.26px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-31px_27px] mask-size-[2277px_1156px] opacity-45 rounded-[32.317px] top-[146px] w-[2005.485px]" style={{ maskImage: `url("${imgImage834}")` }} data-name="image 834">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32.317px] size-full" src={imgImage835} />
      </div>
    </div>
  );
}

export function Items() {
  return (
    <div className="-translate-y-1/2 absolute contents left-[35px] top-[calc(50%-2452.53px)]" data-name="items">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute backdrop-blur-[20.793px] bg-white h-[41.586px] left-[calc(50%-39.41px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[11.771px_18.298px] mask-size-[29.11px_11.644px] mix-blend-multiply top-[calc(50%-2455.86px)] w-[312.727px]" style={{ maskImage: `url("${imgBlurEvenly}")` }} data-name="Blur Evenly" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[41.586px] left-[calc(50%-39.41px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[11.771px_18.298px] mask-size-[29.11px_11.644px] top-[calc(50%-2455.86px)] w-[312.727px]" style={{ maskImage: `url("${imgBlurEvenly}")` }} data-name="Auto Tint">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[red] inset-0 mix-blend-saturation" />
          <div className="absolute bg-white inset-0 mix-blend-difference" />
          <div className="absolute bg-white inset-0 mix-blend-saturation" />
          <div className="absolute bg-black inset-0 mix-blend-overlay" />
          <div className="absolute bg-black inset-0 mix-blend-overlay" />
          <div className="absolute bg-black inset-0 mix-blend-overlay" />
          <div className="absolute bg-black inset-0 mix-blend-overlay" />
        </div>
      </div>
    </div>
  );
}

export function Items1() {
  return (
    <div className="absolute contents left-[342px] top-[17.86px]" data-name="items">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute backdrop-blur-[23.621px] bg-white h-[47.242px] left-[calc(50%+45.05px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[255.577px_20.786px] mask-size-[71.807px_13.228px] mix-blend-multiply top-[calc(50%-2456.31px)] w-[355.257px]" style={{ maskImage: `url("${imgBlurEvenly1}")` }} data-name="Blur Evenly" />
      <div className="absolute inset-[-0.06%_-0.62%_99.11%_19.73%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[255.577px_20.786px] mask-size-[71.807px_13.228px]" style={{ maskImage: `url("${imgBlurEvenly1}")` }} data-name="Auto Tint">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[red] inset-0 mix-blend-saturation" />
          <div className="absolute bg-white inset-0 mix-blend-difference" />
          <div className="absolute bg-white inset-0 mix-blend-saturation" />
          <div className="absolute bg-black inset-0 mix-blend-overlay" />
          <div className="absolute bg-black inset-0 mix-blend-overlay" />
          <div className="absolute bg-black inset-0 mix-blend-overlay" />
          <div className="absolute bg-black inset-0 mix-blend-overlay" />
        </div>
      </div>
    </div>
  );
}
