import React from "react";
import {  Switch, useRouteMatch, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import AddAdmin from "../AddAdmin/AddAdmin";
import AddProduct from "../AddProduct/AddProduct";
import AddReview from "../AddReview/AddReview";
import AdminRoute from "../AdminRoute/AdminRoute";
import AllOrders from "../AllOrders/AllOrders";
import BookProducts from "../BookProduct/BookProducts";
import ManagaProducts from "../ManageProducts/ManagaProducts";
import MyOrders from "../MyOrders/MyOrders";
import Pay from "../Pay/Pay";
import UserRoute from "../UserRoute/UserRoute";
import "./Dashboard.css";

const Dashboard = () => {
  const { path, url } = useRouteMatch();
  const { admin,logout } = useAuth();
  const toggle = () => {
    const menu = document.querySelector(".menu-btn");
    const sidebar = document.querySelector("#sidebar");
    sidebar.classList.toggle("active-nav-side");
    menu.classList.toggle("active-menu");
  };
  return (
    <div>
      <div
        className="side-navbar active-nav-side d-flex justify-content-between flex-wrap flex-column"
        id="sidebar"
      >
        <ul className="nav flex-column text-white w-100">
          <div className="d-flex align-items-center mt-3 mb-4 ms-4">
            <img src="/logo.png" alt="" className="dash-img" />
            <span className="ms-2 sp-color bikeo">Bikeo</span>
          </div>
          <NavLink to="/home" className="nav-link" activeClassName="active-nav">
            <span className="mx-2">
              <i className="fas fa-home me-2"></i>Home
            </span>
          </NavLink>
          {admin && (
            <NavLink
              to={`${url}/addProduct`}
              className="nav-link"
              activeClassName="active-nav"
            >
              <span className="mx-2">
                <i className="fas fa-plus-square me-2"></i>Add Product
              </span>
            </NavLink>
          )}
          {admin && (
            <NavLink
              to={`${url}/addAdmin`}
              className="nav-link"
              activeClassName="active-nav"
            >
              <span className="mx-2">
                <i className="fas fa-user-plus me-2"></i>Add Admin
              </span>
            </NavLink>
          )}
          {!admin && (
            <NavLink
              to={`${url}/myOrders`}
              className="nav-link"
              activeClassName="active-nav"
            >
              <span className="mx-2">
                <i className="fas fa-shopping-cart me-2"></i>My Orders
              </span>
            </NavLink>
          )}
          {admin && (
            <NavLink
              to={`${url}/allOrders`}
              className="nav-link"
              activeClassName="active-nav"
            >
              <span className="mx-2">
                <i className="fas fa-shopping-cart me-2"></i>Manage Orders
              </span>
            </NavLink>
          )}
          {!admin && (
            <NavLink
              to={`${url}/review`}
              className="nav-link"
              activeClassName="active-nav"
            >
              <span className="mx-2">
                <i className="fas fa-hand-holding-heart me-2"></i>Add Review
              </span>
            </NavLink>
          )}
          {!admin && (
            <NavLink
              to={`${url}/bookProduct`}
              className="nav-link"
              activeClassName="active-nav"
            >
              <span className="mx-2">
              <i className="fas fa-store me-2"></i>Order
              </span>
            </NavLink>
          )}
          {!admin && (
            <NavLink
              to={`${url}/pay`}
              className="nav-link"
              activeClassName="active-nav"
            >
              <span className="mx-2">
                <i className="fas fa-money-check-alt me-2"></i>Pay
              </span>
            </NavLink>
          )}
          {admin && (
            <NavLink
              to={`${url}/manageProducts`}
              className="nav-link"
              activeClassName="active-nav"
            >
              <span className="mx-2">
                <i className="fas fa-tasks me-2"></i>Manage Products
              </span>
            </NavLink>
          )}
          <button className="btn logout-btn w-75 ms-4 mt-4" onClick={logout}><i className="fas fa-sign-out-alt me-2  "></i>Logout</button>
        </ul>
      </div>

      <div className="p-1 my-container active-cont">
        <button onClick={toggle} className="menu-btn">
          <i className="fas fa-bars"></i>
        </button>
        <div>
          <Switch>
            <UserRoute path={`${path}/bookProduct/:productId`}>
              <BookProducts></BookProducts>
            </UserRoute>
            <UserRoute exact path={`${path}/bookProduct`}>
              <BookProducts></BookProducts>
            </UserRoute>
            <UserRoute path={`${path}/myOrders`}>
              <MyOrders></MyOrders>
            </UserRoute>
            <UserRoute path={`${path}/pay`}>
              <Pay></Pay>
            </UserRoute>
            <UserRoute path={`${path}/review`}>
              <AddReview></AddReview>
            </UserRoute>

            <AdminRoute path={`${path}/addProduct`}>
              <AddProduct></AddProduct>
            </AdminRoute>
            <AdminRoute path={`${path}/allOrders`}>
              <AllOrders></AllOrders>
            </AdminRoute>
            <AdminRoute path={`${path}/manageProducts`}>
              <ManagaProducts></ManagaProducts>
            </AdminRoute>
            <AdminRoute path={`${path}/addAdmin`}>
              <AddAdmin></AddAdmin>
            </AdminRoute>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
