import React from "react";
import { play, wait } from "../../../store";
import md5 from "md5";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { useAuthState } from "../../../secure/firebase";
import { getDatabase, ref, set, onValue } from "firebase/database";
const Create = () => {
  const dispatch = useDispatch();
  let creted;

  const { user } = useAuthState();
  let Reference;
  var Pss;
  var RoomName;
  var Cpss;
  var db = getDatabase();
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
  var dateTime = date + " " + time;
  function create() {
    // toast.success("Creating Room", {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: false,
    //   draggable: true,
    //   progress: undefined,
    // });
    RoomName = document.getElementById("RoomName").value;
    Pss = document.getElementById("pss").value;
    Cpss = document.getElementById("cpss").value;
    if (!RoomName) {
      var message = "Room Name IS required";
      Toast(message);
    } else {
      if (!Pss) {
        var message = "PassWord Is required";
        Toast(message);
      } else {
        if (Pss !== Cpss) {
          var message = "Password Not match";
          Toast(message);
        } else {
          createInDb();
        }
      }
    }
  }
  var RoomName = undefined;
  function createInDb() {
    creted = false;
    Reference = ref(db, RoomName + "/");
    onValue(Reference, (data) => {
      if (data.val() != null) {
        if (creted === false) {
          var message = "Room already Exist";
          Toast(message);
        }
        if (creted === true) {
          toast.success("Redirecting", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
          dispatch(wait());
        }

        console.log(data.val.roomN);
      } else {
        creted = true;
        var Npass = md5(Pss);
        console.log(data.val.roomName);
        console.log(RoomName, Npass);
        var q1 = Math.floor(Math.random() * 100) + 1;
        var q2 = Math.floor(Math.random() * 200) + 100;
        var q3 = Math.floor(Math.random() * 300) + 200;
        var q4 = Math.floor(Math.random() * 400) + 300;
        var q5 = Math.floor(Math.random() * 500) + 400;
        var q6 = Math.floor(Math.random() * 600) + 500;
        var q7 = Math.floor(Math.random() * 700) + 600;
        var q8 = Math.floor(Math.random() * 800) + 700;
        var q9 = Math.floor(Math.random() * 900) + 800;
        var q10 = Math.floor(Math.random() * 1000) + 900;
        set(Reference, {
          roomN: RoomName,
          Pss: Npass,
          DateAndTime: dateTime,
          Players: {
            player1: {
              Name: user.displayName,
              status: "online",
            },
            player2: {
              status: "NotConnected",
            },
          },
          Question: {
            q1: q1,
            q2: q2,
            q3: q3,
            q4: q4,
            q5: q5,
            q6: q6,
            q7: q7,
            q8: q8,
            q9: q9,
            q10: q10,
          },
        }).then = () => {
          console.log("Done" + RoomName);
          toast.success("Room Created", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        };
      }
    });
  }

  function Toast(message) {
    toast.warn(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <div>
      <div className="item">
        <h1>Create</h1>
      </div>
      <div className="item">
        <input type="text" placeholder="Room Name" id="RoomName" />
      </div>
      <div className="item">
        <input type="password" placeholder="Password" id="pss" />
      </div>
      <div className="item">
        <input type="password" placeholder="Confirm Password" id="cpss" />
      </div>
      <div className="item">
        <div className=" profile">
          <button
            className="wide"
            onClick={() => {
              create();
            }}
          >
            Create
          </button>
        </div>
      </div>

      <div className="item">
        <div className=" profile">
          <button
            onClick={() => {
              dispatch(play());
            }}
          >
            Back
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Create;
