// import "./siteContactUs.css";
import AnimationSiteContactUs from "./svg/AnimationSiteContactUs";
import SiteContactUsBg from "./svg/ContactUsBg";
import SiteFormContactUs from "./svg/ContactUsForm";

export interface siteContactUsProps {
  className: string;
}

export default function SiteContactUs({ className = "" }: siteContactUsProps) {
  return (
    <div className={className}>
      <SiteContactUsBg className="" />
      <SiteFormContactUs className="" />

      <div className="w-[497px] h-[169px] static">
        <div className="text-[#8b8b8b] text-left text-base font-normal absolute left-[770px] top-[3490px] w-[497px] h-7">
          Lorem ipsum dolor sit amet nulla turapis tellus.{" "}
        </div>
        <div className="text-[#091156] text-left text-4xl leading-tight font-semibold absolute left-[770px] top-[3381px] w-[404px] h-[97px]">
          Send your inquiry to
          <br />
          our expert team{" "}
        </div>
        <div className="text-[#ff64ae] text-left text-base leading-tight font-semibold absolute left-[771px] top-[3349px]">
          Contact Us{" "}
        </div>
      </div>
      <AnimationSiteContactUs className="" />
    </div>
  );
}
