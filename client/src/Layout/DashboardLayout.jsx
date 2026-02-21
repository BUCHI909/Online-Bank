// src/layouts/DashboardLayout.jsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import BottomNav from "../components/BottomNav";

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard">

      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {sidebarOpen && (
        <div
          className="overlay open"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="main">

        <header className="navbar">
          <button
            className="menu-btn"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>

          <h3>Genesis Bank</h3>
        </header>

        <main className="content">
          <Outlet />
        </main>

      </div>

      {/* ⭐ Mobile Bottom Navigation */}
      <BottomNav />

    </div>
  );
}

export default DashboardLayout;