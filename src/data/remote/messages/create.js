import axios from "../../../config/axiosConfig";

const sendMessage = async (user_id_2, message) => {
  const { token, data } = JSON.parse(localStorage.getItem("jwtData"));

  try {
    const res = await axios.post(
      `/messages`,
      {
        sender_id: data.user_id,
        receiver_id: user_id_2,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return res.data.data;
  } catch (error) {
    throw error;
  }
};

export default sendMessage;
