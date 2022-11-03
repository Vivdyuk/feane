import React from 'react';
import { OfferCard } from "./OfferCard/OfferCard";
import './OfferSection.scss';

interface IOffer {
    id: number,
    name: string,
    imgSrc: string,
    discount: number,
    isActive: boolean

}
export const OfferSection = () => {

    const  offers :Array<IOffer> = JSON.parse(JSON.stringify(require("../../../../jsons/offers.json"))).filter((offer:IOffer )=> offer.isActive);
    
    return (
        /** offer section */

        <section className="offer_section layout_padding-bottom">
            <div className="offer_container">
                <div className="container ">
                    <div className="row">
                        { Object.values(offers).map(({ name, imgSrc: src, discount, id }) => (

                                <div className="col-md-6  " key={ id }>
                                    <OfferCard name={ name } src={ src } discount={ discount }/>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </section>

        /** end offer section */
    );
};
