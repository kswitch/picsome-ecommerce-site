import React, {useContext} from 'react'
import {Context} from './../contexts/Context'
import FavoriteList from './FavoriteList'


function Favorites() {
    const {favItems} = useContext(Context)

    return (
        <div className="cart-and-fav">
            <h1>Your Favorites</h1>
            {
                favItems.length ? 
                    <FavoriteList />
                : 
                    <div className='cart-and-fav-no-items'>
                        <p>You have no items in your favorites. Add some!</p>
                    </div>
            }
        </div>
    )
}

export default Favorites