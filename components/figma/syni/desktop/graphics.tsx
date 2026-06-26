/* eslint-disable @next/next/no-img-element */

import { imgImage822, imgImage823, imgImage834, imgImage835 } from "./assets";

export function MaskGroup() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%+0.5px)] top-[215px]" data-name="Mask group">
      <div className="-translate-x-1/2 absolute h-[819px] left-[calc(50%+0.5px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[1613px_819px] rounded-[26px] top-[215px] w-[1613px]" style={{ maskImage: `url("${imgImage834}")` }} data-name="image 834">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[26px] size-full" src={imgImage835} />
      </div>
    </div>
  );
}

export function MaskGroup1() {
  return (
    <div className="absolute contents left-[52px] top-0" data-name="Mask group">
      <div className="absolute h-[595px] left-[54px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-55px] mask-size-[1231.898px_680.375px] rounded-[25.388px] top-[55px] w-[1155px]" style={{ maskImage: `url("${imgImage822}")` }} data-name="image 822">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[25.388px]">
          <img alt="" className="absolute h-[99.51%] left-[5.47%] max-w-none top-[0.02%] w-[89.03%]" src={imgImage823} />
        </div>
      </div>
    </div>
  );
}
