import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dustReducer from "./dustReducer/dust";

const rootReducer = combineReducers({
  dust: dustReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
