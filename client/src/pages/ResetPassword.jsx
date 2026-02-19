import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import Navbar from "../components/Navbar";
// import API from "../Utils/Api";
import { resetPassword } from "../Utils/api.js";
import "../styles/Auth.css";

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setLoading(true);

      // await API.post(`/auth/reset-password/${token}`, {
      //   password,
      // });
      await resetPassword(token, { password });

      setMessage("Password reset successful!");

      setTimeout(() => navigate("/login"), 2000);

    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Reset failed. Link may be expired."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="auth-container">
        <div className="auth-card">

          <h2>Reset Password</h2>

          {error && <p className="error">{error}</p>}
          {message && <p className="success">{message}</p>}

          <form onSubmit={handleSubmit}>

            <div className="input-group">
              <FaLock />
              <input
                type="password"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <FaLock />
              <input
                type="password"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Updating..." : "Reset Password"}
            </button>

          </form>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
