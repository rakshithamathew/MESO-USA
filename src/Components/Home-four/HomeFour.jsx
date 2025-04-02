import React from 'react';
import leftSvg from "../../assets/images/left.svg";
import rightSvg from "../../assets/images/left.svg";
import Frame from "../../assets/Frame 87.png";

function HomeFour() {
    return (
        <>
            {/* Desktop Version */}
            <div className="hidden md:block mt-[84%]">
                <div className="flex justify-center items-center h-[50vh] bg-[#FAF3EC]">
                    <div className="flex items-center text-center max-w-[1400px] p-10 relative">
                        <img src={leftSvg} alt="left" className="w-full h-full absolute z-10 ml-[-10%]" />
                        <p className="text-[#2E4A7D] text-center font-georgia italic font-bold text-[32px] leading-normal [font-feature-settings:'dlig'_on] px-10">
                            Decades ago, asbestos was everywhere on job sites, in homes, even in
                            military uniforms. No one knew the dangers. No one said it could
                            remain in the body for years, silently causing harm.
                        </p>
                        <img src={rightSvg} alt="right" className="w-full h-full absolute z-10 ml-16" />
                    </div>
                </div>
                <div className='bg-[#FAF3EC] py-16'>
                    <div className="flex items-center max-w-6xl mx-auto">
                        <div className="w-1/2">
                            <img src={Frame} alt="right" className="w-[393px] h-[563px] object-cover" />
                        </div>
                        <div className="w-2/3 pl-12 mt-64">
                            <h1 className="text-[#4B2C5E] [font-feature-settings:'dlig'_on] font-georgia italic font-normal text-[80px] leading-none">
                                <div>What is</div>
                                <div>Mesothelioma?</div>
                            </h1>
                            <p className="text-[#4B2C5E] [font-feature-settings:'dlig'_on] font-helvetica text-[24px] leading-normal mt-6 max-w-[600px]">
                                <span className="font-bold">Mesothelioma </span> is a rare and aggressive cancer caused by <span className="font-bold">asbestos exposure</span>,
                                affecting the lungs, abdomen, or heart. It can take decades to develop, but once diagnosed,
                                it progresses quickly. Legal options may help secure compensation and justice.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Version */}
            <div className="block md:hidden bg-[#FAF3EC] mt-[-20%]">
                {/* Quote Section */}
                <div className="flex justify-center items-center h-[50vh] bg-[#FAF3EC]">
                    <div className="flex items-center text-center max-w-[1400px] p-10 relative">
                        <img src={leftSvg} alt="left" className="w-[153px] h-[224px] absolute z-10 ml-[16%]" />
                        <p className="text-[#2E4A7D] text-center font-georgia italic font-bold text-[17px] p-5 leading-normal [font-feature-settings:'dlig'_on] px-10 w-[498px]">
                            Decades ago, asbestos was everywhere on job sites, in homes, even in
                            military uniforms. No one knew the dangers. No one said it could
                            remain in the body for years, silently causing harm.
                        </p>
                        <img src={rightSvg} alt="right" className="w-[153px] h-[224px] absolute z-10 ml-[45%]" />
                    </div>
                </div>

                {/* Content Section */}
                <div className="px-6 pb-12">
                    <div className="flex flex-col ">
                        <img
                            src={Frame}
                            alt="Mesothelioma"
                            className="w-full max-w-[300px] h-auto mb-8"
                        />
                        <div className="text-center">
                            <h1 className="text-[#4B2C5E] [font-feature-settings:'dlig'_on] font-georgia italic font-normal text-4xl leading-tight mb-4 text-left">
                                What is<br />Mesothelioma?
                            </h1>
                            <p className="text-[#4B2C5E] [font-feature-settings:'dlig'_on] font-helvetica text-base leading-normal text-left">
                                <span className="font-bold">Mesothelioma </span> is a rare and aggressive cancer caused by <span className="font-bold">asbestos exposure</span>,
                                affecting the lungs, abdomen, or heart. It can take decades to develop, but once diagnosed,
                                it progresses quickly. Legal options may help secure compensation and justice.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeFour;