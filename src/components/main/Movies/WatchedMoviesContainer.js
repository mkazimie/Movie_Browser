import React, {Component} from 'react';
import MovieCard from "../../../containers/Movie/MovieCard";
import NotFound from "../../layout/NotFound";

class WatchedMoviesContainer extends Component {
    render() {
        const {watched} = this.props;
        let content = '';

        if (watched !== undefined){
            content =  watched.map((movie, index) => <MovieCard key={index} movie={movie}/>)
        } else {
            return <NotFound message={'wishlist-empty'} />
        }

        return (
            <div className='row mb-5'>
                {content}
            </div>
        );
    }
}


export default WatchedMoviesContainer;
