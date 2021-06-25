import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'

import {store} from './redux/store/store'
import App from "./App";

import "./index.css"

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
  </Provider>,
  document.getElementById("root")
);
