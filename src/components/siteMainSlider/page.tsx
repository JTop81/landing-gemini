// import "./MainSlider.css";
import SiteAnimationSlide from "./svg/siteAnimationSlide";
import SiteSlideBg from "./svg/siteSlideBg";
import SiteSlideButton from "./svg/siteSlideButton";

interface siteMainSliderProps {
  className: string;
}

export default function SiteMainSlider({
  className = "",
}: siteMainSliderProps) {
  return (
    <div className={className}>
      <SiteSlideBg className="" />
      <SiteSlideButton className="" />

      <div className="w-[200px] h-[58.36px] static">
        <div
          className="bg-[#ff64ae] rounded-[50px] w-[200px] h-[58.36px] absolute left-[189px] top-[526px]"
          style={{ boxShadow: "0px 17px 22px 0px rgba(255, 237, 246, 1.00)" }}
        ></div>
        <div className="text-[#ffffff] text-center text-base font-semibold absolute left-[230px] top-[542.36px] w-[119px] h-[26.94px]">
          More Details{" "}
        </div>
      </div>
      <div className="text-[#091156] text-left text-base font-medium absolute left-[189px] top-[444px] w-[474px] h-[54px]">
        It is a long established fact that a reader will be
        <br />
        by the readable content of a page.{" "}
      </div>
      <div className="text-[#091156] text-left text-5xl leading-tight font-semibold absolute left-[189px] top-[316px] w-[430px] h-32">
        Clinic &amp; beauty
        <br />
        consultant{" "}
      </div>
      <SiteAnimationSlide className="" />
    </div>
  );
}
