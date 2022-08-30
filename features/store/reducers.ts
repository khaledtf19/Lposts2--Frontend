import { combineReducers } from "@reduxjs/toolkit";
import { errorReducer } from "../error/errorSlice";

export const rootReducer = combineReducers({
  error: errorReducer,
});
