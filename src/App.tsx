import React from 'react';
import './App.css';
import './fonts/fontawesome-webfont.woff2';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { SliderSection } from "./components/Pages/MainPage/SliderSection/SliderSection";
import { FeaneRouter } from "./router/FeaneRouter";

export function App() {
    return (
        <>
            <div className="hero_area">
                <div className="bg-box">
                    <img src={require('./images/hero-bg.jpg')} alt=""/>
                </div>
                <Header/>
                <SliderSection/>
            </div>

            <FeaneRouter />
            




            /** footer section */
            <Footer />
        </>
    );
}

