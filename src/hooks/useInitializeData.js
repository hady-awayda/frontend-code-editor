import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setUser,
  setConversations,
  setSourceCodes,
} from "../data/redux/userSlice/slice";

const useInitializeData = (user, conversations, sourceCodes) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
    }
  }, [user, dispatch]);

  useEffect(() => {
    if (conversations.length > 0) {
      dispatch(setConversations(conversations));
    }
  }, [conversations, dispatch]);

  useEffect(() => {
    if (sourceCodes.length > 0) {
      dispatch(setSourceCodes(sourceCodes));
    }
  }, [sourceCodes, dispatch]);
};

export default useInitializeData;
