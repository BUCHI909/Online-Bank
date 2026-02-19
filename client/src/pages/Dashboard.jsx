// src/pages/Dashboard.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBell,
  FaUserCircle,
  FaExchangeAlt,
  FaWallet,
  FaMoneyBillWave,
} from "react-icons/fa";

// Chart.js
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

// Recharts
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ChartTooltip,
  Legend
);

const transactions = [
  { id: 1, name: "Netflix Subscription", amount: "-$55.00", date: "Today" },
  { id: 2, name: "Salary Credit", amount: "+$3,500.00", date: "Yesterday" },
  { id: 3, name: "Transfer to David", amount: "-$250.00", date: "Feb 10" },
  { id: 4, name: "Electricity Bill", amount: "-$180.00", date: "Feb 9" },
];

const chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Income",
      data: [1200, 1900, 1700, 2200, 2400, 2100],
      borderColor: "#22d3ee",
      backgroundColor: "rgba(34,211,238,0.2)",
      tension: 0.4,
    },
    {
      label: "Expenses",
      data: [800, 1200, 1000, 1400, 1600, 1300],
      borderColor: "#6366f1",
      backgroundColor: "rgba(99,102,241,0.2)",
      tension: 0.4,
    },
  ],
};

const barData = [
  { name: "Mon", Spending: 400 },
  { name: "Tue", Spending: 700 },
  { name: "Wed", Spending: 300 },
  { name: "Thu", Spending: 500 },
  { name: "Fri", Spending: 800 },
  { name: "Sat", Spending: 600 },
  { name: "Sun", Spending: 450 },
];

