import RatingWidget from "../../components/layout/RatingWidget";
import {connect} from "react-redux";
import {addToWatched} from "../../redux/actions/selectActions";

const mapState = (state) => ({
    watched : state.movies.watched,
})

const mapDispatch = (dispatch) => {
    return{
        addToWatched : (id, rating) => dispatch(addToWatched(id, rating)),
        // setRating : (rating) => dispatch(setRating(rating)),
        // removeFromWatched: (id) => dispatch(removeFromWatched(id)),
    }
}



export default connect(mapState, mapDispatch)(RatingWidget);

