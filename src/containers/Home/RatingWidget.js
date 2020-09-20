import RatingWidget from "../../components/layout/RatingWidget";
import {connect} from "react-redux";
import {addToWatched, removeFromWatched} from "../../redux/actions/selectActions";

const mapState = (state) => ({
    watched : state.movies.watched
})

const mapDispatch = (dispatch) => {
    return{
        addToWatched : (id) => dispatch(addToWatched(id)),
        removeFromWatched: (id) => dispatch(removeFromWatched(id)),
    }
}



export default connect(mapState, mapDispatch)(RatingWidget);

