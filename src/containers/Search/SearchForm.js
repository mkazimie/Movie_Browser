import {connect} from "react-redux";
import SearchForm from "../../components/main/Search/SearchForm";
import {fetchMovies, searchMovie, setLoading} from "../../redux/actions/searchActions";

const mapDispatch = (dispatch) => {
    return {
        searchMovie: (text) => dispatch(searchMovie(text)),
        fetchMovies: (text) => dispatch(fetchMovies(text)),
        setLoading: () => dispatch(setLoading())
    }
}

const mapState = (state) => ({
    text: state.movies.text
})

export default connect(mapState, mapDispatch)(SearchForm);