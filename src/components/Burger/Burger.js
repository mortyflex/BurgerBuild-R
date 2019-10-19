import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

import "./Burger.css";

const Burger = ({ ingredients }) => {
  const transformedIngredients = Object.entries(ingredients);

  let elements = transformedIngredients
    .map((el, i) => {
      return [...Array(ingredients[el[0]])].map((_, i) => (
        <BurgerIngredient key={`${el}${i}`} type={el[0]} />
      ));
    })
    .reduce((arr, el) => arr.concat(el), []);

  if (!elements.length) {
    elements = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {elements}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
