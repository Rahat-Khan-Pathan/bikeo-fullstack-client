import React from "react";
import "./ChooseUs.css";

const ChooseUs = () => {
  return (
    <div className="container choose-container">
      <h1 className="offers-header2">Why Choose Us</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 px-2 justify-content-center">
        <div className="col d-flex justify-content-center">
          <div className="card h-100 choose-card">
            <div className="choose-icon">
              <img
                src="https://choosemybicycle.s3.ap-south-1.amazonaws.com/cmb-website-icons/miscellaneous/usp-icons/cardboard-box-icon.svg"
                alt=""
              />
            </div>
            <div className="card-body">
              <h5 className="card-title choose-title">
                READY TO RIDE OUT OF THE BOX
              </h5>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-center">
          <div className="card h-100 choose-card">
            <div className="choose-icon">
              <img
                src="https://choosemybicycle.s3.ap-south-1.amazonaws.com/cmb-website-icons/miscellaneous/usp-icons/shield-icon.svg"
                alt=""
              />
            </div>
            <div className="card-body">
              <h5 className="card-title choose-title">
                SAFE AND SECURE PAYMENTS
              </h5>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-center">
          <div className="card h-100 choose-card">
            <div className="choose-icon">
              <img
                src="https://choosemybicycle.s3.ap-south-1.amazonaws.com/cmb-website-icons/miscellaneous/usp-icons/emi-icon.svg"
                alt=""
              />
            </div>
            <div className="card-body">
              <h5 className="card-title choose-title">
                EASY EMI PAYMENT OPTIONS
              </h5>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-center">
          <div className="card h-100 choose-card">
            <div className="choose-icon">
              <img
                src="https://choosemybicycle.s3.ap-south-1.amazonaws.com/cmb-website-icons/miscellaneous/usp-icons/special-offers-icon.svg"
                alt=""
              />
            </div>
            <div className="card-body">
              <h5 className="card-title choose-title">GUARANTEED OFFERS</h5>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-center">
          <div className="card h-100 choose-card">
            <div className="choose-icon">
              <img
                src="https://choosemybicycle.s3.ap-south-1.amazonaws.com/cmb-website-icons/miscellaneous/usp-icons/quality-icon.svg"
                alt=""
              />
            </div>
            <div className="card-body">
              <h5 className="card-title choose-title">
                23 POINT QUALITY CHECK
              </h5>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-center">
          <div className="card h-100 choose-card">
            <div className="choose-icon">
              <img
                src="https://choosemybicycle.s3.ap-south-1.amazonaws.com/cmb-website-icons/miscellaneous/usp-icons/home-location-icon.svg"
                alt=""
              />
            </div>
            <div className="card-body">
              <h5 className="card-title choose-title">
                BICYCLE SERVICE AT HOME
              </h5>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-center">
          <div className="card h-100 choose-card">
            <div className="choose-icon">
              <img
                src="https://choosemybicycle.s3.ap-south-1.amazonaws.com/cmb-website-icons/miscellaneous/usp-icons/support-icon.svg"
                alt=""
              />
            </div>
            <div className="card-body">
              <h5 className="card-title choose-title">AFTER SALES SUPPORT</h5>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-center">
          <div className="card h-100 choose-card">
            <div className="choose-icon">
              <img
                src="https://choosemybicycle.s3.ap-south-1.amazonaws.com/cmb-website-icons/miscellaneous/usp-icons/chat-icon.svg"
                alt=""
              />
            </div>
            <div className="card-body">
              <h5 className="card-title choose-title">CHAT WITH OUR EXPERT</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
