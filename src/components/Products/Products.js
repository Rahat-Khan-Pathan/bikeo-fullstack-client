import React from "react";
import { useHistory } from "react-router";
import Product from "../Product/Product";
import "./Products.css";

const Products = (props) => {
  const { products } = props;
  const history = useHistory();
  return (
    <div className="offers-container" id="products">
      <h1 className="offers-header2">Our Latest Products</h1>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-2">
          {products.map((product) => (
            <Product key={product._id} data={product}></Product>
          ))}
        </div>
        <button className="btn offer-btn2 mt-5 explore-btn d-block m-auto" onClick={()=> history.push("/explore")}>EXPLORE MORE PRODUCTS</button>
      </div>
    </div>
  );
};

export default Products;
