import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Form from "../Form/Form";
import Modal from "../Modal/Modal";

const BookProducts = () => {
    const id = useParams().productId;
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Change title
        document.title = "Dashboard | Order Product";
        window.scrollTo(0, 0);

        // GET specific data of an offer
        fetch(`${process.env.REACT_APP_DOMAIN}products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            });
    }, []);

    // Open modal
    const added = () => {
        document.getElementById("modal-btn").click();
        setTimeout(() => {
            document.getElementById("modal-close").click();
        }, 2000);
    };
    const history = useHistory();
    const toggleProduct = () => {
        history.push("/explore");
    };
    return (
        <div className="container book-container">
            {id ? (
                <>
                    <Modal text={"Booked Successfully"}></Modal>
                    {loading ? (
                        <div className="spinner d-flex align-items-center justify-content-center">
                            <button
                                className="btn btn-primary"
                                type="button"
                                disabled
                            >
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
                            <div className="container add-service-container">
                                <h1 className="booking-header">
                                    Order Product
                                </h1>
                                <hr />
                                <div className="d-flex justify-content-center">
                                    <div className="d-flex justify-content-between align-items-center mb-4 details">
                                        <h4 className="price">
                                            <span className="sp-color">
                                                Product:{" "}
                                            </span>
                                            {data.name}
                                        </h4>
                                        <h4 className="price">
                                            <span className="sp-color">
                                                Price:{" "}
                                            </span>
                                            ${data.price}
                                        </h4>
                                    </div>
                                </div>
                                <Form data={data} added={added}></Form>
                            </div>
                        </>
                    )}
                </>
            ) : (
                <div className="d-flex justify-content-center align-items-center no-product flex-column">
                    <h1 className="booking-header">Please select a product</h1>
                    <button onClick={toggleProduct} className="btn logout-btn">
                        PRODUCTS
                    </button>
                </div>
            )}
        </div>
    );
};

export default BookProducts;
