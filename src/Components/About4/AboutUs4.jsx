import React from 'react';

const AboutUs4 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 font-georgia bg-[#F3E2C88F]">
      <i className="text-[96px] text-center w-[70%] block mb-4 font-['Georgia'] italic text-[#4B2C5E]">
        How We Make a Difference?
      </i>
      
      <div className="text-[24px] font-['Helvetica'] text-center mb-10 text-[#4B2C5E]">
        <p className="m-0">
          At Fight for Mesothelioma, our commitment extends beyond legal assistance.
        </p>
        <p className="m-0">
          We advocate, educate, and work toward a future free from asbestos related harm.
        </p>
      </div>
      
      {/* <div className="flex space-x-6"> */}
      <div className="flex space-x-6 relative z-10">

        {/* Card 1: Legal Advocacy & Compensation */}
        <div className="w-[411px] h-[450px] bg-white rounded-[20px] shadow-[0px_4px_25px_rgba(39,29,46,0.25)] overflow-hidden p-5 box-border flex flex-col">
          <i className="text-[40px] text-[#2e4a7d] block text-center mb-5 font-['Georgia'] italic">
            Legal Advocacy & Compensation
          </i>
          <div className="text-[20px] font-['Helvetica'] text-[#4b2c5e] text-center flex-grow flex items-center justify-center">
            Our legal partners have successfully recovered millions in compensation, helping families cover medical expenses, lost Wages, and other financial burdens.
          </div>
        </div>
        
        {/* Card 2: Awareness & Education */}
        <div className="w-[411px] h-[450px] bg-white rounded-[20px] shadow-[0px_4px_25px_rgba(39,29,46,0.25)] overflow-hidden p-5 box-border flex flex-col">
          <i className="text-[40px] text-[#2e4a7d] block text-center mb-5 font-['Georgia'] italic">
            Awareness & Education
          </i>
          <div className="text-[20px] font-['Helvetica'] text-[#4b2c5e] text-center flex-grow flex items-center justify-center">
            We provide crucial information about asbestos exposure risks, workplace safety regulations, and legal rights, empowering individuals to protect themselves and their loved ones.
          </div>
        </div>
        
        {/* Card 3: Prevention Strategies */}
        <div className="w-[411px] h-[450px] bg-white rounded-[20px] shadow-[0px_4px_25px_rgba(39,29,46,0.25)] overflow-hidden p-5 box-border flex flex-col">
          <i className="text-[40px] text-[#2e4a7d] block text-center mb-5 font-['Georgia'] italic">
            Prevention Strategies
          </i>
          <div className="text-[20px] font-['Helvetica'] text-[#4b2c5e] text-center flex-grow flex items-center justify-center">
            We educate workers, homeowners, and businesses to reduce asbestos risks. Our guidance helps identify and handle asbestos safely to prevent future cases.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs4;