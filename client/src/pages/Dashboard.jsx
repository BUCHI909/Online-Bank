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
const ActionCard = ({ title, icon }) => (
  <div
    style={styles.actionCard}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
  >
    {icon}
    <p>{title}</p>
  </div>
);

// Stats Cards
const StatCard = ({ title, amount, positive }) => (
  <div
    style={styles.statCard}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
  >
    <p>{title}</p>
    <h2 style={{ color: positive ? "#00e676" : "#ff5252" }}>{amount}</h2>
  </div>
);

export default Dashboard;

// ===== STYLES =====
const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Segoe UI, sans-serif",
    background: "#0f172a",
    color: "#fff",
  },
  main: {
    flex: 1,
    padding: 24,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  balanceCard: {
    background: "linear-gradient(135deg,#6366f1,#22d3ee)",
    borderRadius: 20,
    padding: 30,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  showBtn: {
    marginLeft: 12,
    fontSize: "0.8rem",
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
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: 20,
    marginBottom: 30,
  },
  actionCard: {
    background: "#1e293b",
    padding: 20,
    borderRadius: 16,
    textAlign: "center",
    cursor: "pointer",
    transition: "0.3s",
  },
  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: 20,
    marginBottom: 30,
  },
  statCard: {
    background: "#1e293b",
    padding: 24,
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
    padding: 20,
    borderRadius: 16,
  },
  barChart: {
    background: "#1e293b",
    padding: 20,
    borderRadius: 16,
  },
  transactions: {
    background: "#1e293b",
    padding: 24,
    borderRadius: 16,
    marginBottom: 30,
  },
  txRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },
};
