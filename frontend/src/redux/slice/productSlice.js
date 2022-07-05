import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL} from "../../constants/productConstants";


const initialState = {
  products: []
};

const productSlice = createSlice ({
  name: 'product',
  initialState,
  reducers: {
    addProducts: (state, action) => {
      console.log(state, action)
    },
    removeProducts: (state, action) => {
      console.log(state, action)
    },
    productList: (state, action) => {
      switch(action.type) {
        case PRODUCT_LIST_REQUEST:
          return { loading: true, products: [] }
        case PRODUCT_LIST_SUCCESS:
          return { loading: false, products: action.payload}
        case PRODUCT_LIST_FAIL:
          return { loading: false, error: action.payload}
        default:
          return state;
      }
    }
  }
})


export const {addProducts, removeProducts, productLi} = productSlice.actions;

export default productSlice.reducer;