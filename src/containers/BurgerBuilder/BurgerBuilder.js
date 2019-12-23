import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.4,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
  tomato: 0.5
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
      tomato: 0
    },
    totalPrice: 4,
    purchasable: false,
    showModal: false
  };

  updatePurchaseState = ingredients => {
    const sum = Object.keys(ingredients);
    const result = sum.map(igKey => {
      return ingredients[igKey];
    });
    const total = result.reduce((acc, value) => acc + value, 0);

    this.setState({ purchasable: total > 0 });
  };

  addIngredientHandler = type => {
    const { ingredients, totalPrice } = this.state;
    const oldCount = ingredients[type];
    const updatedCount = oldCount + 1;

    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = type => {
    const { ingredients, totalPrice } = this.state;
    const oldCount = ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;

    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice - priceAddition;

    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseContinueHandler = () => {
    alert("You continue!");
  };

  showModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  showQuantity = type => {
    const { ingredients } = this.state;
    return ingredients[type];
  };

  render() {
    const { ingredients, totalPrice, purchasable, showModal } = this.state;

    const disabledInfo = { ...ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Burger ingredients={ingredients} />
        <BuildControls
          showModal={this.showModal}
          purchasable={purchasable}
          disabled={disabledInfo}
          showQuantity={this.showQuantity}
          removeIngredient={this.removeIngredientHandler}
          addIngredient={this.addIngredientHandler}
          price={totalPrice}
        />

        <Modal show={showModal} closeModal={this.closeModal}>
          <OrderSummary
            continuePurchase={this.purchaseContinueHandler}
            closeSummary={this.closeModal}
            ingredients={ingredients}
            total={totalPrice}
          />
        </Modal>
      </Aux>
    );
  }
}

export default BurgerBuilder;
