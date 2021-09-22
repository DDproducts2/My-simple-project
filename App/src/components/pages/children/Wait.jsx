import React from "react";
import { getDatabase, ref, set, onValue } from "firebase/database";
const Wait = () => {
  window.onbeforeunload = (event) => {
    const e = event || window.event;
    // Cancel the event
    e.preventDefault();
    if (e) {
      e.returnValue = ""; // Legacy method for cross browser support
    }
    return ""; // Legacy method for cross browser support
  };
  return (
    <>
      <div className="item">
        <h1>Waiting For Second Player</h1>
      </div>
    </>
  );
};

export default Wait;
