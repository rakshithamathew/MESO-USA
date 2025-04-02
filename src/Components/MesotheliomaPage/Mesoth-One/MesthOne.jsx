import React from 'react';
import image1 from "../../../assets/Frame 96.png";
import image2 from "../../../assets/Frame 96 (2).png";

function MesthOne() {
    return (
        <div className='mb-10'>
            <div style={{ backgroundColor: "#F8F2E9" }} className="flex justify-center">
                <div className="mx-auto w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        {/* <div className='w-[140%]'> */}
                        {/* <div className="lg:w-[60%] mt-32 mb-16 ml-16 w-[90%] sm:w-[80%]"> */}
                        <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] mt-14 sm:mt-16 ml-0 sm:ml-16 mb-16">


                            {/* <h1 className="text-[#4B2C5E] font-georgia text-[60px] sm:text-[50px] md:text-[70px] sm:text-[40px] italic font-normal leading-tight">
                                Mesothelioma <br /> Resources and Support
                            </h1> */}

                            <h1 className="text-[#4B2C5E] font-georgia text-[50px] sm:text-[40px] md:text-[70px] italic font-normal leading-tight">

                                Mesothelioma <br /> Resources and Support
                            </h1>

                            <div className="flex relative mt-4 w-full sm:w-[100%] md:w-[80%] lg:w-[800px]">
                                <div className="w-full relative rounded-[20px] bg-white h-[356px] overflow-hidden text-left text-[20px] sm:text-[16px] lg:text-[40px] text-[#4b2c5e] font-helvetica">
                                    <i className="absolute top-[30px] left-[50%] transform -translate-x-[50%] underline font-georgia text-left w-[90%]">
                                        Get the Facts You Need
                                    </i>
                                    <div className="absolute top-[103px] left-[50%] transform -translate-x-[50%] text-[14px] sm:text-[12px] md:text-[16px] inline-block w-[90%] lg:w-[725px]">
                                        <span>{`Mesothelioma is a `}</span>
                                        <b>rare but aggressive form of cancer</b>
                                        <span>
                                            {" "}
                                            linked to prolonged exposure to asbestos, a toxic mineral once widely
                                            used in construction and manufacturing. Often diagnosed decades after
                                            initial exposure, mesothelioma is a rare cancer that affects the
                                        </span>
                                        <b> protective linings of the lungs, abdomen, or heart.</b>
                                    </div>
                                    {/* <div className="absolute top-[calc(50%+59px)] left-[50%] transform -translate-x-[50%] rounded-[20px] bg-[#2e4a7d] flex flex-row items-center justify-center py-[24px] px-[40px] text-[16px] sm:text-[14px] lg:text-[24px] text-[#f5e7da]">
                                        <b className="relative">Get a Free Case Evaluation</b>
                                    </div> */}
                                    <div className="md:block hidden absolute top-[300px] sm:top-[calc(50%+59px)] left-[30%] transform -translate-x-[50%] rounded-[20px] bg-[#2e4a7d] flex flex-row items-center justify-center w-[300px] text-[16px] p-2 sm:text-[14px] lg:text-[24px] text-[#f5e7da] left-[30%] sm:w-[50%]">


                                        <button
                                            className="w-full h-full relative focus:outline-none"
                                            onClick={() => window.location.href = '/contact'}
                                        >
                                            <b className="relative">Get a Free Case Evaluation</b>
                                        </button>
                                    </div>

                                    <div className="block md:hidden absolute top-[300px] sm:top-[calc(50%+59px)] left-[50%] transform -translate-x-[50%] rounded-[20px] bg-[#2e4a7d] flex flex-row items-center justify-center w-[300px] text-[16px] p-2 sm:text-[14px] lg:text-[24px] text-[#f5e7da] left-[30%] sm:w-[90%]">


                                        <button
                                            className="w-full h-full relative focus:outline-none"
                                            onClick={() => window.location.href = '/contact'}
                                        >
                                            <b className="relative">Get a Free Case Evaluation</b>
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>



                        <div className="w-full lg:w-[32%] flex justify-end pr-0 ">
                            {/* <img
                                src={image1}
                                className="max-w-full h-auto object-cover lg:object-contain lg:mr-0"
                                alt="Mesothelioma illustration"
                            /> */}
                            <img
                                src={image1}
                                className="max-w-full h-auto object-cover lg:object-contain lg:mr-0 relative lg:left-0 lg:pb-0 sm:left-[37px] sm:pb-[40px]"
                                alt="Mesothelioma illustration"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MesthOne;