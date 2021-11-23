import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    let localUser = localStorage.getItem("user");
    let localCart = localStorage.getItem("cart");

    if (!localUser) {
        localUser = {
            isLoggedIn: false
        }
    } else {
        localUser = JSON.parse(localUser)
    }

    if (!localCart) {
        localCart = {}
    } else {
        localCart = JSON.parse(localCart)
    }

    const [state, dispatch] = useProductReducer({
        user: localUser,
        cart: localCart
    });

    // use this to confirm it works!
    // console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };