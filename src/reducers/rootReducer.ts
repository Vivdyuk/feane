import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { ordersReducer } from "./ordersReducer/ordersReducer";

export type RootState = ReturnType<typeof reducer>

const reducer = combineReducers({
        orders: ordersReducer,
    });

export const selectOrdersReducer = (state: RootState) => state.orders;

export const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
});

export type StoreDispatch = typeof store.dispatch