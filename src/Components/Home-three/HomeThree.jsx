import React from 'react'
import SeniorImage from '../../assets/images/seniorImgSvg.svg';
import heart from '../../assets/Frame 84.png';

function HomeThree() {
  return (
    <section className="w-full bg-[#F5E7DA80] absolute z-[-1] font-helvetica text-[#4B2C5E] overflow-hidden ">
    <div className="relative w-full py-[60px]">
      <div className="relative max-w-[1200px] mx-auto px-[40px] z-[1] ">
        <h2 className="font-georgia text-[80px] font-normal mb-[40px] leading-[1.14] text-[#4B2C5E] mt-32 ml-[-16%]">
         <img src={heart} alt="Heart" className="w-[750px] h-full ml-[13px] top-[19px] left-[-59%]" />
        </h2>
        <h3 className="font-georgia text-[80px] font-normal italic leading-[1.14] text-[#4B2C5E] text-center mt-[-6%] ml-[-18%]">
          <div className=''>A Lifetime of Hard Work</div>
           <div className='text-[#4B2C5E]/60 ml-[-8%]'>Shouldn't Lead to This</div>
        </h3>
        <div className="flex">
          <div className="max-w-[500px]">
            <p className="text-[24px] leading-[1.15] mt-[21px] text-[#4B2C5E]">
              A lifetime of hard work, providing for family, serving the country, and building a future never came with a warning. No one knew that something as small as a fibre in the air could change everything.
            </p>
            <p className="text-[24px] leading-[1.15] mb-[20px] text-[#4B2C5E]">
              Mesothelioma most often affects senior citizens, with nearly two-thirds of cases diagnosed in individuals over 65. It can remain dormant for 20 to 60 years before symptoms appear, making it more common in older adults.
            </p>
            <p className="text-[24px] leading-[1.15] mb-[20px] text-[#4B2C5E]">
              A senior's prognosis with mesothelioma can be affected by several factors, including age, overall health before diagnosis, and the treatment options available based on their condition. As a result, seniors with mesothelioma may have a more serious outlook compared to younger patients.
            </p>
          </div>
          <div className="flex justify-center relative left-[80px]">
            <img src={SeniorImage} alt="Senior patient" className="max-w-full h-auto rounded-[8px]" />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HomeThree
