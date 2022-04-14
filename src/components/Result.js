import React from "react";
import "./components.css";
import hurray from "../assets/audio/hagrid-hurray.mp3";

const Result = ({ winner }) => {
  return (
    <div
      className="p-5"
      style={{
        border: "3px solid whitesmoke",
        borderRadius: 10,
        color: "whitesmoke",
      }}
    >
      {/* <audio src={hurray} autoPlay /> */}
      <p className="display-1" style={{ fontWeight: 600 }}>
        {winner}
      </p>
    </div>
  );
};

export default Result;
