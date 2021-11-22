import { useReducer } from 'react';

import {
    UPDATE_USER,
} from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_USER:
            console.log(action.user)
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
}