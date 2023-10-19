import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProfile, IProfileState } from "../@types/profile";

// Define the initial state using that type
const initialState: IProfileState = {
  profile: null,
};

export const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<IProfile>) => {
      state.profile = action.payload;
    },
  },
});

export const { setProfile } = profile.actions;

export default profile.reducer;
