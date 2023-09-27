import axios from "axios";

const HOST = process.env.HOST;

const signin = async (payload: any) => {
  const url = `${HOST}/api/v1/auth/login`;
  const res = await axios.post(url, payload);

  return res.data;
};

const signup = async (payload: any) => {
  const url = `${HOST}/api/v1/auth/register`;
  const res = await axios.post(url, payload);

  return res.data;
};

const forgotPassword = async (payload: any) => {
  const url = `${HOST}/api/v1/auth/request-password-reset`;
  const res = await axios.post(url, payload);

  return res.data;
};

const verifyOTP = async (payload: any) => {
  const url = `${HOST}/api/v1/auth/verify-email`;
  const res = await axios.post(url, payload);

  return res.data;
};

const resetPassword = async (payload: any) => {
  const url = `${HOST}/api/v1/auth/reset-password`;
  const res = await axios.post(url, payload);

  return res.data;
};

const updatePassword = async (token: string, payload: any) => {
  const url = `${HOST}/api/v1/student/change-password`;
  const config = {
    headers: { Authorization: token }
  }
  const res = await axios.post(url, payload, config);

  return res.data;
};

const refreshToken = async (token: any) => {
  const url = `${HOST}/api/v1/auth/refresh-token`;
  const config = {
    headers: { Authorization: token }
  }
  const res = await axios.post(url, config);

  return res.data;
};

const logoutUser = async (token: any) => {
  const logoutURL = `${HOST}/api/v1/auth/logout`;
  const config = {
    headers: { Authorization: token }
  }
  const res = await axios.post(logoutURL, config);

  return res.data;
};

export { 
  signin, 
  signup,
  forgotPassword, 
  verifyOTP, 
  resetPassword,
  updatePassword,
  refreshToken,
  logoutUser
}