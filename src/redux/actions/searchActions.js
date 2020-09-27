import axios from 'axios';
import {SEARCH_MOVIE, DISPLAY_MOVIES, DISPLAY_MOVIE, LOADING, CLEAR_SEARCH} from "./actionTypes";

const OMDb_API_KEY = process.env.REACT_APP_API_KEY;

const searchMovie = (text) => ({
    type: SEARCH_MOVIE,
    payload: text
})


const displayMovies = (data) => ({
    type: DISPLAY_MOVIES,
    payload: data
})

const displayMovie = (data) => ({
    type: DISPLAY_MOVIE,
    payload: data
})

const setLoading = () => ({
    type: LOADING
})

const clearSearch = () => ({
    type : CLEAR_SEARCH,
})


const fetchMovies = (text) => dispatch => {
    axios.get(`http://www.omdbapi.com/?apikey=${OMDb_API_KEY}&s=${text}`
    )
        .then(response => dispatch(displayMovies(response.data.Search)))
        // .then(response => console.log(response.data.Search))
        .catch(err => console.log(err));
}

const fetchMovie = (id) => dispatch => {
    axios.get(`http://www.omdbapi.com/?apikey=${OMDb_API_KEY}&i=${id}`
    )
        .then(response => dispatch(displayMovie(response.data)))
        .catch(err => console.log(err));
}

export {searchMovie, displayMovies, displayMovie, setLoading, fetchMovies, fetchMovie, clearSearch};