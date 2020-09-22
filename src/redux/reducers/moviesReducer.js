import {
    ADD_TO_WATCHED,
    ADD_TO_WISHLIST,
    DISPLAY_MOVIE,
    DISPLAY_MOVIES,
    LOADING, REMOVE_FROM_WATCHED,
    REMOVE_FROM_WISHLIST,
    SEARCH_MOVIE, SET_RATING,
} from "../actions/actionTypes";

const initialState = {
    text: '',
    movies: [],
    loading: false,
    movie: [],
    wishlist: [],
    watched: [],
}


const moviesReducer = (state = initialState, action) => {
    switch (action.type) {

        case SEARCH_MOVIE :
            return {
                ...state,
                text: action.payload,
                loading: false
            }

        case DISPLAY_MOVIES :
            return {
                ...state,
                movies: action.payload,
                loading: false
            }

        case DISPLAY_MOVIE :
            return {
                ...state,
                movie: action.payload,
                loading: false
            }

        case ADD_TO_WISHLIST :
            const selectedMovie = state.movies.filter((movie) => {
                if (movie.imdbID === action.payload) {
                    return movie;
                }
            })[0];
            return {
                ...state,
                wishlist: [...state.wishlist, selectedMovie],
            }

        case REMOVE_FROM_WISHLIST :
            let filteredWishlist = state.wishlist.filter((movie) => movie.imdbID !== action.payload);
            return {
                ...state,
                wishlist: filteredWishlist
            }

        case ADD_TO_WATCHED:
            const foundMovie = state.movies.filter((movie) => {
                if (movie.imdbID === action.payload.id) {
                    return movie;
                }
            })[0];
            if (state.watched.length > 0 && state.watched.some(watchedMovie => watchedMovie.movie.imdbID === action.payload.id)) {
                return {
                    ...state,
                    watched : state.watched.map(watchedMovie => watchedMovie.movie.imdbID === action.payload.id ?
                        {...watchedMovie, rating : action.payload.rating} : watchedMovie)
                }
            } else {
                return {
                    ...state,
                    watched: [...state.watched, {movie: foundMovie, rating: action.payload.rating}]
                }
            }

        // case REMOVE_FROM_WATCHED :
        //     let filteredWatched = state.watched.filter((movie) => movie.imdbID !== action.payload);
        //     return {
        //         ...state,
        //         watched: filteredWatched
        //     }

        case
        LOADING:

            return {
                ...state,
                loading: true
            }
        default:
            return state
    }


}
export default moviesReducer;