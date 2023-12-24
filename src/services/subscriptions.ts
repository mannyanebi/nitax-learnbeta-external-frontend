import { IPaymenmtType, IVerifySmartPay } from "@/store/@types/payment";
import { setPaymentMethod, setUpdate } from "@/store/slices/subscription";
import axiosInstance from "@/utility/axiosInstane";
import axios, { isAxiosError } from "axios";

const HOST = process.env.HOST;

const getSubscriptionPlans = async (token: string) => {
  const url = `${HOST}/api/v1/student/subscription-plans`;
  const config = {
    headers: { Authorization: token },
  };
  const res = await axios.get(url, config);

  return res.data;
};

const getCurrentPlan = async (token: string) => {
  const url = `${HOST}/api/v1/student/subscription`;
  const config = {
    headers: { Authorization: token },
  };
  const res = await axios.get(url, config);

  return res.data;
};

const verifyVoucher = async (token: string, voucher: string) => {
  const url = `${HOST}/api/v1/student/subscription/voucher/${voucher}`;
  const config = {
    headers: { Authorization: token },
  };
  const res = await axios.get(url, config);

  return res.data;
};

const makeVoucherPayment = async (token: string, payload: any) => {
  const url = `${HOST}/api/v1/student/subscription/payment/voucher`;
  const config = {
    headers: { Authorization: token },
  };
  const res = await axios.post(url, payload, config);

  return res.data;
};

const verifyPaystackPayment = async (token: string, payload: any) => {
  const url = `${HOST}/api/v1/student/subscription/payment/paystack`;
  const config = {
    headers: { Authorization: token },
  };
  const res = await axios.post(url, payload, config);

  return res.data;
};

const getSmartPayPaymentMethod = async (dispatch: Function) => {
  try {
    const response = await axiosInstance.get(
      "/api/v1/student/subscription/payment/smartpay/payment-types"
    );

    dispatch(setPaymentMethod(response?.data?.data));
  } catch (error) {}
};

const verifySmartPay = async (dispatch: Function, data: IVerifySmartPay) => {
  dispatch(setUpdate());
  try {
    const response = await axiosInstance.post(
      "/api/v1/student/subscription/payment/smartpay/verify",
      data
    );

    // dispatch(setPaymentMethod(response?.data?.data));
    console.log("From Response Verify:", response.data);
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error?.response);
    } else {
    }
  }
  dispatch(setUpdate());
};

const paySmartPayMethod = async (dispatch: Function, data: IPaymenmtType) => {
  dispatch(setUpdate());
  try {
    const response = await axiosInstance.post(
      "/api/v1/student/subscription/payment/smartpay",
      data
    );

    // dispatch(setPaymentMethod(response?.data?.data));
    console.log("From Response Payment:", response.data);
    verifySmartPay(dispatch, {
      reference: data.reference,
      subscription_plan_id: data.subscription_plan_id,
    });
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error?.response);
    } else {
    }
  }
  dispatch(setUpdate());
};

export {
  getSubscriptionPlans,
  getCurrentPlan,
  verifyVoucher,
  verifySmartPay,
  makeVoucherPayment,
  verifyPaystackPayment,
  paySmartPayMethod,
  getSmartPayPaymentMethod,
};
