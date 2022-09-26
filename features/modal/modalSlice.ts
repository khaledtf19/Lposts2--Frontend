import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  value: {
    isOpen: boolean;
    message: string;
    btnFun?: Function;
    btnMessage?: string;
  };
}

const initialState = {
  value: { isOpen: false, btnFun: () => {}, message: "", btnMessage: "" },
} as ModalState;

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(
      state,
      actions: {
        type: string;
        payload: { message: string; btnFun?: Function; btnMessage?: string };
      }
    ) {
      state.value.isOpen = true;
      state.value.message = actions.payload?.message;
      state.value.btnMessage = actions.payload.btnMessage;

      if (actions.payload.btnFun) {
        state.value.btnFun = actions.payload.btnFun;
      }
    },
    closeModal(state) {
      state.value.isOpen = false;
      state.value.message = "";
      state.value.btnMessage = "";
      state.value.btnFun = () => {};
    },
  },
});

export const { closeModal: closeModal, openModal: openModal } =
  modalSlice.actions;
export const modalReducer = modalSlice.reducer;
