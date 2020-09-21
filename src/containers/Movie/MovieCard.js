import {connect} from "react-redux";
import MovieCard from "../../components/main/Movie/MovieCard";
import {addToWatched, addToWishlist, removeFromWishlist, setRating} from "../../redux/actions/selectActions";


const mapDispatch = (dispatch) => {
    return{
        addToWishlist : (id) => dispatch(addToWishlist(id)),
        removeFromWishlist: (id) => dispatch(removeFromWishlist(id)),
    }
}

const mapState = (state) => ({
    wishlist : state.movies.wishlist,
    watched : state.movies.watched,
})


export default connect(mapState, mapDispatch)(MovieCard)