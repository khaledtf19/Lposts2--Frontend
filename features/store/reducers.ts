import { combineReducers } from "@reduxjs/toolkit";
import { errorReducer } from "../error/errorSlice";
import { loadingReducer } from "../loading/loadingSlice";

export const rootReducer = combineReducers({
  error: errorReducer,
  loading: loadingReducer,
});
