import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authUserSlice from "../authUserSlice";

const rootReducer = combineReducers({
  authUserSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
