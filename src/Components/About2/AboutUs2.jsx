
import React from 'react';
import Vector1 from '../../assets/aboutus2(1).svg';
import Vector2 from '../../assets/aboutus2(1).svg';

const AboutUs2 = () => {
  return (
    <div className="h-[376px] overflow-hidden relative flex flex-col justify-center items-center bg-[#faf3ec]">
      <img 
        className="absolute h-[60%] w-[28.82%] object-contain z-10 opacity-30 left-[40%]" 
        alt="" 
        src={Vector1} 
      />
      <img 
        className="absolute h-[60%] w-[28.82%] object-contain z-10 opacity-30 left-[29%]" 
        alt="" 
        src={Vector2} 
      />
      <i className="z-20 text-center font-bold w-[1117px] text-[40px] text-[#2e4a7d]">
        "Together, we fight for justice, awareness, and a future free from asbestos dangers."
      </i>
    </div>
  );
};

export default AboutUs2;