import React, {useContext} from 'react'
import {ContextConsumer} from './../contexts/Context'

function CartList() {
    const {cartItems} = useContext(ContextConsumer)
    const cartList = cartItems.map(item => (
        <div key={item.id}>
            <p>Item with ID: {item.id}</p>
        </div>
    ))

    return (
        <div className="cart-list">
            {cartList}
            <button className='checkout-btn'>Place Order</button>
        </div>
    )
}

export default CartList