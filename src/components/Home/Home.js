import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Banner from "../Banner/Banner";
import ChooseUs from "../ChooseUs/ChooseUs";
import Contact from "../Contact/Contact";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(true);
    const [products, setProducts] = useState([]);
    const [reviews, setReviews] = useState([]);
    const { user, admin } = useAuth();
    useEffect(() => {
        // Change Title
        document.title = "Bikeo | Home";
        window.scrollTo(0, 0);

        // GET 6 products
        fetch(`${process.env.REACT_APP_DOMAIN}products`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            });
        // GET all the reviews
        fetch(`${process.env.REACT_APP_DOMAIN}reviews`)
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
                setLoading2(false);
            });
    }, [user, admin]);

    return (
        <div>
            {loading && loading2 ? (
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
                    <Banner></Banner>
                    <ChooseUs></ChooseUs>
                    <Products products={products}></Products>
                    <Reviews reviews={reviews}></Reviews>
                    <Contact></Contact>
                </>
            )}
        </div>
    );
};

export default Home;
