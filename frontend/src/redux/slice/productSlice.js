import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = [];

const productSlice = createSlice ({
  name: 'products',
  initialState,
  reducers: {
    addProducts: (state, action) => {
      console.log(state, action)
    },
    removeProducts: (state, action) => {
      console.log(state, action)
    }
  }
})


export const {addProducts, removeProducts} = productSlice.actions;

export default productSlice.reducer;