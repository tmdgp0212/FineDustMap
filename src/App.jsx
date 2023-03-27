import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import store from "./store/index";
import GlobalStyle from "./style/globalStyle";

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
