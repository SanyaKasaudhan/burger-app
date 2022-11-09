import React from 'react'
import Burger from './Components/Burger/Burger'
import BurgerIngredient from './Components/Burger/BurgerIngredient'
import Lay from './Components/Lay'
import BurgerBuilder from './Containers/BurgerBuilder'
 import Toolbar from './Components/Navigation/Toolbar/Toolbar.js'
const App = () => {
  return (
    <div>
        <Lay >
          <Toolbar />
          <Toolbar />
        <BurgerBuilder />
        </Lay >
    </div>
  )
}

export default App