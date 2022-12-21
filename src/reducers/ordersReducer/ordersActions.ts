import { OrdersTypes } from "./ordersTypes";
import { IOrder } from "../../components/sections/MenuSection/MenuCard/MenuCard";

export const addOrder = (order: IOrder) => {

    return {
        type: OrdersTypes.ADD_ORDER,
        payload: order
    };
}
export const deleteOrder = (id: number) => ({
    type: OrdersTypes.DELETE_ORDER,
    payload: { id }
})

export const decrementOrderAmount = (order: IOrder) => {
    return {
        type: OrdersTypes.DECREMENT_AMOUNT,
        payload: {
            ...order,
            amount: order.amount - 1
        }
    }
}

export const clearOrders = () => {
    return {
        type: OrdersTypes.CLEAR_ORDERS,
        payload: [],
    }
}