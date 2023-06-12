// ticketSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  tickets: [],
  loading: true,
  error: "",
  currentIndex: 0,
};

export const getTickets = createAsyncThunk(
  "/",
  async ({ limit, category }, { rejectWithValue }) => {

    try {
      console.log(category);
      const token = JSON.parse(localStorage.getItem("token"));
      let url = category ? `http://localhost:5001/events/category/${category}?limit=${limit}` : `http://localhost:5001/events?limit=${limit}`
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data

    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const ticketSlice = createSlice({
  name: "ticketSlice",
  initialState,
  reducers: {
    nextTicket: (state) => {
      state.currentIndex = (state.currentIndex + 1) % state.tickets.length;
    },
    prevTicket: (state) => {
      state.currentIndex =
        (state.currentIndex - 1 + state.tickets.length) % state.tickets.length;
    },
  },
  extraReducers: {
    [getTickets.pending]: (state) => {
      state.loading = true;
      state.tickets = [];
      state.error = null;
    },
    [getTickets.rejected]: (state, { payload }) => {
      state.loading = false;
      state.tickets = [];
      state.error = payload;
    },
    [getTickets.fulfilled]: (state, { payload }) => {
      state.tickets = payload;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { nextTicket, prevTicket } = ticketSlice.actions;
export default ticketSlice.reducer;
