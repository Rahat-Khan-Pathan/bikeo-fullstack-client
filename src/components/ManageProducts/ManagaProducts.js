import React, { useEffect, useState } from "react";
import ProductsRow from "../ProductsRow/ProductsRow";

const ManagaProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Change title
        document.title = "Dashboard | Manage All Products";
        window.scrollTo(0, 0);

        // GET all products data
        fetch(`${process.env.REACT_APP_DOMAIN}products?numbers=0`)
            .then((res) => res.json())
            .then((data) => {
                setAllProducts(data);
                setLoading(false);
            });
    }, []);

    // Function to delete a products by admin
    const deleteProduct = (id) => {
        const x = window.confirm("Do you want to delete this product?");
        if (x) {
            fetch(`${process.env.REACT_APP_DOMAIN}products/${id}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    id: id,
                }),
            })
                .then((res) => res.json())
                .then(() => {
                    update(id);
                });
        }
    };
    // Function to update offers in the ui
    const update = (id) => {
        const newOffers = allProducts.filter((pd) => pd._id !== id);
        setAllProducts(newOffers);
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
                    <h1 className="booking-header">Manage All Products</h1>
                    <hr />
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Product ID</th>
                                    <th scope="col">Product Image</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allProducts.map((pd) => (
                                    <ProductsRow
                                        key={pd._id}
                                        data={pd}
                                        deleteProduct={deleteProduct}
                                    ></ProductsRow>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    );
};

export default ManagaProducts;
