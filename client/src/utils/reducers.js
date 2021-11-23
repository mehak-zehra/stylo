import { useReducer } from 'react';

import {
    UPDATE_USER, ADD_TO_CART
} from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_USER:
            localStorage.setItem("user", JSON.stringify(action.user))
            return {
                ...state,
                user: action.user
            }
        case ADD_TO_CART:
            localStorage.setItem("cart", JSON.stringify(action.cart))
            return {
                ...state,
                cart: action.cart
            }
        default:
            return state;
    }
}

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
}