import { configureStore } from "@reduxjs/toolkit";

// ...
import profile from "./slices/profile";
import subject from "./slices/subject";
import subscription from "./slices/subscription";

export const store = configureStore({
  reducer: { profile, subject, subscription },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
