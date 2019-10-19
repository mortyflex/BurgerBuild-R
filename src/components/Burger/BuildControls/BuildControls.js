import React from "react";

import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
  { label: "Tomato", type: "tomato" }
];

const BuildControls = ({
  addIngredient,
  removeIngredient,
  showQuantity,
  disabled,
  price,
  purchasable
}) => {
  return (
    <div className="BuildControls">
      <p>
        Current Price:{" "}
        <span style={{ fontWeight: "bold" }}>${price.toFixed(2)}</span>
      </p>
      {controls.map(ctrl => (
        <BuildControl
          disabled={disabled[ctrl.type]}
          showQuantity={() => showQuantity(ctrl.type)}
          remove={() => removeIngredient(ctrl.type)}
          added={() => addIngredient(ctrl.type)}
          key={ctrl.label}
          label={ctrl.label}
        />
      ))}
      <button disabled={!purchasable} className="OrderButton">
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
