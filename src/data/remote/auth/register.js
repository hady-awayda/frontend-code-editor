import axios from "../../../config/axiosConfig";
import storeToken from "../../../utils/helpers/storeToken";

const register = async (name, email, password) => {
  try {
    const { data } = await axios.post("auth/register", {
      name,
      email,
      password,
    });

    storeToken(data.authorization);
  } catch (error) {
    throw new Error("Invalid email or password");
  }
};

export default register;
