import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";
import cartSliceReducer from "./cart/cart.slice";
import productReducer from "./product/product.slice";

export const store = configureStore({
    reducer:{
        auth:authReducer,
        cart:cartSliceReducer,
        product:productReducer
    }
})
