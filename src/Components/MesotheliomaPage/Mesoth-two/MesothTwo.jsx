/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "./MesothTwo.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image2 from "../../../assets/Frame 76 (3).png";
import image3 from "../../../assets/Frame 76 (4).png";
import image4 from "../../../assets/Frame 76 (5).png";
import image5 from "../../../assets/Frame 76 (6).png";

function MesothTwo() {
    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="w-[739px] h-[109px] flex-shrink-0 text-[#2E4A7D] text-center font-[Georgia] text-[96px] italic font-normal leading-normal mx-auto">
                Who is at risk?
            </h1>

            <p className="text-[#4B2C5E] mt-5 text-center font-[Helvetica] text-[24px] font-normal leading-none">
                Each year, more than <span className="font-bold">3,000 people</span> in the United States are diagnosed with mesothelioma.
                The disease primarily <span className="font-bold">affects individuals aged 55 and older, with men being diagnosed more often than women</span>.
                Certain occupations and environments increase mesothelioma risk. People exposed to asbestos fibers at work or home are the most vulnerable.
            </p>
            
            <div className="relative">
                <Carousel
                    showArrows={true}
                    showStatus={false}
                    showThumbs={false}
                    infiniteLoop={false}  // Changed to false to prevent looping
                    centerMode={true}
                    centerSlidePercentage={33.33}
                    emulateTouch={true}
                    swipeable={true}
                    dynamicHeight={false}
                    className="custom-carousel gap-10"
                    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                        hasPrev && (
                            <button
                                type="button"
                                onClick={onClickHandler}
                                title={label}
                                className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
                                style={{ top: '50%', transform: 'translateY(-50%)' }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                        )
                    }
                    renderArrowNext={(onClickHandler, hasNext, label) =>
                        hasNext && (
                            <button
                                type="button"
                                onClick={onClickHandler}
                                title={label}
                                className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
                                style={{ top: '50%', transform: 'translateY(-50%)' }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        )
                    }
                >
                    {/* Card 1 - Construction Workers */}
                    <div className="flex-shrink-0 w-[390px] h-[500px] rounded-[20px] flex flex-col items-center p-4 mx-2">
                        <img
                            src={image2}
                            alt="Construction Workers"
                            className="w-[324px] h-[418px] flex-shrink-0 rounded-[20px] object-cover"
                        />
                    </div>

                    {/* Card 2 - Shipyard Workers */}
                    <div className="flex-shrink-0 w-[390px] h-[500px] rounded-[20px] flex flex-col items-center p-4 mx-2">
                        <img
                            src={image3}
                            alt="Shipyard Workers"
                            className="w-[324px] h-[418px] flex-shrink-0 rounded-[20px] object-cover"
                        />
                    </div>

                    {/* Card 3 - Auto Mechanics */}
                    <div className="flex-shrink-0 w-[390px] h-[500px] rounded-[20px] flex flex-col items-center p-4 mx-2">
                        <img
                            src={image4}
                            alt="Auto Mechanics"
                            className="w-[324px] h-[418px] flex-shrink-0 rounded-[20px] object-cover"
                        />
                    </div>

                    {/* Card 4 - Fire fighter */}
                    <div className="flex-shrink-0 w-[390px] h-[500px] rounded-[20px] flex flex-col items-center p-4 mx-2">
                        <img
                            src={image5}
                            alt="Fire fighter"
                            className="w-[324px] h-[418px] flex-shrink-0 rounded-[20px] object-cover"
                        />
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default MesothTwo;