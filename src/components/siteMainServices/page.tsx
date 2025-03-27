// import "./CoreServices.css";
import AnimationBeautyConsulation from "./svg/animationBeautyConsulation";
import AnimationBeautyProduct from "./svg/animationBeautyProduct";
import AnimationSkinTreatments from "./svg/animationSkinTreatments";


interface coreServiecesProps {
  className: string;
}

export default function CoreServices({ className = "" }: coreServiecesProps) {
  return (
    <div className={className}>
      <div className="w-[343px] h-[458px] static">
        <div
          className="bg-[#ffffff] rounded-[42px] w-[343px] h-[458px] absolute left-[947px] top-[1210px]"
          style={{ boxShadow: "0px 25px 50px 25px rgba(246, 247, 255, 1.00)" }}
        ></div>
        <div className="text-[#8b8b8b] text-center text-sm font-normal absolute left-[981px] top-[1536px] w-[274px] h-20">
          Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
          turpis.{" "}
        </div>
        <div className="text-[#091156] text-center text-lg leading-tight font-semibold absolute left-[987px] top-[1493px] w-[263px] h-[37px]">
          Beauty product{" "}
        </div>
        <div className="w-[166px] h-[166px] static">
          <div
            className="rounded-[50%] w-[166px] h-[166px] absolute left-[1035px] top-[1269px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(238, 239, 255, 1.00) 0%,rgba(255, 255, 255, 0.00) 100%)",
            }}
          ></div>
          <AnimationBeautyProduct className="" />
        </div>
      </div>
      <div className="w-[343px] h-[458px] static">
        <div
          className="bg-[#ffffff] rounded-[42px] w-[343px] h-[458px] absolute left-[549px] top-[1210px]"
          style={{ boxShadow: "0px 25px 50px 25px rgba(246, 247, 255, 1.00)" }}
        ></div>
        <div className="text-[#8b8b8b] text-center text-sm font-normal absolute left-[583px] top-[1536px] w-[274px] h-20">
          Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
          turpis.{" "}
        </div>
        <div className="text-[#091156] text-center text-lg leading-tight font-semibold absolute left-[589px] top-[1493px] w-[263px] h-[37px]">
          Skin treatments{" "}
        </div>
        <div className="w-[166px] h-[166px] static">
          <div
            className="rounded-[50%] w-[166px] h-[166px] absolute left-[637px] top-[1269px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(240, 241, 255, 1.00) 0%,rgba(255, 255, 255, 0.00) 100%)",
            }}
          ></div>
          <AnimationSkinTreatments className="" />
        </div>
      </div>
      <div className="w-[343px] h-[458px] static">
        <div
          className="bg-[#ffffff] rounded-[42px] w-[343px] h-[458px] absolute left-[150px] top-[1210px]"
          style={{ boxShadow: "0px 25px 50px 25px rgba(246, 247, 255, 1.00)" }}
        ></div>
        <div className="text-[#8b8b8b] text-center text-sm font-normal absolute left-[184px] top-[1536px] w-[274px] h-20">
          Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
          turpis.{" "}
        </div>
        <div className="text-[#091156] text-center text-lg leading-tight font-semibold absolute left-[190px] top-[1493px] w-[263px] h-[37px]">
          Beauty consultation{" "}
        </div>
        <div className="w-[166px] h-[166px] static">
          <div
            className="rounded-[50%] w-[166px] h-[166px] absolute left-[239px] top-[1269px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(238, 240, 255, 1.00) 0%,rgba(255, 255, 255, 1.00) 100%)",
            }}
          ></div>
          <AnimationBeautyConsulation className="" />
        </div>
      </div>
      <div className="w-[848px] h-48 static">
        <div className="text-[#8b8b8b] text-center text-base font-normal absolute left-[296px] top-[1077px] w-[848px] h-[51px]">
          Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa.
          Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
          turpis.{" "}
        </div>
        <div className="text-[#091156] text-center text-4xl leading-tight font-semibold absolute left-[354px] top-[968px] w-[732px] h-[97px]">
          Learn services to focus
          <br />
          on your beauty{" "}
        </div>
        <div className="text-[#ff64ae] text-center text-base leading-tight font-semibold absolute left-[664px] top-[936px]">
          Main Services{" "}
        </div>
      </div>
    </div>
  );
}
