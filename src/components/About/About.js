import React, { useEffect } from "react";
import "./About.css";

const About = () => {
  // Change Title
  useEffect(() => {
    document.title = "Bikeo | About";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container offers-container2">
      <h1 className="offers-header2">About Us</h1>
      <div className="row row-cols-1 row-cols-md-2 about-row px-2 g-4">
        <div className="col d-flex flex-column justify-content-center align-items-center ">
          <p className="about">
            Bikeo is an experiential e-commerce platform with the objective of
            making the process of buying and owning a bicycle, a pleasurable
            experience for a customer by delivering your ordered goodies right
            to your doorstep. We are the only stand-alone holistic bicycling
            e-commerce website in India. Through our knowledge and experience we
            help you to choose the right bicycle!
            <br />
            <br />
            Bikeo has the widest range of Indian and International Bicycles
            available for sale in India. We have bicycles across various
            categories: Kids Bicycles, MTB’s, Hybrid Bicycles, Road Bicycles,
            City Bicycles and Specialty Bicycles. Our website allows you to find
            any bicycle that you are looking for by filtering search results
            based on brand, price range, user, category and specifications. We
            even have an advanced search option for all you bicycle crazies out
            there!
            <br />
            <br />
            All Bicycles available for Sale on the portal will be delivered to
            the customer fully fitted in a Ready to Ride custom CMB Box. Don’t
            you worry! Before shipping your new baby out the Bicycle will be
            assembled and tuned by our Expert technicians and will undergo a 23
            point Quality check.
            <br />
            <br />
            All the products will be covered by the Manufacturers warranty and
            will be replaced in case of damage.
          </p>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <img src="/about.svg" className="w-100" alt="" />
        </div>
      </div>
    </div>
  );
};
export default About;
