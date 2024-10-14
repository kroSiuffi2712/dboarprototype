import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;


const headers = {
  "Content-Type": "application/json",
  Authorization: "",
};

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: headers,
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("Response error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
