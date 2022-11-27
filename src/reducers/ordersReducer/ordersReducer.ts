import { OrdersTypes } from "./ordersTypes";
import { IOrder } from "../../components/sections/MenuSection/MenuCard/MenuCard";
import { Notify } from "notiflix";

interface IOrdersReducer {
    type: OrdersTypes,
    payload: IOrder
}

const initialState: IOrder[] = [];

export const ordersReducer = (state = initialState, { type, payload }: IOrdersReducer) => {
    switch (type) {
        case OrdersTypes.ADD_ORDER:
            const existedOrder = state.find(el => el.id === payload.id);

            if (existedOrder) {
                return [...state.filter(el => el.id !== existedOrder.id), {
                    ...existedOrder,
                    amount: existedOrder.amount + 1
                }].sort((a, b) => a.name.localeCompare(b.name))
            }

            Notify.success(`${ payload.name } was added to your shopping cart.`)

            return [...state, payload].sort((a, b) => a.name.localeCompare(b.name));
        case OrdersTypes.DELETE_ORDER:
            return state.filter((order) => order.id !== payload.id);
        case OrdersTypes.DECREMENT_AMOUNT:
            return payload.amount
                ? [...state.filter(el => el.id !== payload.id), payload
                ].sort((a, b) => a.name.localeCompare(b.name))
                : [...state.filter(el => el.id !== payload.id)]
        default:
            return initialState;
    }
}