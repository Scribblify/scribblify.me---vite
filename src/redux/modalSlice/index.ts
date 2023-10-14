import { createSlice } from "@reduxjs/toolkit";

type InitialStateProps = {
  profileModal: boolean;
  logOutDialogVisibility: boolean;
  authProcessDialog: boolean;
};

const initialState: InitialStateProps = {
  profileModal: false,
  logOutDialogVisibility: false,
  authProcessDialog: false,
};

const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    setLogOutDialogVisibility(state) {
      state.logOutDialogVisibility = !state.logOutDialogVisibility;
    },
    setProfileModalVisibility(state) {
      state.profileModal = !state.profileModal;
    },
    setAuthProcessDialog(state) {
      state.authProcessDialog = !state.authProcessDialog;
    },
  },
});

export default modalSlice.reducer;
export const {
  setLogOutDialogVisibility,
  setProfileModalVisibility,
  setAuthProcessDialog,
} = modalSlice.actions;
