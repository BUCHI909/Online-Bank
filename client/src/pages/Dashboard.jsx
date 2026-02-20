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

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

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

  return (
    <div style={styles.container}>
      <main style={styles.main}>
        {/* Header */}
        <header style={styles.header}>
          <h2 style={{ margin: 0 }}>Welcome back, Genesis 👋</h2>
          <FaBell size={'clamp(1.4rem, 3vw, 1.8rem)'} style={{ cursor: "pointer" }} />
        </header>

        {/* Balance Card */}
        <section style={styles.balanceCard}>
          <div>
            <p style={{ opacity: 0.8, marginBottom: '0.5rem' }}>Total Balance</p>
            <h1 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              {showBalance ? "$12,458.00" : "XXXX"}
              <button
                style={styles.showBtn}
                onClick={() => setShowBalance(!showBalance)}
              >
                {showBalance ? "Hide" : "Show"}
              </button>
            </h1>
          </div>
          <FaMoneyBillWave size={'clamp(2rem, 5vw, 2.8rem)'} />
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
            <Line data={chartData} options={{ maintainAspectRatio: false }} height={300} />
          </div>
          <div style={styles.barChart}>
            <ResponsiveContainer width="100%" height={300}>
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
          <h3 style={{ marginBottom: '1rem', marginTop: 0 }}>Recent Transactions</h3>
          {transactions.map((tx) => (
            <div key={tx.id} style={styles.txRow}>
              <div>
                <strong>{tx.name}</strong>
                <p style={{ margin: '0.25rem 0 0 0', opacity: 0.6, fontSize: '0.9em' }}>{tx.date}</p>
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
  return (
    <div
      style={styles.actionCard}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>{icon}</div>
      <p style={{ margin: 0, fontSize: "clamp(0.8rem, 2vw, 0.95rem)", fontWeight: "500" }}>{title}</p>
    </div>
  );
};

// Stats Cards
const StatCard = ({ title, amount, positive }) => {
  return (
    <div
      style={styles.statCard}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <p style={{ margin: 0, fontSize: "clamp(0.85rem, 2vw, 0.95rem)", opacity: 0.8 }}>{title}</p>
      <h2 style={{ color: positive ? "#00e676" : "#ff5252", fontSize: "clamp(1.4rem, 3.5vw, 2rem)", margin: "0.5rem 0 0 0" }}>
        {amount}
      </h2>
    </div>
  );
};

export default Dashboard;

// ===== RESPONSIVE STYLES WITH CLAMP =====
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
    padding: "clamp(1rem, 4vw, 2rem)",
    overflowX: "hidden",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "clamp(1rem, 2vw, 1.5rem)",
    gap: "1rem",
    flexWrap: "wrap",
  },
  balanceCard: {
    background: "linear-gradient(135deg,#6366f1,#22d3ee)",
    borderRadius: "clamp(1rem, 2vw, 1.5rem)",
    padding: "clamp(1.2rem, 4vw, 1.8rem)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "clamp(1.5rem, 3vw, 2rem)",
    gap: "1rem",
    minHeight: "clamp(100px, 20vw, 150px)",
    flexWrap: "wrap",
  },
  showBtn: {
    marginLeft: "clamp(0.5rem, 1vw, 1rem)",
    fontSize: "clamp(0.7rem, 2vw, 0.85rem)",
    padding: "clamp(0.3rem, 0.8vw, 0.5rem) clamp(0.5rem, 1.5vw, 0.8rem)",
    borderRadius: "0.4rem",
    cursor: "pointer",
    border: "none",
    background: "rgba(255,255,255,0.25)",
    color: "#fff",
    transition: "all 0.3s ease",
  },
  actions: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(clamp(120px, 25vw, 200px), 1fr))",
    gap: "clamp(0.8rem, 2vw, 1.2rem)",
    marginBottom: "clamp(1.5rem, 3vw, 2rem)",
  },
  actionCard: {
    background: "#1e293b",
    padding: "clamp(1rem, 2.5vw, 1.5rem)",
    borderRadius: "clamp(0.8rem, 1.5vw, 1rem)",
    textAlign: "center",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    minHeight: "clamp(80px, 15vw, 120px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
  },
  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(clamp(140px, 28vw, 220px), 1fr))",
    gap: "clamp(0.8rem, 2vw, 1.2rem)",
    marginBottom: "clamp(1.5rem, 3vw, 2rem)",
  },
  statCard: {
    background: "#1e293b",
    padding: "clamp(1.2rem, 2.5vw, 1.5rem)",
    borderRadius: "clamp(0.8rem, 1.5vw, 1rem)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    minHeight: "clamp(100px, 18vw, 140px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  charts: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "clamp(1.5rem, 3vw, 2rem)",
    marginBottom: "clamp(1.5rem, 3vw, 2rem)",
  },
  lineChart: {
    background: "#1e293b",
    padding: "clamp(1rem, 2.5vw, 1.5rem)",
    borderRadius: "clamp(0.8rem, 1.5vw, 1rem)",
    overflowX: "auto",
    minHeight: "300px",
  },
  barChart: {
    background: "#1e293b",
    padding: "clamp(1rem, 2.5vw, 1.5rem)",
    borderRadius: "clamp(0.8rem, 1.5vw, 1rem)",
    overflowX: "auto",
    minHeight: "clamp(250px, 40vw, 350px)",
  },
  transactions: {
    background: "#1e293b",
    padding: "clamp(1rem, 2.5vw, 1.5rem)",
    borderRadius: "clamp(0.8rem, 1.5vw, 1rem)",
    marginBottom: "2rem",
    overflowX: "auto",
  },
  txRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "clamp(0.8rem, 1.5vw, 1rem) 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    fontSize: "clamp(0.85rem, 2vw, 1rem)",
  },
};
