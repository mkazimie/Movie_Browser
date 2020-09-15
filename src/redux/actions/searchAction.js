import {SEARCH_MOVIE} from "./actionTypes";

const searchMovie = (text) => ({
    type: SEARCH_MOVIE,
    payload: text
})


export {searchMovie};