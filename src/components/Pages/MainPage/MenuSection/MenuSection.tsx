import React, { useState } from 'react';
import { IMenuItem, MenuCard } from "./MenuCard/MenuCard";
import { containsIgnoreCase } from "../../../../utils/Stringutils";
import { Notify } from "notiflix";
import FadeIn from "react-fade-in";

export const MenuSection = () => {

    const initialMenu: IMenuItem[] = require('jsons/menu.json')
    const [menu, setMenu] = useState(initialMenu);
    const [isShowMoreButtonVisible, setIsShowMoreButtonVisible] = useState(true);

    const handleCLick = (event: React.MouseEvent<HTMLLIElement>) => {
        const { dataset: { filter: dataFilter }, classList } = event.target as HTMLElement;
        setMenu(initialMenu.filter((dish: IMenuItem) => dataFilter === "*" ?
            dish
            : containsIgnoreCase(dish.type, dataFilter || '')
        ))

        // @ts-ignore
        new Array(...event.target.parentElement.childNodes).forEach((el) => {
            el.classList.remove('active')
        });
        classList.add('active');
        Notify.info(`Sorted by ${ dataFilter }`)

    }

    const handleNotify = (event: React.MouseEvent) => {
        event.preventDefault();
        setIsShowMoreButtonVisible(false);
        Notify.info("We'll expand our menu later! Thanks", {})
    }

    return (
        <section className="food_section layout_padding-bottom">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>
                        Our Menu
                    </h2>
                </div>

                <ul className="filters_menu">
                    <li onClick={ handleCLick } className={ "active" } data-filter="*">All</li>
                    <li onClick={ handleCLick } data-filter="burger">Burger</li>
                    <li onClick={ handleCLick } data-filter="pizza">Pizza</li>
                    <li onClick={ handleCLick } data-filter="pasta">Pasta</li>
                    <li onClick={ handleCLick } data-filter="fries">Fries</li>
                </ul>
                <div className="row grid">
                    { menu.map((item: IMenuItem) => (
                        <MenuCard key={ item.id } menu={ item }/>
                    )) }
                </div>

                <div className="btn-box">
                    { isShowMoreButtonVisible &&
                        <a
                            onClick={ handleNotify }
                            href="components/Main/Pages/MainPage/MenuSection/MenuSection"
                        >
                            View More
                        </a> }
                </div>
            </div>
        </section>
    );
};
