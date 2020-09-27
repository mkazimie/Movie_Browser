import {
    ADD_TO_WATCHED,
    ADD_TO_WISHLIST, CLEAR_SEARCH,
    DISPLAY_MOVIE,
    DISPLAY_MOVIES,
    LOADING, REMOVE_FROM_WATCHED,
    REMOVE_FROM_WISHLIST,
    SEARCH_MOVIE, UPDATE_MOVIES_RATING,
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
            const selectedMovie = state.movies.filter(movie => movie.imdbID === action.payload)[0];
            if (state.wishlist.length > 0 && state.wishlist.some(movie => movie.imdbID === action.payload)) {
                return {
                    ...state,
                }
            } else {
                return {
                    ...state,
                    wishlist: [...state.wishlist, selectedMovie]
                }
            }

        case REMOVE_FROM_WISHLIST :
            const filteredWishlist = state.wishlist.filter(movie => movie.imdbID !== action.payload);
            return {
                ...state,
                wishlist: filteredWishlist
            }

        case ADD_TO_WATCHED:
            const foundMovie = state.movies.filter(movie => movie.imdbID === action.payload.id)[0];
            if (state.watched.length > 0 && state.watched.some(watchedMovie => watchedMovie.movie.imdbID === action.payload.id)) {
                return {
                    ...state,
                    watched: state.watched.map(watchedMovie => watchedMovie.movie.imdbID === action.payload.id ?
                        {...watchedMovie, rating: action.payload.rating} : watchedMovie),
                }
            } else {
                return {
                    ...state,
                    watched: [...state.watched, {movie: foundMovie, rating: action.payload.rating}],
                }
            }

        case UPDATE_MOVIES_RATING :
            return {
                ...state,
                movies: state.movies.map(movie => movie.imdbID === action.payload.id ? {
                    ...movie,
                    rating: action.payload.rating
                } : movie)
            }

        case REMOVE_FROM_WATCHED :
            let filteredWatched = state.watched.filter((movie) => movie.movie.imdbID !== action.payload);
            let moviesUpdated = state.movies.map((movie) => movie.imdbID === action.payload ? {
                ...movie,
                rating: 0
            } : movie);
            return {
                ...state,
                watched: filteredWatched,
                movies: moviesUpdated
            }

        case LOADING:
            return {
                ...state,
                loading: true
            }

        case CLEAR_SEARCH :
            return {
                ...state,
                movies: []
            }
        default:
            return state
    }


}
export default moviesReducer;