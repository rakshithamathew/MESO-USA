import React from 'react';
import VectorSvg from '../../assets/au3(3).svg';
import VectorPng from '../../assets/au3(2).svg';
import GroupSvg from '../../assets/au3(1).svg';

const AboutUs3 = () => {
  return (
    <div className="relative w-full max-w-[1280px] min-h-[1000px] md:min-h-[1200px] mx-auto overflow-hidden bg-white text-base md:text-[24px] font-helvetica px-4 md:px-0">
      {/* Mission Section */}
      <div className="relative md:absolute mt-8 md:mt-0 md:top-[267px] left-0 md:left-[calc(50%-560px)] w-full md:w-[556px] h-auto md:h-[205px] text-4xl md:text-[96px] text-[#4b2c5e] font-georgia">
        <i className="block md:inline-block italic font-['Georgia'] mb-4 md:mb-0">
          Our Mission
        </i>
        <div className="text-lg md:text-[24px] font-helvetica text-black w-full md:w-[556px]">
          At Fight for Mesothelioma, our mission is to provide essential resources, legal guidance, and advocacy.
        </div>
      </div>
      
      {/* Graphic Elements - Hidden on mobile, shown on desktop */}
      <img 
        src={VectorPng} 
        alt="" 
        className="hidden md:block absolute top-[calc(50%-493px)] left-[calc(50%+56px)] w-[540px] object-cover" 
      />
      
      <img 
        src={GroupSvg} 
        alt="" 
        className="hidden md:block absolute h-[37.5%] w-[60.08%] top-[-13.18%] right-[-25%] bottom-[60.68%] left-[48%] max-w-full max-h-full overflow-hidden top-[185px]" 
      />
      
      {/* Cards Section */}
      <div className="relative md:absolute top-auto md:top-[602px] left-0 w-full h-auto md:h-[544px] mt-8 md:mt-0">
        {/* Card 1 */}
        <div className="relative w-full h-auto md:h-[184px] bg-[rgba(46,74,125,0.44)] shadow-[0px_3px_20px_rgba(46,74,125,0.32)] overflow-hidden mb-4 md:mb-0 p-4 md:p-0">
          <img 
            src={VectorSvg} 
            alt="" 
            className="hidden md:block absolute top-[25px] left-[820.03px] w-[447.9px] h-[491.4px]" 
          />
          <div className="w-full md:w-[833px] h-auto md:h-[84px] mx-auto">
            <b className="text-white font-['Helvetica'] text-center md:text-left">
              Connecting victims with leading mesothelioma attorneys who specialize in asbestos-related claims, ensuring they receive the justice and compensation they deserve.
            </b>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="relative w-full h-auto md:h-[156px] bg-[rgba(46,74,125,0.44)] shadow-[0px_3px_20px_rgba(46,74,125,0.19)] overflow-hidden mb-4 md:mb-0 p-4 md:p-0 mt-4 md:mt-0">
          <img 
            src={VectorSvg} 
            alt="" 
            className="hidden md:block absolute top-[-185px] left-[821.03px] w-[447.9px] h-[491.4px]" 
          />
          <div className="w-full md:w-[833px] h-auto md:h-[56px] mx-auto">
            <b className="text-white font-['Helvetica'] text-center md:text-left">
              Raising awareness about the dangers of asbestos exposure, workplace safety, and the legal rights of those affected.
            </b>
          </div>
        </div>
        
        {/* Card 3 */}
        <div className="relative w-full h-auto md:h-[156px] bg-[rgba(46,74,125,0.44)] shadow-[0px_3px_20px_rgba(46,74,125,0.19)] overflow-hidden p-4 md:p-0 mt-4 md:mt-0">
          <img 
            src={VectorSvg} 
            alt="" 
            className="hidden md:block absolute top-[-358px] left-[823.03px] w-[447.9px] h-[491.4px]" 
          />
          <div className="w-full md:w-[833px] h-auto md:h-[56px] mx-auto">
            <b className="text-white font-['Helvetica'] text-center md:text-left">
              Preventing future cases by sharing vital information on how to recognize and minimize asbestos exposure risks.
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs3;