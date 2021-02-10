// Imports
// Redux toolkit imports
import { createSlice } from "@reduxjs/toolkit";
// Initial state imports
import { InitialState } from './initialState';

// Product Slice
export const tasksSlice = createSlice({
    name: "Tasks",
    initialState: InitialState,
    reducers: {
        add: (state, action) => {
          return{
            ...state,
            TasksList: [action.payload, ...state.TasksList]
          };
        },
        pinn: (state, action)=>{
          return{
            ...state,
            TasksList: [
              ...state.TasksList.filter( Task => Task.id !== action.payload.id), 
              action.payload
            ]
          }

        },
        archive: (state, action)=>{
          return{
            ...state,
            TasksList: [
              ...state.TasksList.filter( Task => Task.id !== action.payload.id), 
              action.payload
            ]
          }

        }
      }
});

// Actions Exports
export const {add, pinn, archive} = tasksSlice.actions;