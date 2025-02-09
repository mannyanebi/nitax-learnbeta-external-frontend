import { setError, setLoading, setSubjects } from "@/store/slices/subject";
import axiosInstance from "@/utility/axiosInstane";
import axios, { isAxiosError } from "axios";

const HOST = process.env.HOST;

const getGradeLevelSubjects = async (token: string) => {
  const url = `${HOST}/api/v1/student/subjects`;
  const config = {
    headers: { Authorization: token },
  };
  const res = await axios.get(url, config);

  return res.data;
};

export const get_grade_level_subjects = async (dispatch: Function) => {
  dispatch(setLoading());
  try {
    const response = await axiosInstance.get("/api/v1/student/subjects");

    const { data, status } = response.data;
    if (status === "success") dispatch(setSubjects(data));
  } catch (error) {
    if (isAxiosError(error)) {
      dispatch(setError());
    }
  }
  dispatch(setLoading());
};

const getSubject = async (token: string, subjectId: string) => {
  const url = `${HOST}/api/v1/student/subjects/${subjectId}`;
  const config = {
    headers: { Authorization: token },
  };
  const res = await axios.get(url, config);

  return res.data;
};

const getSubscribedSubjects = async (token: string) => {
  const url = `${HOST}/api/v1/student/subscription/subjects`;
  const config = {
    headers: { Authorization: token },
  };
  const res = await axios.get(url, config);

  return res.data;
};

const addSubjectsToPlan = async (token: string, payload: any) => {
  const url = `${HOST}/api/v1/student/subscription/add-subjects`;
  const config = {
    headers: { Authorization: token },
  };
  const res = await axios.post(url, payload, config);

  return res.data;
};

export {
  getSubject,
  addSubjectsToPlan,
  getGradeLevelSubjects,
  getSubscribedSubjects,
};
