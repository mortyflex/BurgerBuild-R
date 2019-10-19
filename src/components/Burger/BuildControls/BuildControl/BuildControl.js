import React from "react";

import "./BuildControl.css";

const BuildControl = ({ label, added, remove, showQuantity, disabled }) => {
  console.log(showQuantity());
  return (
    <div className="BuildControl">
      <div className="Label">{label}</div>
      <button disabled={disabled} onClick={remove} className="Less">
        Less
      </button>
      <button onClick={added} className="More">
        More
      </button>
      <em>{showQuantity()}</em>
    </div>
  );
};

export default BuildControl;
