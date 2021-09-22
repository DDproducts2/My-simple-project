import React from "react";
import md5 from "md5";
import { getDatabase, ref, set, onValue, del } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Create = () => {
  function createroom() {
    var roomN = document.getElementById("RoomName").value;
    var PassN = document.getElementById("password").value;
    var PassCn = document.getElementById("Cpassword").value;

    if (roomN.length !== 0) {
      if (PassN.length >= 6) {
        if (PassN === PassCn) {
          console.log(md5(PassN));
          toast.success('creating room please wait', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
         
        } else {
          toast.error('Password Not Match', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      } else {
        toast.info('The Password Should Be atleast of 6 words', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      toast.warn('Name Should Not Be Emty', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  const db = getDatabase();
  var reff = ref(db, 'users/user')
  onValue(reff, (data) => {
    const datav = data.val()
    if (datav){
      console.log('lets return it')
    
    }
  })
  

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <div className="card">
        <title>Create A Romm</title>
        <div className="e-c">
          <div className="item">
            <div className="profile">
              <div className="item">
                <h1>Create Room</h1>
              </div>
              <input
                type="text"
                placeholder="Room Name"
                maxLength="30"
                id="RoomName"
              />
              <input
                type="password"
                placeholder="password for room"
                maxLength="40"
                id="password"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                maxLength="40"
                id="Cpassword"
              />
              <button
                onClick={() => {
                  createroom();
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};





export default Create;
