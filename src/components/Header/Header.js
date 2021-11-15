import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  // getting user data from context api
  const { user, logout,admin,userName } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <NavLink to="/home" className="navbar-brand d-flex align-items-center">
          <img src="/logo.png" alt="" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/home"
                className="nav-link"
                activeClassName="active-nav"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/explore"
                className="nav-link"
                activeClassName="active-nav"
              >
                Explore
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="active-nav"
              >
                About
              </NavLink>
            </li>
          </ul>

          {user.email ? (
            <div className="d-flex user">
              <li className="nav-item">
              <NavLink
                to={admin? "/dashboard/allOrders" : "/dashboard/myOrders"}
                className="nav-link"
                activeClassName="active-nav"
              >
                Dashboard
              </NavLink>
            </li>
              <li className="nav-item">
                <p className="user-name mb-1">{user.displayName || userName}</p>
              </li>
              <li className="nav-item">
                <button
                  onClick={logout}
                  className="btn logout-btn"
                >
                  Log Out
                </button>
              </li>
            </div>
          ) : (
            <div className="user d-flex">
              <li className="nav-item">
                <NavLink to="/login">
                  <button className="btn logout-btn">
                    Log In
                  </button>
                </NavLink>
              </li>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
