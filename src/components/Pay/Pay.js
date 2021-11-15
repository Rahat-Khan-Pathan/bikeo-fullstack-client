import React, { useEffect } from "react";

const Pay = () => {
  useEffect(()=> {
    // Change title
    document.title = "Dashboard | Pay";
    window.scrollTo(0, 0);
  },[])
  return (
    <div className="container add-service-container">
      <h1 className="booking-header">Payment system coming soon...</h1>
      <hr />
    </div>
  );
};

export default Pay;
