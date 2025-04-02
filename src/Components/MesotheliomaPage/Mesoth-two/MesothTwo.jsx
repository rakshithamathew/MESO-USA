/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useEffect } from 'react';
import "./MesothTwo.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image2 from "../../../assets/Frame 76 (3).png";
import image3 from "../../../assets/Frame 76 (4).png";
import image4 from "../../../assets/Frame 76 (5).png";
import image5 from "../../../assets/Frame 76 (6).png";

function MesothTwo() {
    const carouselRef = useRef(null);

    useEffect(() => {
        const handleScroll = (e) => {
            if (carouselRef.current && window.innerWidth >= 768) { // Only enable scroll on desktop
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

    const cards = [
        { image: image2, alt: "Construction Workers" },
        { image: image3, alt: "Shipyard Workers" },
        { image: image4, alt: "Auto Mechanics" },
        { image: image5, alt: "Fire fighter" }
    ];

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="max-w-3xl w-full text-[#2E4A7D] text-center font-[Georgia] text-5xl md:text-6xl lg:text-8xl italic font-normal leading-tight mx-auto py-4">
                Who is at risk?
            </h1>

            <p className="text-[#4B2C5E] mt-5 text-center font-[Helvetica] text-[24px] font-normal leading-none">
                Each year, more than <span className="font-bold">3,000 people</span> in the United States are diagnosed with mesothelioma.
                The disease primarily <span className="font-bold">affects individuals aged 55 and older, with men being diagnosed more often than women</span>.
                Certain occupations and environments increase mesothelioma risk. People exposed to asbestos fibers at work or home are the most vulnerable.
            </p>

            {/* Desktop Carousel View */}
            <div className="relative custom-carousel">
                <Carousel
                    ref={carouselRef}
                    showArrows={false}
                    showStatus={false}
                    showThumbs={false}
                    infiniteLoop={false}
                    centerMode={true}
                    centerSlidePercentage={33.33}
                    emulateTouch={true}
                    swipeable={true}
                    showIndicators={false}
                    dynamicHeight={false}
                    swipeScrollTolerance={50}
                    preventMovementUntilSwipeScrollTolerance={true}
                >
                    {cards.map((card, index) => (
                        <div key={index} className="flex-shrink-0 w-[390px] h-[500px] rounded-[20px] flex flex-col items-center p-4 mx-2">
                            <img
                                src={card.image}
                                alt={card.alt}
                                className="w-[324px] h-[418px] flex-shrink-0 rounded-[20px] object-cover"
                            />
                        </div>
                    ))}
                </Carousel>
            </div>

            {/* Mobile Stacked View */}
            <div className="mobile-cards">
                {cards.map((card, index) => (
                    <div key={index} className="flex-shrink-0 w-full rounded-[20px] flex flex-col items-center p-4">
                        <img
                            src={card.image}
                            alt={card.alt}
                            className="w-full max-w-[324px] h-[418px] flex-shrink-0 rounded-[20px] object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MesothTwo;