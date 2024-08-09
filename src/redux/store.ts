import { configureStore } from "@reduxjs/toolkit";
import typingSlice from "./services/typingSlice";

export const store = configureStore({
  reducer: {
    typingSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
