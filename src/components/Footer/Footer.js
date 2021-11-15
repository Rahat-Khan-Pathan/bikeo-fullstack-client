import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container bg-dark">
      <div className="row row-cols-lg-4 row-cols-1 g-4">
        <div className="col">
          <h4>CONTACT</h4>
          <p className="sp-2">
            Mon – Fri 9:00 am – 5:30 pm, Sat 9:00 am – 1:00 pm We are closed on
            1st & 3rd Sat of every month, Sundays & public holidays
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i>{" "}
            <span className="sp">1945 Washington, San Francisco</span>
          </p>
          <p>
            <i className="fas fa-phone-alt"></i>{" "}
            <span className="sp">+1 234 456 7890</span>
          </p>
          <p>
            <i className="fas fa-envelope"></i>{" "}
            <span className="sp">contact@bikeo.com</span>
          </p>
        </div>
        <div className="col">
          <h4>INFORMATION</h4>
          <p>
            <i className="fas fa-chevron-right"></i>{" "}
            <span className="sp">Press Centre</span>
          </p>
          <p>
            <i className="fas fa-chevron-right"></i>{" "}
            <span className="sp">Travel News</span>
          </p>
          <p>
            <i className="fas fa-chevron-right"></i>{" "}
            <span className="sp">About Us</span>
          </p>
          <p>
            <i className="fas fa-chevron-right"></i>{" "}
            <span className="sp">Privacy Policy</span>
          </p>
          <p>
            <i className="fas fa-chevron-right"></i>{" "}
            <span className="sp">Contact Us</span>
          </p>
        </div>
        <div className="col">
          <h4>OUR MENU</h4>
          <p>
            <i className="fas fa-chevron-right"></i>{" "}
            <span className="sp">Travel</span>
          </p>
          <p>
            <i className="fas fa-chevron-right"></i>{" "}
            <span className="sp">Career</span>
          </p>
          <p>
            <i className="fas fa-chevron-right"></i>{" "}
            <span className="sp">Terms</span>
          </p>
          <p>
            <i className="fas fa-chevron-right"></i>{" "}
            <span className="sp">Follow Us</span>
          </p>
          <p>
            <i className="fas fa-chevron-right"></i>{" "}
            <span className="sp">Meet Us</span>
          </p>
        </div>
        <div className="col">
          <h4>FOLLOW US</h4>
          <i className="fab fa-github follow-icon"></i> 
          <i className="fab fa-linkedin follow-icon"></i>
          <i className="fab fa-facebook-square follow-icon"></i>
          <i className="fas fa-envelope follow-icon"></i>
        </div>
      </div>
      <p className="copyright">Copyright © Bikeo | 2021</p>
    </div>
  );
};

export default Footer;
