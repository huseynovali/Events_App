import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  loading: true,
  error: {},
  currentIndex: 0,
}
export const getData = createAsyncThunk(
  "/",
  async (_, { rejectWithValue }) => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    nextTicket: (state) => {
      state.currentIndex = (state.currentIndex + 1) % state.data.length;
    },
    prevTicket: (state) => {
      state.currentIndex =
        (state.currentIndex - 1 + state.data.length) % state.data.length;
    },
  },
  extraReducers: {
    [getData.pending]: (state) => {
      state.loading = true;
      state.data = [];
      state.error = null;
    },
    [getData.rejected]: (state, { payload }) => {
      state.loading = false;
      state.data = [];
      state.error = payload;
    },
    [getData.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
      state.error = null;
    },
  },
})

// Action creators are generated for each case reducer function
export const { nextTicket, prevTicket } = eventSlice.actions;

export default eventSlice.reducer