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
                        <div className=" lg:w-[60%] mt-32 mb-16 ml-16 w-[40%]">
                            <h1 className="text-[#4B2C5E] font-georgia text-[80px] italic font-normal leading-tight">
                                Mesothelioma <br></br> Resources and Support
                            </h1>

                            <div className="flex relative mt-4 w-[800px]">
                                <img
                                    src={image2}
                                    className="w-full h-full object-cover"
                                    alt="Mesothelioma illustration"
                                />
                                <div className="absolute z-10 flex items-center justify-center">
                                    <p className="text-[#4B2C5E] font-helvetica text-[18px] font-medium leading-snug w-[700px] mt-[13%] ml-10"
                                        style={{ fontFeatureSettings: "'dlig' on", fontStyle: 'normal' }}>
                                        Mesothelioma is a <b>rare but aggressive form of cancer</b> linked to prolonged exposure to asbestos, a toxic mineral once widely used in construction and manufacturing. Often diagnosed decades after initial exposure, mesothelioma is a rare cancer that affects the <b>protective linings of the lungs, abdomen, or heart.</b>
                                    </p>
                                </div>
                            </div>
                            <button className="absolute z-10 mt-[-7%] ml-10 inline-flex py-[24px] px-[40px] justify-center items-center rounded-[20px] bg-[#2E4A7D] gap-[10px] text-[#F5E7DA] font-helvetica text-[24px] font-bold leading-normal"
                                style={{ fontFeatureSettings: "'dlig' on", fontStyle: 'normal' }}>
                                Get a Free Case Evaluation
                            </button>
                        </div>
                        {/* </div> */}


                        <div className="w-full lg:w-[32%] flex justify-end pr-0 ">
                            <img
                                src={image1}
                                className="max-w-full h-auto object-cover lg:object-contain lg:mr-0"
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