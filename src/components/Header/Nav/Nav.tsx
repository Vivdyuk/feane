import React, { FormEventHandler, MouseEventHandler, useState } from 'react';
import { NavLinkEnums } from "./navLinkEnums";
import { NavItem } from "./NavItem/NavItem";
import { NavLink } from "react-router-dom";
import './Nav.scss';
import { madeFeaturesLazy, revertBooleanState } from "../../../utils/utils";
import { OrderModal } from "../../Orders/Modal/OrderModal";

export const Nav = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isCollapsion, setIsCollapsion] = useState(false);

    const toggleNavBar = () => {
        setIsCollapsion(revertBooleanState);

        setTimeout(() => {
            setIsCollapsion(revertBooleanState);
            setIsMenuOpen(revertBooleanState);

        }, 100)
    }

    const openModal: MouseEventHandler = (event) => {
        event.preventDefault();
        setIsModalOpen(true);
    }

    return (
        <nav className="navbar navbar-expand-lg custom_nav-container ">
            <NavLink className="navbar-brand" to={ 'home' }>
            <span>
              Feane
            </span>
            </NavLink>

            <button
                onClick={ toggleNavBar }
                className={ `navbar-toggler ${ !isMenuOpen ? 'collapsed' : '' } ` }
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded={ isMenuOpen }
                aria-label="Toggle navigation">
                <span className=""> </span>
            </button>

            <div
                className={ `collapse navbar-collapse ${ isMenuOpen ? 'show' : '' } ${ isCollapsion ? 'collapsing' : '' }` }
                id="navbarSupportedContent"
                style={ isCollapsion ? { height: '246px' } : {} }
            >
                <ul className="navbar-nav  mx-auto ">
                    { Object.entries(NavLinkEnums).map(([key, value]) => (
                        <NavItem key={ value } name={ key } link={ value.toLocaleLowerCase() }/>
                    )) }
                </ul>
                <div className="user_option">
                    <a href="" className="user_link" onClick={madeFeaturesLazy}>
                        <i className="fa fa-user" aria-hidden="true"></i>
                    </a>
                    <a className="cart_link" href="#" onClick={openModal}>
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    </a>
                    <form className="form-inline" onSubmit={madeFeaturesLazy as FormEventHandler}>
                        <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </form>
                    <button type="button" className="order_online" data-toggle="modal" data-target="#myModal"
                            onClick={openModal}>Order Online
                    </button>
                    <OrderModal show={isModalOpen} setShow={setIsModalOpen}  />
                </div>
            </div>
        </nav>
    );
};
