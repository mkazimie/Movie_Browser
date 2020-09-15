import {connect} from "react-redux";
import SearchForm from "../../components/main/SearchForm";
import {fetchMovies, searchMovie} from "../../redux/actions/searchActions";

const mapDispatch = (dispatch) => {
    return {
        searchMovie: (text) => dispatch(searchMovie(text)),
        fetchMovies : (text) => dispatch(fetchMovies(text))
    }
}

const mapState = (state) => ({
    text : state.movies.text
})

export default connect(mapState, mapDispatch)(SearchForm);
