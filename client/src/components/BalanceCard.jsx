// BalanceCard.jsx

import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaMoneyBillWave } from "react-icons/fa";

const BalanceCard = () => {
  const [show, setShow] = useState(false);

  return (
    <div style={styles.card}>
      <div>
        <p>Total Balance</p>

        <h1>{show ? "₦1,245,800" : "₦ XXX,XXX"}</h1>

        <button style={styles.toggle} onClick={() => setShow(!show)}>
          {show ? <FaEyeSlash /> : <FaEye />}
          {show ? "Hide" : "Show"}
        </button>
      </div>

      <FaMoneyBillWave size={42} />
    </div>
  );
};

export default BalanceCard;

const styles = {
  card: {
    background: "linear-gradient(135deg,#6366f1,#22d3ee)",
    borderRadius: 20,
    padding: 28,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  },
  toggle: {
    marginTop: 10,
    padding: "8px 14px",
    borderRadius: 8,
    border: "none",
    cursor: "pointer",
  },
};
