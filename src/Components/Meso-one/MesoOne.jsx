import React from 'react';
import image1 from "../../assets/Group 35579 (1).png";
// import image1 from "../../assets/Group 35567.png";
import image2 from "../../assets/Group 35579.png";
import image3 from "../../assets/Group 35636.png";

function MesoOne() {
  return (
    <div style={{ backgroundColor: "#FAF3EC" }} className="flex justify-center">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col items-center py-8">
          <h1 className="text-[#4B2C5E] font-georgia text-4xl md:text-5xl italic font-normal leading-tight text-left">
            Standing with Families Affected by Mesothelioma
          </h1>
          <p className="text-lg text-[#4B2C5E] my-6 leading-relaxed text-left">
            We connect individuals and families impacted by mesothelioma or asbestos exposure with the <b>nation's most trusted legal services.</b> ensuring you secure the <b>justice and support you rightfully deserve</b> .
          </p>

          <div className="relative w-[395px] h-[200px] max-w-lg mt-6">
           
            <img
              src={image3}
              className="w-full"
              alt="Support illustration"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center ml-[30%]">
              {/* <p className="text-[#4B2C5E] font-georgia text-xl italic font-normal underline mb-2">
                We're Here for You!
              </p>
              <p className="text-[#4B2C5E] font-helvetica text-sm mb-4 leading-none">
                Let's discuss your legal options. We'll support you every step of the way.
              </p> */}
              <button className="px-3 py-2 rounded-2xl bg-[#2E4A7D] text-[#F5E7DA] font-helvetica text-lg font-semibold mt-10 ml-[-10%]">
                Reach Out Today
              </button>
            </div>
          </div>
          <div className="w-full flex justify-center mt-6">
            <img
              src={image1}
              className="w-full max-w-md"
              alt="Mesothelioma illustration"
            />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-col lg:flex-row items-center justify-between py-12">
          {/* Left column - text content */}
          <div className="w-full lg:w-[69%]"> {/* Added lg:pr-16 for right padding */}
            <h1 className="text-[#4B2C5E] font-georgia text-[80px] italic font-normal leading-tight">
              Standing with Families Affected by Mesothelioma
            </h1>
            <p className="text-xl text-[#4B2C5E] mb-8 mt-6 leading-relaxed">
              We connect individuals and families impacted by mesothelioma or asbestos exposure with the <b>nation's most trusted legal services.</b> ensuring you secure the <b>justice and support you rightfully deserve</b> .
            </p>
            <div className="w-[799px] h-[238px] flex justify-end ml-auto ml-[-15%]">
              <div>
                <p className="text-[#4B2C5E] font-georgia text-[32px] italic font-normal leading-normal tracking-[0.32px] absolute z-index mt-[2%] ml-[22%] underline">
                  We're Here for You!
                </p>
                <p className="text-[#4B2C5E] font-helvetica text-xl font-normal not-italic leading-normal w-[352px] absolute z-index mt-[6%] ml-[22%]">
                  Let's discuss your legal options.
                  We'll support you every step of the way.
                </p>
                <button className="inline-flex absolute z-index mt-[11%] ml-[22%] px-[20px] py-[10px] justify-center items-center rounded-[20px] bg-[#2E4A7D] text-[#F5E7DA] font-helvetica text-xl font-semibold not-italic leading-normal">
                  Reach Out Today
                </button>
              </div>
              <img
                src={image2}
                className="w-full h-[230px] object-contain"
                alt="Mesothelioma illustration"
              />
            </div>
          </div>

          {/* Right column - image */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
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