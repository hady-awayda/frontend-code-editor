import axios from "axios";
import storeToken from "../../../helpers/storeToken";

// axios.defaults.baseURL = import.meta.env.VITE_APP_DEPLOYMENT_BASE_URL;
axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL;

const register = async (name, email, password) => {
  try {
    const { data } = await axios.post("auth/register", {
      name,
      email,
      password,
    });

    storeToken(data.authorization);
  } catch (error) {
    console.log(error);
    throw new Error("Invalid email or password");
  }
};

export default register;
