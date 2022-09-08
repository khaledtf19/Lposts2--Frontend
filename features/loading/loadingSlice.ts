import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { value: { isAnimation: false } };

export const loadingSlice = createSlice({
  name: "loading",
  initialState: initialState,
  reducers: {
    setAnimation(state, action: PayloadAction<boolean>) {
      state.value.isAnimation = action.payload;
    },
  },
});

export const { setAnimation } = loadingSlice.actions;
export const loadingReducer = loadingSlice.reducer;
