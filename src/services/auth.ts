import axios from "axios";

const HOST = process.env.HOST;

const signin = async (payload: any) => {
  const signinURL = `${HOST}/api/v1/auth/login`;
  const res = await axios.post(signinURL, payload);

  return res.data;
};

const signup = async (payload: any) => {
  const signinURL = `${HOST}/api/v1/auth/register`;
  const res = await axios.post(signinURL, payload);

  return res.data;
};

const forgotPassword = async (payload: any) => {
  const forgotPasswordURL = `${HOST}/`;
  const res = await axios.post(forgotPasswordURL, payload);

  return res.data;
};

const verifyOTP = async (payload: any) => {
  const verifyOTPURL = `${HOST}/`;
  const res = await axios.post(verifyOTPURL, payload);

  return res.data;
};

const resetPassword = async (payload: any) => {
  const resetPasswordURL = `${HOST}/`;
  const res = await axios.post(resetPasswordURL, payload);

  return res.data;
};

const updatePassword = async (payload: any) => {
  const updatePasswordURL = `${HOST}/`;
  const res = await axios.post(updatePasswordURL, payload);

  return res.data;
};

const refreshToken = async (token: any) => {
  const refreshTokenURL = `${HOST}/api/v1/auth/refresh-token`;
  const config = {
    headers: { Authorization: token }
  }

  const res = await axios.post(refreshTokenURL, config);

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