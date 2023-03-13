import React, {useContext, useState} from 'react'
import {ContextConsumer} from './../contexts/Context'

function CartList() {
    const {cartItems, handleCartItems, EmptyCart} = useContext(ContextConsumer)
    const [btnText, setBtnText] = useState("Place Order")
    const [orderPlaced, setOrderPlaced] = useState(false)

    function PlaceOrder() {
        setBtnText("Placing Order...")
        setTimeout(() => {
            EmptyCart()
            setOrderPlaced(true)
        }, 3000)
    }

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
        <>
            {  
                Boolean(cartItems.length) &&
                    <div className="cart-list">
                        {cartList}
                        <h4 className='total'>Total: ${total.toFixed(2)}</h4>
                        <button onClick={PlaceOrder} className='checkout-btn'>{btnText}</button>
                    </div>
            }
            { 
                Boolean(!cartItems.length) && !orderPlaced &&
                    <div className='cart-and-fav-no-items'>
                        <h4 className='total'>Total: $0.00</h4>
                        <p>You have no items in your cart. Let's add some!</p>
                    </div>            
            }
            { 
                Boolean(!cartItems.length) && orderPlaced &&
                    <div className='cart-and-fav-no-items'>
                        <p>Thank you for your order!</p>
                    </div>            
            }
        </>
    )
}

export default CartList