import React from "react";
import Square from "./Square";

const Board = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex">
        <Square border={"border-b-r"} />
        <Square border={"border-b"} />
        <Square border={"border-b-l"} />
      </div>
      <div className="d-flex">
        <Square border={"border-b-r"} />
        <Square border={"border-b"} />
        <Square border={"border-b-l"} />
      </div>
      <div className="d-flex">
        <Square border={"border-r"} />
        <Square />
        <Square border={"border-l"} />
      </div>
    </div>
  );
};

export default Board;
