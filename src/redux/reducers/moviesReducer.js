import {
    ADD_TO_WATCHED,
    ADD_TO_WISHLIST,
    DISPLAY_MOVIE,
    DISPLAY_MOVIES,
    LOADING, REMOVE_FROM_WATCHED,
    REMOVE_FROM_WISHLIST,
    SEARCH_MOVIE,
} from "../actions/actionTypes";

const initialState = {
    text: '',
    movies: [],
    loading: false,
    movie: [],
    wishlist: [],
    watched: []
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
            const watchedMovie = state.movies.filter((movie) => {
                if (movie.imdbID === action.payload) {
                    return movie;
                }
            })[0];
            return {
                ...state,
                watched: [...state.watched, watchedMovie],
            }


        case REMOVE_FROM_WATCHED :
            let filteredWatched = state.watched.filter((movie) => movie.imdbID !== action.payload);
            return {
                ...state,
                watched: filteredWatched
            }

        case LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }


}
export default moviesReducer;