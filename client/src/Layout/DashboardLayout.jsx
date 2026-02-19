// src/layouts/DashboardLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout" style={styles.container}>
      {/* SINGLE GLOBAL SIDEBAR */}
      <Sidebar />

      {/* PAGE CONTENT */}
      <main style={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    background: "#0f172a",
    color: "#fff",
  },
  main: {
    flex: 1,
    padding: 30,
    overflowX: "hidden",
  },
};
