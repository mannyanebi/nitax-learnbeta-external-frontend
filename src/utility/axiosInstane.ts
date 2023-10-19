import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

// config
import env from "@/config/env";
import { getCookieItem } from "./cookie";
import { IAuthResponse } from "@/store/@types/auth";

const headers = {};

const axiosInstance = axios.create({
  baseURL: env.host,
  headers,
});

axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const serial: IAuthResponse | null = getCookieItem("learnbeta_user");
    if (serial?.status === "success") {
      config.headers.Authorization = `Bearer ${serial.data.access_token}`;
    }
    config.headers.Accept = "application/json";
    config.headers["Content-Type"] = "application/json";

    return config;
  },
  (error: Promise<AxiosError>) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: any): Promise<AxiosResponse> => {
    return response;
  },
  (error: AxiosError): Promise<AxiosError> => {
    if (
      error?.response?.status === 401 &&
      window.location.pathname !== "/login"
    ) {
      localStorage.removeItem("@serial");
      window.location.href = "/auth/signin";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
