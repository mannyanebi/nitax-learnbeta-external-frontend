import axios from "axios";

const HOST = process.env.HOST;

const verifyOldPassword = async (payload: any) => {
  const verifyOldPasswordURL = `${HOST}/`;
  const res = await axios.post(verifyOldPasswordURL, payload);

  return res.data;
};

const uploadAvatar = async (payload: any) => {
  const uploadAvatarURL = `${HOST}/`;
  const res = await axios.post(uploadAvatarURL, payload);

  return res.data;
};

const sendMessage = async (payload: any) => {
  const sendMessageURL = `${HOST}/`;
  const res = await axios.post(sendMessageURL, payload);

  return res.data;
};

const getUserProfile = async (token: any) => {
  const getStudentProfileURL = `${HOST}/api/v1/student/profile`;
  const config = {
    headers: { Authorization: token }
  }

  const res = await axios.get(getStudentProfileURL, config);

  return res.data;
};

export {
  verifyOldPassword,
  uploadAvatar,
  sendMessage,
  getUserProfile
}