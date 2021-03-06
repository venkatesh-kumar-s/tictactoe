import React, { useEffect, useState } from "react";
import Result from "./Result";
import Square from "./Square";

const values = ["", "", "", "", "", "", "", "", ""];

const Board = ({ setEnabled, setBlast, blast }) => {
  const [state, setState] = useState(values);
  const [isX, setIsX] = useState(false);
  const [winner, setWinner] = useState();
  const [isDraw, setDraw] = useState(false);

  const handleTurns = (e) => {
    navigator.vibrate(30);
    let temp = [...state];
    temp[e] = isX ? "X" : "O";
    setState(temp);
    setIsX(!isX);
  };

  useEffect(() => {
    const handleWinner = () => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (state[a] && state[a] === state[b] && state[a] === state[c]) {
          return state[a];
        }
      }
      return null;
    };

    const result = handleWinner();
    result && setEnabled(true);
    setTimeout(() => {
      if (result) {
        navigator.vibrate(200);
        setBlast(true);
        setWinner(result);
        setState(values);
      } else {
        if (!state.includes("")) {
          setDraw(true);
          navigator.vibrate(100);
        }
      }
    }, 300);
  }, [state]);

  return (
    <>
      {blast ? (
        <>
          <Result winner={winner} />
          <button
            className="btn btn-light mt-5"
            style={{ zIndex: 100 }}
            onClick={() => (setState(values), setBlast(false))}
          >
            Play Again
          </button>
        </>
      ) : isDraw ? (
        <>
          <Result winner="Draw" />
          <button
            className="btn btn-light mt-5"
            onClick={() => (setState(values), setDraw(false))}
          >
            Play Again
          </button>
        </>
      ) : (
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
      )}
    </>
  );
};

export default Board;
