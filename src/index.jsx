import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

// Initialize TimeAgo
TimeAgo.addDefaultLocale(en);

// Create root and render app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);