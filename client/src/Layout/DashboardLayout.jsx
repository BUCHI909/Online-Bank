// src/layouts/DashboardLayout.jsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard">

      {/* Sidebar Component */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Overlay for mobile when sidebar is open */}
      <div
        className={sidebarOpen ? "overlay open" : "overlay"}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Main Area */}
      <div className="main">

        {/* Navbar */}
        <header className="navbar">

          <button
            className="menu-btn"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            ☰
          </button>

          <h3>Genesis Bank Dashboard</h3>

          <button
            className="bank-home-btn"
            onClick={() => setSidebarOpen((s) => !s)}
            aria-label="Bank Home Toggle"
          >
            Bank Home
          </button>

        </header>

        {/* Page Content */}
        <main className="content">
          <Outlet />
        </main>

      </div>
    </div>
  );
}

export default DashboardLayout;
