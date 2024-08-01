import axios from "../../../config/axiosConfig";
import storeToken from "../../../utils/helpers/storeToken";

const login = async (email, password) => {
  try {
    const { data } = await axios.post("http://localhost:8080/api/auth/login", {
      email,
      password,
    });

    storeToken(data.authorization);
  } catch (error) {
    console.log(error.response.data);
    throw new Error(error.response.data.message || "Login failed");
  }
};

export default login;
