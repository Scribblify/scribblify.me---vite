import { createSlice } from "@reduxjs/toolkit";

type InitialStateProps = {
  logOutDialogVisibility: boolean;
  profileModal: boolean;
};

const initialState: InitialStateProps = {
  logOutDialogVisibility: false,
  profileModal: false,
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
  },
});

export default modalSlice.reducer;
export const { setLogOutDialogVisibility, setProfileModalVisibility } =
  modalSlice.actions;
