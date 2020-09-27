import React, {Component} from 'react';
import MovieCard from "../../../containers/Movie/MovieCard";
import NotFound from "../../layout/NotFound";

class WatchedMoviesContainer extends Component {
    render() {
        const {watched} = this.props;
        let content = '';

        if (watched !== undefined && watched.length > 0) {
            content = watched.map((movie, index) => <MovieCard key={index} movie={movie.movie} rating={movie.rating}/>)
        } else {
            return <NotFound message={'watched-empty'}/>
        }

        return (
            <div className="container mb-5">
                <div className='row'>
                    {content}
                </div>
            </div>
        );
    }
}


export default WatchedMoviesContainer;
