import React from 'react'

function MesothThree() {
    return (
        <div style={{ backgroundColor: "#FAF3EC" }} className="w-full px-4 md:px-8 lg:px-16 py-12 mt-[-2%] relative">
            <hr className="w-full max-w-[845px] h-[1px] bg-[rgba(75,44,94,0.55)] mx-auto"></hr>
            <p className="text-[#4B2C5E] text-center font-georgia italic text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-normal leading-normal underline decoration-solid decoration-[rgba(75,44,94,0.55)] decoration-[3%] underline-offset-[14%] underline-from-font [text-decoration-skip-ink:none] [font-feature-settings:'dlig'on] decoration-opacity-70 my-6 md:my-8 lg:my-10">
                Common Causes
            </p>
            <div className="flex flex-col items-center w-full">
                {/* Common Causes Tags */}
                <div className="w-full max-w-[1014px] flex flex-wrap justify-center gap-3 mb-16 md:mb-24 lg:mb-32">
                    <div className="flex px-4 md:px-6 py-2 justify-center items-center gap-[10px] rounded-[60px] border border-[rgba(75,44,94,0.70)] bg-white bg-opacity-40 text-[#4B2C5E] [font-feature-settings:'dlig'on] font-helvetica text-lg md:text-xl lg:text-2xl font-normal leading-normal">
                        Asbestos Exposure
                    </div>
                    <div className="flex px-4 md:px-6 py-2 justify-center items-center gap-[10px] rounded-[60px] border border-[rgba(75,44,94,0.70)] bg-white bg-opacity-40 text-[#4B2C5E] [font-feature-settings:'dlig'on] font-helvetica text-lg md:text-xl lg:text-2xl font-normal leading-normal">
                        <div className="justify-start text-gray-700 text-lg md:text-xl lg:text-2xl font-normal font-['Helvetica']">Environmental Exposure from Air or Soil</div>
                    </div>
                    <div className="flex px-4 md:px-6 py-2 justify-center items-center gap-[10px] rounded-[60px] border border-[rgba(75,44,94,0.70)] bg-white bg-opacity-40 text-[#4B2C5E] [font-feature-settings:'dlig'on] font-helvetica text-lg md:text-xl lg:text-2xl font-normal leading-normal">
                        <div className="justify-start text-gray-700 text-lg md:text-xl lg:text-2xl font-normal font-['Helvetica'] capitalize">Contaminated clothing</div>
                    </div>
                    <div className="flex px-4 md:px-6 py-2 justify-center items-center gap-[10px] rounded-[60px] border border-[rgba(75,44,94,0.70)] bg-white bg-opacity-40 text-[#4B2C5E] [font-feature-settings:'dlig'on] font-helvetica text-lg md:text-xl lg:text-2xl font-normal leading-normal">
                        <div className="justify-start text-gray-700 text-lg md:text-xl lg:text-2xl font-normal font-['Helvetica'] capitalize">Contaminated talc products</div>
                    </div>
                </div>

                {/* Important Box */}
                <div className="w-full max-w-[1280px] bg-white rounded-[20px] overflow-hidden p-6 md:p-10 mb-16 md:mb-24 lg:mb-32">
                    <div className="text-blue-900 text-3xl md:text-4xl lg:text-5xl xl:text-6xl italic font-bold font-serif mb-6 md:mb-10">Important:</div>
                    <div className="text-blue-900 text-xl md:text-2xl lg:text-3xl font-normal font-['Helvetica']">If you have been exposed to asbestos or experience any of these symptoms, please consult a medical professional immediately for proper diagnosis and treatment.</div>
                </div>

                {/* Diagnosis Box */}
                <div className="w-full max-w-[1377px] rounded-[20px] outline outline-[5px] outline-offset-[-5px] outline-amber-100 overflow-hidden p-6 md:p-10 relative">
                    {/* <div className="hidden md:block w-20 lg:w-44 h-0 absolute left-6 top-[53px] origin-top-left rotate-90 outline outline-[5px] outline-offset-[-2.50px] outline-amber-100"></div> */}
                    <div className="hidden md:block w-20 lg:w-32 h-0 absolute left-6 lg:left-[50px] top-[53px] origin-top-left rotate-90 outline outline-[5px] outline-offset-[-2.5px] outline-amber-100"></div>

                    <div className="md:ml-12">
                        <span className="text-blue-900 text-2xl md:text-3xl lg:text-4xl font-normal font-serif">A mesothelioma diagnosis</span>
                        <span className="text-blue-900 text-2xl md:text-3xl lg:text-5xl font-normal font-['Helvetica']"> </span>
                        <span className="text-gray-700 text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal font-['Helvetica']">comes with overwhelming financial burdens. The costs associated with hospital visits, surgeries, chemotherapy, and other treatments can quickly add up. Many victims are also unable to work due to their illness, leading to lost wages that further strain their families.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MesothThree