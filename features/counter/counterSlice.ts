import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/configureStore";

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state: RootState) =>
  state.rootReducer.counter.value;
export const counterReducer = counterSlice.reducer;
