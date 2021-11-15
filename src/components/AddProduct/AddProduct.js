import React, { useEffect, useRef, useState } from "react";
import Modal from "../Modal/Modal";
import "./AddProduct.css";
import "../Form/Form.css";
import {
  ref,
  uploadBytes,
  getStorage,
  getDownloadURL,
} from "@firebase/storage";
import initializeFirebaseAuth from "../../Firebase/firebase.initialize";
import Loading from "../Loading/Loading";

initializeFirebaseAuth();

const AddProduct = () => {
  const nameRef = useRef(null);
  const priceRef = useRef(null);
  const imageRef = useRef(null);
  const descriptionRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  let oneClick = 0;

  // Upload Photo
  const uploadPhoto = () => {
    if (oneClick > 0) return;
    oneClick++;
    setLoading(true);
    const storage = getStorage();
    const storageRef = ref(storage, `images/products/${photo.name}`);
    uploadBytes(storageRef, photo).then((snapshot) => {
      getDownloadURL(ref(storage, `images/products/${photo.name}`))
        .then((url) => {
          // Got URL and uploaded to firebase storage
          const data = {
            name: nameRef.current.value,
            price: priceRef.current.value,
            image: url,
            description: descriptionRef.current.value,
          };

          // POST the submitted data
          fetch("https://immense-sierra-11894.herokuapp.com/addService", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((data) => added());
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
  // Handle Photo Input
  const handlePhoto = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  // Change Title
  useEffect(() => {
    document.title = "Dashboard | Add Product";
    window.scrollTo(0, 0);
  }, []);

  // Handle add service function
  const handleSubmit = (e) => {
    e.preventDefault();
    uploadPhoto();
  };

  // Open modal and clear input if added
  const added = () => {
    oneClick = 0;
    setLoading(false);
    document.getElementById("modal-btn").click();
    setTimeout(() => {
      document.getElementById("modal-close").click();
      nameRef.current.value = "";
      imageRef.current.value = "";
      priceRef.current.value = "";
      descriptionRef.current.value = "";
    }, 2000);
  };

  return (
    <div className="container add-service-container">
      <Modal text={"Product Added"}></Modal>
      <h1 className="booking-header">Add Product</h1>
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
                  placeholder="Enter product name"
                />
                <span className="focus-input100 fa"></span>
              </div>
              {/* Input Price  */}
              <div className="wrap-input100 validate-input">
                <span className="label-input100 sp-color p-0">Price</span>
                <input
                  required
                  ref={priceRef}
                  className="input100 book-input"
                  type="number"
                  name="price"
                  placeholder="Enter product price"
                />
                <span className="focus-input100 fa"></span>
              </div>
              {/* Input Image Url  */}
              <div className="wrap-input100 validate-input border-0">
                <span className="label-input100 sp-color p-0">Image</span>
                <input
                  required
                  type="file"
                  className="input100 book-input mt-3"
                  id="inputGroupFile02"
                  onBlur={handlePhoto}
                  ref={imageRef}
                />
                <span className="focus-input100 fa"></span>
              </div>
              {/* Input Description */}
              <div className="wrap-input100 validate-input">
                <span className="label-input100 sp-color p-0">Description</span>
                <textarea
                  required
                  ref={descriptionRef}
                  className="input100 book-address book-input"
                  type="text"
                  name="description"
                  placeholder="Enter product description"
                />
                <span className="focus-input100 fa"></span>
              </div>

              <div className="container-login100-form-btn mt-4 mb-2">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn"></div>
                  <input
                    type="submit"
                    value="ADD PRODUCT"
                    className="login100-form-btn book-btn"
                  />
                </div>
              </div>
              {loading && <Loading></Loading>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
