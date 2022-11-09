import React, { Component } from "react";
import BuildControls from "../Components/Burger/BuildControls";
import Burger from "../Components/Burger/Burger";
import OrderSummary from "../Components/Burger/OrderSummary";
import Modal from "../Components/UI/Modal/Modal";

const INGREDIENT_PRICES = {
  salad: 0.5,
  meat: 0.4,
  cheese: 0.2,
  bacon: 0.6,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable:false,
    purchasing:false,
  };

  updatePurchaseState(ingredients){
  
    const sum=Object.keys(ingredients)
    .map(igKey =>{
        return ingredients[igKey]
    })
    .reduce((sum,el) =>{
        return sum+el;
    },0)
    this.setState({purchasable:sum>0})
  }


  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updateIngredients = {
      ...this.state.ingredients,
    };
    updateIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
    console.log("in", newPrice);
    this.updatePurchaseState(updateIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updateIngredients = {
      ...this.state.ingredients,
    };
    updateIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
    console.log("in", newPrice);
    this.updatePurchaseState(updateIngredients)
  };

  purchaseHandler = () =>{
    this.setState({purchasing:true})
  }

  purchaseContinueHandler = ()=>{
    alert('Continue!')
  }
  purchaseCancelHandler =()=>{
    this.setState({purchasing:false})
  }
  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    console.log("sta", this.state);
    return (
      <>
        <Modal show={this.state.purchasing} 
        modalClosed={this.purchaseCancelHandler}>
        <OrderSummary 
        purchaseCanceled={this.purchaseCancelHandler}
        purchaseContiued={this.purchaseContinueHandler}
        ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          purchasable={this.state.purchasable}
          price={this.state.totalPrice}
          ordered={this.purchaseHandler}
        />
        {console.log(this.state, "state")}
      </>
    );
  }
}

export default BurgerBuilder;
