import React, { useEffect, useState } from 'react';
import { IMenuItem, MenuCard } from "./MenuCard/MenuCard";
import { Notify } from "notiflix";
import { YellowButton } from "../../../Shared/YellowButton/YellowButton";
import { getData } from "../../../../utils/fetchUtils";
import { useLocation, useSearchParams } from "react-router-dom";
import { IMenuDataFilters } from "./IMenuDataFilters";
import { FilterButton } from "../../../Shared/FilterButton/FilterButton";

export const MenuSection = React.memo(() => {
    const [isShowMoreButtonVisible, setIsShowMoreButtonVisible] = useState(true);
    const [menu, setMenu] = useState<IMenuItem[]>([]);
    const [searchParams, setSearchParams] = useSearchParams({
        isActive: 'true',
        type: "Burger"
    })
    const location = useLocation();

    useEffect(() => {
        setSearchParams(location.search)
        getData('menu', searchParams).then(setMenu);
    }, [searchParams])

    const handleCLick = (event: React.MouseEvent<HTMLLIElement>) => {

        const { dataset: { filter: dataFilter } } = event.target as HTMLElement;

        setSearchParams({
            ...searchParams,
            type: dataFilter
        });

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
                    { Object.values(IMenuDataFilters).map(dataFilter => (
                        <FilterButton
                            key={ dataFilter }
                            onClick={ handleCLick }
                            dataFilter={ dataFilter }
                            className={ dataFilter === searchParams.get('type') ? 'active' : '' }
                        />
                    )) }
                </ul>
                <div className="row grid">
                    { menu.map((item: IMenuItem) => (
                        <MenuCard key={ item.id } menu={ item }/>
                    )) }
                </div>

                <div className="btn-box">
                    { isShowMoreButtonVisible &&
                        <YellowButton to={ "#" } className={ "" } text={ "View More" } onClick={ handleNotify }/>
                    }
                </div>
            </div>
        </section>
    );
});
