import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MenuPage } from '../components/Pages/MenuPage/MenuPage';
import { MainPage } from '../components/Pages/MainPage/MainPage';
import { BookPage } from '../components/Pages/BookPage/BookPage';
import { AboutPage } from '../components/Pages/AboutPage/AboutPage';
import { NavLinkEnums } from '../components/Header/Nav/navLinkEnums';

export const FeaneRouter = () => {
    const {HOME, MENU, BOOK, ABOUT} = NavLinkEnums;
    return (
        <Routes>
            <Route path={HOME} element={<MainPage/>}/>
            <Route path={MENU} element={<MenuPage/>}/>
            <Route path={ABOUT} element={<AboutPage/>}/>
            <Route path={BOOK} element={<BookPage/>}/>
            <Route path="*" element={<MainPage/>}/>
        </Routes>
    );
};
