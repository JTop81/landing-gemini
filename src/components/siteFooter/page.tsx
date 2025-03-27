// import "./siteFooter.css";
import FooterBG from "./svg/FooterBG";
import SocialIcon_pack from "./svg/SocialIcon_packFooter";
import ArrowBackToTop from "./svg/ArrowBackToTop";
import OtherInfomations from "./svg/OtherInfomations";
import MainInfomations from "./svg/MainInfomations";
import AddrressInfomations from "./svg/AddressInfomations";
import SiteFormContactUs from "../siteContactUs/svg/ContactUsForm";

interface SiteFooterProps {
  className: string;
}
export default function SiteFooter({ className = "" }: SiteFooterProps) {
  return (
    <div
      className={`inset-x-0 bottom-0 flex h-96 items-center justify-center leading-[normal] tracking-widest ${className}`}
    >
      <div
        className="bg-[#0d165c] w-full h-[125px] absolute left-0 top-[4989px]"
        style={{
          transformOrigin: "0 0",
          transform: "rotate(0deg) scale(1, -1)",
        }}
      ></div>
      <FooterBG className="" />

      <ArrowBackToTop className="" />
      <OtherInfomations className="" />
      <MainInfomations className="" />
      <AddrressInfomations className="" />
      <div className="flex w-full max-w-[1140px] items-stretch justify-between gap-5 mb-10 max-md:max-w-full max-md:flex-wrap max-md:mb-10">
        <SocialIcon_pack className="" />
        <div className="text-[#d7dbff] text-right text-base font-normal absolute left-[793px] top-[4868.05px] w-[497px] h-[31.18px] tracking-widest self-center grow shrink basis-auto my-auto">
          {/* <div className="text-[#d7dbff] text-right text-base font-normal absolute left-[793px] top-[4868.05px] w-[497px] h-[31.18px]"> */}
          © AltDesain Studio 2021 - All right reserved. Footer
        </div>
      </div>
    </div>
  );
}

