import axios from "../../../config/axiosConfig";

const fetchUserMessages = async (user_id_2) => {
  const { token, data } = JSON.parse(localStorage.getItem("jwtData"));

  try {
    const res = await axios.get(`/messages/${data.user_id}/${user_id_2}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return res.data.data;
  } catch (error) {
    throw error;
  }
};

export default fetchUserMessages;
