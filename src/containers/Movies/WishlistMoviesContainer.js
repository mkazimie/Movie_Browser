import {connect} from "react-redux";
import WishlistMoviesContainer from "../../components/main/Movies/WishlistMoviesContainer";


const mapState = state => ({
    wishlistMovies : state.movies.wishlist
})


export default connect(mapState)(WishlistMoviesContainer);