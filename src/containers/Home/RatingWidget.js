import RatingWidget from "../../components/layout/RatingWidget";
import {connect} from "react-redux";
import {addToWatched, removeFromWishlist, updateMoviesRating} from "../../redux/actions/selectActions";

const mapState = (state) => ({
    watched : state.movies.watched,
})

const mapDispatch = (dispatch) => {
    return{
        addToWatched : (id, rating) => dispatch(addToWatched(id, rating)),
        removeFromWishlist: (id) => dispatch(removeFromWishlist(id)),
        updateMovies : (id, rating) => dispatch(updateMoviesRating(id, rating))
    }
}



export default connect(mapState, mapDispatch)(RatingWidget);

