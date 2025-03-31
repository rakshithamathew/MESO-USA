/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import how from "../../assets/how we help.png"
import frame from "../../assets/Frame 60.png"

function HomeSix() {
  return (
    <div className="relative bg-[#FAF3EC]">
      {/* Buttons */}
      <div className="absolute z-10 left-[14%]">
        <button className="mt-[260%] inline-flex h-[71px] px-6 justify-center items-center gap-2.5 shrink-0 text-[#FAF3EC] font-helvetica text-xl font-bold rounded-2xl bg-[#2E4A7D]">
          File Your Claim Now
        </button>
      </div>

      <div className="absolute z-10 left-[41%] ">
        <button className="mt-[300%] inline-flex h-[71px] px-6 justify-center items-center gap-2.5 shrink-0 text-[#FAF3EC] font-helvetica text-xl font-bold rounded-2xl bg-[#4B2C5E]">
          Connect With Us
        </button>
      </div>

      <div className="absolute z-10 left-[66%] ">
        <button className="mt-[234%] inline-flex h-[71px] px-6 justify-center items-center gap-2.5 shrink-0 text-[#FAF3EC] font-helvetica text-xl font-bold rounded-2xl bg-[#C49A6C]">
          Download E-Book Now
        </button>
      </div>

      <div className='bg-[#FAF3EC] pt-[47%] relative'>
        <div className="absolute top-0 w-full ">
          <img
            src={how}
            className="w-[89%] mx-auto h-auto"
          />
        </div>

        <div className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-[35%]">
          <button className="inline-flex h-[71px] px-6 items-center gap-2.5 text-[#2E4A7D] font-bold text-xl rounded-2xl bg-[#FAF3EC]">
            Explore Your Legal Options
          </button>
        </div>

        <div className="mt-[-2%] w-full">
          <img
            src={frame}
            className="w-full h-auto"
          />
        </div>
      </div>

    </div>
  )
}

export default HomeSix