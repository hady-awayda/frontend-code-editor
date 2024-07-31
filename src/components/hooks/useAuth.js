// src/hooks/useAuth.js
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUserData } from "../../data/redux/authSlice/slice";
import fetchUserData from "../../data/remote/user/data";

const useAuth = () => {
  const dispatch = useDispatch();
  const { token, userData } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const jwtData = JSON.parse(localStorage.getItem("jwtData"));
        if (jwtData && jwtData.token) {
          const tokenExpiration = jwtData.exp * 1000;
          if (tokenExpiration > Date.now()) {
            dispatch(setToken(jwtData.token));
            if (!userData) {
              const fetchedUserData = await fetchUserData(
                jwtData.token,
                jwtData.userData.user_id
              );
              dispatch(setUserData(fetchedUserData));
            }
          } else {
            localStorage.removeItem("jwtData");
          }
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [dispatch, userData]);

  return { token, userData, loading, error };
};

export default useAuth;
