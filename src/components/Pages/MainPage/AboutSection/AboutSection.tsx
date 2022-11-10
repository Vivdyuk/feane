import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { NavLinkEnums } from "../../../Header/Nav/navLinkEnums";
import { YellowButton } from "../../../Shared/YellowButton/YellowButton";
import './AboutSection.scss';

export const AboutSection = () => {
    const navigate = useNavigate();

    const handleClick =() => {
        navigate(NavLinkEnums.ABOUT)
    }
    return (
        <section className="about_section layout_padding">
            <div className="container  ">

                <div className="row">
                    <div className="col-md-6 ">
                        <div className="img-box">
                            <img src={ require("images/about-img.png") } alt=""/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="detail-box">
                            <div className="heading_container">
                                <h2>
                                    We Are Feane
                                </h2>
                            </div>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority
                                have suffered alteration
                                in some form, by injected humour, or randomised words which don't look even slightly
                                believable. If you
                                are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                                embarrassing hidden in
                                the middle of text. All
                            </p>
                            <YellowButton onClick={handleClick} className={""} text={"Read More"} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
