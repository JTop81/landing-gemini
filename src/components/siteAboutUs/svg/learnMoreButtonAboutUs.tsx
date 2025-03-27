interface learnMoreButtonAboutUsProps {
  className: string;
}

export default function LearnMoreButtonAboutUs({
  className = "",
}: learnMoreButtonAboutUsProps) {
  return (
    <button className="w-[200px] h-[58.36px] static">
      <div
        className="bg-[#ff64ae] rounded-[50px] w-[200px] h-[58.36px] absolute left-[150px] top-[2143.44px]"
        style={{ boxShadow: "0px 17px 22px 0px rgba(255, 237, 246, 1.00)" }}
      ></div>
      <div className="text-[#ffffff] text-center text-base font-semibold absolute left-[191px] top-[2159.8px] w-[119px] h-[26.94px]">
        Learn More{" "}
      </div>
    </button>
  );
}
