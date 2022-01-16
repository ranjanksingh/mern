import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from './redux/store'
import { Provider } from 'react-redux'
import ComponentA from './redux/component/ComponentA'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

//redux
/*ReactDOM.render(
    <Provider store = {store}>
      <ComponentA />
    </Provider>, document.getElementById('root')
)*/