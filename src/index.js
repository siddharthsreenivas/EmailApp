import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { EmailContextProvider } from "./Context/EmailContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <EmailContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </EmailContextProvider>
);
