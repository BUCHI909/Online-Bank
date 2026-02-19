import React from "react";
import { FaCreditCard } from "react-icons/fa";

const Cards = () => {
  return (
    <div style={styles.wrapper}>
      <h1>Your Cards</h1>
      <p>Manage your credit/debit cards securely</p>

      <div style={styles.cards}>
        <Card name="Genesis Platinum" number="**** **** **** 4921" expiry="12/28" />
        <Card name="Genesis Gold" number="**** **** **** 1745" expiry="09/26" />
      </div>
    </div>
  );
};

export default Cards;

// Card component
const Card = ({ name, number, expiry }) => (
  <div style={styles.card}>
    <h3>{name}</h3>
    <p>{number}</p>
    <p>Expiry {expiry}</p>
  </div>
);

// Styles
const styles = {
  wrapper: { display: "flex", flexDirection: "column", gap: 30 },
  cards: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 20 },
  card: {
    padding: 30,
    borderRadius: 20,
    background: "linear-gradient(135deg,#0ea5e9,#6366f1)",
    color: "#fff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  },
};
