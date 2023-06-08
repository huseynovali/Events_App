import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {

  },
})

// Action creators are generated for each case reducer function
export const { } = eventSlice.actions

export default eventSlice.reducer