import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./slice/cartSlice.js";

const store = configureStore({
    reducer: {
        cart: cartReducer
    }
});

store.subscribe(() => {
    localStorage.setItem('cart', JSON.stringify(store.getState().cart.data));
});

export default store;
