// src/pages/Settings.jsx
import React from "react";

const Settings = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <h2>Settings</h2>
      <div style={styles.card}>
        <p><strong>Change Password:</strong> *********</p>
        <p><strong>Notifications:</strong> Enabled</p>
        <p><strong>Theme:</strong> Dark</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    background: "#1e293b",
    padding: 24,
    borderRadius: 16,
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
};

export default Settings;
