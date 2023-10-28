import { configureStore } from "@reduxjs/toolkit";

// ...
import profile from "./slices/profile";
import subject from "./slices/subject";

export const store = configureStore({
  reducer: { profile, subject },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
