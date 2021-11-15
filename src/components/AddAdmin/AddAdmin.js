import React, { useEffect, useRef, useState } from "react";
import Loading from "../Loading/Loading";
import Modal from "../Modal/Modal";

const AddAdmin = () => {
  const emailRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [message,setMessage] = useState("");
  let oneClick = 0;
  // Change Title
  useEffect(() => {
    document.title = "Dashboard | Add Admin";
    window.scrollTo(0, 0);
    setMessage("");
  }, []);
  // Handle add service function
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    if (oneClick > 0) return;
    oneClick++;
    setLoading(true);
    const email = emailRef.current.value;
    fetch("https://immense-sierra-11894.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
          if(data===0){
            setMessage("user not found or already admin");
            setLoading(false);
          }
          else added();
      });
  };
  // Open modal and clear input if added
  const added = () => {
    oneClick = 0;
    setLoading(false);
    setMessage("");
    document.getElementById("modal-btn").click();
    setTimeout(() => {
      document.getElementById("modal-close").click();
      emailRef.current.value = "";
    }, 2000);
  };
  return (
    <div className="container add-service-container">
      <Modal text={"New Admin Added"}></Modal>
      <h1 className="booking-header">Add Admin</h1>
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
                <span className="label-input100 sp-color p-0">Email</span>
                <input
                  required
                  ref={emailRef}
                  className="input100 book-input"
                  type="email"
                  name="email"
                  placeholder="Enter admin email"
                />
                <span className="focus-input100 fa"></span>
              </div>

              <div className="container-login100-form-btn mt-4 mb-2">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn"></div>
                  <input
                    type="submit"
                    value="ADD ADMIN"
                    className="login100-form-btn book-btn"
                  />
                </div>
              </div>
              {loading && <Loading></Loading>}
              <div>
                <p className="text-danger label-input100 text-center mt-3">
                  {message}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
