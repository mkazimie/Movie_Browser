import {
    ADD_TO_WATCHED,
    ADD_TO_WISHLIST,
    REMOVE_FROM_WATCHED,
    REMOVE_FROM_WISHLIST,
    UPDATE_MOVIES_RATING
} from "./actionTypes";

const addToWishlist = id => ({
    type : ADD_TO_WISHLIST,
    payload : id
})

const removeFromWishlist = id => ({
    type : REMOVE_FROM_WISHLIST,
    payload : id
})


const addToWatched= (id, rating) => ({
    type : ADD_TO_WATCHED,
    payload : {
        id : id,
        rating : rating
    }
})

const removeFromWatched = id => ({
    type : REMOVE_FROM_WATCHED,
    payload : id
})

const updateMoviesRating = (id, rating) => ({
    type : UPDATE_MOVIES_RATING,
    payload : {
        id : id,
        rating : rating
    }
})


export {addToWishlist, removeFromWishlist, addToWatched, removeFromWatched, updateMoviesRating};