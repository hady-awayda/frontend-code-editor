import axios from "../../../config/axiosConfig";

const fetchUserConversations = async () => {
  const { token, data } = JSON.parse(localStorage.getItem("jwtData"));

  try {
    const res = await axios.get(`/conversations/${data.user_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return res.data.data;
  } catch (error) {
    throw error;
  }
};

export default fetchUserConversations;
