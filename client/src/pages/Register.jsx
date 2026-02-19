import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Auth.css";

function Register() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      alert("Registration successful!");
      setLoading(false);
    }, 1800);
  };

  return (
    <>
      <Navbar />

      <div className="auth-container">

        <div className="auth-left">
          <h1>Open Your Genesis Account</h1>
          <p>Secure digital banking built for your future.</p>

          <div className="auth-icons">
            <span>🌍</span>
            <span>💰</span>
            <span>📊</span>
            <span>🛡️</span>
          </div>
        </div>

        <div className="auth-right">
          <div className="auth-card">

            <h2>Create Account</h2>

            <form onSubmit={handleSubmit}>

              <input placeholder="First Name" required />
              <input placeholder="Last Name" required />
              <input placeholder="Email" type="email" required />
              <input placeholder="Phone Number" required />

              <select required>
                <option>Country</option>
                <option>Nigeria</option>
                <option>UK</option>
                <option>USA</option>
              </select>

              <input type="date" required />
              <input placeholder="Address" required />

              <input type="password" placeholder="Password" required />
              <input type="password" placeholder="Confirm Password" required />

              <button type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    Creating Account...
                  </>
                ) : (
                  "Register"
                )}
              </button>
            </form>

          </div>
        </div>

      </div>
    </>
  );
}

export default Register;
