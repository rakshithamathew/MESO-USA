import React from 'react'
import leftSvg from "../../assets/images/left.svg";
import rightSvg from "../../assets/images/left.svg";
import Frame from "../../assets/Frame 87.png";

function HomeFour() {
    return (
        <div>
            <div className="flex justify-center items-center h-[50vh] bg-[#FAF3EC] mt-[84%]">
                <div className="flex items-center text-center max-w-[800px] p-10">
                    <img src={leftSvg} alt="left" className="w-full h-full" />
                    <p className="absolute w-[1117px] text-[#2E4A7D] text-center font-georgia italic font-bold text-[32px] leading-normal [font-feature-settings:'dlig'_on] ml-[-29%]">
                        Decades ago, asbestos was everywhere on job sites, in homes, even in
                        military uniforms. No one knew the dangers. No one said it could
                        remain in the body for years, silently causing harm.
                    </p>
                    <img src={rightSvg} alt="right" className=" ml-5 w-full h-full" />
                </div>
            </div>
            <div className='bg-[#FAF3EC]'>
                <div className="mt-0 flex items-center">
                    <div className="w-1/3 ml-[16%]">
                        <img src={Frame} alt="right" className="w-[393px] h-[563px]" />
                    </div>
                    <div className="w-1/2 pl-8 ml-[-6%] mt-[15%]">
                        <h1 className="text-[#4B2C5E] text-center [font-feature-settings:'dlig'_on] font-georgia italic font-normal text-[80px] leading-none w-[573.204px] text-left">
                            <div className='ml-[-48%]'>What is</div>
                            <div>Mesothelioma?</div>
                        </h1>
                        <p className="text-[#4B2C5E] [font-feature-settings:'dlig'_on] font-helvetica text-[24px] leading-normal ml-3 ">
                            <span className="font-bold">Mesothelioma </span> is a rare and aggressive cancer caused by <span className="font-bold">asbestos exposure</span>,
                            affecting the lungs, abdomen, or heart. It can take decades to develop, but once diagnosed,
                            it progresses quickly. Legal options may help secure compensation and justice.
                        </p> </div>
                </div>
            </div>
        </div>
    )
}

export default HomeFour
