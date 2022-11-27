import React from 'react';
import FadeIn from "react-fade-in";
import { useDispatch } from "react-redux";
import { addOrder } from "../../../../reducers/ordersReducer/ordersActions";

export interface IMenuItem {
    [key: string]: any,

    id: number,
    name: string,
    description: string,
    imgUrl: string,
    type: string,
    price: number,
    isActive: boolean,
    isAvailable: boolean
}

interface IMenuCardProps {
    menu: IMenuItem
}

export interface IOrder {
    name: string,
    price: number,
    amount: number,
    id: number,
    imgUrl: string,
}

export const MenuCard = ({ menu: { name, description, imgUrl, price, id } }: IMenuCardProps) => {
    const dispatch = useDispatch();
    const shortOrder = {
        name,
        id,
        price,
        imgUrl,
        amount: 1,
    }
    return (
        <div className="col-sm-6 col-lg-4  all pizza">
            <FadeIn>
                <div className="box">
                    <div>
                        <div className="img-box">
                            <img src={ imgUrl || require('images/favicon.png')} alt={ name }/>
                        </div>
                        <div className="detail-box">
                            <h5>
                                { name }
                            </h5>
                            <p>
                                { description }
                            </p>
                            <div className="options">
                                <h6>
                                    ${ price }
                                </h6>
                                <i className="fa fa-shopping-cart" onClick={ () => dispatch(addOrder(shortOrder)) }></i>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
};
