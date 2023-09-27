import { SettingPrePages } from "@/@types";
import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  settingActive: SettingPrePages;
};

const initialState: InitialStateType = {
  settingActive: "/wallet",
};

const selectorSlice = createSlice({
  name: "selectorSlice",
  initialState,
  reducers: {
    setSettingActive(state, { payload }) {
      state.settingActive = payload;
    },
  },
});

export default selectorSlice.reducer;
export const { setSettingActive } = selectorSlice.actions;
