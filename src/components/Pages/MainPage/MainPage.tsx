import React from 'react';
import { OfferSection } from "./OfferSection/OfferSection";
import { MenuSection } from "./MenuSection/MenuSection";
import { SliderSection } from "./SliderSection/SliderSection";
import { AboutSection } from "./AboutSection/AboutSection";
import { BookSection } from "./BookSection/BookSection";
import { ClientSection } from "./ClientSection/ClientSection";
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
