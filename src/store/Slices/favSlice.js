import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}

export const favSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addFav: (state , action) => {
            state.value.push(action.payload) ;    
        },
        removeFav: (state , action) => {
            let ind = state.value.findIndex((elem) => {return (elem === action.payload)}) ;
            state.value.splice(ind , 1) ;
        }
    }
})

export const { addFav , removeFav } = favSlice.actions ;

export default favSlice.reducer ;