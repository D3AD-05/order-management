import React, { useState } from 'react';
import './sidebar.css'; // Assuming you have some CSS for styling the sidebar

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`sidebar ${isOpen ? 'open' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={toggleSidebar}
    >
      <div className="sidebar-content">
        <div className="sidebar-item">Home</div>
        <div className="sidebar-item">Order</div>
        <div className="sidebar-item">Users</div>
      </div>
      {isHovered && <div className="toggle-indicator">Toggle</div>}
    </div>
  );
};

export default Sidebar;
