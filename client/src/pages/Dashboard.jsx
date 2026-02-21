// src/pages/Dashboard.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBell,
  FaChevronDown,
  FaExchangeAlt,
  FaWallet,
  FaCreditCard,
  FaPlus,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

/* ================= MOCK DATA ================= */

const accounts = [
  { id: 1, name: "Main Account", balance: 12458.0 },
  { id: 2, name: "Savings", balance: 8200.5 },
];

const transactions = [
  { id: 1, name: "Netflix", amount: -55 },
  { id: 2, name: "Salary", amount: 3500 },
  { id: 3, name: "Transfer to David", amount: -250 },
];

/* ================= COMPONENT ================= */

const Dashboard = () => {
  const navigate = useNavigate();

  const [activeAccount, setActiveAccount] = useState(accounts[0]);
  const [showBalance, setShowBalance] = useState(true);
  const [accountOpen, setAccountOpen] = useState(false);

  return (
    <div style={styles.container}>
      
      {/* ===== HEADER ===== */}
      <header style={styles.header}>
        <h2 style={{ margin: 0 }}>Genesis Bank</h2>

        <div style={styles.headerRight}>
          <FaBell size={20} />
        </div>
      </header>

      {/* ===== ACCOUNT SELECTOR ===== */}
      <section style={styles.accountSection}>
        <button
          style={styles.accountBtn}
          onClick={() => setAccountOpen(!accountOpen)}
        >
          <div>
            <strong>{activeAccount.name}</strong>
            <p style={styles.accountSub}>Available balance</p>
          </div>

          <FaChevronDown />
        </button>

        {accountOpen && (
          <div style={styles.accountDropdown}>
            {accounts.map((acc) => (
              <div
                key={acc.id}
                style={styles.accountItem}
                onClick={() => {
                  setActiveAccount(acc);
                  setAccountOpen(false);
                }}
              >
                {acc.name}
              </div>
            ))}
          </div>
        )}

        {/* BALANCE */}
        <h1 style={styles.balance}>
          {showBalance
            ? `$${activeAccount.balance.toLocaleString()}`
            : "••••••••"}
        </h1>

        <button
          style={styles.eyeBtn}
          onClick={() => setShowBalance(!showBalance)}
        >
          {showBalance ? <FaEyeSlash /> : <FaEye />}
        </button>
      </section>

      {/* ===== CARD PREVIEW ===== */}
      <section style={styles.card}>
        <p style={{ opacity: 0.7 }}>Debit Card</p>

        <h3>**** **** **** 4582</h3>

        <div style={styles.cardBottom}>
          <span>GENESIS</span>
          <span>12/29</span>
        </div>
      </section>

      {/* ===== QUICK ACTIONS ===== */}
      <section style={styles.actions}>
        <Action
          title="Transfer"
          icon={<FaExchangeAlt />}
          onClick={() => navigate("/dashboard/transfer")}
        />
        <Action
          title="Wallet"
          icon={<FaWallet />}
          onClick={() => navigate("/dashboard/wallets")}
        />
        <Action
          title="Cards"
          icon={<FaCreditCard />}
          onClick={() => navigate("/dashboard/cards")}
        />
        <Action
          title="Add"
          icon={<FaPlus />}
        />
      </section>

      {/* ===== TRANSACTIONS ===== */}
      <section style={styles.txSection}>
        <div style={styles.txHeader}>
          <h3>Recent Activity</h3>
          <button style={styles.viewAll}>View all</button>
        </div>

        {transactions.map((tx) => (
          <Tx key={tx.id} tx={tx} />
        ))}
      </section>

      {/* ===== FLOATING CTA ===== */}
      <button
        style={styles.fab}
        onClick={() => navigate("/dashboard/transfer")}
      >
        Transfer
      </button>

    </div>
  );
};

/* ================= SMALL COMPONENTS ================= */

const Action = ({ title, icon, onClick }) => (
  <button style={styles.action} onClick={onClick}>
    <div style={{ fontSize: 20 }}>{icon}</div>
    <span>{title}</span>
  </button>
);

const Tx = ({ tx }) => {
  const positive = tx.amount > 0;

  return (
    <div style={styles.txRow}>
      <span>{tx.name}</span>

      <strong style={{ color: positive ? "#00e676" : "#ff5252" }}>
        {positive ? "+" : "-"}${Math.abs(tx.amount)}
      </strong>
    </div>
  );
};

export default Dashboard;

/* ================= STYLES ================= */

const styles = {
  container: {
    padding: "1.4rem",
    background: "#0f172a",
    color: "#fff",
    minHeight: "100vh",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  headerRight: {
    display: "flex",
    gap: 16,
    alignItems: "center",
  },

  accountSection: {
    position: "relative",
    marginBottom: 20,
  },

  accountBtn: {
    background: "none",
    border: "none",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    cursor: "pointer",
  },

  accountSub: {
    margin: 0,
    fontSize: 12,
    opacity: 0.6,
  },

  accountDropdown: {
    background: "#1e293b",
    borderRadius: 12,
    marginTop: 8,
    overflow: "hidden",
  },

  accountItem: {
    padding: 12,
    cursor: "pointer",
    borderBottom: "1px solid rgba(255,255,255,0.07)",
  },

  balance: {
    margin: "12px 0 0",
    fontSize: 32,
  },

  eyeBtn: {
    background: "none",
    border: "none",
    color: "#fff",
    marginTop: 6,
    cursor: "pointer",
  },

  card: {
    background: "linear-gradient(135deg,#6366f1,#22d3ee)",
    borderRadius: 20,
    padding: "1.5rem",
    margin: "20px 0",
  },

  cardBottom: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 20,
    opacity: 0.85,
  },

  actions: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: 10,
    marginBottom: 20,
  },

  action: {
    background: "#1e293b",
    border: "none",
    borderRadius: 16,
    padding: "14px 0",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
    cursor: "pointer",
  },

  txSection: {
    background: "#1e293b",
    borderRadius: 16,
    padding: 16,
  },

  txHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  viewAll: {
    background: "none",
    border: "none",
    color: "#22d3ee",
    cursor: "pointer",
  },

  txRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 0",
    borderBottom: "1px solid rgba(255,255,255,0.07)",
  },

  fab: {
    position: "fixed",
    bottom: 80,
    right: 20,
    background: "#6366f1",
    border: "none",
    padding: "14px 22px",
    borderRadius: 30,
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  },
};