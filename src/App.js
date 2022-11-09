import React from 'react'
import Burger from './Components/Burger/Burger'
import BurgerIngredient from './Components/Burger/BurgerIngredient'
import Lay from './Components/Lay'
import BurgerBuilder from './Containers/BurgerBuilder'

const App = () => {
  return (
    <div>
        <Lay >
        <BurgerBuilder />
        </Lay >
    </div>
  )
}

export default App