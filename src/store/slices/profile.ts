import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProfile, IProfileState } from "../@types/profile";

// Define the initial state using that type
const initialState: IProfileState = {
  profile: null,
  loading: false,
  show: false,
  update: false,
  delete: false,
};

export const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<IProfile>) => {
      state.profile = action.payload;
    },
    setLoading: (state) => {
      state.loading = !state.loading;
    },
    setShow: (state) => {
      state.show = !state.show;
    },
    setUpdate: (state) => {
      state.update = !state.update;
    },
    setDelete: (state) => {
      state.delete = !state.delete;
    },
  },
});

export const { setProfile, setLoading, setShow, setUpdate, setDelete } =
  profile.actions;

export default profile.reducer;
