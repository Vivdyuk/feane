import React from 'react';
import { YellowButton } from "../../../../Shared/YellowButton/YellowButton";

interface OfferCardProps {
    name: string,
    src: string,
    discount: number
}

export const OfferCard = ({src, name, discount}: OfferCardProps) => {
    return (
        <div className="box ">
            <div className="img-box">
                <img src={ require(`images/${src}`) } alt=""/> //src
            </div>
            <div className="detail-box">
                <h5>
                    {name}
                </h5>
                <h6>
                    <span>{discount}%</span> Off
                </h6>
                <YellowButton to={"#"} className={""} text={"Order now"} />
            </div>
        </div>
    );
};
