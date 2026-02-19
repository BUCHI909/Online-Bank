import React from "react";
import { FiSearch, FiBell } from "react-icons/fi";

const Topbar = () => {
  return (
    <header className="topbar">

      {/* LEFT — Page Title */}
      <div className="topbar-left">
        <h2>Dashboard</h2>
      </div>

      {/* RIGHT — Actions */}
      <div className="topbar-right">

        {/* Search */}
        <div className="search-box">
          <FiSearch className="icon" />
          <input placeholder="Search transactions..." />
        </div>

        {/* Notifications */}
        <div className="icon-btn">
          <FiBell />
          <span className="badge">3</span>
        </div>

        {/* User */}
        <div className="user-profile">
          <img src="https://i.pravatar.cc/40" alt="user" />
          <span>John Doe</span>
        </div>

      </div>

    </header>
  );
};

export default Topbar;
