import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import store from "./store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Router />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
