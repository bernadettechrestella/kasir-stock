import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice"

const store = configureStore({
    reducer: {
        cart: cartReducer, //membuat reducer untuk cart
    },
})

store.subscribe(() => {
    console.log("Store change: ", store.getState())
})

export default store;