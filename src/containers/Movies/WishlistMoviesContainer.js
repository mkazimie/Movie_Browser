import {connect} from "react-redux";
import WishlistMoviesContainer from "../../components/main/Movies/WishlistMoviesContainer";

const mapState = state => ({
    wishlistMovies : state.movies.wishlist,
    watched : state.movies.watched,
    rating : state.movies.rating
})

export default connect(mapState)(WishlistMoviesContainer);