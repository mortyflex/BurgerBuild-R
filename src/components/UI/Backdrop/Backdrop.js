import React from "react";

import "./Backdrop.css";

const Backdrop = ({ show, closeBackdrop }) =>
  show ? <div onClick={closeBackdrop} className="Backdrop"></div> : null;

export default Backdrop;
