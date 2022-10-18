import React from 'react';
import './Header.css';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from "./Nav/Nav";

export const Header: React.FC= () => {
    return (
        <header className="header_section">
            <div className="container">
                <Nav />
            </div>
        </header>
    );
};