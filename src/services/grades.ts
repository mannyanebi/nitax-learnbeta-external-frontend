import axios from "axios";

const HOST = process.env.HOST;

const getGradeLevels = async (token: any) => {
  const url = `${HOST}/api/v1/student/grade-levels`;
  const config = {
    headers: { Authorization: token }
  }
  const res = await axios.get(url, config);

  return res.data;
};

const onboardGrade = async (grade_id: string, token: string) => {
  const url = `${HOST}/api/v1/student/enroll/${grade_id}`;
  const config = {
    headers: { Authorization: token }
  }
  const res = await axios.post(url, {}, config);

  return res.data;
}

export { getGradeLevels, onboardGrade }