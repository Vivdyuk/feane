import React, { useEffect, useState } from 'react';
import { ClientCard } from "./ClientCard/ClientCard";
import OwlCarousel from 'react-owl-carousel';
import 'font-awesome/css/font-awesome.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { getCustomers, getData } from "../../../utils/fetchUtils";
import './ClientSection.scss';


export interface IClientComment {
    id: number,
    imgUrl: string,
    name: string,
    timestamp: string | Date
}

const owlCarouselConfig = {
    loop: true,
    margin: 0,
    autoplay: true,
    dots: false,
    autoplayTimeout: 2000,
    autoplaySpeed: 1500,
    autoplayHoverPause: true,
    nav: true,
    navText: [
        "<i class='fa fa-angle-left' aria-hidden='true'></i>",
        "<i class='fa fa-angle-right' aria-hidden='true'></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
}

export const ClientSection = () => {
    const [comments, setComments] = useState<IClientComment[]>([]);

    useEffect(() => {
        getCustomers(6).then(data => {
            console.log(data);

            return data;
        }).then(setComments);
        // getData('clients').then(setComments)
    }, [])
    return (
        <section className="client_section layout_padding-bottom">
            <div className="container">
                <div className="heading_container heading_center psudo_white_primary mb_45">
                    <h2>
                        What Says Our Customers
                    </h2>
                </div>
                <div className="carousel-wrap row ">
                    <OwlCarousel className='owl-theme' { ...owlCarouselConfig } >
                        { comments.map((comment: IClientComment) => <ClientCard key={ comment.id }
                                                                                client={ comment }/>) }
                    </OwlCarousel>
                </div>
            </div>
        </section>
    );
};
