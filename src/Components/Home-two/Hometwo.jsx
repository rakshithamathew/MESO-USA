

import React from "react";
import Vector2 from "../../assets/Vector2.png";
import Vector1 from "../../assets/Vector1.png";

const Hometwo = () => {
  return (
    <>
      {/* Desktop Version (unchanged) */}
      <div className="hidden md:block bg-[#FAF3EC] font-georgia m-0 p-0">
        {/* ... (keep all your existing desktop code) ... */}
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
            className="w-[299.867px] h-[204.291px] flex-shrink-0 absolute ml-[80%] mt-[15%] transform rotate-[1.701deg] hidden md:block"
          />
        </div>
        <div className="flex flex-col items-center text-center">

          <div className="mt-[15%] ml-[30%] text-[#4B2C5E] font-feature-dlig font-georgia text-[96px] italic font-normal leading-normal">
            <h1 className="mt-32 text-justify text-[96px]">
              <span className="italic  font-georgia">At 70,</span><br />
              <span className="text-[#4B2C5E]/60 italic font-georgia">Everyday</span>
              <span className="text-[#4B2C5E]/60 italic font-georgia"> Matters</span>
            </h1>
            <p className="text-[#4B2C5E] font-helvetica text-[24px] font-normal  w-[660px] h-auto ml-[7%] mt-[6%] text-left">
              You've earned the right to comfort, clarity, and dignity. Whether it's understanding
              your options or easing the stress,
            </p>
          </div>
        </div>

        <div className="p-[30px] rounded-[10px] mt-[0.5%] ml-[42%] w-[817px] h-[545px] text-center shadow-[0_4px_8px_rgba(0,0,0,0.1)] rounded-[20px] bg-white">
          <p className="text-[#4B2C5E] font-feature-dlig font-georgia text-[32px] italic font-normal leading-none w-[579px] text-left h-[100px]">
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
      </div>

      {/* Mobile Version - updated with proper alignment */}
      <div className="block md:hidden bg-[#FAF3EC] font-georgia p-5">
        {/* Images at the top */}
        <div className="flex flex-col items-center">
          <img
            src={Vector2}
            alt="Senior Couple"
            className="w-[70%] max-w-[280px] mt-8"
          />
          <img
            src={Vector1}
            alt="Family"
            className="w-[60%] max-w-[200px] mt-4 hidden md:block"
          />
        </div>

        {/* Text content below images */}
        <div className="mt-8 text-center">
          <h1 className="text-[#4B2C5E] text-4xl italic font-georgia">
            <span>At 70,</span><br />
            <span className="text-[#4B2C5E]/60">Everyday Matters</span>
          </h1>
          <p className="text-[#4B2C5E] font-helvetica text-lg mt-6 px-4 text-center">
            You've earned the right to comfort, clarity, and dignity. Whether it's understanding
            your options or easing the stress,
          </p>
        </div>

        {/* Form container - centered below text */}
        <div className="p-6 rounded-[20px] mt-8 bg-white shadow-md mx-auto max-w-[500px]">
          <p className="text-[#4B2C5E] font-georgia text-xl italic mb-6 text-center">
            <em>We’re here to walk beside you every step of the way not just as professionals, but as people who care.</em>
          </p>
          
          <div className="space-y-4">
            <div>
              <label className="text-[#4B2C5E] font-helvetica text-lg font-bold block mb-2">
                First Name
              </label>
              <input
                type="text"
                className="w-full p-3 bg-[rgba(75,44,94,0.1)] border border-[#4B2C5E]/30 rounded-lg"
              />
            </div>
            
            <div>
              <label className="text-[#4B2C5E] font-helvetica text-lg font-bold block mb-2">
                Last Name
              </label>
              <input
                type="text"
                className="w-full p-3 bg-[rgba(75,44,94,0.1)] border border-[#4B2C5E]/30 rounded-lg"
              />
            </div>
            
            <div>
              <label className="text-[#4B2C5E] font-helvetica text-lg font-bold block mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full p-3 bg-[rgba(75,44,94,0.1)] border border-[#4B2C5E]/30 rounded-lg"
              />
            </div>
            
            <div>
              <label className="text-[#4B2C5E] font-helvetica text-lg font-bold block mb-2">
                Email ID
              </label>
              <input
                type="email"
                className="w-full p-3 bg-[rgba(75,44,94,0.1)] border border-[#4B2C5E]/30 rounded-lg"
              />
            </div>
          </div>
          
          <button className="w-full py-4 mt-6 rounded-[20px] bg-[#2E4A7D] text-[#F8F2E9] font-helvetica text-lg font-bold hover:bg-[#374A67]">
            Begin Here
          </button>
        </div>
      </div>
    </>
  );
};

export default Hometwo;