import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Create from "./children/Create";
import Join from "./children/Join";
import { play, join, create, wait } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import Wait from "./children/Wait";

const Play = () => {
  const my = useSelector((state) => state.change);
  const dispatch = useDispatch();

 

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
      <title>{my}</title>
      <div className="e-c">
        {my === "create" && <Create />}
        <div className="item">
          {my === "play" && (
            <div className="profile">
              <button onClick={() => dispatch(create())}>Create Room</button>
              <button onClick={() => dispatch(join())}>Join Room</button>
            </div>
          )}
        </div>
        <div className="item">{my === "join" && <Join />}</div>
        <div className="item">{my === "wait" && <Wait />}</div>
      </div>
    </div>
  );
};

export default Play;
