// src/pages/Cards.jsx
import React from "react";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";

const Cards = () => {
  return (
    <div style={styles.wrapper}>
      <h1>Your Cards</h1>
      <p>Manage your debit cards securely</p>

      <div style={styles.cards}>

        <DebitCard
          bank="Genesis Bank"
          type="Platinum Debit"
          number="5399 8254 7721 4921"
          name="GENESIS JAMES"
          expiry="12/28"
          brand="mastercard"
        />

        <DebitCard
          bank="Genesis Bank"
          type="Gold Debit"
          number="4123 8890 6521 1745"
          name="GENESIS JAMES"
          expiry="09/26"
          brand="visa"
        />

      </div>
    </div>
  );
};

export default Cards;





/* ---------- CARD COMPONENT ---------- */

const DebitCard = ({ bank, type, number, name, expiry, brand }) => {
  return (
    <div style={styles.card}>

      {/* Top Row */}
      <div style={styles.topRow}>
        <div>
          <p style={styles.bank}>{bank}</p>
          <p style={styles.type}>{type}</p>
        </div>

        <div style={styles.brand}>
          {brand === "visa" ? (
            <FaCcVisa size={42} />
          ) : (
            <FaCcMastercard size={42} />
          )}
        </div>
      </div>

      {/* Chip */}
      <div style={styles.chip}></div>

      {/* Card Number */}
      <p style={styles.number}>{number}</p>

      {/* Bottom Row */}
      <div style={styles.bottomRow}>
        <div>
          <p style={styles.label}>CARD HOLDER</p>
          <p style={styles.value}>{name}</p>
        </div>

        <div>
          <p style={styles.label}>EXPIRES</p>
          <p style={styles.value}>{expiry}</p>
        </div>
      </div>

    </div>
  );
};





/* ---------- STYLES ---------- */

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 25,
  },

  cards: {
    display: "grid",
    gridTemplateColumns:
      window.innerWidth <= 768
        ? "1fr"
        : "repeat(auto-fit, minmax(360px, 1fr))",
    gap: 20,
  },

  card: {
    position: "relative",
    height: 220,
    borderRadius: 22,
    padding: 25,
    color: "#fff",
    background:
      "linear-gradient(135deg,#0f172a,#1e3a8a,#6366f1)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
    overflow: "hidden",
  },

  topRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  bank: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 0,
  },

  type: {
    fontSize: 12,
    opacity: 0.8,
    margin: 0,
  },

  brand: {
    opacity: 0.9,
  },

  chip: {
    width: 48,
    height: 36,
    borderRadius: 8,
    background:
      "linear-gradient(135deg,#facc15,#fde68a)",
    marginTop: 20,
    boxShadow: "inset 0 0 4px rgba(0,0,0,0.4)",
  },

  number: {
    fontSize: 22,
    letterSpacing: 2,
    marginTop: 25,
    marginBottom: 25,
    fontWeight: 500,
  },

  bottomRow: {
    display: "flex",
    justifyContent: "space-between",
  },

  label: {
    fontSize: 10,
    opacity: 0.7,
    margin: 0,
  },

  value: {
    fontSize: 14,
    fontWeight: "bold",
    margin: 0,
  },
};
