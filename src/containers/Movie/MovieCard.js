import {connect} from "react-redux";
import MovieCard from "../../components/main/Movie/MovieCard";
import {
    addToWishlist,
    removeFromWatched,
    removeFromWishlist,
} from "../../redux/actions/selectActions";


const mapDispatch = (dispatch) => {
    return{
        addToWishlist : (id) => dispatch(addToWishlist(id)),
        removeFromWishlist: (id) => dispatch(removeFromWishlist(id)),
        removeFromWatched : (id) => dispatch(removeFromWatched(id))
    }
}

const mapState = (state) => ({
    wishlist : state.movies.wishlist,
    watched : state.movies.watched,
})


export default connect(mapState, mapDispatch)(MovieCard)