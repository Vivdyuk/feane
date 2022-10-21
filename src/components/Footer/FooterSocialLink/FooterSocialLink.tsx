import React from 'react';
import 'font-awesome/css/font-awesome.min.css';


interface FooterSocialLinkProps {
    name: string,
    link: string
}

export const FooterSocialLink = ({name, link}: FooterSocialLinkProps) => {
    return (
            <a href={link} target="_blank">
                <i className={`fa fa-${name}`} aria-hidden="true"></i>
            </a>
    );
};
