import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dustReducer from "./dustReducer/dust";

const rootReducer = combineReducers({
  dust: dustReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
