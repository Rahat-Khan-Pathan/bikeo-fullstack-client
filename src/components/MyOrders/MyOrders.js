import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Row from "../Row/Row";
import "./MyOrders.css";

const MyOrders = () => {
  const { user } = useAuth();
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Change title
    document.title = "Dashboard | My Orders";
    window.scrollTo(0, 0);

    // GET all booked offers of a user
    fetch(`https://immense-sierra-11894.herokuapp.com/allOrders/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrderData(data);
        setLoading(false);
      });
  }, []);

  // Function to delete a booked offer by user
  const deleteOrder = (id) => {
    const newOrderData = orderData.filter((dt) => dt._id !== id);
    setOrderData(newOrderData);
  };
  return (
    <div className="my-bookings-container container">
      {loading ? (
        <div className="spinner d-flex align-items-center justify-content-center">
          <button className="btn btn-primary" type="button" disabled>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span className="ms-2">Loading...</span>
          </button>
        </div>
      ) : (
        <>
          <h1 className="booking-header">My Orders</h1>
          <hr />
          <div className="table-responsive my-table p-2 border">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Order ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Address</th>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {orderData.map((order) => (
                  <Row
                    key={order._id}
                    data={order}
                    deleteOrder={deleteOrder}
                    edit={false}
                  ></Row>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default MyOrders;
