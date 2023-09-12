import axios from "axios";

const HOST = process.env.HOST;

const getGradeLevels = async (token: any) => {
  const getGradeLevelsURL = `${HOST}/api/v1/student/grade-levels`;
  const config = {
    headers: { Authorization: token }
  }

  const res = await axios.get(getGradeLevelsURL, config);

  return res.data;
};

const onboardGrade = async (grade_id: string, token: string) => {
  console.log(grade_id, token)
  const onboardGradeURL = `${HOST}/api/v1/student/enroll/${grade_id}`;
  const config = {
    headers: { Authorization: token }
  }

  const res = await axios.post(onboardGradeURL, {}, config);

  return res.data;
}

export { getGradeLevels, onboardGrade }