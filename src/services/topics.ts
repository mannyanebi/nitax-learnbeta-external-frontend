import axios from "axios";

const HOST = process.env.HOST;

const markTopicAsComplete = async (topicId: string, token: string) => {
  const url = `${HOST}/api/v1/student/topics/${topicId}/complete`;
  const config = {
    headers: { Authorization: token }
  }
  const res = await axios.post(url, {}, config);

  return res.data;
}

export {
  markTopicAsComplete
}