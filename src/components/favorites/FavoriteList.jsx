import React, {useContext} from 'react'
import {Context} from './../contexts/Context'

function FavoriteList() {
    const {favItems} = useContext(Context)

    const favList = favItems.map(item => (
        <p>{item}</p>
    ))

    return (
        <div className="favorite-list">
            {favList}
        </div>
    )
}

export default FavoriteList