import React from "react";
import { FaChartLine } from "react-icons/fa";

const Analytics = () => {
  return (
    <div style={styles.wrapper}>
      <h1>Spending Analytics</h1>
      <p>Track your expenses, income, and savings</p>

      <div style={styles.cards}>
        <StatCard title="Income" amount="$4,200" positive />
        <StatCard title="Expenses" amount="$1,850" />
        <StatCard title="Savings" amount="$6,400" positive />
      </div>
    </div>
  );
};

export default Analytics;

const StatCard = ({ title, amount, positive }) => (
  <div style={{ ...styles.statCard, color: positive ? "#22c55e" : "#ef4444" }}>
    <p>{title}</p>
    <h2>{amount}</h2>
  </div>
);

const styles = {
  wrapper: { display: "flex", flexDirection: "column", gap: 30 },
  cards: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 20 },
  statCard: {
    background: "#1e293b",
    padding: 30,
    borderRadius: 20,
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
};
