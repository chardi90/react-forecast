import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";

const link = document.createElement("link");
link.href =
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined";
link.rel = "stylesheet";
document.head.appendChild(link);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
