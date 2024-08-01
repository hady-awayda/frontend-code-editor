import { useEffect, useState } from "react";
import fetchUserData from "../data/remote/user/read";
import fetchSourceCodes from "../data/remote/source_codes/read";
import fetchUserConversations from "../data/remote/conversations/read";

const useData = () => {
  const [user, setUser] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [sourceCodes, setSourceCodes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const users = await fetchUserData();

      setUser(users);
    }

    async function fetchConversations() {
      const conversations = await fetchUserConversations();

      setConversations(conversations);
    }

    async function fetchUserCodes() {
      const sourceCodes = await fetchSourceCodes();

      setSourceCodes(sourceCodes);
    }

    fetchData();
    fetchConversations();
    fetchUserCodes();
  }, []);

  return { user, conversations, sourceCodes };
};

export default useData;
