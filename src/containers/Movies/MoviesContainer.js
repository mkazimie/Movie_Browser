import {connect} from "react-redux";
import MoviesContainer from "../../components/main/Movies/MoviesContainer";

const mapState = state => ({
    movies : state.movies.movies,
})

export default connect(mapState)(MoviesContainer);