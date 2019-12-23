import React, { Fragment } from "react";

const OrderSummary = ({ ingredients, total, closeSummary }) => {
  const ingredientSummary = Object.keys(ingredients).map(igKey => {
    return (
      <li>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:&nbsp;
        {ingredients[igKey]}
      </li>
    );
  });

  return (
    <Fragment>
      <h3>Your Order</h3>
      <em>A delicious burger with the following ingredients:</em>
      <ul>{ingredientSummary}</ul>
      <strong>Total: ${total.toFixed(2)}</strong>
      <p onClick={closeSummary} style={{ float: "right", cursor: "pointer" }}>
        Continue to Checkout
      </p>
    </Fragment>
  );
};

export default OrderSummary;
