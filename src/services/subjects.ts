import axios from "axios";

const HOST = process.env.HOST;

const getGradeLevelSubjects = async (token: any) => {
  const URL = `${HOST}/api/v1/student/subject`;
  const config = {
    headers: { Authorization: token }
  }

  const res = await axios.get(URL, config);

  return res.data;
};

export {
  getGradeLevelSubjects
}