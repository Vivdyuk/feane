import React from 'react';
import OwlCarousel from "react-owl-carousel";
import { ISliderBanner, SliderBody } from "./SliderBody/SliderBody";

const owlCarouselConfig = {
    loop: true,
    margin: 0,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplaySpeed: 1500,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
}


export const SliderSection = () => {
    const sliderBanners = require('jsons/banners.json').filter((banner: ISliderBanner) => banner.isActive);
    return (
        <section className="slider_section ">
            <OwlCarousel className='owl-theme' { ...owlCarouselConfig } >
                { sliderBanners.map((banner: ISliderBanner) => (
                    <SliderBody key={ banner.id } banner={ banner }/>
                )) }
            </OwlCarousel>
        </section>
    );
};
