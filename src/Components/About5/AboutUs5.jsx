

import React from 'react';
import whyus1png from '../../assets/whyus1svg.png';
import whyus2 from '../../assets/whyus2.png';
import whyus3 from '../../assets/whyus3.png';

const AboutUs5 = () => {
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8 bg-[#faf3ec]">
    <div className="flex flex-col items-center justify-center pt-[200px] relative -top-[150px]">

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-[96px] text-[#2e4a7d] text-center font-georgia italic inline-block">
          Why Us?
        </h1>
      </div>

      {/* Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        
        {/* Card 1 */}
        <div className="bg-[#F3E2C88F] rounded-2xl shadow-lg overflow-hidden p-8 text-left transition transform hover:scale-105">
          <img src={whyus1png} alt="Legal Support" className="w-20 mb-4 h-[150px] w-[300px]" />
          <h2 className="text-3xl text-[#2e4a7d] mb-4 font-['Georgia'] italic">
            Top-Tier Legal Support
          </h2>
          <p className="text-lg text-[#4b2c5e] font-['Helvetica']">
            Our partnered mesothelioma attorneys specialize in asbestos-related lawsuits and have a proven track record of success.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#F3E2C88F] rounded-2xl shadow-lg overflow-hidden p-8 text-left transition transform hover:scale-105">
          <img src={whyus2} alt="No Upfront Costs" className="w-20 mb-4 h-[150px] w-[300px]" />
          <h2 className="text-3xl text-[#2e4a7d] mb-4 font-['Georgia'] italic">
            No Upfront Costs
          </h2>
          <p className="text-lg text-[#4b2c5e] font-['Helvetica']">
            You pay nothing unless we win your case.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#F3E2C88F] rounded-2xl shadow-lg overflow-hidden p-8 text-left transition transform hover:scale-105">
          <img src={whyus3} alt="Comprehensive Resources" className="w-20 mb-4 h-[150px] w-[300px]" />
          <h2 className="text-3xl text-[#2e4a7d] mb-4 font-['Georgia'] italic">
            Comprehensive Resources
          </h2>
          <p className="text-lg text-[#4b2c5e] font-['Helvetica']">
            Get access to the latest information on legal rights, compensation, and asbestos exposure.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default AboutUs5;
