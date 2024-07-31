import axios from "../../../config/axiosConfig";
import storeToken from "../../../helpers/storeToken";

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
