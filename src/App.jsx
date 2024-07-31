import "./App.css";

import { Provider } from "react-redux";
import store from "./data/redux/store";
import Body from "./components/Body/Body";
import { useEffect, useState } from "react";
import fetchUserData from "./data/remote/user/read";
import fetchUserConversations from "./data/remote/conversations/read";
import fetchSourceCodes from "./data/remote/source_codes/read";

function App() {
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

  return (
    <Provider store={store}>
      <Body {...{ user, conversations, sourceCodes }} />
    </Provider>
  );
}

export default App;
