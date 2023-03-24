import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myCity: "서울",
  myDistrict: "중구",
  cityAll: "서울",
  bookmark: [],
};

const bookmark = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    changeMydist: (state, action) => ({
      ...state,
      myCity: action.payload.myCity,
      myDistrict: action.payload.myDistrict,
    }),
    changeCityAll: (state, action) => ({
      ...state,
      cityAll: action.payload.city,
    }),
    addBookmark: (state, action) => ({
      ...state,
      bookmark: [...state.bookmark, action.payload.bookmark],
    }),
    removeBookmark: (state, action) => ({
      ...state,
      bookmark: state.bookmark.filter(
        (item) => item !== action.payload.bookmark
      ),
    }),
  },
});

export const { changeMydist, changeCityAll, addBookmark, removeBookmark } =
  bookmark.actions;
export default bookmark.reducer;
