// src/pages/Cards.jsx
import React from "react";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";

const Cards = () => {
  return (
    <div style={styles.wrapper}>
      <h1>Your Cards</h1>
      <p>Manage your debit and credit cards securely</p>

      <div style={styles.cards}>

        {/* ===== DEBIT CARDS ===== */}

        <BankCard
          bank="Genesis Bank"
          type="Platinum Debit"
          number="5399 8254 7721 4921"
          name="GENESIS JAMES"
          expiry="12/28"
          brand="mastercard"
          category="debit"
        />

        <BankCard
          bank="Genesis Bank"
          type="Gold Debit"
          number="4123 8890 6521 1745"
          name="GENESIS JAMES"
          expiry="09/26"
          brand="visa"
          category="debit"
        />

        {/* ===== CREDIT CARDS ===== */}

        <BankCard
          bank="Genesis Bank"
          type="Infinity Credit"
          number="5399 1111 7777 9921"
          name="GENESIS JAMES"
          expiry="03/30"
          brand="mastercard"
          category="credit"
        />

        <BankCard
          bank="Genesis Bank"
          type="Signature Credit"
          number="4532 6644 9821 4410"
          name="GENESIS JAMES"
          expiry="08/29"
          brand="visa"
          category="credit"
        />

      </div>
    </div>
  );
};

export default Cards;





/* ---------- CARD COMPONENT ---------- */

const BankCard = ({
  bank,
  type,
  number,
  name,
  expiry,
  brand,
  category,
}) => {

  const background = getCardBackground(brand, category);

  return (
    <div style={{ ...styles.card, background }}>

      {/* Top Row */}
      <div style={styles.topRow}>
        <div>
          <p style={styles.bank}>{bank}</p>
          <p style={styles.type}>{type}</p>
        </div>

        <div style={styles.brand}>
          {brand === "visa"
            ? <FaCcVisa size={44} />
            : <FaCcMastercard size={44} />}
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





/* ---------- BACKGROUND THEMES ---------- */

function getCardBackground(brand, category) {

  // 💳 MASTERCARD
  if (brand === "mastercard" && category === "debit") {
    return "linear-gradient(135deg,#0f172a,#7c2d12,#ef4444)";
  }

  if (brand === "mastercard" && category === "credit") {
    return "linear-gradient(135deg,#020617,#991b1b,#f97316)";
  }

  // 💳 VISA
  if (brand === "visa" && category === "debit") {
    return "linear-gradient(135deg,#0f172a,#1e40af,#60a5fa)";
  }

  if (brand === "visa" && category === "credit") {
    return "linear-gradient(135deg,#020617,#0ea5e9,#6366f1)";
  }

  return "linear-gradient(135deg,#0f172a,#1e293b)";
}





/* ---------- STYLES ---------- */

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 25,
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: 22,
  },

  card: {
    position: "relative",
    height: 200,   // ✅ fixed height prevents cutting
    borderRadius: 22,
    padding: 26,
    color: "#fff",
    boxShadow: "0 25px 50px rgba(0,0,0,0.35)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
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
    opacity: 0.85,
    margin: 0,
  },

  brand: {
    opacity: 0.95,
  },

  chip: {
    width: 52,
    height: 38,
    borderRadius: 8,
    background: "linear-gradient(135deg,#facc15,#fde68a)",
    boxShadow: "inset 0 0 6px rgba(0,0,0,0.5)",
  },

  number: {
    fontSize: 22,
    letterSpacing: 2,
    fontWeight: 600,
    margin: 0,
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
