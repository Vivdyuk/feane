import React, { MouseEventHandler } from 'react';
import { Link } from "react-router-dom";
import { Notify } from "notiflix";

interface IYellowButtonProps {
    to?: string,
    className: string,
    text: string,
    onClick?: MouseEventHandler,
    type?: string
}

export const YellowButton = ({to, className, text, onClick, type }: IYellowButtonProps) => {

    // @ts-ignore
    const madeFeaturesLazy = (event: MouseEvent) => {
        event.preventDefault();

        Notify.info('We\'ll add that feature in the future. Keep posted!')
    }
    return (
        <Link
            to={to || ''}
            className={className}
            onClick={onClick || madeFeaturesLazy as unknown as MouseEventHandler}
            type={type || "button"}
        >
            {text}
        </Link>
    );
};
