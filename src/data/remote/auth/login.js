import axios from "../../../config/axiosConfig";
import storeToken from "../../../utils/helpers/storeToken";

const login = async (email, password) => {
  try {
    const { data } = await axios.post("/auth/login", {
      email,
      password,
    });

    storeToken(data.authorization);
  } catch (error) {
    console.error("Full error object:", error);
    console.error("Error response:", error.response);
    console.error("Error message:", error.message);
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

export default login;
