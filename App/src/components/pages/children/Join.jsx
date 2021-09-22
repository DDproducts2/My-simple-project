import React from "react";
import { play, wait } from "../../../store";
import md5 from "md5";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { useAuthState } from "../../../secure/firebase";
import { getDatabase, ref, set, onValue } from "firebase/database";
const Join = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="item">
        <h1>Join</h1>
      </div>
      <div className="item">
        <input type="text" />
      </div>
      <div className="item">
        <input type="password" />
      </div>
      <div className="item">
        <div className="profile">
          <button onClick={() => dispatch(play())}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default Join;
