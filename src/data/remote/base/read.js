import axios from "axios";

const { token, data: userData } =
  JSON.parse(localStorage.getItem("jwtData")) || {};

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_DEPLOYMENT_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${token}`,
  },
});

const fetchBase = async (request) => {
  try {
    const { data } = await request(axiosInstance, userData);

    return data.data;
  } catch (error) {
    console.error(error.response.data.error.message);
    throw error;
  }
};

export default fetchBase;
