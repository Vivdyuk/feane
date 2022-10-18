import React from 'react';
import { FooterLinksEnum } from "./FooterLinksEnum";
import { FooterSocialLink } from "./FooterSocialLink/FooterSocialLink";

export const Footer = () => {
    return (
        <footer className="footer_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 footer-col">
                        <div className="footer_contact">
                            <h4>
                                Contact Us
                            </h4>
                            <div className="contact_link_box">
                                <a href="">
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    <span>
                  Location
                </span>
                                </a>
                                <a href="">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <span>
                  Call +01 1234567890
                </span>
                                </a>
                                <a href="">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    <span>
                  demo@gmail.com
                </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 footer-col">
                        <div className="footer_detail">
                            <a href="" className="footer-logo">
                                Feane
                            </a>
                            <p>
                                Necessary, making this the first true generator on the Internet. It uses a
                                dictionary of over 200 Latin
                                words, combined with
                            </p>
                            <ul className="footer_social">
                                { Object.entries(FooterLinksEnum).map(([name, link]) => (
                                    <li key={ name }>
                                        <FooterSocialLink link={ link } name={ name.toLocaleLowerCase() }/>
                                    </li>
                                )) }
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 footer-col">
                        <h4>
                            Opening Hours
                        </h4>
                        <p>
                            Everyday
                        </p>
                        <p>
                            10.00 Am -10.00 Pm
                        </p>
                    </div>
                </div>
                <div className="footer-info">
                    <p>
                        &copy; <span id="displayYear"></span> All Rights Reserved
                    </p>
                    <p>2022</p>
                </div>
            </div>
        </footer>
    );
};