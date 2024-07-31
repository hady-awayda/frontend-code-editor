import axios from "../../../config/axiosConfig";

const search = async (username) => {
  const { token } = JSON.parse(localStorage.getItem("jwtData"));

  try {
    const { data } = await axios.get(`/search/${username}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log(data.data);

    return data.data;
  } catch (error) {
    throw error;
  }
};

export default search;
