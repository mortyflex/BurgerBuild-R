import React, { Fragment } from "react";
import Button from "../../UI/Button/Button";

const OrderSummary = ({
  ingredients,
  total,
  continuePurchase,
  closeSummary
}) => {
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
      <strong style={{ color: "red" }}>Total: ${total.toFixed(2)}</strong>
      <div style={{ float: "right" }}>
        <p>
          <em>Continue to Checkout</em>
        </p>
        <Button clicked={closeSummary} btnType="Danger">
          CANCEL
        </Button>
        <Button clicked={continuePurchase} btnType="Success">
          CONTINUE
        </Button>
      </div>
    </Fragment>
  );
};

export default OrderSummary;
