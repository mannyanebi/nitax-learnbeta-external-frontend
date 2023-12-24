import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  IMessage,
  ISmartPaymentMethod,
  ISubScriptionState,
} from "../@types/payment";

// Define the initial state using that type
const initialState: ISubScriptionState = {
  smart_payment_method: [],
  message: null,
  loading: false,
  show: false,
  update: false,
  delete: false,
};

export const subscription = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    setPaymentMethod: (state, action: PayloadAction<ISmartPaymentMethod[]>) => {
      state.smart_payment_method = action.payload;
    },
    setUpdate: (state) => {
      state.update = !state.update;
    },
    setMessage: (state, action: PayloadAction<IMessage>) => {
      state.message = action.payload;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  },
});

export const { setPaymentMethod, setUpdate } = subscription.actions;

export default subscription.reducer;
