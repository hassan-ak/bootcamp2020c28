import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from './initialState';

export const productsSlice = createSlice({
  name: "Products",
  initialState: InitialState,
  reducers: {
    add: (state, action) => {
      return state.map(item => {
        if (item.id !== action.payload.id) {
          return item
        }

        return {
          ...item,
          added: true
        }
      })
    },
    remove: (state, action) => {
            return state.map(item => {
              if (item.id !== action.payload.id) {
                return item
              }
      
              return {
                ...item,
                added: false       
              }
            })
          }
  }
});

export const { add } = productsSlice.actions;