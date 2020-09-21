import {connect} from "react-redux";
import WatchedMoviesContainer from "../../components/main/Movies/WatchedMoviesContainer";


const mapState = state => ({
    watched : state.movies.watched,
    rating : state.movies.rating
})


export default connect(mapState)(WatchedMoviesContainer);