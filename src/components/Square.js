import React from "react";
import "./components.css";

const Square = ({ border }) => {
  return (
    <div
      className={`item p-4 ${border}`}
      style={{ height: "100px", width: "100px", borderRadius: 2 }}
    >
      <h1 className="text-light">X</h1>
    </div>
  );
};

export default Square;
