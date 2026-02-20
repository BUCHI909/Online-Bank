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
  const location = useLocation();
  const [loggingOut, setLoggingOut] = React.useState(false);

  const isActive = (path) =>
    location.pathname === path ||
    location.pathname.startsWith(path + "/");

  const go = (path) => {
    navigate(path);

    // Close sidebar AFTER navigation (important for mobile)
    if (onClose) setTimeout(onClose, 250);
  };

  const handleLogout = () => {
    setLoggingOut(true);

    setTimeout(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      setLoggingOut(false);
      navigate("/login");
      if (onClose) onClose();
    }, 900);
  };

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>

      {/* Header */}
      <div className="sidebar-header">
        <div className="logo">
          <FaUniversity size={26} />
          <span>Genesis Bank</span>
        </div>

        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">

        <button
          onClick={() => go("/dashboard")}
          className={isActive("/dashboard") ? "active" : ""}
        >
          <FaHome /> Dashboard
        </button>

        <button
          onClick={() => go("/dashboard/transfer")}
          className={isActive("/dashboard/transfer") ? "active" : ""}
        >
          <FaExchangeAlt /> Transfer
        </button>

        <button
          onClick={() => go("/dashboard/cards")}
          className={isActive("/dashboard/cards") ? "active" : ""}
        >
          <FaCreditCard /> Cards
        </button>

        {/* ✅ FIXED PATH */}
        <button
          onClick={() => go("/dashboard/wallet")}
          className={isActive("/dashboard/wallet") ? "active" : ""}
        >
          <FaWallet /> Wallet
        </button>

        <button
          onClick={() => go("/dashboard/analytics")}
          className={isActive("/dashboard/analytics") ? "active" : ""}
        >
          <FaChartLine /> Analytics
        </button>

        <hr />

        <button
          onClick={() => go("/dashboard/profile")}
          className={isActive("/dashboard/profile") ? "active" : ""}
        >
          <FaUser /> Profile
        </button>

        <button
          onClick={() => go("/dashboard/settings")}
          className={isActive("/dashboard/settings") ? "active" : ""}
        >
          <FaCog /> Settings
        </button>

        <button className="logout" onClick={handleLogout}>
          {loggingOut ? "Logging out..." : (
            <>
              <FaSignOutAlt /> Logout
            </>
          )}
        </button>

      </nav>
    </aside>
  );
};

export default Sidebar;
