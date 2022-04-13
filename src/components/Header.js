import React from "react";

const Header = () => {
  return (
    <div
      className="my-auto py-3 shadow"
      style={{
        background: "#00000099",
        color: "whitesmoke",
      }}
    >
      <p className="display-4 m-auto" style={{ fontWeight: 400 }}>
        Tic Tac Toe
      </p>
    </div>
  );
};

export default Header;
