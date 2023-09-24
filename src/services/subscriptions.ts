import axios from "axios";

const HOST = process.env.HOST;

const getSubscriptionPlans = async (token: string) => {
  const url = `${HOST}/api/v1/student/subscription-plans`;
  const config = {
    headers: { Authorization: token }
  }
  const res = await axios.get(url, config);

  return res.data;
};

const getCurrentPlan = async (token: string) => {
  const url = `${HOST}/api/v1/student/subscription`;
  const config = {
    headers: { Authorization: token }
  }
  const res = await axios.get(url, config);

  return res.data;
};

const verifyVoucher = async (token: string, voucher: string) => {
  const url = `${HOST}/api/v1/student/subscription/voucher/${voucher}`;
  const config = {
    headers: { Authorization: token }
  }
  const res = await axios.get(url, config);

  return res.data;
};

const makeVoucherPayment = async (token: string, payload: any) => {
  const url = `${HOST}/api/v1/student/subscription/payment/voucher`;
  const config = {
    headers: { Authorization: token }
  }
  const res = await axios.post(url, payload, config);

  return res.data;
};

export {
  getSubscriptionPlans,
  getCurrentPlan,
  verifyVoucher,
  makeVoucherPayment
}