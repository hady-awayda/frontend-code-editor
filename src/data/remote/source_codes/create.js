import axios from "../../../config/axiosConfig";

const createFile = async (title, code) => {
  const { token, data } = JSON.parse(localStorage.getItem("jwtData")) || {};

  try {
    const res = await axios.post(
      `/source_codes`,
      {
        user_id: data.user_id,
        title,
        code,
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

export default createFile;
