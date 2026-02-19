import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Auth.css";
import { useAuth } from "../Context/AuthContext.jsx";
import api from "./utils/api.js";



function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try{
      let response = await login({ email, password });
      // console.log("Login Response:", response);
      let data = response;
      console.log("Login Data:", data);
      if(response){
        navigate("/dashboard");
      }
    }catch(err){
      console.error("Login Error:", err);
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="auth-container">

        <div className="auth-left">
          <h1>Welcome to Genesis Bank</h1>
          <p>The origin and beginning of wealth & income.</p>

          <div className="auth-icons">
            <span>🏦</span>
            <span>💳</span>
            <span>📈</span>
            <span>🔒</span>
          </div>
        </div>

        <div className="auth-right">
          <div className="auth-card">

            <h2>Login</h2>

            {error && <div className="auth-error">{error}</div>}

            <form onSubmit={handleSubmit}>

              <input
                type="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />

              <button type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    Logging in...
                  </>
                ) : (
                  "Login"
                )}
              </button>
            </form>

            <div className="auth-links">
              <a onClick={() => navigate("/forgot-password")}>
                Forgot password?
              </a>
              <br />
              Don't have an account?{" "}
              <a onClick={() => navigate("/register")}>
                Register here
              </a>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}

export default Login;
