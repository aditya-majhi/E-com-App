import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            state.value.push(action.payload) ;
        },
        removeCart: (state, action) => {
            let ind = state.value.findIndex((elem) => { return elem === action.payload });
            state.value.splice(ind, 1);
        }
    }
})

export const { addCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;