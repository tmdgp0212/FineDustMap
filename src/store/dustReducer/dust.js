import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getParameters = {
  serviceKey:
    "A+zIqxrKlXuKprsFurGTd/fNW+qEfUFK+bloQg22eqhtEBh73PGd2v3jMMz44U/odqLtRtDXNlmstF+Aw+BQFw==",
  returnType: "json",
  numOfRows: "100",
  pageNo: "1",
  sidoName: "서울",
  ver: "1.0",
};

const initialState = {
  entities: [],
  loading: false,
  error: false,
};

export const getDustData = createAsyncThunk("dust/getDustData", async () => {
  const res = await axios.get(
    "/api/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty",
    { params: getParameters }
  );
  return res.data.response.body.items;
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
