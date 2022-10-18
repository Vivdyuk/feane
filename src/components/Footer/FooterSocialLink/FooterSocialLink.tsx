import React from 'react';

interface FooterSocialLinkProps {
    name: string,
    link: string
}

export const FooterSocialLink = ({name, link}: FooterSocialLinkProps) => {
    return (
            <a href={link}>
                <i className={`fa fa-${name}`} aria-hidden="true"></i>
            </a>
    );
};
