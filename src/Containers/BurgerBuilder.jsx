import React, { Component } from "react";
import BuildControls from "../Components/Burger/BuildControls";
import Burger from "../Components/Burger/Burger";

const INGREDIENT_PRICES = {
  salad: 0.5,
  meat: 0.4,
  cheese: 0.2,
  bacon: 0.6,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 5,
      bacon: 1,
      cheese: 1,
      meat: 1,
    },
    totalPrice: 4,
  };


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
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount<=0){
        return
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
  };

//   addIngredientHandler = ( type ) => {
//     const oldCount = this.state.ingredients[type];
//     const updatedCount = oldCount + 1;
//     const updatedIngredients = {
//         ...this.state.ingredients
//     };
//     updatedIngredients[type] = updatedCount;
//     const priceAddition = INGREDIENT_PRICES[type];
//     const oldPrice = this.state.totalPrice;
//     const newPrice = oldPrice + priceAddition;
//     this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
//     this.updatePurchaseState(updatedIngredients);
// }

  render() {
    const disabledInfo={
        ...this.state.ingredients
    }

    for(let key in disabledInfo){
        disabledInfo[key]= disabledInfo[key]<=0
    }
    
  console.log("sta",this.state);
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls ingredientAdded={this.addIngredientHandler}
        ingredientRemoved={this.removeIngredientHandler} 
        disabled={disabledInfo}/>
        {console.log(this.state,"state")}
      </>
    );
  }
}

export default BurgerBuilder;
