import React from "react";
import { Modal } from "react-bootstrap";
import "./components.css";
import hurray from "../assets/audio/hagrid-hurray.mp3";

const Result = ({ show, toggle, winner }) => {
  return (
    <Modal
      show={show}
      toggle={toggle}
      centered
      className=""
      style={{ borderRadius: "50px" }}
    >
      <Modal.Body className="">
        {winner} Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
        <audio src={hurray} autoPlay />
      </Modal.Body>
      <Modal.Footer className="p-0">
        <button
          className="btn btn-primary btn-block w-100 m-0 shadow"
          onClick={toggle}
        >
          Restart
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default Result;
