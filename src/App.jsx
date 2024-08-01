import "./App.css";
import useData from "./hooks/useData";
import store from "./data/redux/store";
import { Provider } from "react-redux";
import Body from "./components/Structural/Body";

function App() {
  const { user, conversations, sourceCodes } = useData();

  return (
    <Provider store={store}>
      <Body {...{ user, conversations, sourceCodes }} />
    </Provider>
  );
}

export default App;
