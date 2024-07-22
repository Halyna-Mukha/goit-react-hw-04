import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Modal from 'react-modal';
import App from "./components/App";

Modal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
