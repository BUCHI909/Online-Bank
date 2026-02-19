// src/pages/Profile.jsx
import React, { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Genesis James",
    email: "genesis@example.com",
    phone: "+234 8012345678",
    account: "1234567890",
    joined: "Jan 2025"
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <h2>Profile</h2>

      <div style={styles.card}>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Account No:</strong> {user.account}</p>
        <p><strong>Joined:</strong> {user.joined}</p>
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

export default Profile;
