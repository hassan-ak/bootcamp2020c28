import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from './initialState';

export const productsSlice = createSlice({
    name: "Products",
    initialState: InitialState,
    reducers: {
        add: (state, action) => {
          // add item
        }
      }
});

export const {add} = productsSlice.actions;
export default productsSlice.reducer;