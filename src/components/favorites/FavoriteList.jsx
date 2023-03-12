import React, {useContext} from 'react'
import {ContextConsumer} from './../contexts/Context'

function FavoriteList() {
    const {favItems, handleFavorites, handleCartItems} = useContext(ContextConsumer)

    const favList = favItems.map(item => (
        <div className='home-images fav-images' key={item.id} id={item.id}>
            <img 
                className="image" 
                id={item.id} 
                src={item.url}
            />
            <div className='home-images-icons'>
                <i 
                    className={`cart-item-delete-btn ${item.isFavorite ? 'ri-dislike-fill' : 'ri-heart-line'}`}
                    onClick={(e) => handleFavorites(e.target.parentElement.parentElement.id)}
                ></i>
                <i 
                    className={`cart-icon ${item.isInCart ? 'ri-shopping-cart-fill' : 'ri-add-circle-line'}`}
                    onClick={(e) => handleCartItems(e.target.parentElement.parentElement.id)}
                ></i>
            </div>
        </div>
    ))

    return (
        <div className="favorite-list">
            {favList}
        </div>
    )
}

export default FavoriteList