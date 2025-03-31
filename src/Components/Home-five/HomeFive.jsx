import React from 'react'
import image1 from "../../assets/images/cardImg1.svg";
import image2 from "../../assets/Frame 102.png"
import image3 from "../../assets/Frame 103.png"
// import image2 from "../../assets/images/cardImg2.png";
// import image3 from "../../assets/images/cardImg3.svg";
// import image4 from "../../assets/images/cardImg4.svg";
// import cardHeart from "../../assets/Frame 68.png";

function HomeFive() {
    return (
        <div className="flex flex-col gap-3 p-[5%] bg-[#F5E7DA80] font-halvett font-bold">
            {/* First Row */}
            <div className="flex justify-between gap-5">
                <div className="flex-1 bg-white p-8 rounded-xl shadow-lg text-center transition-transform duration-300 hover:-translate-y-1 flex flex-col justify-center items-center">
                    <p
                        className="text-[24px] text-[#2E4A7D] font-helvetica font-normal leading-none"
                        style={{ fontFeatureSettings: "'dlig' on", fontStyle: 'normal' }}
                    >
                        Average compensation
                    </p>
                    <h2
                        className="text-[48px] text-[#2E4A7D] mt-0 font-helvetica font-bold leading-tight"
                        style={{ fontFeatureSettings: "'dlig' on", fontStyle: 'normal' }}
                    >
                        $1M to $2M
                    </h2>
                </div>


                <div className="flex-1 bg-white p-8 rounded-xl shadow-lg text-center transition-transform duration-300 hover:-translate-y-1 flex flex-col justify-center items-center">
                    <p
                        className="text-[24px] text-[#2E4A7D] font-helvetica font-normal leading-none mt-5"
                        style={{ fontFeatureSettings: "'dlig' on", fontStyle: 'normal' }}
                    >Asbestos trust funds hold</p>
                    <h2
                        className="text-[48px] text-[#2E4A7D] mt-0 font-helvetica font-bold leading-tight"
                        style={{ fontFeatureSettings: "'dlig' on", fontStyle: 'normal' }}
                    >$30 Billion,</h2>
                    <p
                        className="text-[24px] text-[#2E4A7D] font-helvetica font-normal leading-none"
                        style={{ fontFeatureSettings: "'dlig' on", fontStyle: 'normal' }}
                    >as of 2025</p>
                </div>


                <div className="flex-1 bg-white p-8 rounded-xl shadow-lg text-center transition-transform duration-300 hover:-translate-y-1 flex flex-col justify-center items-center">
                    <div className="flex items-baseline justify-center">
                        <span
                            className="text-[24px] text-[#2E4A7D] font-helvetica font-normal leading-none mr-2"
                            style={{ fontFeatureSettings: "'dlig' on", fontStyle: 'normal' }}
                        >
                            Each year
                        </span>
                        <span
                            className="text-[48px] text-[#2E4A7D] font-helvetica font-bold leading-tight"
                            style={{ fontFeatureSettings: "'dlig' on", fontStyle: 'normal' }}
                        >
                            2,000 +
                        </span>
                    </div>
                    <p
                        className="text-[24px] text-[#2E4A7D] font-helvetica font-normal leading-none mt-2"
                        style={{ fontFeatureSettings: "'dlig' on", fontStyle: 'normal' }}
                    >
                        people receive compensation
                    </p>
                </div>
            </div>

            {/* Second Row */}
            <div className="flex justify-between mt-[1%] gap-0">
            <div>
                <img src={image3} alt="" className="h-[50px] w-[150px] object-contain absolute z-10 mt-[8%] ml-[63%]"/>
            </div>
                {/* Image 1 */}
                <div className=" overflow-hidden flex items-center justify-center gap-0">
                    <img
                        src={image2}
                        alt=""
                        className="max-h-full max-w-full object-contain"
                    />

                </div>
           
            </div>
        </div>
    );
}

export default HomeFive