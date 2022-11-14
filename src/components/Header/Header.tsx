import React from 'react';
import './Header.scss';
import '../../App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from "./Nav/Nav";

export const Header: React.FC= () => {
    return (
        <header className="header_section">
            <div className="container header-container">
                <Nav />
            </div>
        </header>
    );
};
