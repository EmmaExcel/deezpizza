import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const [click, setClick] = useState(false);

  const toggleSidebar = () => {
    setClick(!click);
  };

  const sidebarClose = () => {
    setClick(false);
  };
  return (
    <>
      <div className="main-sidebar-container">
        <div className="sidebar-container">
          <div className="sidebar-brand">
            <h2 className="sidebar-name">DeezPizza</h2>
          </div>

          <div className="sidebar-component">
            <div className="search-container">
              <input type="text" name="search" id="search"/>

              <i className="fas fa-search"></i>
            </div>
          </div>
          <div className="sidebar-toggle" onClick={toggleSidebar}>
            <i className="fas fa-bars"></i>
          </div>
        </div>

        <div className="aside-container">
        <aside
          className={
            click
              ? "sidebar-sidebar-container show"
              : "sidebar-sidebar-container"
          }
        >
          <i className="fas fa-times" onClick={sidebarClose}></i>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              
              
            </ul>
          </div>
        </aside>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
