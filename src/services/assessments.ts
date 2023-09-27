import axios from "axios";

const HOST = process.env.HOST;

const getQuizzes = async (token: string, lessonId: string) => {
  const url = `${HOST}/api/v1/student/assessments/quiz/${lessonId}`;
  const config = {
    headers: { Authorization: token }
  }
  const res = await axios.get(url, config);

  return res.data;
};

const getTheoryAssessments = async (token: string, lessonId: string) => {
  const url = `${HOST}/api/v1/student/assessments/theory/${lessonId}`;
  const config = {
    headers: { Authorization: token }
  }
  const res = await axios.get(url, config);

  return res.data;
};

const submitQuizResponses = async (token: string, payload: any) => {
  const url = `${HOST}/api/v1/student/assessments/quiz/submit`;
  const config = {
    headers: { Authorization: token }
  }
  const res = await axios.post(url, payload, config);

  return res.data;
}

const submitTheoryResponse = async (token: string, payload: any) => {
  const url = `${HOST}/api/v1/student/assessments/theory/submit`;
  const config = {
    headers: { Authorization: token }
  }
  const res = await axios.post(url, payload, config);

  return res.data;
}

export {
  getQuizzes,
  submitQuizResponses,
  getTheoryAssessments,
  submitTheoryResponse
}