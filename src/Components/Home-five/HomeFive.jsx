import React, { useRef, useEffect } from 'react';
// import image1 from "../../assets/images/cardImg1.svg";
import image2 from "../../assets/Frame 102.png";
import image3 from "../../assets/Frame 103.png";
import image4 from "../../assets/Frame 42.png";
import image5 from "../../assets/Frame 42 (1).png";
import image6 from "../../assets/Frame 42 (2).png";
import image7 from "../../assets/Frame 41.png";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Helmet } from 'react-helmet';

function HomeFive() {
    const carouselRef = useRef(null);

    useEffect(() => {
        const handleScroll = (e) => {
            if (carouselRef.current) {
                e.preventDefault();
                const carousel = carouselRef.current;
                if (e.deltaY > 0) {
                    carousel.onClickNext();
                } else if (e.deltaY < 0) {
                    carousel.onClickPrev();
                }
            }
        };

        const carouselElement = document.querySelector('.custom-carousel');
        if (carouselElement) {
            carouselElement.addEventListener('wheel', handleScroll, { passive: false });
        }

        return () => {
            if (carouselElement) {
                carouselElement.removeEventListener('wheel', handleScroll);
            }
        };
    }, []);

    return (
        <div className="font-halvett font-bold">
            {/* Desktop Version */}
            <div className="hidden md:flex flex-col gap-3 p-[5%] bg-[#F5E7DA80]">
                {/* First Row */}
                <div className="flex justify-between gap-5">
                    <div className="flex-1 bg-white p-8 rounded-xl shadow-lg text-center transition-transform duration-300 hover:-translate-y-1 flex flex-col justify-center items-center">
                        <p className="text-[24px] text-[#2E4A7D] font-helvetica font-normal leading-none">
                            Average compensation
                        </p>
                        <h2 className="text-[48px] text-[#2E4A7D] mt-0 font-helvetica font-bold leading-tight">
                            $1M to $2M
                        </h2>
                    </div>

                    <div className="flex-1 bg-white p-8 rounded-xl shadow-lg text-center transition-transform duration-300 hover:-translate-y-1 flex flex-col justify-center items-center">
                        <p className="text-[24px] text-[#2E4A7D] font-helvetica font-normal leading-none mt-5">
                            Asbestos trust funds hold
                        </p>
                        <h2 className="text-[48px] text-[#2E4A7D] mt-0 font-helvetica font-bold leading-tight">
                            $30 Billion,
                        </h2>
                        <p className="text-[24px] text-[#2E4A7D] font-helvetica font-normal leading-none">
                            as of 2025
                        </p>
                    </div>

                    <div className="flex-1 bg-white p-8 rounded-xl shadow-lg text-center transition-transform duration-300 hover:-translate-y-1 flex flex-col justify-center items-center">
                        <div className="flex items-baseline justify-center">
                            <span className="text-[24px] text-[#2E4A7D] font-helvetica font-normal leading-none mr-2">
                                Each year
                            </span>
                            <span className="text-[48px] text-[#2E4A7D] font-helvetica font-bold leading-tight">
                                2,000 +
                            </span>
                        </div>
                        <p className="text-[24px] text-[#2E4A7D] font-helvetica font-normal leading-none mt-2">
                            people receive compensation
                        </p>
                    </div>
                </div>

                {/* Second Row */}
                <div className="flex justify-between mt-[1%] gap-0">
                    <div>
                        <Helmet>
                            <img src={image3} alt="" className="h-[50px] w-[150px] object-contain absolute z-10 mt-[8%] ml-[63%]" />
                        </Helmet>
                    </div>
                    <div className="overflow-hidden flex items-center justify-center gap-0">
                        <Helmet>
                            <img src={image2} alt="" className="max-h-full max-w-full object-contain" />
                        </Helmet>
                    </div>
                </div>
            </div>

            {/* Mobile Version */}
            <div className="md:hidden flex flex-col gap-4 bg-[#F5E7DA80] mt-[-12%]">
                {/* Stats Cards - Stacked */}
                <div className="space-y-4 items-center justify-center p-4 leading-none">
                    <div className="bg-white p-6 rounded-xl shadow-lg text-center transition-transform duration-300 hover:-translate-y-1">
                        <p className="text-lg text-[#2E4A7D] font-helvetica font-normal leading-none">
                            Average compensation
                        </p>
                        <h2 className="text-3xl text-[#2E4A7D] mt-1 font-helvetica font-bold leading-none">
                            $1M to $2M
                        </h2>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg text-center transition-transform duration-300 hover:-translate-y-1 ">
                        <p className="text-lg text-[#2E4A7D] font-helvetica font-normal leading-none">
                            Asbestos trust funds hold
                        </p>
                        <h2 className="text-3xl text-[#2E4A7D] mt-1 font-helvetica font-bold leading-none">
                            $30 Billion,  <span className="text-lg text-[#2E4A7D] font-helvetica font-normal leading-none">
                                as of 2025
                            </span>
                        </h2>

                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg text-center transition-transform duration-300 hover:-translate-y-1">
                        <div className="flex flex-col items-center">
                            <div className="flex items-baseline">
                                <span className="text-lg text-[#2E4A7D] font-helvetica font-normal mr-2">
                                    Each year
                                </span>
                                <span className="text-3xl text-[#2E4A7D] font-helvetica font-bold">
                                    2,000 +
                                </span>
                            </div>
                            <p className="text-lg text-[#2E4A7D] font-helvetica font-normal mt-1">
                                people receive compensation
                            </p>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="relative mt-4">

                    <div className="relative">
                        <Carousel
                            ref={carouselRef}
                            showArrows={false}
                            showStatus={false}
                            showThumbs={false}
                            infiniteLoop={false}
                            centerMode={true}
                            centerSlidePercentage={95}
                            emulateTouch={true}
                            swipeable={true}
                            showIndicators={false}
                            dynamicHeight={false}
                            className="custom-carousel gap-10"
                            swipeScrollTolerance={50}
                            preventMovementUntilSwipeScrollTolerance={true}
                        >
                            {/* Card 1 - Construction Workers */}
                            <div className="rounded-[20px] flex flex-col items-center ">
                                <Helmet>
                                    <img
                                        src={image4}
                                        alt="Construction Workers"
                                        className="rounded-[20px] object-cover"
                                    />
                                </Helmet>
                            </div>

                            {/* Card 2 - Shipyard Workers */}
                            <div className="rounded-[20px] flex flex-col items-center">
                                <Helmet>
                                    <img
                                        src={image5}
                                        alt="Shipyard Workers"
                                        className="flex-shrink-0 rounded-[20px] object-cover"
                                    />
                                </Helmet>
                            </div>

                            {/* Card 3 - Auto Mechanics */}
                            <div className="rounded-[20px] flex flex-col items-center ">
                                <Helmet>
                                    <img

                                        src={image6}
                                        alt="Auto Mechanics"
                                        className="flex-shrink-0 rounded-[20px] object-cover"
                                    />
                                </Helmet>
                            </div>

                            {/* Card 4 - Fire fighter */}
                            <div className="rounded-[20px] flex flex-col items-center">
                                <Helmet>
                                    <img
                                        src={image7}
                                        alt="Fire fighter"
                                        className="flex-shrink-0 rounded-[20px] object-cover"
                                    />
                                </Helmet>

                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeFive;