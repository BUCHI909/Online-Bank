import React from "react";
import { FaWallet, FaDollarSign } from "react-icons/fa";

const Wallet = () => {
  return (
    <div style={styles.wrapper}>
      <h1>Wallet Overview</h1>
      <p>Manage your balances and transactions easily</p>

      <div style={styles.card}>
        <h2>Available Balance</h2>
        <p style={styles.amount}>
          <FaDollarSign /> 12,458.00
        </p>
      </div>

      <div style={styles.transactions}>
        <h2>Recent Wallet Activity</h2>
        <Transaction name="Netflix" amount="-$55.00" date="Today" />
        <Transaction name="Salary" amount="+$3,500.00" date="Yesterday" />
        <Transaction name="Amazon" amount="-$89.99" date="Feb 12" />
      </div>
    </div>
  );
};

export default Wallet;

// Transaction component
const Transaction = ({ name, amount, date }) => (
  <div style={styles.txRow}>
    <div>
      <strong>{name}</strong>
      <p style={{ opacity: 0.6 }}>{date}</p>
    </div>
    <span
      style={{
        color: amount.startsWith("+") ? "#22c55e" : "#ef4444",
        fontWeight: "bold",
      }}
    >
      {amount}
    </span>
  </div>
);

// Styles
const styles = {
  wrapper: { display: "flex", flexDirection: "column", gap: 30 },
  card: {
    background: "linear-gradient(135deg,#6366f1,#22d3ee)",
    padding: 30,
    borderRadius: 20,
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  },
  amount: { fontSize: 36, fontWeight: "bold", marginTop: 10, display: "flex", alignItems: "center", gap: 10 },
  transactions: {
    background: "#1e293b",
    padding: 30,
    borderRadius: 20,
  },
  txRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },
};
