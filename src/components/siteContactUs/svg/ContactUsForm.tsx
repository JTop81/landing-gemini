import { useState } from "react";

export interface siteFormContactUsProps {
  className: string;
}

const SiteFormContactUs: React.FC<siteFormContactUsProps> = ({
  className = "",
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    subjectMessage: "",
    yourInquiry: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className="w-[520px] h-[652px] static">
      <div className="w-[242.21px] h-[61.58px] static">
        <div>
          <input
            type="text"
            name="firstName"
            className="bg-[#ffffff] rounded-[15px] border-solid border-[#d9ddfe] border w-[242.21px] h-[61.58px] absolute left-[770px] top-[3562px] p-[10px]"
            onChange={handleChange}
            value={formData.firstName}
            placeholder="First name"
          />
        </div>
      </div>

      <div className="w-[242.21px] h-[61.58px] static">
        <div>
          <input
            type="text"
            name="lasstName"
            className="bg-[#ffffff] rounded-[15px] border-solid border-[#d9ddfe] border w-[242.21px] h-[61.58px] absolute left-[1047.79px] top-[3562px] p-[10px]"
            onChange={handleChange}
            value={formData.lastName}
            placeholder="Last name"
          />
        </div>
      </div>

      <div className="w-[520px] h-[61.58px] static">
        <div>
          <input
            type="text"
            name="emailAddress"
            className="bg-[#ffffff] rounded-[15px] border-solid border-[#d9ddfe] border w-[520px] h-[61.58px] absolute left-[770px] top-[3661.89px] p-[10px]"
            onChange={handleChange}
            value={formData.emailAddress}
            placeholder="Email address"
          />
        </div>
      </div>

      <div className="w-[520px] h-[61.58px] static">
        <div>
          <input
            type="text"
            name="subjectMessage"
            className="bg-[#ffffff] rounded-[15px] border-solid border-[#d9ddfe] border w-[520px] h-[61.58px] absolute left-[770px] top-[3761.79px] p-[10px]"
            onChange={handleChange}
            value={formData.subjectMessage}
            placeholder="Subject message"
          />
        </div>
      </div>

      <div className="w-[520px] h-[239.47px] static">
        <div>
          {/* <input
            type="text"
            name="yourInquiry"
            className="your-inquiry-here"
            onChange={handleChange}
            value={formData.yourInquiry}
            placeholder="Your inquiry here"
          /> */}
          <textarea
            className="bg-[#ffffff] rounded-[15px] border-solid border-[#d9ddfe] border w-[520px] h-[239.47px] absolute left-[770px] top-[3861.68px] resize-none p-[10px]"
            name="yourInquiry"
            placeholder="Your inquiry here"
          ></textarea>
        </div>
      </div>

      <div className="w-[248px] h-[58px] static">
        <button type="submit">
          <div
            className="bg-[#ff64ae] rounded-[50px] w-[248px] h-[58px] absolute left-[771px] top-[4156px]"
            style={{ boxShadow: "0px 17px 22px 0px rgba(255, 237, 246, 1.00)" }}
          ></div>
          <div className="text-[#ffffff] text-center text-base font-semibold absolute left-[808px] top-[4171px] w-[173px] h-[27px]">
            Send Message{" "}
          </div>
        </button>
      </div>
    </form>
  );
};

export default SiteFormContactUs;
