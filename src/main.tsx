import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./root/index.tsx";
import ProviderConfig from "./tools/provider/index.tsx";
import { Provider } from "react-redux";
import store from "./redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ProviderConfig>
      <Root />
    </ProviderConfig>
  </Provider>
);
