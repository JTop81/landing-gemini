import BackgroundBubble from "./assets/BackgroundBubble";

import SiteFooter from "./siteFooter/page";
import SiteContactUs from "./siteContactUs/page";
import SiteProfessionalTeam from "./siteProfesionalTeam/page";
import SiteAboutUs from "./siteAboutUs/page";
import CoreServices from "./siteMainServices/page";
import SiteMainSlider from "./siteMainSlider/page";
import SiteHeader from "./siteHeader/page";

export default function Home({ className = "" }: HomeProps) {
  return (
    <div
      className={`font-poppins inline-flex h-[311.813rem] w-[90rem] resize flex-col overflow-y-auto overflow-x-hidden ${className}`}
    >
      <div className="relative flex h-full w-full items-end overflow-clip bg-white pb-[57.375rem] pt-[196.375rem] pr-[4rem]">
        <SiteMainSlider className="" />
        <SiteHeader className="" />
        <SiteContactUs className="" />
        <BackgroundBubble className="relative mr-[-0.0208125rem] h-[58.0625rem] w-[73.5rem]" />
        <SiteAboutUs className="" />
        <CoreServices className="" />

        <SiteProfessionalTeam className="" />

        <SiteFooter className={"*"} />
      </div>
    </div>
  );
}

interface HomeProps {
  className: string;
}
