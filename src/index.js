import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./Context/AuthContext";
import { ToastContainer } from "react-toastify";
import { ContextProvider } from "Context/ContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ContextProvider>      
      <App />
      <ToastContainer
        closeButton={false}
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      </ContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
