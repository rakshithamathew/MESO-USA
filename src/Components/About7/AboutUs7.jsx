import React from "react";
import Img1 from '../../assets/meso-eight-img.svg'
import Img2 from '../../assets/meso-eight-img2.svg'

const AboutUs7 = () => {
    return (
        <div className="w-full relative bg-[#faf3ec] h-screen flex items-center justify-center overflow-hidden text-left text-[20px] text-[#4b2c5e] font-helvetica">
            <div className="w-[1207px] relative h-[545px] text-[96px] font-georgia">
                <div className="relative w-[1014px] h-[520px] mx-auto">
                    <div className="relative w-[1135px] h-[200px]">
                        <img className="absolute left-[-130px] top-[calc(55%-160px)] left-0 w-[255.5px] h-[320px]" alt="" src={Img1} />
                        <i className="relative inline-block w-full text-center top-[110px] text-[96px] left-[100px]">
                            <span className="font-['Georgia'] italic">{`Let's Act Together!`}</span>
                        </i>
                    </div>
                    <div className="relative w-[796px] h-[200px] left-[300px] top-[100px] font-['Helvetica'] text-[24px] text-[#4b2c5e] text-left inline-block">
                        <span>{`If you or a family member has been diagnosed with mesothelioma, we are here to support you. Whether you seek legal guidance or vital prevention resources, `}</span>
                        <b>Fight for Mesothelioma</b>
                        <span> is dedicated to advocating for your rights and making a meaningful impact.</span>
                        <button className="relative top-[20px] w-[250px] rounded-[20px] bg-[#4b2c5e] overflow-hidden flex flex-row items-center justify-center p-[24px_40px] box-border text-left text-[32px] text-[#f8f2e9] font-helvetica">
                            <b className="relative">Claim Now</b>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs7;