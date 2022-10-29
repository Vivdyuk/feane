import React, { MouseEventHandler } from 'react';
import { Link } from "react-router-dom";

interface IYellowButtonProps {
    to?: string,
    className: string,
    text: string,
    onClick?: MouseEventHandler,
    type?: string
}

export const YellowButton = ({to, className, text, onClick, type }: IYellowButtonProps) => {
    return (
        <Link
            to={to || ''}
            className={className}
            onClick={onClick}
            type={type || "button"}
        >
            {text}
        </Link>
    );
};
