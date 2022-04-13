import React, { useState } from "react";
import Square from "./Square";

const values = ["", "", "", "", "", "", "", "", ""];

const Board = () => {
  const [state, setState] = useState(values);
  const [isX, setIsX] = useState(false);

  const handleTurns = (e) => {
    navigator.vibrate(30);
    let temp = [...state];
    temp[e] = isX ? "X" : "O";
    setState(temp);
    setIsX(!isX);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex">
        <Square
          border={"border-b-r"}
          value={state[0]}
          event={() => handleTurns(0)}
        />
        <Square
          border={"border-b"}
          value={state[1]}
          event={() => handleTurns(1)}
        />
        <Square
          border={"border-b-l"}
          value={state[2]}
          event={() => handleTurns(2)}
        />
      </div>
      <div className="d-flex">
        <Square
          border={"border-b-r"}
          value={state[3]}
          event={() => handleTurns(3)}
        />
        <Square
          border={"border-b"}
          value={state[4]}
          event={() => handleTurns(4)}
        />
        <Square
          border={"border-b-l"}
          value={state[5]}
          event={() => handleTurns(5)}
        />
      </div>
      <div className="d-flex">
        <Square
          border={"border-r"}
          value={state[6]}
          event={() => handleTurns(6)}
        />
        <Square value={state[7]} event={() => handleTurns(7)} />
        <Square
          border={"border-l"}
          value={state[8]}
          event={() => handleTurns(8)}
        />
      </div>
    </div>
  );
};

export default Board;
