import axios from "axios";

const HOST = process.env.HOST;

const getLesson = async (token: string, lessonId: string) => {
  const URL = `${HOST}/api/v1/student/lessons/${lessonId}`;
  const config = {
    headers: { Authorization: token }
  }
  const res = await axios.get(URL, config);

  return res.data;
};

export {
  getLesson
}