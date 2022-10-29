import React from 'react';
import './App.scss';
import './fonts/fontawesome-webfont.woff2';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Notify } from "notiflix";
import { getInitNotifyConfigs } from "./utils/initNotify";
import { RouterProvider } from "react-router-dom";
import { FeaneRouter } from "./router/FeaneRouter";

export function App() {
    Notify.init(getInitNotifyConfigs());

    return (
        <>
            <Header/>
            <FeaneRouter />
            <Footer/>
        </>
    );
}

