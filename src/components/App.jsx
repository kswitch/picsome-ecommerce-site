import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Favorites from './favorites/Favorites'
import Cart from './cart/Cart'

function App() {
  
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/favorites" element={ <Favorites /> } />
        <Route exact path="/cart" element={ <Cart /> } />
      </Routes>
    </div>
  )
}

export default App