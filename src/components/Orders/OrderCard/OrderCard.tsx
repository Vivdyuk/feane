import React, { memo } from 'react';
import {  Image, Stack } from "react-bootstrap";
import { IOrder } from "../../sections/MenuSection/MenuCard/MenuCard";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { addOrder, decrementOrderAmount, deleteOrder } from "../../../reducers/ordersReducer/ordersActions";
import { defaultFlexProps } from "../../../utils/utils";

interface IOrderCardProps {
    order: IOrder,
    index: number
}

export const OrderCard = memo(({ order, index }: IOrderCardProps) => {
    const dispatch = useDispatch();
    console.log('rerendered');
    const { name, price, amount, imgUrl } = order;

    return (

        <tr>
            <td>{ index + 1 }</td>
            <td>
                <Image
                    src={ imgUrl || require('images/favicon.png') }
                       style={ { width: 100, height: 100, ...defaultFlexProps } }
                       roundedCircle={ true }
                       alt={ name }
                />
            </td>
            <td>
                <p style={defaultFlexProps}>{ name }</p>
            </td>
            <td colSpan={2}>
                <Stack
                    gap={4}
                    style={defaultFlexProps}
                >
                    <Button
                        variant={ 'outline-warning' }
                        onClick={ () => dispatch(decrementOrderAmount(order)) }
                    >
                        <i className={'fa fa-minus'}></i>
                    </Button>
                    <h2> { `-${amount}-` } </h2>
                    <Button
                        variant={ 'outline-warning' }
                        onClick={ () => dispatch(addOrder(order)) }
                    >
                        <i className={'fa fa-plus'}></i>
                    </Button>
                    <Button
                        variant={ 'outline-warning' }
                        onClick={ () => dispatch(deleteOrder(order.id)) }
                    >
                        <i className={'fa fa-crosshairs'}></i>
                    </Button>
                </Stack>
            </td>
            <td>
                <h2 style={defaultFlexProps}>${ price }</h2>
            </td>
            <td>
                <h2 style={defaultFlexProps}>${ price * amount }</h2>
            </td>
        </tr>

    );
}, (prevProps, nextProps) => prevProps.order.amount === nextProps.order.amount);
