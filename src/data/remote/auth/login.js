import axios from "../../../config/axiosConfig";
import storeToken from "../../../utils/helpers/storeToken";

const login = async (email, password) => {
  try {
    const { data } = await axios.post("auth/login", {
      email,
      password,
    });

    storeToken(data.authorization);
  } catch (error) {
    throw new Error(error.response.data.message || "Login failed");
  }
};

export default login;
