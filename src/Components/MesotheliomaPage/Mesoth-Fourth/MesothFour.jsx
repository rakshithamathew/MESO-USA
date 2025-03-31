import React from 'react';
import image1 from '../../../assets/riskfactor1.png';
// import image1 from '../../../assets/Group 35609.png';
import image2 from '../../../assets/riskfactor2.png';
import image3 from '../../../assets/riskfactor3.png';
import image4 from '../../../assets/riskfactor4.png';

const MesothFourth = () => {
    return (
        <div className="flex flex-col items-center bg-[#f7ede3] ">
            <i className="w-[790px] relative text-[80px] inline-block font-[Georgia] text-[#4b2c5e] text-center">Understanding Mesothelioma</i>
            <div className="text-2xl text-center">
                Breaking down Mesothelioma
            </div>
            <div style={{
                width: "100%",
                height: "40px",
                backgroundColor: "white",
                margin: "20px 0"
            }}></div>
            <i class="text-[#4B2C5E] text-center font-georgia italic text-[64px] font-normal leading-normal underline decoration-solid decoration-[rgba(75,44,94,0.55)] decoration-[3%] underline-offset-[14%] underline-from-font [text-decoration-skip-ink:none] [font-feature-settings:'dlig'on] decoration-opacity-70">Common Symptoms</i>

            <div className="w-[1014px] flex flex-row items-center justify-center flex-wrap content-center gap-y-3 gap-x-5 text-2xl ">
                <div className="rounded-[60px] bg-white/40 border border-[#4b2c5e]/70 overflow-hidden flex flex-row items-center justify-center px-6 py-4">
                    <div className="relative">Persistent Chest Pain</div>
                </div>
                <div className="rounded-[60px] bg-white/40 border border-[#4b2c5e]/70 overflow-hidden flex flex-row items-center justify-center px-6 py-4">
                    <div className="relative">Chronic Cough</div>
                </div>
                <div className="rounded-[60px] bg-white/40 border border-[#4b2c5e]/70 overflow-hidden flex flex-row items-center justify-center px-6 py-4">
                    <div className="relative">Severe Bloating</div>
                </div>
                <div className="rounded-[60px] bg-white/40 border border-[#4b2c5e]/70 overflow-hidden flex flex-row items-center justify-center px-6 py-4">
                    <div className="relative">Abdominal Pain</div>
                </div>
                <div className="rounded-[60px] bg-white/40 border border-[#4b2c5e]/70 overflow-hidden flex flex-row items-center justify-center px-6 py-4">
                    <div className="relative">Unexplained Tiredness</div>
                </div>
                <div className="rounded-[60px] bg-white/40 border border-[#4b2c5e]/70 overflow-hidden flex flex-row items-center justify-center px-6 py-4">
                    <div className="relative">Swelling & Lumps in the Testicles</div>
                </div>
                <div className="rounded-[60px] bg-white/40 border border-[#4b2c5e]/70 overflow-hidden flex flex-row items-center justify-center px-6 py-4">
                    <div className="relative">Fluid Buildup</div>
                </div>
            </div>
            <div style={{
                width: "80%",
                position: "relative",
                borderTop: "3px solid rgba(75, 44, 94, 0.55)",
                boxSizing: "border-box",
                height: "1px",
                marginTop: "50px"
            }} />
            <i  class="text-[#4B2C5E] text-center font-georgia italic text-[64px] font-normal leading-normal underline decoration-solid decoration-[rgba(75,44,94,0.55)] decoration-[3%] underline-offset-[14%] underline-from-font [text-decoration-skip-ink:none] [font-feature-settings:'dlig'on] decoration-opacity-70">Risk Factors</i>

            <div className="grid grid-cols-2 gap-x-16 gap-y-2 mt-10 place-items-center max-w-4xl mx-auto p-0 mb-10">
                <div className="p-6 rounded-lg flex flex-col items-center w-[120%] pb-[0px]">
                    <img src={image1} alt="Risk Factor 1" className="w-100 h-48 object-cover rounded-lg mb-4" />
                </div>
                <div className="p-6 rounded-lg flex flex-col items-center w-[120%] pb-[0px]">
                    <img src={image2} alt="Risk Factor 2" className="w-100 h-48 object-cover rounded-lg mb-4" />
                </div>
                <div className="p-6 rounded-lg flex flex-col items-center w-[120%] pt-[0px]">
                    <img src={image3} alt="Risk Factor 3" className="w-100 h-48 object-cover rounded-lg mb-4" />
                </div>
                <div className="p-6 rounded-lg flex flex-col items-center w-[120%] pt-[0px]">
                    <img src={image4} alt="Risk Factor 4" className="w-100 h-48 object-cover rounded-lg mb-4" />
                </div>
            </div>
        </div>
    );
};

export default MesothFourth;
