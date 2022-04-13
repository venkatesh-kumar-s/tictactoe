import React from "react";
import "./components.css";

const Square = ({ border, value, event }) => {
  return (
    <div
      className={`item p-4 ${border}`}
      style={{ height: "100px", width: "100px", borderRadius: 2 }}
      onClick={event}
    >
      <h1 className="text-light">{value}</h1>
    </div>
  );
};

export default Square;
