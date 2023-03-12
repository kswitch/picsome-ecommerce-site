import React, {useContext} from 'react'
import {ContextConsumer} from './../contexts/Context'
import CartList from './CartList'

function Cart() {
    const {cartItems} = useContext(ContextConsumer)

    return (
        <div className="cart-and-fav">
            <h1>Check out</h1>
            {
                cartItems.length ? 
                    <CartList />  
                : 
                    <div className='cart-and-fav-no-items'>
                        <h4 className='total'>Total: $0.00</h4>
                        <p>You have no items in your cart. Let's add some!</p>
                    </div>
            }   
        </div>
    )
}

export default Cart