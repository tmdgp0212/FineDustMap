import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  entities: {
    citiesData: [],
    bookmarkData: [],
  },
  loading: false,
  error: false,
};

const getParameters = (city) => {
  return {
    serviceKey: import.meta.env.VITE_API_KEY,
    returnType: "json",
    numOfRows: "100",
    pageNo: "1",
    sidoName: city,
    ver: "1.0",
  };
};

export const getDustData = createAsyncThunk(
  "dust/getDustData",
  async (city = "서울") => {
    const Parameters = getParameters(city);

    const res = await axios.get(
      "https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty",
      { params: Parameters }
    );
    return res.data.response.body.items;
  }
);

export const getBookmarkData = createAsyncThunk(
  "dust/getBookmarkData",
  async (bookmarkList) => {
    const arr = [];
    let result;

    for (const bookmark of bookmarkList) {
      const Parameters = getParameters(bookmark.sidoName);
      const res = await axios.get(
        "https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty",
        { params: Parameters }
      );

      result = res.data.response.body.items.find(
        (data) => data.stationName === bookmark.stationName
      );

      arr.push(result);
    }
    return arr;
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
      state.entities.citiesData = action.payload;
      state.loading = false;
      state.error = false;
    },
    [getDustData.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
    [getBookmarkData.pending]: (state) => {
      state.entities.bookmarkData = [];
      state.loading = true;
      state.error = false;
    },
    [getBookmarkData.fulfilled]: (state, action) => {
      state.entities.bookmarkData = action.payload;
      state.loading = false;
      state.error = false;
    },
    [getBookmarkData.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { setBookmark, clearBookmark } = dust.actions;
export default dust.reducer;
