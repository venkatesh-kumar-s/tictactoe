import React from "react";
import "./components.css";

const Header = () => {
  return (
    <div
      className="my-auto py-3 shadow"
      style={{
        background: "#00000099",
        color: "whitesmoke",
      }}
    >
      <p className="display-4 m-auto no-select" style={{ fontWeight: 400 }}>
        Tic Tac Toe
      </p>
    </div>
  );
};

export default Header;
