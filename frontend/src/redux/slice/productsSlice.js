import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = [];

const products = createSlice ({
  name: 'products',
  initialState,
  reducers: {
    addProducts: (state, action) => {
      console.log(state, action)
    }
  }
})