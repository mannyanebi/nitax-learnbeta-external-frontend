import axios from "axios";

const HOST = process.env.HOST;

const uploadAvatar = async (payload: any) => {
  const url = `${HOST}/`;
  const res = await axios.post(url, payload);

  return res.data;
};

const sendMessage = async (payload: any) => {
  const url = `${HOST}/`;
  const res = await axios.post(url, payload);

  return res.data;
};

const getUserProfile = async (token: any) => {
  const url = `${HOST}/api/v1/student/profile`;
  const config = {
    headers: { Authorization: token }
  }
  const res = await axios.get(url, config);

  return res.data;
};

export {
  uploadAvatar,
  sendMessage,
  getUserProfile
}