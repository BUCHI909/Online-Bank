// src/components/Sidebar.jsx
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

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear auth or context here
    navigate("/login");
  };

  return (
    <aside style={styles.sidebar}>
      {/* Sidebar Header */}
      <div style={styles.logo}>
        <FaUniversity size={28} />
        <span>Genesis Bank</span>
      </div>

      {/* Sidebar Menu — moved close to header */}
      <nav style={styles.nav}>
        <NavItem to="/dashboard" icon={<FaHome />} label="Dashboard" />
        <NavItem to="/dashboard/transfer" icon={<FaExchangeAlt />} label="Transfer" />
        <NavItem to="/dashboard/wallets" icon={<FaWallet />} label="Wallets" />
        <NavItem to="/dashboard/cards" icon={<FaCreditCard />} label="Cards" />
        <NavItem to="/dashboard/analytics" icon={<FaChartLine />} label="Analytics" />
        <NavItem to="/dashboard/profile" icon={<FaUser />} label="Profile" muted />
        <NavItem to="/dashboard/settings" icon={<FaCog />} label="Settings" muted />

        {/* Logout */}
        <button style={styles.logout} onClick={handleLogout}>
          <FaSignOutAlt style={{ marginRight: 8 }} /> Logout
        </button>
      </nav>
    </aside>
  );
};

const NavItem = ({ to, icon, label, muted }) => (
  <NavLink
    to={to}
    style={({ isActive }) => ({
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: 12,
      borderRadius: 10,
      cursor: "pointer",
      color: isActive ? "#fff" : muted ? "#999" : "#ccc",
      background: isActive ? "rgba(255,255,255,0.15)" : "transparent",
      textDecoration: "none",
      transition: "0.3s",
    })}
  >
    {icon}
    <span>{label}</span>
  </NavLink>
);

const styles = {
  sidebar: {
    width: 260,
    minHeight: "100vh",
    background: "linear-gradient(180deg,#1e293b,#0f172a)",
    padding: 24,
    display: "flex",
    flexDirection: "column",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16, // reduce gap to bring menu closer
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: 10, // tighter spacing
  },
  logout: {
    marginTop: 20,
    padding: 12,
    borderRadius: 10,
    border: "none",
    background: "#ff5252",
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    transition: "0.3s",
  },
};

export default Sidebar;
