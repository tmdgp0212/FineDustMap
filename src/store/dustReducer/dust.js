import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  entities: [],
  loading: false,
  error: false,
};

export const getDustData = createAsyncThunk("dust/getDustData", async () => {
  const res = await axios.get("http://localhost:8000/response");
  console.log(res.data.body.items);
  return res.data.body.items;
});

const dust = createSlice({
  name: "dust",
  initialState,
  reducers: {},
  extraReducers: {
    [getDustData.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [getDustData.fulfilled]: (state, action) => {
      state.entities = action.payload;
      state.loading = false;
      state.error = false;
    },
    [getDustData.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default dust.reducer;
