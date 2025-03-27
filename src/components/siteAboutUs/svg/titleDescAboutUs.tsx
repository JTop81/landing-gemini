interface titleDescAboutUsProps {
  className: string;
}

export default function TitleDescAboutUs({ className = "" }: titleDescAboutUsProps) {
  return (
    <div className="w-[664px] h-[292px] static">
      <div className="text-[#8b8b8b] text-left text-base font-normal absolute left-[150px] top-[1898.44px] w-[483px] h-[196px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
        suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc,
        ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse
        placerat.
        <br />
        <br />
        Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras
        tellus enim.{" "}
      </div>
      <div className="text-[#091156] text-left text-4xl leading-tight font-semibold absolute left-[150px] top-[1834.44px] w-[664px] h-[52px]">
        We are the best beauty clinic{" "}
      </div>
      <div className="text-[#ff64ae] text-left text-base leading-tight font-semibold absolute left-[151px] top-[1802.44px]">
        About Us{" "}
      </div>
    </div>
  );
}
