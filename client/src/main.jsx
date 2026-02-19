import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";   // ✅ NOT AppRoutes
import "./styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthProvider } from "./Context/AuthContext";

AOS.init({ duration: 1000, once: true });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
