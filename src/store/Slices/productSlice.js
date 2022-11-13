import { createSlice } from '@reduxjs/toolkit' ;

const initialState = {
  value: ''
}

export const ProductSlice = createSlice({
  name: 'url',
  initialState ,
  reducers: {
    singleProduct : (state , action) => {
        state.value = `https://fakestoreapi.com/products/${action.payload}`
    }
  }
})

export const { singleProduct } = ProductSlice.actions

export default ProductSlice.reducer
