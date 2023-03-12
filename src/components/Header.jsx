import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {Context} from './contexts/Context'

function Header() {
    const {favItems, cartItems} = useContext(Context)

    const itemInFav = favItems.length
    const itemInCart = cartItems.length

    return (
        <div className="header">
            <Link className="header-home-link" to="/">Pic Some</Link> 
            <div className='header-icons'>
            <Link className="header-favorite-icon" to="/favorites">
                <i className={itemInFav ? `ri-heart-fill` : `ri-heart-line`}></i>
            </Link>
            <Link className="header-cart-icon" to="/cart">
                <i className={itemInCart ? `ri-shopping-cart-fill` : `ri-shopping-cart-line`}></i>
            </Link>
            </div>
        </div>
    )
}

export default Header