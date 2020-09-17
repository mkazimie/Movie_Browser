import {connect} from "react-redux";
import MovieCard from "../../components/main/MovieCard";
import {addToWishlist} from "../../redux/actions/wishlistActions";


const mapDispatch = (dispatch) => {
    return{
        addToWishlist : (id) => dispatch(addToWishlist(id))
    }
}


export default connect(null, mapDispatch)(MovieCard)