import React, {useContext} from 'react'
import {ContextConsumer} from './../contexts/Context'

function FavoriteList() {
    const {favItems} = useContext(ContextConsumer)

    const favList = favItems.map(item => (
        <div key={item.id}>
            <p>Image with ID: {item.id}</p>
        </div>
    ))

    return (
        <div className="favorite-list">
            {favList}
        </div>
    )
}

export default FavoriteList