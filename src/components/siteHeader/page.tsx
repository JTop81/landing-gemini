// import "./SiteHeader.css";

interface siteHeaderProps {
  className: string;
}

export default function SiteHeader({ className = "" }: siteHeaderProps) {
  return (
    <div className={className}>
      <nav>
      <button className="w-[158px] h-[52px] static">
        <div className="bg-[#ff64ae] rounded-[50px] w-[158px] h-[52px] absolute left-[1132px] top-[45px]"></div>
        <div className="text-[#ffffff] text-left text-base font-semibold absolute left-[1173px] top-[59px]">
          Contact{" "}
        </div>
      </button>
      <div className="w-[481px] h-[25px] static">
        <div className="text-[#8b8b8b] text-left text-base font-medium absolute left-[1039px] top-[59px]">
          <a href="/">Blog</a>{" "}
        </div>
        <div className="text-[#8b8b8b] text-left text-base font-medium absolute left-[925px] top-[59px]">
          <a href="/">Gallery</a>{" "}
        </div>
        <div className="text-[#8b8b8b] text-left text-base font-medium absolute left-[810px] top-[59px]">
          <a href="/">Service</a>{" "}
        </div>
        <div className="text-[#8b8b8b] text-left text-base font-medium absolute left-[710px] top-[58px]">
          <a href="/">About</a>{" "}
        </div>
        <a href="/">
          <div className="w-[66px] h-6 static">
            <svg
              className="w-[7px] h-[7px] absolute left-[658px] top-[69px] overflow-visible"
              style={{}}
              width="100%"
              height="100%"
              viewBox="0 0 7 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="3.5"
                y1="2.18557e-08"
                x2="3.5"
                y2="100%"
                stroke="#41487F"
              />
              <line
                x1="100%"
                y1="3.5"
                x2="-4.37114e-08"
                y2="3.5"
                stroke="#41487F"
              />
            </svg>

            <div className="text-[#414880] text-left font-['Poppins-SemiBold',_sans-serif] text-base font-semibold absolute left-[599px] top-[59px]">
              Home{" "}
            </div>
          </div>
        </a>
      </div>
      <button className="w-[258px] h-[63px] static">
        <div className="bg-[#ff64ae] rounded-[50%] w-[63px] h-[63px] absolute left-[150px] top-[41px]"></div>
        <div className="bg-[#091156] rounded-[50px] w-10 h-[11px] absolute left-[189px] top-[67px]"></div>
        <div className="bg-[#ffffff] rounded-[50%] w-1.5 h-1.5 absolute left-[175px] top-16"></div>
        <div className="bg-[#ffffff] rounded-[50%] w-[13px] h-[13px] absolute left-[162px] top-[52px]"></div>
        <div className="text-[#091156] text-left font-['Poppins-Bold',_sans-serif] text-2xl font-bold absolute left-[247px] top-[55px] w-[161px] h-[34px]">
          Beautice{" "}
        </div>
        </button>
        </nav>
    </div>
  );
}
