import {ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST} from "./actionTypes";

const addToWishlist = id => ({
    type : ADD_TO_WISHLIST,
    payload : id
})

const removeFromWishlist = id => ({
    type : REMOVE_FROM_WISHLIST,
    payload : id
})



export {addToWishlist, removeFromWishlist};