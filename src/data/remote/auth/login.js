import axios from "axios";
import storeToken from "../../../helpers/storeToken";

const baseURL = import.meta.env.VITE_APP_DEPLOYMENT_BASE_URL;
// const baseURL = import.meta.env.VITE_APP_BASE_URL;
axios.defaults.baseURL = baseURL;
console.log(baseURL);

const login = async (email, password) => {
  const { data } = await axios.post("auth/login", {
    email,
    password,
  });

  storeToken(data.authorization);
};

export default login;
