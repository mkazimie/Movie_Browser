import React, {Component} from 'react';
import MovieCard from "../../../containers/Movie/MovieCard";
import NotFound from "../../layout/NotFound";

class WatchedMoviesContainer extends Component {
    render() {
        const {watched} = this.props;
        let content = '';

        if (watched !== undefined) {
            content = watched.map((movie, index) => <MovieCard key={index} movie={movie.movie} rating={movie.rating}/>)
        } else {
            return <NotFound message={'wishlist-empty'}/>
        }

        return (
            <div className="container">
                <div className='row mb-5'>
                    {content}
                </div>
            </div>
        );
    }
}


export default WatchedMoviesContainer;
