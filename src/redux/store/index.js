import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authUserSlice from "../authUserSlice";
import cartSlice from "../cartSlice";

const rootReducer = combineReducers({
  authUserSlice,
  cartSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
