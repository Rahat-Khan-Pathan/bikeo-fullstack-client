import React from "react";
import { useHistory } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./Product.css";

const Product = (props) => {
  const { _id, name, image, price, description } = props.data;
  const history = useHistory();
  const { admin } = useAuth();
  // Function when book now button is clicked
  const handleBook = () => {
    history.push(`/dashboard/bookProduct/${_id}`);
  };
  return (
    <div className="col">
      <div className="card product-card h-100">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title name">{name}</h5>
          <p className="card-text price">${price}</p>
          <p className="cart-text description">{description}</p>
          {admin !== null && admin ? (
            <button className="btn logout-btn m-0" disabled>
              BUY NOW
            </button>
          ) : (
            <button className="btn logout-btn m-0" onClick={handleBook}>
              BUY NOW
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
