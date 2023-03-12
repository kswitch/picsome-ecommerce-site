import React, {useState} from "react";

const Context = React.createContext()

function ContextProvider(props) {
    const [images, setImages] = useState([])
    const [favItems, setFavItems] = useState([])
    const [cartItems, setCartItems] = useState([])

    function addCartItems(id) {

    }

    function addFavorites(id) {

    }

    return (
        <Context.Provider value={{images, cartItems, favItems, addCartItems, addFavorites}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}