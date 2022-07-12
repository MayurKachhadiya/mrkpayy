import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./Footer.js";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer.js";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
