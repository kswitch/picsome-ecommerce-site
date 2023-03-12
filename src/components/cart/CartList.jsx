import React, {useContext} from 'react'
import {Context} from './../contexts/Context'

function CartList() {
    const {cartItems} = useContext(Context)
    const cartList = cartItems.map(item => (
        <p>{item}</p>
    ))

    return (
        <div className="cart-list">
            {cartList}
            <button className='checkout-btn'>Place Order</button>
        </div>
    )
}

export default CartList