import React from "react";
import "./components.css";

const Square = ({ border, value, event }) => {
  return (
    <div
      className={`item p-3 ${border}`}
      style={{ height: "100px", width: "100px", borderRadius: 2 }}
      onClick={value ? null : event}
    >
      <h1
        className="text-light no-select"
        style={{ fontWeight: 400, fontSize: 50 }}
      >
        {value}
      </h1>
    </div>
  );
};

export default Square;
