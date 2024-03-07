import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Login, Register } from "./Login.jsx";
import { Goal } from "./Goal.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <br />
    <Login username="Aanshu" password="123" />
    <br />
    <Register username="aanshu2dwiwedi@gmail.com" password="123" />
    <br />
    <Goal />
  </React.StrictMode>
);
