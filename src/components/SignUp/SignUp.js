import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";
import useAuth from "../../hooks/useAuth";
import {
  ref,
  uploadBytes,
  getStorage,
  getDownloadURL,
} from "@firebase/storage";
import Loading from "../Loading/Loading";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState(null);
  const imageRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const {
    user,
    signUpWithEmailPass,
    message2,
    setMessage2,
    success,
    setSuccess,
    checkUser,
  } = useAuth();
  const history = useHistory();

  // Change Title
  useEffect(() => {
    document.title = "Bikeo | Sign Up";
    window.scrollTo(0, 0);
  }, []);

  // Redirect to home after register
  useEffect(() => {
    if (user.email) {
      setMessage2("");
      history.push("/home");
    }
  }, [user]);

  // handle register function
  const handleRegistration = (e) => {
    e.preventDefault();
    setLoading(true);
    uploadPhoto();
    setMessage2("");
  };
  // Handle Photo Input
  const handlePhoto = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };
  // Upload Photo
  let oneClick = 0;
  const uploadPhoto = () => {
    if (oneClick > 0) return;
    oneClick++;
    const storage = getStorage();
    const storageRef = ref(storage, `images/users/${photo.name}`);
    uploadBytes(storageRef, photo).then((snapshot) => {
      getDownloadURL(ref(storage, `images/users/${photo.name}`))
        .then((url) => {
          // Got URL and uploaded to firebase storage
          signUp(url);
          setMessage2("");
          setLoading(false);
          setSuccess("");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  // sign up function
  const signUp = (url) => {
    signUpWithEmailPass(name, email, password, url);
  };

  // Handle Email
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Handle Password
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // Handle Name
  const handleName = (e) => {
    setName(e.target.value);
  };
  useEffect(() => {
    setMessage2("");
  }, []);

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
                onSubmit={handleRegistration}
              >
                <span className="login100-form-title">Sign Up</span>

                <div
                  className="wrap-input100 validate-input"
                  data-validate="Name is reauired"
                >
                  <span className="label-input100 sp-color">Name</span>
                  <input
                    required
                    onChange={handleName}
                    className="input100"
                    type="text"
                    placeholder="Type your name"
                    id="input-name"
                  />
                  <span
                    className="focus-input100 fa"
                    data-symbol="&#xf2c2;"
                  ></span>
                </div>

                <div
                  className="wrap-input100 validate-input"
                  data-validate="Email is required"
                >
                  <span className="label-input100 sp-color">Email</span>
                  <input
                    required
                    onChange={handleEmail}
                    className="input100"
                    type="email"
                    placeholder="Type your email"
                    id="input-email"
                  />
                  <span
                    className="focus-input100 fa"
                    data-symbol="&#xf1d8;"
                  ></span>
                </div>

                <div
                  className="wrap-input100 validate-input"
                  data-validate="Password is required"
                >
                  <span className="label-input100 sp-color">Password</span>
                  <input
                    required
                    onChange={handlePassword}
                    className="input100"
                    type="password"
                    name="pass"
                    placeholder="Type your password"
                    id="input-pass"
                  />
                  <span
                    className="focus-input100 fa"
                    data-symbol="&#xf023;"
                  ></span>
                </div>
                {/* Input Image Url  */}
                <div className="wrap-input100 validate-input border-0">
                  <span className="label-input100 sp-color p-0">Image</span>
                  <input
                    required
                    type="file"
                    className="input100 book-input mt-3 ms-2"
                    id="inputGroupFile02"
                    onBlur={handlePhoto}
                    ref={imageRef}
                  />
                  <span className="focus-input100 fa"></span>
                </div>
                <div className="container-login100-form-btn mt-4 mb-2">
                  <div className="wrap-login100-form-btn">
                    <div className="login100-form-bgbtn"></div>
                    <input
                      type="submit"
                      value="Sign Up"
                      className="login100-form-btn"
                    />
                  </div>
                </div>
                {loading && <Loading></Loading>}
                <div>
                  <p className="text-danger label-input100 text-center mt-3">
                    {message2}
                  </p>
                  <p className="text-success label-input100 text-center mt-3">
                    {success}
                  </p>
                </div>
              </form>

              <div className="text-center pt-2">
                <span className="txt1 p-b-17">Already have an account? </span>
                <NavLink to="/login" className="txt2">
                  Log In
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
