import React, {useContext} from 'react'
import {ContextConsumer} from './../contexts/Context'

function CartList() {
    const {cartItems, handleCartItems} = useContext(ContextConsumer)

    const cartList = cartItems.map(item => (
        <div className='cart-item' id={item.id} key={item.id}>
            <div>
                <i 
                    onClick={e => handleCartItems(e.target.parentElement.parentElement.id)} 
                    className="ri-delete-bin-line cart-item-delete-btn"
                ></i>
                <img className='cart-item-img' src={item.url}/>
            </div>
            <p>${item.price}</p>
        </div>
    ))

    const total = cartItems.reduce((acc, item)=>{
        return acc+=item.price
    },0)

    return (
        <div className="cart-list">
            {cartList}
            <h4 className='total'>Total: ${total.toFixed(2)}</h4>
            <button className='checkout-btn'>Place Order</button>
        </div>
    )
}

export default CartList