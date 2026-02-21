// src/pages/Analytics.jsx
import React from "react";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Cell,
} from "recharts";

/* ===== MOCK DATA ===== */

const monthly = [
  { month: "Jan", income: 4000, expense: 2400 },
  { month: "Feb", income: 3000, expense: 1398 },
  { month: "Mar", income: 5200, expense: 2800 },
  { month: "Apr", income: 4300, expense: 3908 },
  { month: "May", income: 6100, expense: 2800 },
];

const categories = [
  { name: "Food", value: 400 },
  { name: "Transport", value: 300 },
  { name: "Shopping", value: 300 },
  { name: "Bills", value: 200 },
];

const COLORS = ["#6366f1", "#22d3ee", "#00e676", "#ff5252"];

const Analytics = () => {
  return (
    <div style={styles.wrapper}>

      <h1>Financial Analytics</h1>
      <p>Track your income, spending, and trends</p>

      {/* ===== LINE CHART ===== */}
      <div style={styles.card}>
        <h3>Income vs Expenses</h3>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthly}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="income"
              stroke="#22d3ee"
              strokeWidth={3}
            />

            <Line
              type="monotone"
              dataKey="expense"
              stroke="#ff5252"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* ===== PIE CHART ===== */}
      <div style={styles.card}>
        <h3>Spending Categories</h3>

        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie
              data={categories}
              dataKey="value"
              outerRadius={100}
              label
            >
              {categories.map((entry, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default Analytics;

/* ===== STYLES ===== */

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 22,
  },

  card: {
    background: "#1e293b",
    padding: 20,
    borderRadius: 18,
  },
};