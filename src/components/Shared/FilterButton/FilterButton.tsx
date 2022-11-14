import React, { MouseEventHandler } from 'react';
import { IMenuDataFilters } from "../../sections/MenuSection/IMenuDataFilters";

interface IFilterButtonProps {
    onClick: MouseEventHandler,
    dataFilter: IMenuDataFilters,
    className: string
}

export const FilterButton = ({ onClick, dataFilter, className} : IFilterButtonProps ) => {
    return (
        <li onClick={ onClick } className={className} data-filter={dataFilter}>{dataFilter}</li>
    );
};
