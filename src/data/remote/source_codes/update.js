import axios from "../../../config/axiosConfig";

const updateFile = async (id, code) => {
  const { token, data } = JSON.parse(localStorage.getItem("jwtData"));

  try {
    const res = await axios.put(
      `/source_codes/${id}`,
      {
        user_id: data.user_id,
        code: code,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      }
    );

    return res.data.data;
  } catch (error) {
    throw error;
  }
};

export default updateFile;
