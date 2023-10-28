import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ISubjectState, ISubjectTypes } from "../@types/subjects";

// Define the initial state using that type
const initialState: ISubjectState = {
  subjects: [],
  loading: false,
  show: false,
  update: false,
  delete: false,
  error: false,
};

export const subject = createSlice({
  name: "subject",
  initialState,
  reducers: {
    setSubjects: (state, action: PayloadAction<ISubjectTypes[]>) => {
      state.subjects = action.payload;
      state.error = false;
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
    setError: (state) => {
      state.error = !state.error;
    },
  },
});

export const {
  setSubjects,
  setLoading,
  setShow,
  setUpdate,
  setDelete,
  setError,
} = subject.actions;

export default subject.reducer;
