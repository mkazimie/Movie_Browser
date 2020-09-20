import {connect} from "react-redux";
import MovieCard from "../../components/main/Movie/MovieCard";
import {addToWishlist, removeFromWishlist} from "../../redux/actions/selectActions";


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