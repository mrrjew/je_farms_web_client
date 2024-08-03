import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";
import cartSliceReducer from "./cart/cart.slice";

export const store = configureStore({
    reducer:{
        auth:authReducer,
        cart:cartSliceReducer
    }
})
