import React, {useContext} from 'react'
import {ContextConsumer} from './../contexts/Context'

function FavoriteList() {
    const {favItems, handleFavorites} = useContext(ContextConsumer)

    const favList = favItems.map(item => (
        <div key={item.id} id={item.id}>
            <p onClick={(e) => handleFavorites(e.target.parentElement.id)}>Image with ID: {item.id}</p>
        </div>
    ))

    return (
        <div className="favorite-list">
            {favList}
        </div>
    )
}

export default FavoriteList