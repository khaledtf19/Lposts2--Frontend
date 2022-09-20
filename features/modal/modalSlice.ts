import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  value: {
    isOpen: boolean;
  };
}

const initialState = { value: { isOpen: false } } as ModalState;

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state) {
      state.value.isOpen = true;
    },
    closeModal(state) {
      state.value.isOpen = false;
    },
  },
});

export const { closeModal: closeModal, openModal: openModal } =
  modalSlice.actions;
export const modalReducer = modalSlice.reducer;
