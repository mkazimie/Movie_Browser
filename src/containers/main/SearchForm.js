import {connect} from "react-redux";
import SearchForm from "../../components/main/SearchForm";
import {searchMovie} from "../../redux/actions/searchAction";

const mapDispatch = (dispatch) => {
    return {
        searchMovie: (text) => dispatch(searchMovie(text))
    }
}

const mapState = (state) => ({
    text : state.movies.text
})



export default connect(mapState, mapDispatch)(SearchForm);
