import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ErrorState {
  value: {
    isOpen: boolean;
    messages: string[];
  };
}

const initialState = { value: { isOpen: false, messages: [] } } as ErrorState;

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    openError(state) {
      state.value.isOpen = true;
    },
    closeError(state) {
      state.value.isOpen = false;
      state.value.messages = [];
    },
    addError(state, action: PayloadAction<string[]>) {
      state.value.isOpen = true;
      state.value.messages = action.payload;
    },
  },
});

export const { addError, closeError, openError } = errorSlice.actions;
export const errorReducer = errorSlice.reducer;
