import Layout from "./Layout";
import { Provider } from "react-redux";
import store from "./data/redux/store";

function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;
