import axios from "../../../config/axiosConfig";

const getUserById = async (id) => {
  const { token } = JSON.parse(localStorage.getItem("jwtData")) || {};

  try {
    const res = await axios.get(`/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return res.data.data;
  } catch (error) {
    throw error;
  }
};

export default getUserById;
