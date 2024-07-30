import decodeJwtToken from "./decodeJWT";
// import { useDispatch } from "react-redux";
// import { setToken } from "../data/redux/actions/authActions";

function storeToken(data) {
  console.log(data);
  // const dispatch = useDispatch();

  if (data.token) {
    const decodedToken = decodeJwtToken(data.token);

    if (decodedToken) {
      const tokenObject = {
        token: data.token,
        userData: decodedToken,
      };

      // dispatch(setToken(tokenObject));

      localStorage.setItem("jwtData", JSON.stringify(tokenObject));

      decodedToken.role === "admin"
        ? (window.location.href = "/admin")
        : (window.location.href = "/");
    } else {
      throw new Error("Invalid token structure");
    }
  } else {
    throw new Error("No token received");
  }
}

export default storeToken;
