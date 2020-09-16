import {DISPLAY_MOVIE, DISPLAY_MOVIES, LOADING, SEARCH_MOVIE} from "../actions/actionTypes";

const initialState = {
    text : '',
    movies: [],
    loading : false,
    movie: []
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_MOVIE :
            return {
                ...state,
                text : action.payload,
                loading : false
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
                movie : action.payload,
                loading: false
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

export default searchReducer;