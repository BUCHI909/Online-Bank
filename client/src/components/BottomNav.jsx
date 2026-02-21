// src/components/BottomNav.jsx
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaHome,
  FaExchangeAlt,
  FaCreditCard,
  FaWallet,
  FaUser
} from "react-icons/fa";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const item = (path, icon, label) => (
    <button
      onClick={() => navigate(path)}
      className={location.pathname.startsWith(path) ? "active" : ""}
    >
      {icon}
      <span>{label}</span>
    </button>
  );

  return (
    <nav className="bottom-nav">
      {item("/dashboard", <FaHome />, "Home")}
      {item("/dashboard/transfer", <FaExchangeAlt />, "Send")}
      {item("/dashboard/cards", <FaCreditCard />, "Cards")}
      {item("/dashboard/wallets", <FaWallet />, "Wallet")}
      {item("/dashboard/profile", <FaUser />, "Profile")}
    </nav>
  );
};

export default BottomNav;