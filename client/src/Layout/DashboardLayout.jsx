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

      {/* Main Area */}
      <div className="main">

        {/* Navbar */}
        <header className="navbar">

          <button
            className="menu-btn"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>

          <h3>Genesis Bank Dashboard</h3>

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
