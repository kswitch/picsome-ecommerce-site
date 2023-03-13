import React, {useState, useEffect} from "react";
import GiveNewProps from "../utils/GiveNewProps";
import {GetFavoriteImages, GetCartImages} from '../utils/GetFavoriteAndCartImages'

const Context = React.createContext()

function ContextProvider(props) {
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    const [images, setImages] = useState([])
    const [favItems, setFavItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    
    useEffect(() => {
        async function dataFetcher(url) {
            const res = await fetch(url)
            const data = await res.json()
            const imagesWithNewProps = await GiveNewProps(data)
            return setImages(imagesWithNewProps)
        }
        dataFetcher(url)
    },[])

    function handleFavorites(id) {
        // Toggle the isfavorite of the image
        setImages(prevImg => prevImg.map(img => (
                                img.id == id ? {...img, isFavorite:!img.isFavorite} : img
                            ))
        )
    }

    function handleCartItems(id) {
        // Toggle the isInCart of the image
        setImages(prevImg => prevImg.map(img => (
                                img.id == id ? {...img, isInCart:!img.isInCart} : img
                            ))
        )
    }
    
    function EmptyCart() {
        setImages(prevImg => prevImg.map(img => ({...img, isInCart: false})))
    }

    useEffect(() => {
        setFavItems(GetFavoriteImages(images))
        setCartItems(GetCartImages(images))
    },[images])

    return (
        <Context.Provider value={{images, favItems, cartItems, handleCartItems, handleFavorites, EmptyCart}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context as ContextConsumer}