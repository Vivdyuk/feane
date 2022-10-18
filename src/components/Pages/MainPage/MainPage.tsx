import React from 'react';
import { OfferSection } from "./OfferSection/OfferSection";
import { MenuSection } from "./MenuSection/MenuSection";
import { SliderSection } from "./SliderSection/SliderSection";
import { AboutSection } from "./AboutSection/AboutSection";
import { BookSection } from "./BookSection/BookSection";
import { ClientSection } from "./ClientSection/ClientSection";

export const MainPage = () => {
    return (
        <div>
            <OfferSection/>
            <MenuSection/>
            <AboutSection />
            <BookSection />
            <ClientSection />
        </div>
    );
};
