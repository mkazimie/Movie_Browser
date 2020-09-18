import {connect} from "react-redux";
import SimilarMoviesContainer from "../components/main/SimilarMoviesContainer";
import getSimilarMovies from "../redux/selectors/getSimilarMovies";


const mapState = state => ({
    similarMovies : getSimilarMovies(state)
})





export default connect(mapState)(SimilarMoviesContainer);