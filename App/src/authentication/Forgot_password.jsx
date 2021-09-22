import React from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Forgot_password = () => {
  const auth = getAuth();

  function send() {
    var email = document.getElementById("email").value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
        toast.success("Sended", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
        // ..
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
      <title>Forgot Password Reset</title>
      <div className="e-c">
        <div className="item">
          <h1>Forgot Password</h1>
        </div>
        <div className="item">
          <input type="email" id="email" placeholder="email" />
        </div>
        <div className="item">
          <h2 onClick={send}>Send Password Reset</h2>
        </div>

        <Link to="/login">
          <h2>Back to Login page</h2>
        </Link>
      </div>
    </div>
  );
};

export default Forgot_password;
