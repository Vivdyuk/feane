import React, { MouseEventHandler } from 'react';
import { Link } from "react-router-dom";
import { madeFeaturesLazy } from "../../../utils/utils";

interface IYellowButtonProps {
    to?: string,
    className: string,
    text: string,
    onClick?: MouseEventHandler | any,
    type?: string,
}

export const YellowButton = ({to, className, text, onClick, type }: IYellowButtonProps) => {

    return (
        <Link
            to={to || ''}
            className={className}
            onClick={onClick || madeFeaturesLazy}
            type={type || "button"}
        >
            {text}
        </Link>
    );
};
