import React, { Fragment } from "react";

import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = ({ children, closeModal, show }) => {
  return (
    <Fragment>
      <Backdrop show={show} closeBackdrop={closeModal} />
      <div
        className="Modal"
        style={{
          transform: show ? "translateY(0)" : "translateY(100vh)",
          opacity: show ? "1" : 0
        }}
      >
        {children}
      </div>
    </Fragment>
  );
};

export default Modal;
