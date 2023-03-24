import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dustReducer from "./dustReducer/dust.js";
import bookmarkReducer from "./bookmarkReducer/bookmark.js";

const rootReducer = combineReducers({
  dust: dustReducer,
  bookmark: bookmarkReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
