import React from 'react'
import Img2 from '../../../assets/typeofImg2.png'
import Img3 from '../../../assets/typeofImg3.png'
import Img4 from '../../../assets/typeofImg4.png'
import Img5 from '../../../assets/typeofImg5.png'
import Img6 from '../../../assets/typeofImg6.png'
import Img7 from '../../../assets/typeofImg7.png'

const MesothFive = () => {
    return (
        <div className="bg-[#f7ede3] w-full flex flex-col items-center text-[32px] md:text-[48px] text-white pt-5 pb-20 relative">
            <img className="hidden md:block absolute top-[220px] right-[5%] w-[450px] lg:w-[600px] h-auto object-cover z-0" alt="" src={Img2} />
            <img className="hidden lg:block absolute h-[16.5%] w-[40%] top-[-4.51%] right-0 max-w-full overflow-hidden max-h-full z-0 top-[0px]" alt="" src={Img3} />
            <div className="w-[90%] md:w-[80%] mt-[120px] md:mt-[198px] mb-[80px] md:mb-[100px] text-[48px] md:text-[96px] text-[#4b2c5e] font-georgia relative z-10">
                <i className="block w-full md:w-[638px]">Types of Mesothelioma</i>
                <div className="mt-[40px] md:mt-[60px] text-[18px] md:text-[24px] font-helvetica w-full md:w-[45%]">
                    Mesothelioma can develop in different parts of the body. The type of mesothelioma determines symptoms, treatment options, and prognosis.
                </div>
            </div>
            <img className="block md:hidden w-[300px] h-auto object-cover mb-[60px]" alt="" src={Img2} />

            <div className="flex flex-col gap-[50px] md:gap-[80px] w-full items-center relative z-10">
                <div className="relative w-[95%] md:w-[95%] ml-[5%] shadow-[0px_3px_20px_rgba(46,74,125,0.32)] bg-[rgba(46,74,125,0.44)] min-h-[600px] md:h-[532px] overflow-hidden z-10 flex flex-col md:flex-row">

                    {/* Image container */}
                    <div className="flex justify-center md:justify-start pt-[20px] md:pt-[40px] md:pl-[100px] md:w-[35%] relative">
                        {/* White vertical line - positioned at the start of image container */}
                        <div className="block w-[3px] h-[385%] sm:h-[385%] absolute top-[0%] left-[25px] md:left-[50px] bg-[#f7ede3] z-20"></div>

                        <img className="w-[200px] md:w-[298px] h-[200px] md:h-[298px] overflow-hidden relative z-10" alt="" src={Img4} />
                    </div>
                    
                    {/* Content container */}
                    <div className="flex flex-col md:py-[45px] pl-[35px] sm:pl-[40px] md:pl-[5%] pr-[5%] md:w-[65%]">
                        <div className="font-georgia pt-[20px] md:pt-0">
                            <i className="text-[32px] md:text-[48px] underline">Pleural Mesothelioma</i>
                        </div>
                        
                        <div className="mt-[25px] rounded-[20px] bg-[rgba(255,255,255,0.7)] border border-[rgba(75,44,94,0.2)] overflow-hidden p-2 mt-2 text-[16px] md:text-[32px] text-[#4b2c5e] w-fit">
                            <div className="flex whitespace-nowrap mt-3">
                                <p>Lungs</p>
                                <span>{` - `}</span>
                                <p>75% </p> &nbsp;
                                <span> of Cases</span>
                            </div>
                        </div>
                        
                        <div className="mt-[25px] text-[18px] md:text-[24px]">
                            <ul className="m-0 text-inherit pl-4 md:pl-8">
                                <li className="mb-0">
                                    <span className="font-helvetica">{`Develops in the `}</span>
                                    <b>pleura, the lung lining.</b>
                                </li>
                            </ul>
                            <p className="m-0">&nbsp;</p>
                            <ul className="m-0 text-inherit pl-4 md:pl-8">
                                <li className="mb-0">
                                    <b className="font-helvetica">Symptoms:</b>
                                    <span> Shortness of breath, chest pain, chronic cough, fluid buildup (pleural effusion).</span>
                                </li>
                            </ul>
                            <p className="m-0">&nbsp;</p>
                            <ul className="m-0 text-inherit pl-4 md:pl-8">
                                <li className="mb-0">
                                    <b className="font-helvetica">Causes:</b>
                                    <span> Inhaling asbestos fibers that scar lung tissues.</span>
                                </li>
                            </ul>
                            <p className="m-0">&nbsp;</p>
                            <ul className="m-0 text-inherit pl-4 md:pl-8">
                                <li>
                                    <b className="font-helvetica">Prognosis:</b>
                                    <span> Median survival is 12-24 months with treatment.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                 
                <div className="relative w-[95%] md:w-[95%] ml-[5%] shadow-[0px_3px_20px_rgba(46,74,125,0.32)] bg-[rgba(46,74,125,0.44)] min-h-[600px] md:h-[532px] overflow-hidden z-10 flex flex-col md:flex-row">
                    {/* Image container */}
                    <div className="flex justify-center md:justify-start pt-[20px] md:pt-[40px] md:pl-[100px] md:w-[35%] relative">
                        {/* White vertical line - positioned at the start of image container */}
                        <div className="block w-[3px] h-[385%] sm:h-[385%] absolute top-[0%] left-[25px] md:left-[50px] bg-[#f7ede3] z-20"></div>

                        <div className="w-[200px] md:w-[288px] h-[200px] md:h-[288px] relative">
                            <img className="h-[93.58%] w-[88.19%] absolute top-[13.25%] right-[3.47%] bottom-[13.17%] left-[8.33%] max-w-full overflow-hidden max-h-full" alt="" src={Img5} />
                        </div>
                    </div>                                                                                                                                                                                  
                    
                    {/* Content container */}
                    <div className="flex flex-col md:py-[45px] pl-[35px] sm:pl-[40px] md:pl-[5%] pr-[5%] md:w-[65%]">
                        <div className="font-georgia pt-[20px] md:pt-0">
                            <i className="text-[32px] md:text-[48px] underline">Peritoneal Mesothelioma</i>
                        </div>
                        
                        <div className="mt-[25px] rounded-[20px] bg-[rgba(255,255,255,0.7)] border border-[rgba(75,44,94,0.2)] overflow-hidden py-3 px-6 text-[16px] md:text-[32px] text-[#4b2c5e] w-fit flex items-center justify-center h-auto">
                        <div className="flex whitespace-nowrap items-center justify-center">
                                <span>Abdomen</span>
                                <span>{` - `}</span>
                                <span>15-20%</span> &nbsp;
                                <span> of Cases</span>
                            </div>
                        </div>
                        
                        <div className="mt-[25px] text-[18px] md:text-[24px] text-white">
                            <ul className="m-0 text-inherit pl-4 md:pl-8">
                                <li className="mb-0">
                                    <span className="font-helvetica">{`Affects the `}</span>
                                    <b>peritoneum, the abdominal lining.</b>
                                </li>
                            </ul>
                            <p className="m-0">
                                <b>&nbsp;</b>
                            </p>
                            <ul className="m-0 text-inherit pl-4 md:pl-8">
                                <li className="mb-0">
                                    <b>Symptoms:</b>
                                    <span> Severe bloating, abdominal pain, nausea, weight loss.</span>
                                </li>
                            </ul>
                            <p className="m-0">&nbsp;</p>
                            <ul className="m-0 text-inherit pl-4 md:pl-8">
                                <li className="mb-0">
                                    <b className="font-helvetica">Causes:</b>
                                    <span> Ingesting asbestos fibers, which become embedded in the digestive tract.</span>
                                </li>
                            </ul>
                            <p className="m-0">&nbsp;</p>
                            <ul className="m-0 text-inherit pl-4 md:pl-8">
                                <li>
                                <b className="font-helvetica">Prognosis:</b>
                                    <span> Better survival rates than pleural, 5-year survival up to 50% with surgery.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                {/* Pericardial Mesothelioma */}
                <div className="relative w-[95%] md:w-[95%] ml-[5%] shadow-[0px_3px_20px_rgba(46,74,125,0.32)] bg-[rgba(46,74,125,0.44)] min-h-[600px] md:h-[532px] overflow-hidden z-10 flex flex-col md:flex-row">
                    {/* Image container */}
                    <div className="flex justify-center md:justify-start pt-[20px] md:pt-[40px] md:pl-[100px] md:w-[35%] relative">
                        {/* White vertical line - positioned at the start of image container */}
                        <div className="block w-[3px] h-[385%] sm:h-[385%] absolute top-[0%] left-[25px] md:left-[50px] bg-[#f7ede3] z-20"></div>

                        <img className="w-[200px] md:w-[288px] h-[200px] md:h-[288px] overflow-hidden" alt="" src={Img6} />
                    </div>
                    
                    {/* Content container */}
                    <div className="flex flex-col md:py-[45px] pl-[35px] sm:pl-[40px] md:pl-[5%] pr-[5%] md:w-[65%]">
                        <div className="font-georgia pt-[20px] md:pt-0">
                            <i className="text-[32px] md:text-[48px] underline">Pericardial Mesothelioma</i>
                        </div>
                        
                        <div className="mt-[25px] rounded-[20px] bg-[rgba(255,255,255,0.7)] border border-[rgba(75,44,94,0.2)] overflow-hidden p-2  mt-2 text-[16px] md:text-[32px] text-[#4b2c5e] w-fit">
                            <div className="flex whitespace-nowrap mt-3">
                                <p>Heart</p>
                                <span> -</span>
                                <p> Less than 1%</p>&nbsp;
                                <span> of Cases</span>
                            </div>
                        </div>
                        
                        <div className="mt-[25px] text-[18px] md:text-[24px]">
                            <ul className="m-0 text-inherit pl-4 md:pl-8">
                                <li className="mb-0">
                                    <span className="font-helvetica">{`Develops in the `}</span>
                                    <b>pericardium, the heart lining.</b>
                                </li>
                            </ul>
                            <p className="m-0">&nbsp;</p>
                            <ul className="m-0 text-inherit pl-4 md:pl-8">
                                <li className="mb-0">
                                    <b className="font-helvetica">Symptoms:</b>
                                    <span> Chest pain, irregular heartbeat, fluid buildup around the heart.</span>
                                </li>
                            </ul>
                            <p className="m-0">&nbsp;</p>
                            <ul className="m-0 text-inherit pl-4 md:pl-8">
                                <li className="mb-0">
                                    <b className="font-helvetica">Causes:</b>
                                    <span> Exact cause unclear, but asbestos exposure plays a role.</span>
                                </li>
                            </ul>
                            <p className="m-0">&nbsp;</p>
                            <ul className="m-0 text-inherit pl-4 md:pl-8">
                                <li>
                                    <b className="font-helvetica">Prognosis:</b>
                                    <span> Extremely poor; most cases are diagnosed posthumously.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                {/* Testicular Mesothelioma */}
                <div className="relative w-[95%] md:w-[95%] ml-[5%] shadow-[0px_3px_20px_rgba(46,74,125,0.32)] bg-[rgba(46,74,125,0.44)] min-h-[600px] md:h-[532px] overflow-hidden z-10 flex flex-col md:flex-row">
                    {/* Image container */}
                    <div className="flex justify-center md:justify-start pt-[20px] md:pt-[40px] md:pl-[100px] md:w-[35%] relative">
                        {/* White vertical line - positioned at the start of image container */}
                        <div className="block w-[3px] h-[385%] sm:h-[385%] absolute top-[0%] left-[25px] md:left-[50px] bg-[#f7ede3] z-20"></div>

                        <div className="w-[200px] md:w-[288px] h-[200px] md:h-[288px] relative">
                            <img className="h-[83.33%] w-[61.15%] absolute top-[8.34%] right-[24.52%] bottom-[8.33%] left-[14.34%] max-w-full overflow-hidden max-h-full" alt="" src={Img7} />
                        </div>
                    </div>
                    
                    {/* Content container */}
                    <div className="flex flex-col md:py-[45px] pl-[35px] sm:pl-[40px] md:pl-[5%] pr-[5%] md:w-[65%]">
                        <div className="font-georgia pt-[20px] md:pt-0">
                            <i className="text-[32px] md:text-[48px] underline">Testicular Mesothelioma</i>
                        </div>
                        
                        <div className="mt-[25px] rounded-[20px] bg-[rgba(255,255,255,0.7)] border border-[rgba(75,44,94,0.2)] overflow-hidden p-2  mt-2 text-[16px] md:text-[32px] text-[#4b2c5e] w-fit">
                            <div className="flex whitespace-nowrap mt-3">
                                <p>Testicles</p>
                                <span>{` - `}</span>
                                <p>Rarest Form</p>
                            </div>
                        </div>
                        
                        <div className="mt-[25px] text-[18px] md:text-[24px] text-white">
                            <ul className="m-0 text-inherit pl-4 md:pl-8">
                                <li className="mb-0">
                                    <span className="font-helvetica">Develops in the</span>
                                    <b> tunica vaginalis, the lining of the testicles.</b>
                                </li>
                            </ul>
                            <p className="m-0">&nbsp;</p>
                            <ul className="m-0 text-inherit pl-4 md:pl-8">
                                <li className="mb-0">
                                    <b className="font-helvetica">Symptoms:</b>
                                    <span> Swelling, lumps in the testicles, fluid buildup.</span>
                                </li>
                            </ul>
                            <p className="m-0">&nbsp;</p>
                            <ul className="m-0 text-inherit pl-4 md:pl-8">
                                <li className="mb-0">
                                    <b className="font-helvetica">Causes:</b>
                                    <span> Asbestos exposure, though unclear how fibers reach this area.</span>
                                </li>
                            </ul>
                            <p className="m-0">&nbsp;</p>
                            <ul className="m-0 text-inherit pl-4 md:pl-8">
                                <li>
                                    <b className="font-helvetica">Prognosis:</b>
                                    <span> Best survival rate, often treated successfully with surgery</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MesothFive