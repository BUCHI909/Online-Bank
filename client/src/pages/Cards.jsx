import React, { useState, useEffect } from "react";
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
          cvv="492"
          brand="mastercard"
          category="debit"
        />

        <BankCard
          bank="Genesis Bank"
          type="Gold Debit"
          number="4123 8890 6521 1745"
          name="GENESIS JAMES"
          expiry="09/26"
          cvv="174"
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
          cvv="921"
          brand="mastercard"
          category="credit"
        />

        <BankCard
          bank="Genesis Bank"
          type="Signature Credit"
          number="4532 6644 9821 4410"
          name="GENESIS JAMES"
          expiry="08/29"
          cvv="781"
          brand="visa"
          category="credit"
        />

      </div>
    </div>
  );
};

export default Cards;

/* ---------- BANK CARD COMPONENT ---------- */

const BankCard = ({ bank, type, number, name, expiry, cvv, brand, category }) => {
  const [flipped, setFlipped] = useState(false);

  // Auto flip every 6s for fintech feel
  useEffect(() => {
    const timer = setInterval(() => setFlipped((f) => !f), 6000);
    return () => clearInterval(timer);
  }, []);

  const background = getCardBackground(brand, category);

  return (
    <div
      style={styles.cardContainer}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)} // mobile tap
    >
      <div
        style={{
          ...styles.cardInner,
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >

        {/* FRONT */}
        <div style={{ ...styles.cardFace, background }}>
          <div style={styles.topRow}>
            <span style={{ fontWeight: "bold" }}>{bank}</span>
            {brand === "visa" ? <FaCcVisa size={44} /> : <FaCcMastercard size={44} />}
          </div>

          <div style={styles.chip}></div>

          <p style={styles.number}>{number}</p>

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

        {/* BACK */}
        <div style={{ ...styles.cardFace, ...styles.back, background }}>
          <div style={styles.stripe}></div>
          <div style={styles.cvvBox}>
            <span>CVV</span>
            <div style={styles.cvv}>{cvv}</div>
          </div>
          <p style={{ fontSize: 12, opacity: 0.8 }}>
            Authorized Signature — Not Valid Unless Signed
          </p>
        </div>

      </div>
    </div>
  );
};

/* ---------- CARD BACKGROUND THEMES ---------- */

function getCardBackground(brand, category) {
  if (brand === "mastercard" && category === "debit") return "linear-gradient(135deg,#0f172a,#7c2d12,#ef4444)";
  if (brand === "mastercard" && category === "credit") return "linear-gradient(135deg,#020617,#991b1b,#f97316)";
  if (brand === "visa" && category === "debit") return "linear-gradient(135deg,#0f172a,#1e40af,#60a5fa)";
  if (brand === "visa" && category === "credit") return "linear-gradient(135deg,#020617,#0ea5e9,#6366f1)";
  return "linear-gradient(135deg,#0f172a,#1e293b)";
}

/* ---------- STYLES ---------- */

const styles = {
  wrapper: { display: "flex", flexDirection: "column", gap: 25 },
  cards: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 22 },
  cardContainer: { perspective: 1000, height: 200 },
  cardInner: { position: "relative", width: "100%", height: "100%", transition: "transform 0.8s", transformStyle: "preserve-3d" },
  cardFace: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 22,
    padding: 26,
    color: "#fff",
    boxShadow: "0 25px 50px rgba(0,0,0,0.35)",
    backfaceVisibility: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  back: { transform: "rotateY(180deg)" },
  stripe: { height: 40, background: "#000", marginBottom: 20 },
  cvvBox: { background: "#fff", color: "#000", padding: 10, borderRadius: 6, width: "60%", marginBottom: 20 },
  cvv: { fontWeight: "bold", letterSpacing: 3 },
  topRow: { display: "flex", justifyContent: "space-between" },
  chip: { width: 52, height: 38, borderRadius: 8, background: "linear-gradient(135deg,#facc15,#fde68a)" },
  number: { fontSize: 22, letterSpacing: 2, fontWeight: 600, margin: 0 },
  bottomRow: { display: "flex", justifyContent: "space-between" },
  label: { fontSize: 10, opacity: 0.7, margin: 0 },
  value: { fontSize: 14, fontWeight: "bold", margin: 0 },
};