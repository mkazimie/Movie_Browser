import {connect} from "react-redux";
import SingleMovie from "../../components/main/Movie/SingleMovie";
import {fetchMovie, setLoading} from "../../redux/actions/searchActions";

const mapState = (state) => ({
    loading : state.movies.loading,
    movie : state.movies.movie,
    movies : state.movies.movies,
})

const mapDispatch = (dispatch) => {
    return{
        fetchMovie : (id) => dispatch(fetchMovie(id)),
        setLoading : () => dispatch(setLoading()),
    }
}

export default connect(mapState, mapDispatch)(SingleMovie);