import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_APP_DEPLOYMENT_BASE_URL;
axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL;

export default axios;
