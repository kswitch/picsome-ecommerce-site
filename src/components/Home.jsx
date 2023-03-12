import React, {useContext} from 'react'
import { ContextConsumer } from './contexts/Context'

import Loading from './loading/Loading'

function Home() {
    const {images, handleFavorites, handleCartItems} = useContext(ContextConsumer)

    const renderImages = images.map(image => (
        <div className='home-images' key={image.id} id={image.id}>
            <img 
                className="image" 
                id={image.id} 
                src={image.url}
            />
            <div className='home-images-icons'>
                <i 
                    className={`fav-icon ${image.isFavorite ? 'ri-heart-fill' : 'ri-heart-line'}`}
                    onClick={(e) => handleFavorites(e.target.parentElement.parentElement.id)}
                ></i>
                <i 
                    className={`cart-icon ${image.isInCart ? 'ri-shopping-cart-fill' : 'ri-add-circle-line'}`}
                    onClick={(e) => handleCartItems(e.target.parentElement.parentElement.id)}
                ></i>
            </div>
        </div>
    ))

    return (
        <div className="home">
            {
                images.length ? renderImages : <Loading />
            }
        </div>
    )
}

export default Home