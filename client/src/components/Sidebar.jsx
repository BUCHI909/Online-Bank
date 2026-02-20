// src/components/Sidebar.jsx
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
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

  const handleLogout = async () => {
    setLoggingOut(true);
    // show spinner briefly, then logout
    setTimeout(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setLoggingOut(false);
      navigate("/login");
    }, 900);
  };

  const handleNavClick = (to) => {
    if (onClose) onClose();
    // let NavLink handle navigation; ensure focus/scroll resets
  };

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      {/* Sidebar Header */}
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

      {/* Sidebar Menu */}
      <nav style={styles.nav}>
        <NavLink
          to="/dashboard"
          onClick={handleNavClick}
          style={({ isActive }) => ({
            ...styles.navItem,
            background: isActive ? "rgba(99, 102, 241, 0.3)" : "transparent",
            color: isActive ? "#fff" : "#ccc",
          })}
        >
          <FaHome /> Dashboard
        </NavLink>

        <NavLink
          to="/dashboard/transfer"
          onClick={handleNavClick}
          style={({ isActive }) => ({
            ...styles.navItem,
            background: isActive ? "rgba(99, 102, 241, 0.3)" : "transparent",
            color: isActive ? "#fff" : "#ccc",
          })}
        >
          <FaExchangeAlt /> Transfer
        </NavLink>

        <NavLink
          to="/dashboard/cards"
          onClick={handleNavClick}
          style={({ isActive }) => ({
            ...styles.navItem,
            background: isActive ? "rgba(99, 102, 241, 0.3)" : "transparent",
            color: isActive ? "#fff" : "#ccc",
          })}
        >
          <FaCreditCard /> Cards
        </NavLink>

        <NavLink
          to="/dashboard/wallets"
          onClick={handleNavClick}
          style={({ isActive }) => ({
            ...styles.navItem,
            background: isActive ? "rgba(99, 102, 241, 0.3)" : "transparent",
            color: isActive ? "#fff" : "#ccc",
          })}
        >
          <FaWallet /> Wallet
        </NavLink>

        <NavLink
          to="/dashboard/analytics"
          onClick={handleNavClick}
          style={({ isActive }) => ({
            ...styles.navItem,
            background: isActive ? "rgba(99, 102, 241, 0.3)" : "transparent",
            color: isActive ? "#fff" : "#ccc",
          })}
        >
          <FaChartLine /> Analytics
        </NavLink>

        <hr style={styles.divider} />

        <NavLink
          to="/dashboard/profile"
          onClick={handleNavClick}
          style={({ isActive }) => ({
            ...styles.navItem,
            background: isActive ? "rgba(99, 102, 241, 0.3)" : "transparent",
            color: isActive ? "#fff" : "#999",
          })}
        >
          <FaUser /> Profile
        </NavLink>

        <NavLink
          to="/dashboard/settings"
          onClick={handleNavClick}
          style={({ isActive }) => ({
            ...styles.navItem,
            background: isActive ? "rgba(99, 102, 241, 0.3)" : "transparent",
            color: isActive ? "#fff" : "#999",
          })}
        >
          <FaCog /> Settings
        </NavLink>

        {/* Logout */}
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
