import React from "react";
import { useState } from "react";

const Row = (props) => {
  const {
    _id,
    userName,
    userEmail,
    productName,
    price,
    status,
    phone,
    address
  } = props.data;
  const [nowStatus, setNowStatus] = useState(status);

  // Function to delete a booking 
  const handleDelete = () => {
    const x = window.confirm("Do you want to cancel your booking?");
    if (x) {
      // If confirmed DELETE a booked offer from database 
      fetch(`https://immense-sierra-11894.herokuapp.com/allOrders`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          deleteId: _id,
        }),
      })
        .then((res) => res.json())
        .then(() => props.deleteOrder(_id));
    }
  };

  // Handle status of an order by admin 
  const handleStatus = (status) => {
    if (status === nowStatus) return;
      fetch(`https://immense-sierra-11894.herokuapp.com/allOrders`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          updateId: _id,
          status: status,
        }),
      })
        .then((res) => res.json())
        .then(() => setNowStatus(status));
  };
  return (
    <tr>
      <th scope="row">{_id}</th>
      <td>{userName}</td>
      <td>{userEmail}</td>
      <td>{phone}</td>
      <td>{address}</td>
      <td>{productName}</td>
      <td>${price}</td>
      {props.edit ? (
        <td>
          <div className="dropdown">
            <button
              className={`btn dropdown-toggle ${nowStatus}`}
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {nowStatus}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <button
                  onClick={() => handleStatus("PENDING")}
                  className="dropdown-item"
                >
                  PENDING
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleStatus("ON GOING")}
                  className="dropdown-item"
                >
                  ON GOING
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleStatus("SHIPPED")}
                  className="dropdown-item"
                >
                  SHIPPED
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleStatus("CANCELED")}
                  className="dropdown-item"
                >
                  CANCELED
                </button>
              </li>
            </ul>
          </div>
        </td>
      ) : (
        <td className={status==='ON GOING'? 'GOING': status}>{status}</td>
      )}
      <td>
        <button onClick={handleDelete}>
          <i className="fas fa-times-circle"></i>
        </button>
      </td>
    </tr>
  );
};

export default Row;
