import {connect} from "react-redux";
import MovieCard from "../components/main/MovieCard";
import {addToWishlist, removeFromWishlist} from "../redux/actions/wishlistActions";


const mapDispatch = (dispatch) => {
    return{
        addToWishlist : (id) => dispatch(addToWishlist(id)),
        removeFromWishlist: (id) => dispatch(removeFromWishlist(id)),
    }
}

const mapState = (state) => ({
    wishlist : state.movies.wishlist,
})


export default connect(mapState, mapDispatch)(MovieCard)