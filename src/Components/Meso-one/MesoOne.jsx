import React from 'react';
import image1 from "../../assets/Group 35567.png";
import image2 from "../../assets/Group 35579.png";

function MesoOne() {
  return (
    <div style={{ backgroundColor: "#F8F2E9" }} className="flex justify-center">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col lg:flex-row  items-center justify-between">
          {/* Left column - text content */}
          <div className="w-[55%]">
            <h1 className="text-[#4B2C5E] font-georgia text-[80px] italic font-normal leading-tight">
              Standing with Families Affected by Mesothelioma
            </h1>
            <p className="text-xl text-[#4B2C5E] mb-8 mt-6 leading-relaxed">
              We connect individuals and families impacted by mesothelioma or asbestos exposure with the nation's most trusted legal services, ensuring you secure the justice and support you rightfully deserve.
            </p>
            <div className="w-[799px] h-[228px] flex justify-end ml-auto ml-[-15%]">
              <div>
                <p class="text-[#4B2C5E] font-georgia text-[32px] italic font-normal leading-normal tracking-[0.32px] absolute z-index mt-[2%] ml-[22%] underline decoration-solid decoration-auto underline-offset-auto underline-auto">
                  We’re Here for You!
                </p>
                <p class="text-[#4B2C5E] font-helvetica text-xl font-normal not-italic leading-normal w-[352px] absolute z-index mt-[6%] ml-[22%]">
                  Let’s discuss your legal options.
                  We’ll support you every step of the way.
                </p>
                <button class="inline-flex absolute z-index mt-[11%] ml-[22%] px-[24px] py-[18px] justify-center items-center rounded-[20px] bg-[#2E4A7D] text-[#F5E7DA] font-helvetica text-xl font-bold not-italic leading-normal">
                Reach Out Today
                </button>
              </div>
              <img
                src={image2}
                className="w-full h-[250px] object-contain"
                alt="Mesothelioma illustration"
              />
            </div>
          </div>

          {/* Right column - image */}
          <div className="w-[45%] flex justify-center lg:justify-end lg:ml-16">
            <img
              src={image1}
              className="max-w-full h-auto lg:max-w-[90%] xl:max-w-full"
              alt="Mesothelioma illustration"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default MesoOne;