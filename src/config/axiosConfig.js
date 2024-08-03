import axios from "axios";

const { token } = JSON.parse(localStorage.getItem("jwtData")) || {};

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_DEPLOYMENT_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${token}`,
  },
});

export default axiosInstance;
