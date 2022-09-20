import { combineReducers } from "@reduxjs/toolkit";
import { errorReducer } from "../error/errorSlice";
import { loadingReducer } from "../loading/loadingSlice";
import { modalReducer } from "../modal/modalSlice";

export const rootReducer = combineReducers({
  error: errorReducer,
  loading: loadingReducer,
  modal: modalReducer,
});
