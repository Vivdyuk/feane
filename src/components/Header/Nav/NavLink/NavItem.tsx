import React from 'react';
import { NavLinkEnums } from "../navLinkEnums";
import { NavLink } from "react-router-dom";

interface NavLinkProps {
    name: string;
    link: string;
}

export const NavItem = ({ name, link }: NavLinkProps) => {
    return (
        <li className="nav-item">
            <NavLink className="nav-link" to={link}>{ name } <span className="sr-only"></span></NavLink>
        </li>
    );
};
