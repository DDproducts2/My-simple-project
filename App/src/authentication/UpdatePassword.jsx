import React from "react";
import { Link } from "react-router-dom";

import { useAuthState } from "../secure/firebase";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UpdatePassword = () => {
  const auth = getAuth();

  const { user } = useAuthState();
  function update() {
    sendPasswordResetEmail(auth, user.email)
      .then(() => {
        // Password reset email sent!
        toast.error("Sended on your email", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // ..
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }
  return (
    <div className="card">
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <title>Request A password reset </title>
      <div className="e-c">
        <div className="item">
          <h2 onClick={update}>Send password reset</h2>
        </div>
        <div className="item">
          <Link to="/">
            <h2>Home</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
