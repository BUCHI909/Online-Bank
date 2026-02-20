// src/components/Sidebar.jsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaUniversity,
  FaHome,
  FaExchangeAlt,
  FaWallet,
  FaCreditCard,
  FaChartLine,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [loggingOut, setLoggingOut] = React.useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };

  const handleLogout = () => {
    setLoggingOut(true);
    setTimeout(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setLoggingOut(false);
      if (onClose) onClose();
      navigate("/login");
    }, 900);
  };

  const handleNavClick = (to, e) => {
    if (e && e.preventDefault) e.preventDefault();
    navigate(to);
    // Delay closing the sidebar slightly so page transition isn't interrupted on mobile
    if (onClose) setTimeout(() => onClose(), 120);
  };

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div style={styles.sidebarHeader}>
        <div style={styles.logo}>
          <FaUniversity size={28} />
          <span>Genesis Bank</span>
        </div>

        <button
          className="close-btn"
          onClick={onClose}
          style={{ display: window.innerWidth <= 768 ? "block" : "none" }}
        >
          ✕
        </button>
      </div>

      <nav style={styles.nav}>
        <button
          onClick={(e) => handleNavClick("/dashboard", e)}
          style={{
            ...styles.navItem,
            background: isActive("/dashboard") ? "rgba(99, 102, 241, 0.3)" : "transparent",
            color: isActive("/dashboard") ? "#fff" : "#ccc",
            textAlign: "left",
          }}
        >
          <FaHome /> Dashboard
        </button>

        <button
          onClick={(e) => handleNavClick("/dashboard/transfer", e)}
          style={{
            ...styles.navItem,
            background: isActive("/dashboard/transfer") ? "rgba(99, 102, 241, 0.3)" : "transparent",
            color: isActive("/dashboard/transfer") ? "#fff" : "#ccc",
            textAlign: "left",
          }}
        >
          <FaExchangeAlt /> Transfer
        </button>

        <button
          onClick={(e) => handleNavClick("/dashboard/cards", e)}
          style={{
            ...styles.navItem,
            background: isActive("/dashboard/cards") ? "rgba(99, 102, 241, 0.3)" : "transparent",
            color: isActive("/dashboard/cards") ? "#fff" : "#ccc",
            textAlign: "left",
          }}
        >
          <FaCreditCard /> Cards
        </button>

        <button
          onClick={(e) => handleNavClick("/dashboard/wallets", e)}
          style={{
            ...styles.navItem,
            background: isActive("/dashboard/wallets") ? "rgba(99, 102, 241, 0.3)" : "transparent",
            color: isActive("/dashboard/wallets") ? "#fff" : "#ccc",
            textAlign: "left",
          }}
        >
          <FaWallet /> Wallet
        </button>

        <button
          onClick={(e) => handleNavClick("/dashboard/analytics", e)}
          style={{
            ...styles.navItem,
            background: isActive("/dashboard/analytics") ? "rgba(99, 102, 241, 0.3)" : "transparent",
            color: isActive("/dashboard/analytics") ? "#fff" : "#ccc",
            textAlign: "left",
          }}
        >
          <FaChartLine /> Analytics
        </button>

        <hr style={styles.divider} />

        <button
          onClick={(e) => handleNavClick("/dashboard/profile", e)}
          style={{
            ...styles.navItem,
            background: isActive("/dashboard/profile") ? "rgba(99, 102, 241, 0.3)" : "transparent",
            color: isActive("/dashboard/profile") ? "#fff" : "#999",
            textAlign: "left",
          }}
        >
          <FaUser /> Profile
        </button>

        <button
          onClick={(e) => handleNavClick("/dashboard/settings", e)}
          style={{
            ...styles.navItem,
            background: isActive("/dashboard/settings") ? "rgba(99, 102, 241, 0.3)" : "transparent",
            color: isActive("/dashboard/settings") ? "#fff" : "#999",
            textAlign: "left",
          }}
        >
          <FaCog /> Settings
        </button>

        <button style={styles.logout} onClick={handleLogout} disabled={loggingOut}>
          {loggingOut ? (
            <>
              <span className="btn-spinner" /> Logging out...
            </>
          ) : (
            <>
              <FaSignOutAlt /> Logout
            </>
          )}
        </button>
      </nav>
    </aside>
  );
};

const styles = {
  sidebarHeader: {
    marginBottom: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "12px",
    borderRadius: "10px",
    cursor: "pointer",
    textDecoration: "none",
    transition: "0.3s",
  },
  divider: {
    margin: "10px 0",
    border: "none",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  },
  logout: {
    marginTop: 20,
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "#ff5252",
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontWeight: "bold",
    transition: "0.3s",
  },
};

export default Sidebar;
