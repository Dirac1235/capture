/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { AnnouncementBannerMobile } from "@/components/ui/AnnouncementBannerMobile";

import { img17464086170411, img4E613751157188230432B7Db82Abd067Photoroom2, imgImage289, imgImage820, imgImage835, imgImage836, imgImage837, svgPaths } from "./assets";
import { Frame5, Frame7 } from "./graphics";
import { AntDesignCloudSyncOutlined, AntDesignCloudSyncOutlined1, FamiconsCalendarOutline, FluentMdl2Insights, MaterialSymbolsBeachAccessOutline, SiInsightsFill, SolarHistoryBold } from "./icons";
import { Frame1, Frame6, Group17, Group18, Group19, HugeiconsAccess, LucideLabWatchCheck, MynauiWatch, TablerFreeRights } from "./widgets";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PLUS_FAQS } from "../faqs";
import { Fragment, useState } from "react";
import { BillingToggle } from "@/components/ui/BillingToggle";
import { motion } from "framer-motion";
import { revealUp, revealFade } from "@/lib/reveal";
import { MobileNavMenu } from "@/components/ui/MobileNavMenu";

export default function PlusMobile() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");
  return (
    <div className="bg-white relative size-full" data-name="iPhone 16 & 17 Pro Max - 3">
      <div className="absolute flex h-[347.861px] items-center justify-center left-[-17px] top-[2337px] w-[364.935px]">
        <div className="-scale-y-100 flex-none rotate-[-162.73deg]">
          <div className="h-[271.741px] relative w-[297.686px]" data-name="image 836">
            <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgImage836} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[91.477px] items-center justify-center left-[411.19px] top-[6180.68px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[91.477px]">
            <div className="absolute inset-[-1.05px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91.4773 1.04752">
                <line id="Line 2" stroke="var(--stroke-0, #CDD6D9)" strokeWidth="1.04752" x2="91.4773" y1="0.523759" y2="0.523759" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[91.477px] items-center justify-center left-[947.27px] top-[6180.68px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[91.477px]">
            <div className="absolute inset-[-1.05px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91.4773 1.04752">
                <line id="Line 2" stroke="var(--stroke-0, #CDD6D9)" strokeWidth="1.04752" x2="91.4773" y1="0.523759" y2="0.523759" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#ff912b] h-[10px] left-[calc(50%+456.5px)] rounded-bl-[4px] rounded-br-[4px] top-[6144px] w-[255px]" />
      <div className="-translate-x-1/2 absolute bg-brand h-[10px] left-[calc(50%+910px)] rounded-bl-[4px] rounded-br-[4px] top-[6144px] w-[160px]" />
      <div className="absolute h-[157px] left-[467px] top-[6151px] w-[430px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 430 157">
          <path d={svgPaths.p3befec00} fill="url(#paint0_linear_1_2435)" id="Vector 21" opacity="0.2" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2435" x1="210.938" x2="210.938" y1="0" y2="140">
              <stop stopColor="#FF912B" />
              <stop offset="1" stopColor="#FF912B" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute h-[157px] left-[970px] top-[6151px] w-[317px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 317 157">
          <path d={svgPaths.p286cf500} fill="url(#paint0_linear_1_2505)" id="Vector 22" opacity="0.2" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2505" x1="158.5" x2="158.5" y1="0" y2="140">
              <stop stopColor="#7BB64C" />
              <stop offset="1" stopColor="#7BB64C" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <motion.p {...revealFade} className="-translate-x-1/2 [word-break:break-word] absolute font-pretendard font-medium leading-[normal] left-[683.22px] not-italic text-ui-gray text-[20.95px] text-center top-[6257.66px] whitespace-nowrap">Load</motion.p>
      <motion.p {...revealFade} className="-translate-x-1/2 [word-break:break-word] absolute font-serif font-bold leading-[normal] left-[calc(50%+464px)] not-italic text-ui-gray text-[50px] text-center top-[6180.87px] whitespace-nowrap">Moderate</motion.p>
      <motion.p {...revealFade} className="-translate-x-1/2 [word-break:break-word] absolute font-pretendard font-medium leading-[normal] left-[1129px] not-italic text-ui-gray text-[20.95px] text-center top-[6257.66px] whitespace-nowrap">Recovery</motion.p>
      <motion.p {...revealFade} className="-translate-x-1/2 [word-break:break-word] absolute font-serif font-bold leading-[normal] left-[calc(50%+910.5px)] not-italic text-ui-gray text-[50px] text-center top-[6180.87px] whitespace-nowrap">Good</motion.p>
      <AnnouncementBannerMobile />
      <MobileNavMenu />
      <motion.p {...revealFade} className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal leading-[1.34] left-[calc(50%-0.5px)] not-italic text-slate-text text-[22px] text-center top-[10539px] w-[363px]">See what Syni is like with a full year of context and your wearable data in the picture.</motion.p>
      <motion.p {...revealFade} className="-translate-x-1/2 [word-break:break-word] absolute font-heading font-bold font-bold leading-[0.91] left-[calc(50%-0.18px)] text-warm-dark text-[49.595px] text-center top-[10411px] uppercase w-[381.635px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Start with 7 days free.
      </motion.p>
      <div className="-translate-x-1/2 absolute bg-brand-dark h-[55px] left-1/2 rounded-[27.48px] top-[10670px] w-[392px]" />
      <Link href="/foundations" className="-translate-x-1/2 [word-break:break-word] absolute capitalize font-display font-medium font-medium leading-[1.251] left-[calc(50%+0.5px)] text-[18.02px] text-center text-white top-[10686px] whitespace-nowrap cursor-pointer transition-opacity hover:opacity-70">Explore Open Foundations</Link>
      <div className="absolute h-[244px] left-0 top-[10174px] w-[162.667px]" data-name="image 820">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage820} />
      </div>
      <Frame5 />
      <Frame1 />
      <div className="absolute left-[118px] size-[72.309px] top-[2431px]" data-name="4e613751157188230432b7db82abd067-Photoroom 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img4E613751157188230432B7Db82Abd067Photoroom2} />
      </div>
      <motion.p {...revealFade} className="-translate-x-1/2 [word-break:break-word] absolute font-heading font-semibold font-semibold leading-[82.82500457763672%] left-1/2 text-warm-dark text-[55.161px] text-center top-[2623px] w-[314px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        A full year of you.
      </motion.p>
      <motion.p {...revealFade} className="-translate-x-1/2 [word-break:break-word] absolute font-display font-medium font-medium leading-[normal] left-[calc(50%-10.77px)] text-brand text-[17.608px] text-center top-[2592px] uppercase whitespace-nowrap">WHAT CAPTURE PLUS UNLOCKS</motion.p>
      <motion.p {...revealFade} className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal leading-[1.37] left-1/2 not-italic text-slate-text text-[14.781px] text-center top-[2757px] w-[310px]">{`Patterns you can only see once you've been paying attention for long enough.`}</motion.p>
      <div className="-translate-x-1/2 absolute bg-white border-line border-[0.987px] border-solid h-[278px] left-[calc(50%-3px)] opacity-85 rounded-[28.417px] shadow-[0px_21.731px_48.476px_0px_rgba(0,0,0,0.05)] top-[2829.79px] w-[386px]" />
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-heading font-bold font-bold leading-[88.25%] left-[calc(50%-157.73px)] text-warm-dark text-[28.225px] top-[2941.77px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        365 days of history
      </motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-sans font-normal leading-[1.37] left-[calc(50%-157.81px)] not-italic text-text-secondary text-[15.044px] top-[2987.87px] w-[325.962px]">Free gives Syni 30 days to work with. Plus gives it a year. The longer the view, the more honest the pattern. Seasonal shifts, recurring slumps, gradual improvements they only show up over time.</motion.p>
      <div className="-translate-x-1/2 absolute bg-brand h-[50.809px] left-[calc(50%-130.59px)] rounded-[5.317px] top-[2865.1px] w-[53.919px]" />
      <FamiconsCalendarOutline />
      <div className="-translate-x-1/2 absolute bg-white h-[278px] left-[calc(50%-3px)] opacity-85 rounded-[28.417px] shadow-[0px_21.731px_48.476px_0px_rgba(0,0,0,0.05)] top-[3130.79px] w-[386px]" />
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-heading font-bold font-bold leading-[88.25%] left-[calc(50%-157.68px)] text-warm-dark text-[28.225px] top-[3242.73px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Wearable integration
      </motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-sans font-normal leading-[1.37] left-[calc(50%-157.55px)] not-italic text-text-secondary text-[15.044px] top-[3288.88px] w-[341.843px]">Heart rate, HRV, sleep quality pulled directly from your Whoop, Garmin, Apple Watch, or Oura. Syni uses that data to give you a picture that goes beyond behavior into what your body is actually carrying.</motion.p>
      <div className="-translate-x-1/2 absolute bg-brand h-[50.809px] left-[calc(50%-134.77px)] rounded-[5.317px] top-[3166.02px] w-[53.919px]" />
      <LucideLabWatchCheck />
      <div className="-translate-x-1/2 absolute bg-white border-line border-[0.987px] border-solid h-[278px] left-[calc(50%-3px)] opacity-85 rounded-[28.417px] shadow-[0px_21.731px_48.476px_0px_rgba(0,0,0,0.05)] top-[3432.79px] w-[386px]" />
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-heading font-bold font-bold leading-[88.25%] left-[calc(50%-157.79px)] text-warm-dark text-[28.225px] top-[3544.65px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cloud sync
      </motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-sans font-normal leading-[1.37] left-[calc(50%-157.81px)] not-italic text-text-secondary text-[14.112px] top-[3590.71px] w-[333.485px]">{`Your state data moves with you. Start a conversation on your phone, pick it up on desktop. Syni keeps the context either way so you're never starting from scratch.`}</motion.p>
      <div className="-translate-x-1/2 absolute bg-brand h-[50.809px] left-[calc(50%-130.59px)] rounded-[5.317px] top-[3467.94px] w-[53.919px]" />
      <AntDesignCloudSyncOutlined />
      <div className="-translate-x-1/2 absolute bg-white border-line border-[0.987px] border-solid h-[278px] left-[calc(50%-3px)] opacity-85 rounded-[28.417px] shadow-[0px_21.731px_48.476px_0px_rgba(0,0,0,0.05)] top-[3742.79px] w-[386px]" />
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-heading font-bold font-bold leading-[88.25%] left-[calc(50%-157.73px)] text-warm-dark text-[28.225px] top-[3854.7px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Plus-only insights
      </motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-sans font-normal leading-[1.37] left-[calc(50%-157.81px)] not-italic text-text-secondary text-[15.044px] top-[3900.8px] w-[325.962px]">{`Some patterns only surface after Syni has been watching long enough. Plus unlocks the insight surfaces that need that longer view things free simply doesn't have enough data to show you yet.`}</motion.p>
      <div className="-translate-x-1/2 absolute bg-brand h-[50.809px] left-[calc(50%-130.59px)] rounded-[5.317px] top-[3778.04px] w-[53.919px]" />
      <FluentMdl2Insights />
      <div className="-translate-x-1/2 absolute bg-white h-[279px] left-[calc(50%-3px)] opacity-85 rounded-[28.417px] shadow-[0px_21.731px_48.476px_0px_rgba(0,0,0,0.05)] top-[4051.79px] w-[386px]" />
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-heading font-bold font-bold leading-[88.25%] left-[calc(50%-157.68px)] text-warm-dark text-[28.225px] top-[4164.06px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Same privacy
      </motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-sans font-normal leading-[1.37] left-[calc(50%-157.55px)] not-italic text-text-secondary text-[15.044px] top-[4210.22px] w-[341.843px]">{`All Plus features stay private. Your wearable data is processed on your device. What gets synced to the cloud is encrypted and tied to your account nobody else's.`}</motion.p>
      <div className="-translate-x-1/2 absolute bg-brand h-[50.809px] left-[calc(50%-134.77px)] rounded-[5.317px] top-[4087.36px] w-[53.919px]" />
      <MaterialSymbolsBeachAccessOutline />
      <div className="-translate-x-1/2 absolute bg-white border-line border-[0.987px] border-solid h-[278.322px] left-[calc(50%+7.1px)] opacity-85 rounded-[28.417px] shadow-[0px_21.731px_48.476px_0px_rgba(0,0,0,0.05)] top-[4361.68px] w-[406.199px]" />
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-heading font-bold font-bold leading-[88.25%] left-[calc(50%-157.79px)] text-warm-dark text-[28.225px] top-[4473.49px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Early access
      </motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-sans font-normal leading-[1.37] left-[calc(50%-157.81px)] not-italic text-text-secondary text-[14.112px] top-[4519.55px] w-[333.485px]">{`Plus members get new features, integrations, and model updates before everyone else. If we're testing something new, you see it first.`}</motion.p>
      <div className="-translate-x-1/2 absolute bg-brand h-[50.809px] left-[calc(50%-130.59px)] rounded-[5.317px] top-[4396.78px] w-[53.919px]" />
      <HugeiconsAccess />
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-heading font-semibold font-semibold leading-[1.013] left-[calc(50%-183px)] text-warm-dark text-[80px] top-[5179.59px] w-[358px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Connect your wearable
      </motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-sans font-extrabold leading-[103.37999725341797%] left-[calc(50%-183px)] not-italic text-brand text-[40.01px] top-[5451.59px] uppercase w-[371px]">Your body signals, finally in the picture.</motion.p>
      <div className="[word-break:break-word] absolute font-display font-normal font-normal leading-[0] left-[calc(50%-183px)] text-text-secondary text-[22px] top-[5630.59px] w-[383px] whitespace-pre-wrap">
        <p className="leading-[1.31] mb-0">{`Behavioral patterns tell you how you're showing up. Biometric data tells you why. Plus connects both giving Syni a complete picture of your state, not just half of it.`}</p>
        <p className="leading-[1.31] mb-0">​</p>
        <p className="leading-[1.31]">All wearable data is processed locally on your device. Nothing is sent to our servers.</p>
      </div>
      <div className="-translate-x-1/2 absolute bg-dark-bg h-[999px] left-[calc(50%-2px)] top-[5959px] w-[448px]" />
      <div className="-translate-x-1/2 absolute bg-background h-[39px] left-[calc(50%-3px)] rounded-bl-[15px] rounded-br-[15px] top-[5959px] w-[178px]" />
      <motion.p {...revealFade} className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-extrabold leading-[1.251] left-[calc(50%-4px)] not-italic text-brand-dark text-[21px] text-center top-[5963px] uppercase whitespace-nowrap">CAPTURE</motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-sans font-bold leading-[1.251] left-[calc(50%-170px)] not-italic text-[40px] text-white top-[6045px] w-[320px]">
        Syni on Plus knows more.
        <br aria-hidden />
        So it says more.
      </motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-display font-light font-light leading-[1.31] left-[calc(50%-171px)] opacity-70 text-[22px] text-white top-[6224px] w-[367px]">On free, Syni reads your last 30 days and your current signals. On Plus, it has 365 days of history, your wearable data, and context from previous conversations. The difference shows up in how specific it can be.</motion.p>
      <div className="-translate-x-1/2 absolute bg-brand-dark h-[71px] left-1/2 rounded-[35.474px] top-[6474px] w-[350px]" />
      <button type="button" className="[word-break:break-word] absolute capitalize font-display font-medium font-medium leading-[1.251] left-[calc(50%-60px)] text-[23.262px] text-white top-[6494.65px] whitespace-nowrap cursor-pointer appearance-none border-0 bg-transparent p-0 m-0 transition-opacity hover:opacity-70">Learn more</button>
      <div className="-translate-x-1/2 absolute bg-haze-dark h-[392px] left-[calc(50%-0.06px)] opacity-85 rounded-[10.316px] top-[6996px] w-[407.87px]" />
      <div className="-translate-x-1/2 absolute bg-haze-dark h-[392px] left-[calc(50%-0.06px)] opacity-85 rounded-[10.316px] top-[7427px] w-[407.87px]" />
      <div className="-translate-x-1/2 absolute bg-white h-[233.296px] left-[calc(50%-4.03px)] rounded-[10.316px] top-[7119px] w-[357.085px]" />
      <div className="-translate-x-1/2 absolute bg-white h-[233.296px] left-[calc(50%-4.03px)] rounded-[10.316px] top-[7550px] w-[357.085px]" />
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-display font-normal font-normal leading-[normal] left-[calc(50%-104.81px)] opacity-58 text-[17.457px] text-black top-[7066.83px] whitespace-nowrap">HRV, strain, sleep, recovery scores</motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-display font-normal font-normal leading-[normal] left-[calc(50%-104.81px)] opacity-58 text-[17.457px] text-black top-[7497.83px] whitespace-nowrap">HRV, strain, sleep, recovery scores</motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-heading font-semibold font-semibold leading-[normal] left-[114.19px] text-forest text-[25.652px] top-[7037.26px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Free
      </motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-heading font-semibold font-semibold leading-[normal] left-[114.19px] text-forest text-[25.652px] top-[7468.26px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Capture Plus
      </motion.p>
      <div className="-translate-x-1/2 absolute bg-[#1e2f2d] h-[55.681px] left-[calc(50%-155.59px)] rounded-[10.316px] top-[7035.68px] w-[53.968px]" />
      <div className="-translate-x-1/2 absolute bg-[#1e2f2d] h-[55.681px] left-[calc(50%-155.59px)] rounded-[10.316px] top-[7466.68px] w-[53.968px]" />
      <div className="absolute flex h-[67.449px] items-center justify-center left-[124.51px] top-[7246.75px] w-[211.87px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="backdrop-blur-[4.269px] bg-[#9f9f9f] h-[67.449px] opacity-13 relative rounded-[4.82px] w-[211.87px]" />
        </div>
      </div>
      <div className="absolute flex h-[67.449px] items-center justify-center left-[124.51px] top-[7677.75px] w-[211.87px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="backdrop-blur-[4.269px] bg-brand h-[67.449px] opacity-13 relative rounded-[4.82px] w-[211.87px]" />
        </div>
      </div>
      <div className="absolute flex h-[41.263px] items-center justify-center left-[64.99px] top-[7167.4px] w-[192.826px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-white border-haze border-[0.794px] border-solid h-[41.263px] relative rounded-[8.729px] shadow-[0px_3.39px_150.101px_0px_rgba(0,0,0,0.25)] w-[192.826px]" />
        </div>
      </div>
      <div className="absolute flex h-[41.263px] items-center justify-center left-[64.99px] top-[7598.4px] w-[192.826px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-white border-haze border-[0.794px] border-solid h-[41.263px] relative rounded-[8.729px] shadow-[0px_3.39px_150.101px_0px_rgba(0,0,0,0.25)] w-[192.826px]" />
        </div>
      </div>
      <div className="absolute flex h-[23.806px] items-center justify-center left-[261.79px] top-[7129.31px] w-[120.615px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-brand h-[23.806px] relative rounded-[4.761px] w-[120.615px]" />
        </div>
      </div>
      <div className="absolute flex h-[24px] items-center justify-center left-[221px] top-[7560px] w-[161px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-brand h-[24px] relative rounded-[4.761px] w-[161px]" />
        </div>
      </div>
      <motion.p {...revealFade} className="-translate-x-full [word-break:break-word] absolute font-sans font-normal leading-[1.365] left-[325.27px] not-italic text-foreground text-[10.329px] text-right top-[7256.28px] w-[191.239px]">Your load tends to be higher mid-week. Friday may just be the result catching up with you.</motion.p>
      <motion.p {...revealFade} className="-translate-x-full [word-break:break-word] absolute font-sans font-normal leading-[1.365] left-[325.27px] not-italic text-foreground text-[10.329px] text-right top-[7687.28px] w-[191.239px]">Your load tends to be higher mid-week. Friday may just be the result catching up with you.</motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-sans font-normal leading-[1.365] left-[105.79px] not-italic text-foreground text-[10.329px] top-[7180.89px] whitespace-nowrap">Why do I feel worse on Fridays?</motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-sans font-normal leading-[1.365] left-[105.79px] not-italic text-foreground text-[10.329px] top-[7611.89px] whitespace-nowrap">Why do I feel worse on Fridays?</motion.p>
      <motion.p {...revealFade} className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-semibold leading-[1.365] left-[322.22px] not-italic text-[9.522px] text-center text-white top-[7134.87px] whitespace-nowrap">30 day history on device</motion.p>
      <motion.p {...revealFade} className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-semibold leading-[1.365] left-[302.22px] not-italic text-[9.522px] text-center text-white top-[7565.87px] whitespace-nowrap">365-day history · wearable data</motion.p>
      <motion.p {...revealFade} className="-translate-x-full [word-break:break-word] absolute font-sans font-normal leading-[1.365] left-[335.84px] not-italic text-foreground text-[9.414px] text-right top-[7318.96px] whitespace-nowrap">2:21 PM</motion.p>
      <motion.p {...revealFade} className="-translate-x-full [word-break:break-word] absolute font-sans font-normal leading-[1.365] left-[335.84px] not-italic text-foreground text-[9.414px] text-right top-[7749.96px] whitespace-nowrap">2:21 PM</motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-sans font-normal leading-[1.365] left-[66.56px] not-italic text-foreground text-[9.414px] top-[7220.7px] whitespace-nowrap">2:21 PM</motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-sans font-normal leading-[1.365] left-[66.56px] not-italic text-foreground text-[9.414px] top-[7651.7px] whitespace-nowrap">2:21 PM</motion.p>
      <Group17 />
      <Group18 />
      <div className="absolute left-[74.2px] size-[24.139px] top-[7175.99px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.1394 24.1394">
          <circle cx="12.0697" cy="12.0697" fill="var(--fill-0, #171717)" id="Ellipse 5315" r="12.0697" />
        </svg>
      </div>
      <div className="absolute left-[74.2px] size-[24.139px] top-[7606.99px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.1394 24.1394">
          <circle cx="12.0697" cy="12.0697" fill="var(--fill-0, #171717)" id="Ellipse 5315" r="12.0697" />
        </svg>
      </div>
      <div className="absolute left-[74.2px] rounded-[12.263px] size-[24.526px] top-[7175.99px]" data-name="1746408617041 1">
        <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none rounded-[12.263px] size-full" src={img17464086170411} />
      </div>
      <div className="absolute left-[74.2px] rounded-[12.263px] size-[24.526px] top-[7606.99px]" data-name="1746408617041 2">
        <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none rounded-[12.263px] size-full" src={img17464086170411} />
      </div>
      <TablerFreeRights />
      <div className="absolute left-[45px] size-[27.957px] top-[7482px]">
        <div className="absolute inset-[11.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.7257 21.7257">
            <path d={svgPaths.peff2300} fill="var(--fill-0, white)" id="Star 1" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[65.91px] size-[14.087px] top-[7481px]">
        <div className="absolute inset-[11.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9468 10.9468">
            <path d={svgPaths.p2354e580} fill="var(--fill-0, white)" id="Star 2" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[65.91px] size-[14.087px] top-[7495.87px]">
        <div className="absolute inset-[11.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9468 10.9468">
            <path d={svgPaths.p2354e580} fill="var(--fill-0, #D08E8F)" id="Star 3" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-[#eaeceb] h-[1103px] left-[-2px] rounded-[18px] top-[7904px] w-[442px]" />
      <motion.p {...revealFade} className="-translate-x-1/2 [word-break:break-word] absolute font-display font-medium font-medium leading-[normal] left-[calc(50%+1.59px)] text-brand text-[19.502px] text-center top-[7953px] uppercase whitespace-nowrap">PRICING</motion.p>
      <motion.p {...revealFade} className="-translate-x-1/2 [word-break:break-word] absolute font-heading font-semibold font-semibold leading-[1.013] left-1/2 text-warm-dark text-[61.64px] text-center top-[7981.13px] w-[350px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        One plan. Everything unlocked.
      </motion.p>
      <motion.p {...revealFade} className="-translate-x-1/2 [word-break:break-word] absolute font-display font-normal font-normal leading-[1.31] left-[calc(50%+0.5px)] text-text-secondary text-[19.502px] text-center top-[8184px] w-[353px]">Try it free for 7 days. No charge until you decide to keep it.</motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-display font-semibold font-semibold leading-[1.31] left-[calc(50%-129px)] text-ink-soft text-[21.275px] top-[8279.43px] whitespace-nowrap">Monthly</motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-display font-semibold font-semibold leading-[1.31] left-[calc(50%+66.02px)] text-ink-soft text-[21.275px] top-[8279.43px] whitespace-nowrap">Yearly</motion.p>
      <BillingToggle value={billing} onChange={setBilling} className="absolute left-[189.28px] top-[8275px] bg-[#1b1b1b]" />
      <div className="absolute bg-brand h-[39.003px] left-[159.27px] opacity-34 rounded-[19.502px] top-[8329.94px] w-[122.329px]" />
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-display font-semibold font-semibold leading-[1.31] left-[calc(50%-42px)] text-ink-soft text-[18.615px] top-[8337.03px] whitespace-nowrap">Save 20%</motion.p>
      <div className="-translate-x-1/2 absolute bg-dark-bg h-[539px] left-[calc(50%+1.62px)] rounded-[22.457px] top-[8421px] w-[385.25px]" />
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-display font-bold font-bold leading-[1.31] left-[calc(50%-150.81px)] text-[21.84px] text-white top-[8481.16px] whitespace-nowrap">Capture Plus · {billing === "yearly" ? "Yearly" : "Monthly"}</motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-display font-semibold font-semibold leading-[0] left-[calc(50%-150.81px)] text-[#71ff00] text-[0px] top-[8553.38px] whitespace-nowrap">
        <span className="font-display font-medium font-medium leading-[1.31] text-brand text-[17.426px]">$</span>
        <span className="font-display font-medium font-medium leading-[1.31] text-brand text-[64.623px]">{billing === "yearly" ? "79" : "8"}</span>
      </motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-display font-normal font-normal leading-[1.31] left-[calc(50%-150.81px)] text-text-secondary text-[15.974px] top-[8514.17px] whitespace-nowrap">Everything in free, plus wearables...</motion.p>
      {billing === "yearly" && (<p className="[word-break:break-word] absolute font-display font-normal font-normal leading-[1.31] left-[calc(50%-150.81px)] text-brand text-[12.23px] top-[8451.46px] uppercase whitespace-nowrap">Save 2 months</p>)}
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-display font-normal font-normal leading-[1.31] left-[calc(50%-61.84px)] opacity-58 text-[15.974px] text-white top-[8600.58px] whitespace-nowrap">/ {billing === "yearly" ? "year" : "month"}</motion.p>
      {billing === "yearly" && (<p className="[word-break:break-word] absolute font-display font-normal font-normal leading-[1.31] left-[calc(50%-6.8px)] opacity-58 text-[15.974px] text-white top-[8600.58px] whitespace-nowrap">$6.58/month</p>)}
      <div className="absolute bg-brand-dark h-[44.914px] left-[59.32px] rounded-[22.457px] top-[8646.1px] w-[317.496px]" />
      <div className="absolute bg-white h-[237.735px] left-[38.6px] rounded-[22.457px] top-[8711.92px] w-[364.733px]" />
      {/* Plus pricing feature checklist — brand-circle + white check + label rows */}
      {[
        { circle: "top-[8735.93px]", check: "top-[8742.9px]", label: "top-[8736.7px]", text: "Everything in free" },
        { circle: "top-[8778.52px]", check: "top-[8785.49px]", label: "top-[8779.29px]", text: "Wearable integration" },
        { circle: "top-[8821.11px]", check: "top-[8828.08px]", label: "top-[8821.88px]", text: "365-day pattern history" },
        { circle: "top-[8863.7px]", check: "top-[8870.67px]", label: "top-[8864.48px]", text: "Cloud sync across devices" },
        { circle: "top-[8906.29px]", check: "top-[8913.26px]", label: "top-[8907.07px]", text: "Cloud-powered Syni" },
      ].map((r) => (
        <Fragment key={r.text}>
          <div className={`absolute left-[59.51px] size-[20.134px] ${r.circle}`}>
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1339 20.1339">
              <circle cx="10.0669" cy="10.0669" fill="var(--fill-0, #D08E8F)" id="Ellipse 5555" r="9.67975" stroke="var(--stroke-0, white)" strokeWidth="0.77438" />
            </svg>
          </div>
          <div className={`absolute h-[6.056px] left-[65.31px] w-[8.518px] ${r.check}`}>
            <div className="absolute inset-[-17.65%_-12.55%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6555 8.19295">
                <path d={svgPaths.p2892b380} id="Vector 526" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13729" />
              </svg>
            </div>
          </div>
          <motion.p {...revealUp} className={`[word-break:break-word] absolute font-display font-medium font-medium leading-[1.31] left-[calc(50%-129.29px)] text-slate text-[14.713px] whitespace-nowrap ${r.label}`}>{r.text}</motion.p>
        </Fragment>
      ))}
      <button type="button" className="-translate-x-1/2 [word-break:break-word] absolute font-display font-medium font-medium leading-[1.31] left-[calc(50%-1.22px)] text-[15.724px] text-center text-white top-[8658.49px] whitespace-nowrap cursor-pointer appearance-none border-0 bg-transparent p-0 m-0 transition-opacity hover:opacity-70">{`Get Plus ${billing === "yearly" ? "Yearly" : "Monthly"}`}</button>
      <div className="absolute left-[203.46px] size-[3.494px] top-[8609.57px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.49433 3.49433">
          <circle cx="1.74716" cy="1.74716" fill="var(--fill-0, #949999)" id="Ellipse 5573" r="1.74716" />
        </svg>
      </div>
      <motion.p {...revealFade} className="-translate-x-1/2 [word-break:break-word] absolute font-heading font-bold font-bold leading-[1.013] left-1/2 text-warm-dark text-[55px] text-center top-[9070px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Quick answers.
      </motion.p>
      <FaqAccordion items={PLUS_FAQS} variant="plusMobile" className="absolute left-[calc(50%-2.5px)] top-[9170px] w-[393px] -translate-x-1/2" />
      <Frame6 />
      <div className="absolute h-[531.866px] left-[-138px] top-[1729.32px] w-[1631px]">
        <div className="absolute inset-[-4.8%_-1.44%_-0.93%_-1.53%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1679.57 562.35">
            <path d={svgPaths.p925a600} id="Vector 543" stroke="var(--stroke-0, #D08E8F)" strokeWidth="51.0459" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute backdrop-blur-[51.869px] bg-[rgba(255,255,255,0.6)] h-[674.3px] left-[calc(50%+463.85px)] rounded-[9.057px] shadow-[9px_11px_250px_0px_rgba(0,0,0,0.2)] top-[1632.99px] w-[1309.081px]" />
      <div className="-translate-x-1/2 absolute bg-[#a6a6a6] h-[83.979px] left-[calc(50%+229.2px)] opacity-16 rounded-[9.057px] top-[1645.34px] w-[808.502px]" />
      {/* Comparison-table row markers (feature column) */}
      {["top-[1753.2px]", "top-[1837.18px]", "top-[1912.1px]", "top-[1987.02px]", "top-[2061.94px]", "top-[2136.87px]"].map((top) => (
        <div key={top} className={`-translate-x-1/2 absolute bg-brand left-[calc(50%-123.59px)] opacity-22 rounded-[7.41px] size-[45.283px] ${top}`} />
      ))}
      <div className="-translate-x-1/2 absolute bg-brand h-[52.693px] left-[calc(50%+478.26px)] opacity-31 rounded-[7.41px] top-[2223.31px] w-[1248.979px]" />
      <div className="-translate-x-1/2 absolute bg-brand h-[453.65px] left-[calc(50%+876.34px)] opacity-22 rounded-[9.057px] top-[1743.32px] w-[452.827px]" />
      <div className="-translate-x-1/2 absolute bg-brand h-[83.979px] left-[calc(50%+876.34px)] opacity-22 rounded-[9.057px] top-[1645.34px] w-[452.827px]" />
      <motion.p {...revealFade} className="-translate-x-1/2 [word-break:break-word] absolute font-display font-semibold font-semibold leading-[normal] left-[calc(50%-62.24px)] text-dark-bg-alt text-[19.76px] text-center top-[1674.16px] uppercase whitespace-nowrap">FEATURE</motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-display font-normal font-normal leading-[normal] left-[calc(50%-84.48px)] text-dark-bg-alt text-[18.936px] top-[1763.08px] whitespace-nowrap">Pattern history</motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-display font-normal font-normal leading-[normal] left-[calc(50%-84.48px)] text-dark-bg-alt text-[18.936px] top-[1847.06px] whitespace-nowrap">Syni</motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-display font-normal font-normal leading-[normal] left-[calc(50%-84.48px)] text-dark-bg-alt text-[18.936px] top-[1996.9px] whitespace-nowrap">Wearable integration</motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-display font-normal font-normal leading-[normal] left-[calc(50%-84.48px)] text-dark-bg-alt text-[18.936px] top-[2146.75px] whitespace-nowrap">Plus-only insight surfaces</motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-display font-normal font-normal leading-[normal] left-[calc(50%-84.48px)] text-dark-bg-alt text-[18.936px] top-[1921.98px] whitespace-nowrap">Cloud sync</motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-display font-normal font-normal leading-[normal] left-[calc(50%-84.48px)] text-dark-bg-alt text-[18.936px] top-[2071.82px] whitespace-nowrap">Long-range insights</motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-display font-normal font-normal leading-[normal] left-[calc(50%-47.43px)] text-[#1d453c] text-[18.936px] top-[2237.31px] whitespace-nowrap">On free, your data never expires it stays on your device. The 30-day window is what Syni actively uses for pattern reading.</motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-display font-normal font-normal leading-[normal] left-[calc(50%+276.96px)] text-dark-bg-alt text-[18.936px] top-[1763.08px] whitespace-nowrap">30 days</motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-display font-normal font-normal leading-[normal] left-[calc(50%+276.96px)] text-dark-bg-alt text-[18.936px] top-[1847.06px] whitespace-nowrap">On-device only</motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-display font-normal font-normal leading-[normal] left-[calc(50%+276.96px)] text-dark-bg-alt text-[18.936px] top-[1996.9px] whitespace-nowrap">-</motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-display font-normal font-normal leading-[normal] left-[calc(50%+276.96px)] text-dark-bg-alt text-[18.936px] top-[2146.75px] whitespace-nowrap">-</motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-display font-normal font-normal leading-[normal] left-[calc(50%+276.96px)] text-dark-bg-alt text-[18.936px] top-[1921.98px] whitespace-nowrap">-</motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-display font-normal font-normal leading-[normal] left-[calc(50%+276.96px)] text-dark-bg-alt text-[18.936px] top-[2071.82px] whitespace-nowrap">-</motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-display font-normal font-normal leading-[normal] left-[calc(50%+674.62px)] text-dark-bg-alt text-[18.936px] top-[1763.08px] whitespace-nowrap">365 days</motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-display font-normal font-normal leading-[normal] left-[calc(50%+674.62px)] text-dark-bg-alt text-[18.936px] top-[1847.06px] whitespace-nowrap">Cloud-powered, longer memory</motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-display font-normal font-normal leading-[normal] left-[calc(50%+702.61px)] text-dark-bg-alt text-[18.936px] top-[1996.9px] whitespace-nowrap">Whoop, Garmin, and more</motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-display font-normal font-normal leading-[normal] left-[calc(50%+702.61px)] text-dark-bg-alt text-[18.936px] top-[2146.75px] whitespace-nowrap">Available</motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-display font-normal font-normal leading-[normal] left-[calc(50%+702.61px)] text-dark-bg-alt text-[18.936px] top-[1921.98px] whitespace-nowrap">Across all your devices</motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-display font-normal font-normal leading-[normal] left-[calc(50%+702.61px)] text-dark-bg-alt text-[18.936px] top-[2071.82px] whitespace-nowrap">Available</motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-display font-semibold font-semibold leading-[normal] left-[calc(50%+276.96px)] text-dark-bg-alt text-[19.76px] top-[1674.16px] uppercase whitespace-nowrap">FREE</motion.p>
      <motion.p {...revealUp} className="[word-break:break-word] absolute font-display font-semibold font-semibold leading-[normal] left-[calc(50%+674.62px)] text-dark-bg-alt text-[19.76px] top-[1674.16px] uppercase whitespace-nowrap">CAPTURE PLUS</motion.p>
      {/* Comparison-table row dividers */}
      {["top-[1822.36px]", "top-[1897.28px]", "top-[1972.2px]", "top-[2047.12px]", "top-[2122.05px]", "top-[2196.97px]"].map((top) => (
        <div key={top} className={`absolute h-0 left-[41.48px] w-[1280.265px] ${top}`}>
          <div className="absolute inset-[-0.82px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280.27 0.823322">
              <line id="Line 1176" opacity="0.1" stroke="var(--stroke-0, black)" strokeWidth="0.823322" x2="1280.27" y1="0.411661" y2="0.411661" />
            </svg>
          </div>
        </div>
      ))}
      <motion.p {...revealFade} className="-translate-x-1/2 [word-break:break-word] absolute font-heading font-semibold font-semibold leading-[82.82500457763672%] left-1/2 text-warm-dark text-[51.624px] text-center top-[1352.36px] w-[391.203px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Free gets you a lot. Plus takes it further.
      </motion.p>
      <motion.p {...revealFade} className="-translate-x-1/2 [word-break:break-word] absolute font-display font-medium font-medium leading-[normal] left-[calc(50%+0.51px)] text-brand text-[14.232px] text-center top-[1324.16px] uppercase whitespace-nowrap">FREE VS PLUS</motion.p>
      <motion.p {...revealFade} className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal leading-[1.37] left-[calc(50%+0.45px)] not-italic text-slate-text text-[13.833px] text-center top-[1522px] w-[293.857px]">Every on-device feature is free. Plus adds the things that need more time, more data, and more context to work properly.</motion.p>
      {/* Plus-column check marks (comparison table) */}
      {["top-[1929.39px]", "top-[2003.49px]", "top-[2079.23px]", "top-[2153.33px]"].map((top) => (
        <div key={top} className={`absolute h-[10.703px] left-[894.45px] w-[14.408px] ${top}`}>
          <div className="absolute inset-[-15.39%_-11.43%_-15.38%_-11.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.7015 13.9965">
              <path d={svgPaths.pedf5500} id="Vector 545" stroke="var(--stroke-0, #D08E8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.29329" />
            </svg>
          </div>
        </div>
      ))}
      <SolarHistoryBold />
      <AntDesignCloudSyncOutlined1 />
      <MynauiWatch />
      <SiInsightsFill />
      <Group19 />
      <div className="absolute left-[84px] size-[18.538px] top-[2149.66px]">
        <div className="absolute inset-[11.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4064 14.4064">
            <path d={svgPaths.p31fc8000} fill="var(--fill-0, black)" id="Star 11" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[97.87px] size-[9.341px] top-[2149px]">
        <div className="absolute inset-[11.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.25888 7.25888">
            <path d={svgPaths.p376e6370} fill="var(--fill-0, black)" id="Star 12" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[97.87px] size-[9.341px] top-[2158.86px]">
        <div className="absolute inset-[11.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.25888 7.25888">
            <path d={svgPaths.p376e6370} fill="var(--fill-0, black)" id="Star 12" />
          </svg>
        </div>
      </div>
      <Link href="/" aria-label="Capture home" className="[word-break:break-word] absolute font-sans font-bold leading-[0.8] left-[calc(50%-138.44px)] not-italic text-dark-bg text-[25.918px] top-[124px] whitespace-nowrap cursor-pointer transition-opacity hover:opacity-70">Capture</Link>
      <div className="absolute bg-dark-bg left-[31px] rounded-[7.058px] size-[39.993px] top-[115px]" />
      <div className="absolute h-[21.863px] left-[38.06px] top-[124px] w-[25.969px]" data-name="image 835">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[290.86%] left-[-73.08%] max-w-none top-[-95.94%] w-[244.87%]" src={imgImage835} />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[408.807px] left-[calc(50%-0.34px)] rounded-[35.889px] top-[4718px] w-[401.317px]" data-name="image 289">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[35.889px] size-full" src={imgImage289} />
      </div>
      <Frame7 />
      <div className="absolute h-[282.001px] left-[-13px] top-[6615px] w-[369.414px]" data-name="image 837">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage837} />
      </div>
      <div className="absolute flex h-[311.874px] items-center justify-center left-[98px] top-[10113px] w-[341.344px]">
        <div className="flex-none rotate-[0.28deg]">
          <div className="h-[310.199px] relative w-[339.816px]" data-name="image 838">
            <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgImage836} />
          </div>
        </div>
      </div>
    </div>
  );
}