const Dashboard = () => {
  const [showBalance, setShowBalance] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add real logout logic
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      {/* Main Content (NO Sidebar here) */}
      <main style={styles.main}>
        {/* Header */}
        <header style={styles.header}>
          <h2>Welcome back, Genesis 👋</h2>
          <FaBell size={24} style={{ cursor: "pointer" }} />
        </header>

        {/* Balance Card */}
        <section style={styles.balanceCard}>
          <div>
            <p>Total Balance</p>
            <h1>
              {showBalance ? "$12,458.00" : "XXXX"}
              <button
                style={styles.showBtn}
                onClick={() => setShowBalance(!showBalance)}
              >
                {showBalance ? "Hide" : "Show"}
              </button>
            </h1>
          </div>
          <FaMoneyBillWave size={40} />
        </section>

        {/* Quick Actions */}
        <section style={styles.actions}>
          <ActionCard title="Send Money" icon={<FaExchangeAlt />} />
          <ActionCard title="Pay Bills" icon={<FaMoneyBillWave />} />
          <ActionCard title="Top Up" icon={<FaWallet />} />
          <ActionCard title="Request" icon={<FaUserCircle />} />
        </section>

        {/* Stats Cards */}
        <section style={styles.stats}>
          <StatCard title="Income" amount="$4,200" positive />
          <StatCard title="Expenses" amount="$1,850" />
          <StatCard title="Savings" amount="$6,400" positive />
        </section>

        {/* Charts */}
        <section style={styles.charts}>
          <div style={styles.lineChart}>
            <Line data={chartData} />
          </div>
          <div style={styles.barChart}>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="Spending" fill="#6366f1" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Recent Transactions */}
        <section style={styles.transactions}>
          <h3>Recent Transactions</h3>
          {transactions.map((tx) => (
            <div key={tx.id} style={styles.txRow}>
              <div>
                <strong>{tx.name}</strong>
                <p>{tx.date}</p>
              </div>
              <span
                style={{
                  color: tx.amount.startsWith("+") ? "#00e676" : "#ff5252",
                  fontWeight: "bold",
                }}
              >
                {tx.amount}
              </span>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

// Action Cards
const ActionCard = ({ title, icon }) => {
  const isMobile = window.innerWidth <= 768;
  return (
    <div
      style={{
        ...styles.actionCard,
        flexDirection: isMobile ? "row" : "column",
      }}
      onMouseEnter={(e) => !isMobile && (e.currentTarget.style.transform = "translateY(-5px)")}
      onMouseLeave={(e) => !isMobile && (e.currentTarget.style.transform = "translateY(0)")}
    >
      <div style={{ fontSize: isMobile ? "20px" : "24px" }}>{icon}</div>
      <p style={{ margin: 0, fontSize: isMobile ? "13px" : "inherit" }}>{title}</p>
    </div>
  );
};

// Stats Cards
const StatCard = ({ title, amount, positive }) => {
  const isMobile = window.innerWidth <= 768;
  return (
    <div
      style={styles.statCard}
      onMouseEnter={(e) => !isMobile && (e.currentTarget.style.transform = "translateY(-5px)")}
      onMouseLeave={(e) => !isMobile && (e.currentTarget.style.transform = "translateY(0)")}
    >
      <p style={{ margin: 0, fontSize: isMobile ? "13px" : "inherit" }}>{title}</p>
      <h2 style={{ color: positive ? "#00e676" : "#ff5252", fontSize: isMobile ? "18px" : "24px" }}>
        {amount}
      </h2>
    </div>
  );
};

export default Dashboard;

// ===== STYLES =====
const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Segoe UI, sans-serif",
    background: "#0f172a",
    color: "#fff",
    flexDirection: window.innerWidth <= 768 ? "column" : "row",
  },
  main: {
    flex: 1,
    padding: window.innerWidth <= 768 ? 12 : (window.innerWidth <= 1024 ? 16 : 24),
    overflowX: "hidden",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: window.innerWidth <= 768 ? 16 : 20,
    gap: 10,
  },
  balanceCard: {
    background: "linear-gradient(135deg,#6366f1,#22d3ee)",
    borderRadius: 20,
    padding: window.innerWidth <= 768 ? 20 : 30,
    display: "flex",
    justifyContent: "space-between",
    alignItems: window.innerWidth <= 768 ? "flex-start" : "center",
    marginBottom: 30,
    flexDirection: window.innerWidth <= 768 ? "column" : "row",
    gap: window.innerWidth <= 768 ? 15 : 0,
  },
  showBtn: {
    marginLeft: 12,
    fontSize: window.innerWidth <= 768 ? "0.75rem" : "0.8rem",
    padding: "4px 8px",
    borderRadius: 6,
    cursor: "pointer",
    border: "none",
    background: "rgba(255,255,255,0.25)",
    color: "#fff",
    transition: "0.3s",
  },
  actions: {
    display: "grid",
    gridTemplateColumns: window.innerWidth <= 768 ? "1fr" : "repeat(auto-fit, minmax(140px, 1fr))",
    gap: window.innerWidth <= 768 ? 12 : 20,
    marginBottom: 30,
  },
  actionCard: {
    background: "#1e293b",
    padding: window.innerWidth <= 768 ? 16 : 20,
    borderRadius: 16,
    textAlign: "center",
    cursor: "pointer",
    transition: "0.3s",
    minHeight: window.innerWidth <= 768 ? 60 : "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  stats: {
    display: "grid",
    gridTemplateColumns: window.innerWidth <= 768 ? "1fr" : "repeat(auto-fit, minmax(180px, 1fr))",
    gap: window.innerWidth <= 768 ? 12 : 20,
    marginBottom: 30,
  },
  statCard: {
    background: "#1e293b",
    padding: window.innerWidth <= 768 ? 16 : 24,
    borderRadius: 16,
    transition: "0.3s",
  },
  charts: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 30,
    marginBottom: 30,
  },
  lineChart: {
    background: "#1e293b",
    padding: window.innerWidth <= 768 ? 16 : 20,
    borderRadius: 16,
    overflowX: "auto",
  },
  barChart: {
    background: "#1e293b",
    padding: window.innerWidth <= 768 ? 16 : 20,
    borderRadius: 16,
    overflowX: "auto",
  },
  transactions: {
    background: "#1e293b",
    padding: window.innerWidth <= 768 ? 16 : 24,
    borderRadius: 16,
    marginBottom: 30,
    overflowX: window.innerWidth <= 768 ? "auto" : "visible",
  },
  txRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: window.innerWidth <= 768 ? "10px 0" : "14px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    fontSize: window.innerWidth <= 768 ? "12px" : "14px",
  },
};
