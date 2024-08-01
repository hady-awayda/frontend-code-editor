import axios from "../../../config/axiosConfig";

const fetchAdminData = async () => {
  const { token } = JSON.parse(localStorage.getItem("jwtData")) || {};
  try {
    const { data } = await axios.get("/admin", {
      headers: { Authorization: `Bearer ${token}` },
    });

    return data.data;
  } catch (error) {
    throw error;
  }
};

export default fetchAdminData;
