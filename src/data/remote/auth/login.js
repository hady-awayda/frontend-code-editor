import axios from "axios";
import storeToken from "../../../helpers/storeToken";

axios.defaults.baseURL = import.meta.env.VITE_APP_DEPLOYMENT_BASE_URL;

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
