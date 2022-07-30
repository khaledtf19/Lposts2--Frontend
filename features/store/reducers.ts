import { combineReducers } from "@reduxjs/toolkit";
import { counterReducer } from "../counter/counterSlice";

export const rootReducer = combineReducers({
  counter: counterReducer,
});
