import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  myCity: "",
  myDistrict: "",
  cityAll: "",
  bookmark: [],
};

if (initialState.myCity === "") {
  const savedData = JSON.parse(localStorage.getItem("states"));
  if (savedData) {
    initialState = { ...savedData };
  } else {
    initialState = {
      myCity: "서울",
      myDistrict: "중구",
      cityAll: "서울",
      bookmark: [],
    };
  }
}

const bookmark = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    changeMydist: (state, action) => {
      const newState = {
        ...state,
        myCity: action.payload.myCity,
        myDistrict: action.payload.myDistrict,
      };
      localStorage.setItem("states", JSON.stringify(newState));
      return newState;
    },
    changeCityAll: (state, action) => {
      const newState = {
        ...state,
        cityAll: action.payload.city,
      };
      localStorage.setItem("states", JSON.stringify(newState));
      return newState;
    },
    addBookmark: (state, action) => {
      const newState = {
        ...state,
        bookmark: [...state.bookmark, action.payload.bookmark],
      };
      localStorage.setItem("states", JSON.stringify(newState));
      return newState;
    },
    removeBookmark: (state, action) => {
      const newState = {
        ...state,
        bookmark: state.bookmark.filter(
          (item) => item.stationName !== action.payload.bookmark.stationName
        ),
      };
      localStorage.setItem("states", JSON.stringify(newState));
      return newState;
    },
  },
});

export const { changeMydist, changeCityAll, addBookmark, removeBookmark } =
  bookmark.actions;
export default bookmark.reducer;
