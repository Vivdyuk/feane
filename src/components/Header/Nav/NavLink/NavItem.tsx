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
            <NavLink className="nav-link nav"  to={link}>{ name.replaceAll("_", " ") } <span className="sr-only"></span></NavLink>
        </li>
    );
};
