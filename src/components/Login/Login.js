import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import "./Login.css";
import useAuth from "../../hooks/useAuth";
import Loading from "../Loading/Loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    user,
    loginWithGoogle,
    loginWithEmailPass,
    message,
    setMessage,
    checkUser,
    admin
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const [loading,setLoading] = useState(false);
  // Change Title
  useEffect(() => {
    document.title = "Bikeo | Log In";
    window.scrollTo(0, 0);
  }, []);

  // Redirects to home or previous location 
  const redirectUrl = location.state?.from?.pathname || "/dashboard/myOrders";
  const adminRedirectUrl = location.state?.from?.pathname || "/dashboard/allOrders";
  useEffect(() => {
    if (user.email && admin!==null) {
      if(admin) history.push(adminRedirectUrl);
      else history.push(redirectUrl);
    }
    if(user?.email && admin) setLoading(false);
  }, [user,admin]);

  // Login Function
  const login = () => {
    setMessage("");
    setLoading(true);
    loginWithEmailPass(email, password);
  };

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    login();
  };

  // Handle Email
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Handle Password
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // Handle Google Sign In
  const googleSignInHandle = () => {
    loginWithGoogle();
  };
  useEffect(()=> {
    setMessage('');
  },[])

  return (
    <div className="login-container">
      {!checkUser ? (
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
        <div className="limiter">
          <div className="container-login100 my-2">
            <div className="wrap-login100">
              <form
                className="login100-form validate-form"
                onSubmit={handleLogin}
              >
                <span className="login100-form-title">Login</span>

                <div className="wrap-input100 validate-input">
                  <span className="label-input100 sp-color">Email</span>
                  <input
                    required
                    onChange={handleEmail}
                    className="input100"
                    type="email"
                    name="username"
                    placeholder="Type your email  "
                  />
                  <span
                    className="focus-input100 fa"
                    data-symbol="&#xf2c2;"
                  ></span>
                </div>

                <div className="wrap-input100 validate-input">
                  <span className="label-input100 sp-color">Password</span>
                  <input
                    required
                    onChange={handlePassword}
                    className="input100"
                    type="password"
                    name="pass"
                    placeholder="Type your password"
                  />
                  <span
                    className="focus-input100 fa"
                    data-symbol="&#xf023;"
                  ></span>
                </div>

                <div className="container-login100-form-btn mt-4 mb-3">
                  <div className="wrap-login100-form-btn">
                    <div className="login100-form-bgbtn"></div>
                    <input
                      type="submit"
                      value="Log In"
                      className="login100-form-btn"
                    />
                  </div>
                </div>
                {
                  loading && <Loading></Loading>
                }
                <div>
                  <p className="text-danger label-input100 text-center mt-3">
                    {message}
                  </p>
                </div>
              </form>
              <div className="txt1 text-center mt-2">
                <span>Or, Log In Using</span>
              </div>

              <div className="d-flex justify-content-center">
                <div className="d-flex">
                  <button
                    onClick={googleSignInHandle}
                    className="login100-social-item bg3"
                  >
                    <i className="fa fa-google"></i>
                  </button>
                </div>
              </div>

              <div className="text-center pt-3">
                <span className="txt1 p-b-17">Don't have an account? </span>
                <NavLink to="/signUp" className="txt2">
                  Sign Up
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
