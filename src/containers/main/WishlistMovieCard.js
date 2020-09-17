import {connect} from "react-redux";
import WishlistMovieCard from "../../components/main/WishlistMovieCard";
import {removeFromWishlist} from "../../redux/actions/wishlistActions";


const mapDispatch = (dispatch) => {
    return {
        removeFromWishlist: (id) => dispatch(removeFromWishlist(id))
    }
}

export default connect(null, mapDispatch)(WishlistMovieCard);

