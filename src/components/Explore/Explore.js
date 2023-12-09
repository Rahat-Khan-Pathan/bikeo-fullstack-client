import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Explore = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Change Title
        document.title = "Bikeo | All Products";
        window.scrollTo(0, 0);

        // GET all the products
        fetch(`${process.env.REACT_APP_DOMAIN}products?numbers=0`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            });
    }, []);
    return (
        <div className="offers-container2" id="products">
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
                    <h1 className="offers-header2">Our All Products</h1>
                    <div className="container">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-2">
                            {products.map((product) => (
                                <Product
                                    key={product._id}
                                    data={product}
                                ></Product>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Explore;
