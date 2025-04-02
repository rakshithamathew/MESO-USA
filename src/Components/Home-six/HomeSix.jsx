/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
// import how from "../../assets/how we help.png"
// import how2 from "../../assets/Frame 109 (1).png"

import how from "../../assets/how we help.png"
import how2 from "../../assets/how we help (1).png"

import frame from "../../assets/Frame 109 (1).png"

function HomeSix() {
  return (
    <>
      {/* Desktop Version */}
      <div className="hidden md:block relative bg-[#FAF3EC]">
        {/* Buttons */}
        <div className="absolute z-10 left-[14%]">
          <button className="mt-[260%] inline-flex h-[71px] px-6 justify-center items-center gap-2.5 shrink-0 text-[#FAF3EC] font-helvetica text-xl font-bold rounded-2xl bg-[#2E4A7D] hover:bg-[#1E3558] transition-colors">
            File Your Claim Now
          </button>
        </div>

        <div className="absolute z-10 left-[41%]">
          <button className="mt-[300%] inline-flex h-[71px] px-6 justify-center items-center gap-2.5 shrink-0 text-[#FAF3EC] font-helvetica text-xl font-bold rounded-2xl bg-[#4B2C5E] hover:bg-[#3A1D4D] transition-colors">
            Connect With Us
          </button>
        </div>

        <div className="absolute z-10 left-[66%]">
          <button className="mt-[234%] inline-flex h-[71px] px-6 justify-center items-center gap-2.5 shrink-0 text-[#FAF3EC] font-helvetica text-xl font-bold rounded-2xl bg-[#C49A6C] hover:bg-[#B4895B] transition-colors">
            Download E-Book Now
          </button>
        </div>

        <div className='bg-[#FAF3EC] pt-[47%] relative'>
          <div className="absolute top-0 w-full">
            <img
              src={how}
              className="w-[89%] mx-auto h-auto"
              alt="How we help"
            />
          </div>

          <div className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-[35%]">
            <button className="inline-flex h-[71px] px-6 items-center gap-2.5 text-[#2E4A7D] font-bold text-xl rounded-2xl bg-[#FAF3EC] hover:bg-[#E8D9C8] transition-colors border-2 border-[#2E4A7D]">
              Explore Your Legal Options
            </button>
          </div>

          <div className="mt-[-2%] w-full">
            <img
              src={frame}
              className="w-full h-auto"
              alt="Frame"
            />
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="block md:hidden bg-[#FAF3EC] pb-8">

        <div className="px-4 pt-8">
        <button className="ml-[15%] mt-[162%] absolute flex w-[50%] text-[16px] h-10 justify-center items-center  rounded-[12.675px] bg-[#4B2C5E] hover:bg-[#3A1D4D] text-[#F5E7DA] font-helvetica text-base font-bold leading-none transition-colors [font-feature-settings:'dlig_on']">
              Connect With Us
            </button>
            <button className="mt-[235%] ml-[15%]  absolute w-[50%] text-[16px] h-10 flex justify-center items-center rounded-[12.675px] bg-[#C49A6C] hover:bg-[#C49A6C] text-[#F5E7DA] font-helvetica text-base font-bold leading-none transition-colors">
              Download E-Book Now
            </button>
          <div className="flex flex-col items-center space-y-2">
            <button className="mt-[85%] ml-[-7%] absolute w-[50%] text-[16px] h-10 flex justify-center items-center rounded-[12.675px] bg-[#2E4A7D] hover:bg-[#1E3558] text-[#F5E7DA] font-helvetica text-base font-bold leading-none transition-colors">
              File Your Claim Now
            </button>
           
          </div>
          <img
            src={how2}
            className="w-full h-auto"
            alt="How we help"
          />
        </div>



        {/* <div className="mt-8 px-4">
          <button className="w-full h-16 flex justify-center items-center text-[#2E4A7D] font-bold text-lg rounded-2xl bg-[#FAF3EC] hover:bg-[#E8D9C8] transition-colors border-2 border-[#2E4A7D]">
            Explore Your Legal Options
          </button>
        </div> */}

        <div className="mt-8 w-full">
          <img
            src={frame}
            className="w-full h-auto"
            alt="Frame"
          />
        </div>
      </div>
    </>
  )
}

export default HomeSix