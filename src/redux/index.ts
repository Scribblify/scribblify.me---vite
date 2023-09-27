import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import modalSlice from "./modalSlice";
import selectorSlice from "./selectorSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
    modal: modalSlice,
    selector: selectorSlice,
  },
});

export default store;
export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
