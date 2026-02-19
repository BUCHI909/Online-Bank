// src/layouts/DashboardLayout.jsx
import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

function DashboardLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <aside className={`sidebar ${open ? "open" : ""}`}>

        <div className="sidebar-header">
          <h2>Genesis Bank</h2>

          <button
            className="close-btn"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>

        <nav>

          <NavLink to="/dashboard" onClick={() => setOpen(false)}>
            Dashboard
          </NavLink>

          <NavLink to="/dashboard/transfer" onClick={() => setOpen(false)}>
            Transfer
          </NavLink>

          <NavLink to="/dashboard/cards" onClick={() => setOpen(false)}>
            Cards
          </NavLink>

          <NavLink to="/dashboard/wallet" onClick={() => setOpen(false)}>
            Wallet
          </NavLink>

          <NavLink to="/dashboard/analytics" onClick={() => setOpen(false)}>
            Analytics
          </NavLink>

          <hr />

          <NavLink to="/dashboard/profile" onClick={() => setOpen(false)}>
            Profile
          </NavLink>

          <NavLink to="/dashboard/settings" onClick={() => setOpen(false)}>
            Settings
          </NavLink>

        </nav>
      </aside>

      {/* Main Area */}
      <div className="main">

        {/* Navbar */}
        <header className="navbar">

          <button
            className="menu-btn"
            onClick={() => setOpen(true)}
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
