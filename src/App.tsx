import React from 'react';
import './App.css';
import './fonts/fontawesome-webfont.woff2';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { FeaneRouter } from "./router/FeaneRouter";
import { Notify } from "notiflix";
import { getInitNotifyConfigs } from "./utils/initNotify";

export function App() {
    Notify.init(getInitNotifyConfigs());

    return (
        <>
            <Header/>
            <FeaneRouter/>
            <Footer/>
        </>
    );
}

