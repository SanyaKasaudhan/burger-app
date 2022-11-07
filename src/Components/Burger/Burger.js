import React from 'react'
import './Burger.css'
import BurgerIngredient from './BurgerIngredient'
const Burger = (props) => {
    const transformedIngredients=Object.keys(props.ingredients)
    .map(igKey =>{
        return [...Array(props.ingredients[igKey])]
        .map((_, i)=>{
           return <BurgerIngredient key={igKey + i} type={igKey} />
        })
    });
  return (
    <div className='Burger'>
        <BurgerIngredient type="bread-top" />
        <BurgerIngredient type="cheese" />
        {transformedIngredients}
        <BurgerIngredient type="bread-top" />
        <BurgerIngredient type="bread-top" />
        <>Burger</>
    </div>
  )
}

export default Burger