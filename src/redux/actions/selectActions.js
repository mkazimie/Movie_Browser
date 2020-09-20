import {ADD_TO_WATCHED, ADD_TO_WISHLIST, REMOVE_FROM_WATCHED, REMOVE_FROM_WISHLIST} from "./actionTypes";

const addToWishlist = id => ({
    type : ADD_TO_WISHLIST,
    payload : id
})

const removeFromWishlist = id => ({
    type : REMOVE_FROM_WISHLIST,
    payload : id
})


const addToWatched= id => ({
    type : ADD_TO_WATCHED,
    payload : id
})

const removeFromWatched = id => ({
    type : REMOVE_FROM_WATCHED,
    payload : id
})



export {addToWishlist, removeFromWishlist, addToWatched, removeFromWatched};