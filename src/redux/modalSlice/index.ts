import { createSlice } from "@reduxjs/toolkit";

type InitialStateProps = {
  profileModal: boolean;
  logOutDialogVisibility: boolean;
  authProcessDialog: boolean;
  emailVerificationDialog: boolean;
};

const initialState: InitialStateProps = {
  profileModal: false,
  logOutDialogVisibility: false,
  authProcessDialog: false,
  emailVerificationDialog: false,
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
    setEmailVerificationDialog(state) {
      state.emailVerificationDialog = !state.emailVerificationDialog;
    },
  },
});

export default modalSlice.reducer;
export const {
  setLogOutDialogVisibility,
  setProfileModalVisibility,
  setEmailVerificationDialog,
  setAuthProcessDialog,
} = modalSlice.actions;
