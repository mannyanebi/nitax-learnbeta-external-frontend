import { IProfile, IUpdateProfile } from "@/store/@types/profile";
import { setProfile, setShow } from "@/store/slices/profile";
import { setError } from "@/store/slices/subject";
import axiosInstance from "@/utility/axiosInstane";
import axiosUpload from "@/utility/axiosUpload";
import { ThunkDispatch } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

const HOST = process.env.HOST;

export const uploadAvatar = async (payload: any) => {
  const url = `${HOST}/`;
  const res = await axios.post(url, payload);

  return res.data;
};

export const sendMessage = async (payload: any) => {
  const url = `${HOST}/`;
  const res = await axios.post(url, payload);

  return res.data;
};

export const getUserProfile = async (token: any) => {
  try {
    const response = await axiosInstance.get("/api/v1/student/profile");

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return error?.response?.data;
    }
  }
};

/** Start state from here */
export const get_user_profile = async (dispatch: Function) => {
  dispatch(setShow());
  try {
    const response = await axiosInstance.get("/api/v1/student/profile");

    dispatch(setProfile(response.data));
  } catch (error) {
    if (isAxiosError(error)) {
      dispatch(setError());
    }
  }
  dispatch(setShow());
};

export const update_profile = async (
  data: IUpdateProfile,
  dispatch: Function
) => {
  try {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("location", data.location);
    if (data.image !== null || typeof data.image !== "string")
      formData.append("image", data.image);
    else formData.append("image", "");

    console.log(formData, data);

    const response = await axiosUpload.post(
      "/api/v1/student/profile/update",
      formData
    );

    console.log(response.data);
    // dispatch(setProfile(response.data));
  } catch (error) {
    if (isAxiosError(error)) {
      console.log("Error Data", error?.response);
      return error?.response;
    }
  }
};
