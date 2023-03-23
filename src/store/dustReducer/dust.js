import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  entities: [],
  loading: false,
  error: false,
  city: "",
};

export const getDustData = createAsyncThunk(
  "dust/getDustData",
  async (city = "서울") => {
    const getParameters = {
      serviceKey:
        "A+zIqxrKlXuKprsFurGTd/fNW+qEfUFK+bloQg22eqhtEBh73PGd2v3jMMz44U/odqLtRtDXNlmstF+Aw+BQFw==",
      returnType: "json",
      numOfRows: "100",
      pageNo: "1",
      sidoName: city,
      ver: "1.0",
    };

    const res = await axios.get(
      "/api/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty",
      { params: getParameters }
    );
    return { res: res.data.response.body.items, city: city };
  }
);

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
      state.entities = action.payload.res;
      state.loading = false;
      state.error = false;
      state.city = action.payload.city;
    },
    [getDustData.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default dust.reducer;
