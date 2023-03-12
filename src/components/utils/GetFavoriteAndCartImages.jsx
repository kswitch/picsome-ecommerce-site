function GetFavoriteImages(arr) {
    return arr.filter(item => item.isFavorite)
}
function GetCartImages(arr) {
    return arr.filter(item => item.isInCart)
}

export {GetFavoriteImages, GetCartImages}