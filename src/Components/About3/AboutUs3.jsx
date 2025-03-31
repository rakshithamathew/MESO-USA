import React from 'react';
import VectorSvg from '../../assets/au3(3).svg';
import VectorPng from '../../assets/au3(2).svg';
import GroupSvg from '../../assets/au3(1).svg';

const AboutUs3 = () => {
  return (
    <div className="relative w-[1280px] h-[1200px] mx-auto overflow-hidden bg-white text-[24px] font-helvetica">
      <div className="absolute top-[602px] left-0 w-full h-[544px]">
        <div className="absolute top-0 left-0 w-full h-[184px] bg-[rgba(46,74,125,0.44)] shadow-[0px_3px_20px_rgba(46,74,125,0.32)] overflow-hidden">
          <img 
            src={VectorSvg} 
            alt="" 
            className="absolute top-[25px] left-[820.03px] w-[447.9px] h-[491.4px]" 
          />
          <div className="absolute top-[50px] left-[calc(50%-560px)] w-[833px] h-[84px]">
                <b className="absolute top-0 left-[calc(50%-416.5px)] inline-block w-full text-white font-['Helvetica']">
                Connecting victims with leading mesothelioma attorneys who specialize in asbestos-related claims, ensuring they receive the justice and compensation they deserve.
                </b>
          </div>
        </div>
        
        <div className="absolute top-[208px] left-0 w-full h-[156px] bg-[rgba(46,74,125,0.44)] shadow-[0px_3px_20px_rgba(46,74,125,0.19)] overflow-hidden">
          <img 
            src={VectorSvg} 
            alt="" 
            className="absolute top-[-185px] left-[821.03px] w-[447.9px] h-[491.4px]" 
          />
          <div className="absolute top-[50px] left-[calc(50%-560px)] w-[833px] h-[56px]">
            <b className="absolute top-0 left-[calc(50%-416.5px)] inline-block w-full text-white font-['Helvetica']">
              Raising awareness about the dangers of asbestos exposure, workplace safety, and the legal rights of those affected.
            </b>
          </div>
        </div>
        
        <div className="absolute top-[388px] left-0 w-full h-[156px] bg-[rgba(46,74,125,0.44)] shadow-[0px_3px_20px_rgba(46,74,125,0.19)] overflow-hidden">
          <img 
            src={VectorSvg} 
            alt="" 
            className="absolute top-[-358px] left-[823.03px] w-[447.9px] h-[491.4px]" 
          />
          <div className="absolute top-[50px] left-[calc(50%-560px)] w-[833px] h-[56px]">
            <b className="absolute top-0 left-[calc(50%-416.5px)] inline-block w-full text-white font-['Helvetica']">
              Preventing future cases by sharing vital information on how to recognize and minimize asbestos exposure risks.
            </b>
          </div>
        </div>
      </div>
      
      <img 
        src={VectorPng} 
        alt="" 
        className="absolute top-[calc(50%-493px)] left-[calc(50%+56px)] w-[540px] object-cover" 
      />
      
      <img 
        src={GroupSvg} 
        alt="" 
        className="absolute h-[37.5%] w-[60.08%] top-[-13.18%] right-[-25%] bottom-[60.68%] left-[48%] max-w-full max-h-full overflow-hidden top-[185px]" 
      />
      
      <div className="absolute top-[267px] left-[calc(50%-560px)] w-[556px] h-[205px] text-[96px] text-[#4b2c5e] font-georgia">
        <i className="absolute top-0 left-[calc(50%-278px)] inline-block italic font-['Georgia']">
          Our Mission
        </i>
        <div className="absolute top-[149px] left-[calc(50%-278px)] text-[24px] font-helvetica text-black inline-block w-[556px]">
          At Fight for Mesothelioma, our mission is to provide essential resources, legal guidance, and advocacy.
        </div>
      </div>
    </div>
  );
};

export default AboutUs3;