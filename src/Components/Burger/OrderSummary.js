import React, { Component } from "react";
export default class OrderSummary extends Component {

  componentWillUpdate(){

  }
  render(){
    const ingredientSummary = Object.keys(this.props.ingredients).map((igKey) => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}> {igKey}:</span>
          {this.props.ingredients[igKey]}
        </li>
      );
    });
    return (
      <div>
        <div>
          <h3>Your order</h3>
  
          <p>Delicious burger with the following ingredients</p>
          <ul>{ingredientSummary}</ul>
          <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
          <p>Continue to checkout?</p>
         
          <button style={{color:"green"}} onClick={this.props.purchaseContiued}>
            CONTINUE
          </button>
  
          <button style={{color:"red"}} onClick={this.props.purchaseCanceled}>
            CANCEL
          </button>
        </div>
      </div>
    );
  }

}
