import React from 'react'

function MesothThree() {
    return (
        <div style={{ backgroundColor: "#F8F2E9", minHeight: "150vh" }} className="w-full">
            <hr class="w-[845px] h-[1px] bg-[rgba(75,44,94,0.55)] ml-64"></hr>
            <p class="text-[#4B2C5E] text-center font-georgia italic text-[64px] font-normal leading-normal underline decoration-solid decoration-custom-purple decoration-[3%] underline-offset-[14%] underline-from-font [text-decoration-skip-ink:none] [font-feature-settings:'dlig'on]">
                Common Causes
            </p>
            <div className="flex justify-center w-full">

                <div className="w-[1014px] left-[270px] absolute inline-flex justify-center items-center gap-3 flex-wrap content-center">
                    <div class="flex px-6 py-2 justify-center items-center gap-[10px] rounded-[60px] border border-[rgba(75,44,94,0.70)] bg-white bg-opacity-40 text-[#4B2C5E] [font-feature-settings:'dlig'on] font-helvetica text-2xl font-normal leading-normal">
                        Asbestos Exposure
                    </div>
                    <div class="flex px-6 py-2 justify-center items-center gap-[10px] rounded-[60px] border border-[rgba(75,44,94,0.70)] bg-white bg-opacity-40 text-[#4B2C5E] [font-feature-settings:'dlig'on] font-helvetica text-2xl font-normal leading-normal">

                        <div className="justify-start text-gray-700 text-2xl font-normal font-['Helvetica']">Environmental Exposure from Air or Soil</div>
                    </div>
                    <div class="flex px-6 py-2 justify-center items-center gap-[10px] rounded-[60px] border border-[rgba(75,44,94,0.70)] bg-white bg-opacity-40 text-[#4B2C5E] [font-feature-settings:'dlig'on] font-helvetica text-2xl font-normal leading-normal">

                        <div className="justify-start text-gray-700 text-2xl font-normal font-['Helvetica'] capitalize">Contaminated clothing</div>
                    </div>
                    <div class="flex px-6 py-2 justify-center items-center gap-[10px] rounded-[60px] border border-[rgba(75,44,94,0.70)] bg-white bg-opacity-40 text-[#4B2C5E] [font-feature-settings:'dlig'on] font-helvetica text-2xl font-normal leading-normal">

                        <div className="justify-start text-gray-700 text-2xl font-normal font-['Helvetica'] capitalize">Contaminated talc products</div>
                    </div>
                </div>

                <div className="w-[1280px] h-96 left-[80px] mt-64 absolute bg-white rounded-[20px] overflow-hidden" >
                    <div className="left-[40px] top-[80px] absolute justify-start text-blue-900 text-6xl italic font-bold font-serif">Important:</div>
                    <div className="w-[1025px] left-[40px] top-[193px] absolute justify-start text-blue-900 text-3xl font-normal font-['Helvetica']">If you have been exposed to asbestos or experience any of these symptoms, please consult a medical professional immediately for proper diagnosis and treatment.</div>
                </div>
                <div className="w-[1377px] h-72 left-[80px] mt-[50%] absolute rounded-[20px] outline outline-[5px] outline-offset-[-5px] outline-amber-100 overflow-hidden">
                    <div className="w-[1167px] left-[100px] top-[70px] absolute justify-start"><span className="text-blue-900 text-4xl font-normal font-serif">A mesothelioma diagnosis</span><span className="text-blue-900 text-5xl font-normal font-['Helvetica']"> </span><span className="text-gray-700 text-3xl font-normal font-['Helvetica']">comes with overwhelming financial burdens. The costs associated with hospital visits, surgeries, chemotherapy, and other treatments can quickly add up. Many victims are also unable to work due to their illness, leading to lost wages that further strain their families.</span></div>
                    <div className="w-44 h-0 left-[60px] top-[53px] absolute origin-top-left rotate-90 outline outline-[5px] outline-offset-[-2.50px] outline-amber-100"></div>
                </div>

            </div>
        </div>
    )
}

export default MesothThree