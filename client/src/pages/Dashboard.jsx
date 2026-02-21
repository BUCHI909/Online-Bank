// src/pages/Dashboard.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBell,
  FaUserCircle,
  FaExchangeAlt,
  FaWallet,
  FaMoneyBillWave,
  FaArrowUp,
  FaArrowDown,
  FaPlus
} from "react-icons/fa";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip as ChartTooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ChartTooltip,
  Legend
);

/* ================= MOCK DATA ================= */

const transactions = [
  { id: 1, name: "Netflix Subscription", amount: -55, date: "Today" },
  { id: 2, name: "Salary Credit", amount: 3500, date: "Yesterday" },
  { id: 3, name: "Transfer to David", amount: -250, date: "Feb 10" },
  { id: 4, name: "Electricity Bill", amount: -180, date: "Feb 9" },
];

const chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Balance Trend",
      data: [1200, 1900, 1700, 2200, 2400, 2100],
      borderColor: "#22d3ee",
      backgroundColor: "rgba(34,211,238,0.15)",
      tension: 0.45,
      fill: true,
    },
  ],
};

/* ================= COMPONENT ================= */

const Dashboard = () => {
  const [showBalance, setShowBalance] = useState(true);
  const navigate = useNavigate();

  return (
    <div style={styles.container}>

      {/* ===== TOP BAR ===== */}
      <div style={styles.topBar}>
        <div style={styles.userRow}>
          <FaUserCircle size={40} />
          <div>
            <p style={styles.greeting}>Welcome back</p>
            <h3 style={{ margin: 0 }}>Genesis 👋</h3>
          </div>
        </div>

        <div style={styles.bell}>
          <FaBell size={20} />
          <span style={styles.badge}>3</span>
        </div>
      </div>

      {/* ===== BALANCE CARD ===== */}
      <section style={styles.balanceCard}>
        <p style={styles.balanceLabel}>Total Balance</p>

        <h1 style={styles.balanceAmount}>
          {showBalance ? "$12,458.00" : "••••••••"}
        </h1>

        <button
          style={styles.hideBtn}
          onClick={() => setShowBalance(!showBalance)}
        >
          {showBalance ? "Hide balance" : "Show balance"}
        </button>

        {/* Quick chips */}
        <div style={styles.chips}>
          <Chip label="Income" value="+$4,200" positive />
          <Chip label="Expenses" value="-$1,850" />
          <Chip label="Savings" value="+$6,400" positive />
        </div>
      </section>

      {/* ===== QUICK ACTIONS ===== */}
      <section style={styles.actions}>
        <Action
          title="Send"
          icon={<FaExchangeAlt />}
          onClick={() => navigate("/dashboard/transfer")}
        />
        <Action
          title="Pay Bills"
          icon={<FaMoneyBillWave />}
        />
        <Action
          title="Top Up"
          icon={<FaWallet />}
          onClick={() => navigate("/dashboard/wallets")}
        />
        <Action
          title="Request"
          icon={<FaArrowDown />}
        />
      </section>

      {/* ===== CHART ===== */}
      <section style={styles.chartCard}>
        <Line
          data={chartData}
          options={{ maintainAspectRatio: false }}
          height={260}
        />
      </section>

      {/* ===== TRANSACTIONS ===== */}
      <section style={styles.transactions}>
        <h3 style={{ marginTop: 0 }}>Recent Transactions</h3>

        {transactions.map((tx) => (
          <Transaction key={tx.id} tx={tx} />
        ))}
      </section>

      {/* ===== FLOATING BUTTON ===== */}
      <button
        style={styles.fab}
        onClick={() => navigate("/dashboard/transfer")}
      >
        <FaPlus />
      </button>

    </div>
  );
};

/* ================= SMALL COMPONENTS ================= */

const Chip = ({ label, value, positive }) => (
  <div style={styles.chip}>
    <p style={{ margin: 0, opacity: 0.7, fontSize: 12 }}>{label}</p>
    <strong style={{ color: positive ? "#00e676" : "#ff5252" }}>
      {value}
    </strong>
  </div>
);

const Action = ({ title, icon, onClick }) => (
  <button style={styles.action} onClick={onClick}>
    <div style={{ fontSize: 22 }}>{icon}</div>
    <span>{title}</span>
  </button>
);

const Transaction = ({ tx }) => {
  const positive = tx.amount > 0;

  return (
    <div style={styles.txRow}>
      <div style={styles.txLeft}>
        <div style={styles.txIcon}>
          {positive ? <FaArrowDown /> : <FaArrowUp />}
        </div>

        <div>
          <strong>{tx.name}</strong>
          <p style={styles.txDate}>{tx.date}</p>
        </div>
      </div>

      <strong style={{ color: positive ? "#00e676" : "#ff5252" }}>
        {positive ? "+" : "-"}${Math.abs(tx.amount).toFixed(2)}
      </strong>
    </div>
  );
};

export default Dashboard;

/* ================= STYLES ================= */

const styles = {
  container: {
    padding: "1.5rem",
    background: "#0f172a",
    minHeight: "100vh",
    color: "#fff",
  },

  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },

  userRow: {
    display: "flex",
    gap: 12,
    alignItems: "center",
  },

  greeting: {
    margin: 0,
    fontSize: 12,
    opacity: 0.7,
  },

  bell: {
    position: "relative",
    cursor: "pointer",
  },

  badge: {
    position: "absolute",
    top: -6,
    right: -6,
    background: "#ef4444",
    borderRadius: "50%",
    fontSize: 10,
    padding: "2px 6px",
  },

  balanceCard: {
    background: "linear-gradient(135deg,#6366f1,#22d3ee)",
    borderRadius: 20,
    padding: "1.6rem",
    marginBottom: 24,
  },

  balanceLabel: {
    opacity: 0.85,
    marginBottom: 4,
  },

  balanceAmount: {
    margin: 0,
    fontSize: 32,
  },

  hideBtn: {
    marginTop: 8,
    background: "rgba(255,255,255,0.2)",
    border: "none",
    padding: "6px 10px",
    borderRadius: 8,
    color: "#fff",
    cursor: "pointer",
  },

  chips: {
    display: "flex",
    gap: 12,
    marginTop: 16,
    flexWrap: "wrap",
  },

  chip: {
    background: "rgba(0,0,0,0.25)",
    padding: "8px 12px",
    borderRadius: 12,
  },

  actions: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: 12,
    marginBottom: 24,
  },

  action: {
    background: "#1e293b",
    border: "none",
    borderRadius: 16,
    padding: "16px 0",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
    cursor: "pointer",
  },

  chartCard: {
    background: "#1e293b",
    padding: 16,
    borderRadius: 16,
    marginBottom: 24,
  },

  transactions: {
    background: "#1e293b",
    padding: 16,
    borderRadius: 16,
  },

  txRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 0",
    borderBottom: "1px solid rgba(255,255,255,0.07)",
  },

  txLeft: {
    display: "flex",
    gap: 12,
    alignItems: "center",
  },

  txIcon: {
    background: "#0f172a",
    padding: 8,
    borderRadius: 10,
  },

  txDate: {
    margin: 0,
    fontSize: 12,
    opacity: 0.6,
  },

  fab: {
    position: "fixed",
    bottom: 90,
    right: 20,
    background: "#6366f1",
    border: "none",
    width: 60,
    height: 60,
    borderRadius: "50%",
    color: "#fff",
    fontSize: 20,
    cursor: "pointer",
    boxShadow: "0 12px 24px rgba(0,0,0,0.4)",
  },
};