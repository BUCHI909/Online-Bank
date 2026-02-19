import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/auth.css";
import {forgotPassword as apiForget} from "../Utils/Api";


function ForgotPassword() {
  const [loading, setLoading] = useState(false);

 const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
        await apiForget({ email: e.target[0].value });
        // alert("Reset link sent!");
    } catch (error) {
        alert("Error sending reset link. Please try again.");
    } finally {
        setLoading(false);
    }


    setTimeout(() => {
      alert("Reset link sent!");
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <Navbar />

      <div className="auth-container">

        <div className="auth-left">
          <h1>Account Recovery</h1>
          <p>Securely reset your Genesis Bank password.</p>
        </div>

        <div className="auth-right">
          <div className="auth-card">

            <h2>Forgot Password</h2>

            <form onSubmit={handleSubmit}>
              <input type="email" placeholder="Enter your email" required />

              <button type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  "Send Reset Link"
                )}
              </button>
            </form>

          </div>
        </div>

      </div>
    </>
  );
}

export default ForgotPassword;
