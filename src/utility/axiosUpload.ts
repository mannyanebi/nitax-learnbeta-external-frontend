import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

// config
const host = process.env.HOST;

const headers = {};

const axiosUpload = axios.create({
  baseURL: host,
  headers,
});

axiosUpload.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const serial: string | null = localStorage.getItem("@serial");
    if (serial) {
      config.headers.Authorization = `bearer ${serial}`;
    }
    config.headers.Accept = "application/json";
    config.headers["Content-Type"] = "multipart/form-data";

    return config;
  },
  (error: Promise<AxiosError>) => {
    return Promise.reject(error);
  }
);

axiosUpload.interceptors.response.use(
  (response: any): Promise<AxiosResponse> => {
    return response;
  },
  (error: AxiosError): Promise<AxiosError> => {
    if (
      error?.response?.status === 401 &&
      window.location.pathname !== "/login"
    ) {
      localStorage.removeItem("@serial");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosUpload;
