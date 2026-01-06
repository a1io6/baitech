import React from 'react'
import Header from '../widgets/header/Header'
import Footer from '../widgets/footer/footer'
import CartEmpty from '../widgets/cart/CartEmpty/CartEmpty'
import CartItem from '../widgets/cart/CartItem/CartItem'
import CartPage from '../widgets/cart/CartItem/CartPage'
import Cart from '../widgets/cart/CartItem/cart'

function App() {
  return (
    <div>
      <Header/>
      {/* <CartEmpty/> */}
      {/* <CartPage/> */}
      <Cart/>
      <Footer/>
    </div>
  )
}

export default App
