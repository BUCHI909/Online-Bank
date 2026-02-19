// src/pages/Transfer.jsx

import React from "react";
import {
  FaExchangeAlt,
  FaUniversity,
  FaDollarSign,
  FaUser,
  FaStickyNote,
} from "react-icons/fa";

const Transfer = () => {
  return (
    <div style={styles.wrapper}>
      
      {/* ===== PAGE HEADER ===== */}
      <div style={styles.header}>
        <h1>Transfer Funds</h1>
        <p>Send money securely to any bank account worldwide</p>
      </div>

      {/* ===== TRANSFER CARD ===== */}
      <div style={styles.card}>

        <h2 style={styles.cardTitle}>
          <FaExchangeAlt /> New Transfer
        </h2>

        <form style={styles.form}>

          {/* Recipient */}
          <div style={styles.field}>
            <label>Recipient Name</label>
            <div style={styles.inputBox}>
              <FaUser />
              <input placeholder="John Doe" />
            </div>
          </div>

          {/* Account Number */}
          <div style={styles.field}>
            <label>Account Number</label>
            <div style={styles.inputBox}>
              <FaUniversity />
              <input placeholder="1234567890" />
            </div>
          </div>

          {/* Bank */}
          <div style={styles.field}>
            <label>Bank Name</label>
            <div style={styles.inputBox}>
              <FaUniversity />
              <input placeholder="Chase Bank" />
            </div>
          </div>

          {/* Amount */}
          <div style={styles.field}>
            <label>Amount (USD)</label>
            <div style={styles.inputBox}>
              <FaDollarSign />
              <input placeholder="500.00" />
            </div>
          </div>

          {/* Description */}
          <div style={styles.field}>
            <label>Description (Optional)</label>
            <div style={styles.inputBox}>
              <FaStickyNote />
              <input placeholder="Rent payment" />
            </div>
          </div>

          {/* Button */}
          <button type="submit" style={styles.button}>
            Send Transfer
          </button>

        </form>
      </div>

      {/* ===== RECENT TRANSFERS ===== */}
      <div style={styles.history}>
        <h2>Recent Transfers</h2>

        <TransferItem name="David Miller" amount="-$250.00" date="Today" />
        <TransferItem name="Amazon Payment" amount="-$89.99" date="Yesterday" />
        <TransferItem name="Salary Credit" amount="+$3,200.00" date="Feb 12" />
      </div>

    </div>
  );
};

export default Transfer;





// ===== COMPONENT: Transfer History Item =====

const TransferItem = ({ name, amount, date }) => (
  <div style={styles.historyRow}>
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





// ===== STYLES =====

const styles = {
  wrapper: {
    padding: window.innerWidth <= 768 ? "20px" : "40px",
    color: "#fff",
  },

  header: {
    marginBottom: window.innerWidth <= 768 ? 20 : 30,
  },

  card: {
    background: "#1e293b",
    padding: window.innerWidth <= 768 ? 20 : 30,
    borderRadius: 20,
    maxWidth: window.innerWidth <= 768 ? "100%" : 600,
    boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
    marginBottom: 40,
  },

  cardTitle: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 25,
    fontSize: window.innerWidth <= 768 ? "18px" : "inherit",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: window.innerWidth <= 768 ? 16 : 20,
  },

  field: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },

  inputBox: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    background: "#0f172a",
    padding: window.innerWidth <= 768 ? "12px 12px" : "12px 14px",
    borderRadius: 10,
    fontSize: window.innerWidth <= 768 ? "14px" : "inherit",
  },

  button: {
    marginTop: 10,
    padding: window.innerWidth <= 768 ? "12px" : "14px",
    borderRadius: 12,
    border: "none",
    fontWeight: "bold",
    background: "linear-gradient(135deg,#6366f1,#22d3ee)",
    color: "#fff",
    cursor: "pointer",
    fontSize: window.innerWidth <= 768 ? "14px" : "1rem",
    transition: "0.3s",
  },

  history: {
    background: "#1e293b",
    padding: window.innerWidth <= 768 ? 20 : 30,
    borderRadius: 20,
    maxWidth: window.innerWidth <= 768 ? "100%" : 600,
  },

  historyRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: window.innerWidth <= 768 ? "10px 0" : "14px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    fontSize: window.innerWidth <= 768 ? "12px" : "inherit",
  },
};
