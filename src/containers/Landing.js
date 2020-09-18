import Landing from "../components/main/Landing";
import {connect} from "react-redux";

const mapState = (state) => ({
    loading : state.movies.loading
})


export default connect(mapState)(Landing);

