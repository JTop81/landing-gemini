export interface siteProfessionalTileDescProps {
  className: string;
}

export default function SiteProfessionalTitleDesc({
  className = "",
}: siteProfessionalTileDescProps) {
  return (
    <div className="w-[848px] h-[148px] static">
      <div className="text-[#8b8b8b] text-center text-base font-normal absolute left-[296px] top-[2441px] w-[848px] h-[51px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.{" "}
      </div>
      <div className="text-[#091156] text-center text-4xl leading-tight font-semibold absolute left-[354px] top-[2376px] w-[732px] h-[53px]">
        The Professional expert{" "}
      </div>
      <div className="text-[#ff64ae] text-center text-base leading-tight font-semibold absolute left-[640px] top-[2344px]">
        Professional Teams{" "}
      </div>
    </div>
  );
}
