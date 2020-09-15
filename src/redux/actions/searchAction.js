import {SEARCH_MOVIE} from "./actionTypes";

const searchMovie = (text) => (dispatch) => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    })
}

export default searchMovie;