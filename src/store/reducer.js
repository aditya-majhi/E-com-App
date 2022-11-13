import { combineReducers } from "@reduxjs/toolkit";
import productSlice from "./Slices/productSlice";
import cartSlice from "./Slices/cartSlice";
import favSlice from "./Slices/favSlice";

export default combineReducers({
    url:productSlice,
    cart: cartSlice,
    favorite: favSlice
})