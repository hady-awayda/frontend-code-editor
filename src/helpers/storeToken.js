import decodeJwtToken from "./decodeJWT";

function storeToken(data) {
  if (data.token) {
    const decodedToken = decodeJwtToken(data.token);

    if (decodedToken) {
      const tokenObject = {
        token: data.token,
        userData: decodedToken,
      };

      //   stateSet(tokenObject);

      localStorage.setItem("jwtData", JSON.stringify(tokenObject));

      decodedToken.role
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
