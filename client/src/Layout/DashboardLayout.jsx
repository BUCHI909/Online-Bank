import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Overlay */}
      <div
        className={`overlay ${sidebarOpen ? "open" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Main */}
      <div className="main">

        <header className="navbar">
          <button
            className="menu-btn"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>

          <h3>Genesis Bank Dashboard</h3>
        </header>

        <main className="content">
          <Outlet />
        </main>

      </div>
    </div>
  );
}

export default DashboardLayout;