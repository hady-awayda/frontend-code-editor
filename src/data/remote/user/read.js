import axios from "../../../config/axiosConfig";

const fetchUserData = async () => {
  const { token, data } = JSON.parse(localStorage.getItem("jwtData"));

  try {
    const res = await axios.get(`/users/${data.user_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return res.data.data;
  } catch (error) {
    throw error;
  }
};

export default fetchUserData;
