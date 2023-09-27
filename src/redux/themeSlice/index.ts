import { createSlice } from "@reduxjs/toolkit";

type ThemeType = "dark" | "light" | "system";

interface StateType {
  theme: ThemeType;
}

const initialState: StateType = {
  theme: (localStorage.getItem("theme") as ThemeType) ?? "system",
};

const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    setTheme(state, { payload }: { payload: ThemeType }) {
      state.theme = payload;
      const root = window.document.documentElement;

      root.classList.remove("light", "dark");

      if (payload === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "dark"
          : "light";

        root.classList.add(systemTheme);
        return;
      }

      root.classList.add(payload);
      localStorage.setItem("theme", payload);
    },
  },
});

export default themeSlice.reducer;
export const { setTheme } = themeSlice.actions;
