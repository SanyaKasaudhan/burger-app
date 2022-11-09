import React from "react";
const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}> {igKey}:</span>
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <div>
      <div>
        <h3>Your order</h3>

        <p>Delicious burger with the following ingredients</p>
        <ul>{ingredientSummary}</ul>
        <p>Continue to checkout?</p>
       
        <button style={{color:"green"}} onClick={props.purchaseContiued}>
          CONTINUE
        </button>

        <button style={{color:"red"}} onClick={props.purchaseCanceled}>
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
