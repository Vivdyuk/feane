import React from 'react';
import './App.scss';
import './fonts/fontawesome-webfont.woff2';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Confirm, Notify, Report } from "notiflix";
import { getInitNotiflixConfigs } from "./utils/initNotify";
import { FeaneRouter } from "./router/FeaneRouter";

export function App() {
    const { confirm, notify, report} = getInitNotiflixConfigs();
    Notify.init(notify);
    Confirm.init(confirm);
    Report.init(report);
    return (
        <>
            <Header/>
            <FeaneRouter />
            <Footer/>
        </>
    );
}

