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

  const handleLogout = () => {
    setLoggingOut(true);

    setTimeout(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login");
    }, 700);
  };

  const linkClass = ({ isActive }) =>
    `nav-link ${isActive ? "active" : ""}`;

  const handleClick = () => {
    if (window.innerWidth <= 768) onClose();
  };

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>

      {/* Logo */}
      <div className="sidebar-header">
        <FaUniversity size={26} />
        <span>Genesis Bank</span>

        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
      </div>

      <nav className="nav">

        <NavLink to="/dashboard" className={linkClass} onClick={handleClick}>
          <FaHome /> Dashboard
        </NavLink>

        <NavLink to="/dashboard/transfer" className={linkClass} onClick={handleClick}>
          <FaExchangeAlt /> Transfer
        </NavLink>

        <NavLink to="/dashboard/cards" className={linkClass} onClick={handleClick}>
          <FaCreditCard /> Cards
        </NavLink>

        <NavLink to="/dashboard/wallets" className={linkClass} onClick={handleClick}>
          <FaWallet /> Wallet
        </NavLink>

        <NavLink to="/dashboard/analytics" className={linkClass} onClick={handleClick}>
          <FaChartLine /> Analytics
        </NavLink>

        <hr />

        <NavLink to="/dashboard/profile" className={linkClass} onClick={handleClick}>
          <FaUser /> Profile
        </NavLink>

        <NavLink to="/dashboard/settings" className={linkClass} onClick={handleClick}>
          <FaCog /> Settings
        </NavLink>

        <button
          className="logout-btn"
          onClick={handleLogout}
          disabled={loggingOut}
        >
          <FaSignOutAlt />
          {loggingOut ? "Logging out..." : "Logout"}
        </button>

      </nav>
    </aside>
  );
};

export default Sidebar;