import { configureStore } from '@reduxjs/toolkit'
import ticketReducer from "../store/ticketSlice"

export const store = configureStore({
  reducer: {
    ticketReducer:ticketReducer,
    
  },
})