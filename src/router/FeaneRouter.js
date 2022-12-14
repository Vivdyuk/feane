import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavLinkEnums } from '../components/Header/Nav/navLinkEnums';
import FadeIn from 'react-fade-in';
import { Loader } from '../components/shared/Loader/Loader';

const HomePageLazy = React.lazy(() => import('../components/Pages/MainPage/MainPage').then(module => ({default: module.MainPage})));
const BookPageLazy = React.lazy(() => import('../components/Pages/BookPage/BookPage').then(module => ({default: module.BookPage})));
const AboutPageLazy = React.lazy(() => import('../components/Pages/AboutPage/AboutPage').then(module => ({default: module.AboutPage})));
const MenuPageLazy = React.lazy(() => import('../components/Pages/MenuPage/MenuPage').then(module => ({default: module.MenuPage})));

export const FeaneRouter = () => {
    const {HOME, MENU, BOOK_TABLE, ABOUT} = NavLinkEnums;

    return (
        <FadeIn>


            <Suspense fallback={<Loader/>}>
                <Routes>
                    <Route path={HOME} element={<HomePageLazy/>} index/>
                    <Route path={MENU} element={<MenuPageLazy/>}/>
                    <Route path={`${MENU}?isActive=:isActive&type=:type`} element={<MenuPageLazy/>}/>
                    <Route path={ABOUT} element={<AboutPageLazy/>}/>
                    <Route path={BOOK_TABLE} element={<BookPageLazy/>}/>
                    <Route path={'Loader'} element={<Loader/>}/>
                    <Route path="*" element={<HomePageLazy/>}/>
                </Routes>
            </Suspense>
        </FadeIn>
    );
};