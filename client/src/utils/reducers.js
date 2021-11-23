import { useReducer } from 'react';

import {
    UPDATE_USER, ADD_TO_CART
} from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_USER:
            console.log(action.user)
            return {
                ...state,
                user: action.user
            }
        case ADD_TO_CART:
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