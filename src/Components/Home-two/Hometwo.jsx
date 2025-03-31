import React from "react";
import Vector2 from "../../assets/Vector2.png"; // Replace with actual image path
import Vector1 from "../../assets/Vector1.png"; // Replace with actual image path

const Hometwo = () => {
  return (
    <div className="bg-[#FAF3EC] font-georgia m-0 p-0 ">
      <div className="w-[1440px] h-[1200px] flex-shrink-0 ">
        <div className="absolute mt-32">
          <img
            src={Vector2}
            alt="Senior Couple"
            className="w-[358px] h-[364px] ml-[26%] mt-[10%]"
          />
          <img
            src={Vector1}
            alt="Family"
            className="w-[299.867px] h-[204.291px] flex-shrink-0 absolute ml-[80%] mt-[15%] transform rotate-[1.701deg]"
          />
        </div>
        <div className="flex flex-col items-center text-center">

          <div className="mt-[15%] ml-[30%] text-[#4B2C5E] font-feature-dlig font-georgia text-[96px] italic font-normal leading-normal">
            <h1 className="mt-32 text-justify text-[96px]">
              <span className="italic  font-georgia">At 70,</span><br />
              <span className="text-[#4B2C5E]/60 italic font-georgia">Everyday</span>
              <span className="text-[#4B2C5E]/60 italic font-georgia"> Matters</span>
            </h1>
            <p className="text-[#4B2C5E] font-helvetica text-[24px] font-normal  w-[660px] ml-[7%] mt-[6%] text-left">
              You've earned the right to comfort, clarity, and dignity. Whether it's understanding
              your options or easing the stress,
            </p>
          </div>
        </div>

        <div className="p-[30px] rounded-[10px] mt-[0.5%] ml-[42%] w-[817px] h-[545px] text-center shadow-[0_4px_8px_rgba(0,0,0,0.1)] rounded-[20px] bg-white">
          <p className="text-[#4B2C5E] font-feature-dlig font-georgia text-[32px] italic font-normal leading-none w-[579px] text-left">
            <em>We're here to walk beside you every step of the way not just as professionals, but as people who care.</em>
          </p>
          <div className="flex mt-16">
            <div className="flex-1">
              <label className="text-[#4B2C5E] font-feature-dlig font-helvetica text-[24px] font-bold leading-normal  text-left block mb-[8px] w-[285.934px]">
                First Name
              </label>
              <input
                type="text"
                className="border-0 rounded-none text-[#4B2C5E] font-feature-dlig font-helvetica text-[2px] font-bold leading-normal ml-[-10%] w-[78%] my-[8%] mx-[7%] h-[0.2px] bg-[rgba(75,44,94,0.56)]"
              />
              <label className="text-[#4B2C5E] font-feature-dlig font-helvetica text-[24px] font-bold leading-normal  text-left block mb-[8px] w-[285.934px]">
                Phone Number
              </label>
              <input
                type="text"
                className="border-0 rounded-none text-[#4B2C5E] font-feature-dlig font-helvetica text-[2px] font-bold leading-normal w-[78%] ml-[-10%] my-[8%] mx-[7%] h-[0.2px] bg-[rgba(75,44,94,0.56)]"
              />
            </div>

            <div className="flex-1">
              <label className="text-[#4B2C5E] font-feature-dlig font-helvetica text-[24px] font-bold leading-normal text-left block mb-[8px] w-[285.934px]">
                Last Name
              </label>
              <input
                type="text"
                className="border-0 rounded-none text-[#4B2C5E] font-feature-dlig font-helvetica text-[2px] font-bold leading-normal w-[78%] ml-[-15%] my-[8%] mx-[7%] h-[0.2px] bg-[rgba(75,44,94,0.56)]"
              />
              <label className="text-[#4B2C5E] font-feature-dlig font-helvetica text-[24px] font-bold leading-normal  text-left block mb-[8px] w-[285.934px]">
                Email ID
              </label>
              <input
                type="email"
                className="border-0 rounded-none text-[#4B2C5E] font-feature-dlig font-helvetica text-[2px] font-bold leading-normal ml-[-15%] w-[78%] my-[8%] mx-[7%] h-[0.2px] bg-[rgba(75,44,94,0.56)]"
              />
            </div>
          </div>
          <button className="inline-flex h-[71px] px-[24px] justify-center items-center gap-[10px] flex-shrink-0 rounded-[20px] bg-[#2E4A7D] text-[#F8F2E9] font-feature-dlig font-helvetica text-[20px] font-bold leading-normal ml-[-76%] border-none hover:bg-[#374A67]">
            Begin Here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hometwo;