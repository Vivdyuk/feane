import React, { useState } from 'react';
import { ClientCard } from "./ClientCard/ClientCard";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export interface IClientComment {
    id: number,
    imgUrl: string,
    name: string,
    comment: string,
    timestamp: string | Date
}


export const ClientSection = () => {
    const [comments, setComments] = useState(require('jsons/clients.json'));
    console.log(comments)
    return (
        <section className="client_section layout_padding-bottom">
            <div className="container">
                <div className="heading_container heading_center psudo_white_primary mb_45">
                    <h2>
                        What Says Our Customers
                    </h2>
                </div>
                <div className="carousel-wrap row ">
                    <OwlCarousel className='owl-theme' loop margin={ 10 } nav>
                        { comments.map((comment: IClientComment) => <ClientCard key={ comment.id }
                                                                                client={ comment }/>) }
                    </OwlCarousel>
                </div>
            </div>
        </section>
    );
};
