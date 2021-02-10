// Imports
// Redux tollkit imports
import {configureStore} from '@reduxjs/toolkit'
// Product slice imports
import {tasksSlice} from './tasksSlice'

// Configure store
export const store = configureStore({ reducer: tasksSlice.reducer }) 