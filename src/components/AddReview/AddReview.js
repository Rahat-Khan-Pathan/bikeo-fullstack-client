import React, { useEffect, useRef, useState } from "react";
import Rating from "react-rating";
import useAuth from "../../hooks/useAuth";
import Loading from "../Loading/Loading";
import Modal from "../Modal/Modal";

const AddReview = () => {
  const nameRef = useRef(null);
  const companyRef = useRef(null);
  const reviewRef = useRef(null);
  const { user } = useAuth();
  const [rating,setRating] = useState(0);
  const [loading,setLoading] = useState(false);
  let oneClick = 0;
  // Change Title
  useEffect(() => {
    document.title = "Dashboard | Add Review";
    window.scrollTo(0, 0);
  }, []);
  // Handle add service function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (oneClick > 0) return;
    oneClick++;
    setLoading(true);
    const name = nameRef.current.value;
    const company = companyRef.current.value;
    const review = reviewRef.current.value;
    const image = user.photoURL;
    const data = { name, company, review, image, rating };
    fetch("https://immense-sierra-11894.herokuapp.com/addReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => added());
  };
  // Open modal and clear input if added
  const added = () => {
    oneClick = 0;
    setLoading(false);
    document.getElementById("modal-btn").click();
    setTimeout(() => {
      document.getElementById("modal-close").click();
      nameRef.current.value = "";
      companyRef.current.value = "";
      reviewRef.current.value = "";
      setRating(0);
    }, 2000);
  };
  return (
    <div className="container add-service-container">
      <Modal text={"Review Added"}></Modal>
      <h1 className="booking-header">Add Review</h1>
      <hr />
      <div className="limiter book-limiter">
        <div className="container-login100 align-items-start py-0">
          <div className="wrap-login100">
            <form
              className="login100-form validate-form"
              onSubmit={handleSubmit}
            >
              {/* Input Destination Name  */}
              <div className="wrap-input100 validate-input">
                <span className="label-input100 sp-color p-0">Name</span>
                <input
                  required
                  ref={nameRef}
                  className="input100 book-input"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                />
                <span className="focus-input100 fa"></span>
              </div>
              {/* Input Company Name  */}
              <div className="wrap-input100 validate-input">
                <span className="label-input100 sp-color p-0">Company</span>
                <input
                  required
                  ref={companyRef}
                  className="input100 book-input"
                  type="text"
                  name="name"
                  placeholder="Enter company name"
                />
                <span className="focus-input100 fa"></span>
              </div>

              {/* Input review star  */}
              <div className="wrap-input100 validate-input">
                <span className="label-input100 sp-color p-0">Star</span>
                <br />
                <Rating
                  className="py-3 ps-1"
                  emptySymbol="fa fa-star-o star"
                  fullSymbol="fa fa-star star"
                  onChange={rate=> setRating(rate)}
                  initialRating={rating}
                />
                <span className="focus-input100 fa"></span>
              </div>
              {/* Input Review */}
              <div className="wrap-input100 validate-input">
                <span className="label-input100 sp-color p-0">Review</span>
                <textarea
                  required
                  ref={reviewRef}
                  className="input100 book-address book-input"
                  type="text"
                  name="description"
                  placeholder="Enter review"
                />
                <span className="focus-input100 fa"></span>
              </div>

              <div className="container-login100-form-btn mt-4 mb-2">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn"></div>
                  <input
                    type="submit"
                    value="ADD REVIEW"
                    className="login100-form-btn book-btn"
                  />
                </div>
              </div>
              {
                loading && <Loading></Loading>
              }
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
