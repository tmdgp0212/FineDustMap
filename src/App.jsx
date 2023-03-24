import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router.jsx";
import store from "./store/index.js";
import GlobalStyle from "./style/GlobalStyle.js";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
        <Router />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
