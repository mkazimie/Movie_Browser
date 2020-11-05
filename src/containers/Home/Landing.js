import Landing from "../../components/main/Home/Landing";
import {connect} from "react-redux";
import {clearSearch} from "../../redux/actions/searchActions";

const mapState = (state) => ({
    loading: state.movies.loading
})

const mapDispatch = (dispatch) => {
    return {
        clearSearch: () => dispatch(clearSearch())
    }
}

export default connect(mapState, mapDispatch)(Landing);