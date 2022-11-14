import React from 'react';
import { OfferSection } from "../../sections/OfferSection/OfferSection";
import { MenuSection } from "../../sections/MenuSection/MenuSection";
import { SliderSection } from "../../sections/SliderSection/SliderSection";
import { AboutSection } from "../../sections/AboutSection/AboutSection";
import { BookSection } from "../../sections/BookSection/BookSection";
import { ClientSection } from "../../sections/ClientSection/ClientSection";
import FadeIn from "react-fade-in";

export const MainPage = () => {
    return (
        <FadeIn>
            <div>
                <div className="hero_area">
                    <div className="bg-box">
                        <img src={ require('images/hero-bg.jpg') } alt=""/>
                    </div>
                    <SliderSection/>
                </div>
                <OfferSection/>
                <MenuSection/>
                <AboutSection />
                <BookSection />
                <ClientSection />
            </div>
        </FadeIn>

    );
};
