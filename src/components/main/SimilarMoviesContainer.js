import React, {Component} from 'react';
import MovieCard from "../../containers/MovieCard";
import NotFound from "../layout/NotFound";

class SimilarMoviesContainer extends Component {
    render() {
        const {similarMovies} = this.props;
        let content = '';

        if (similarMovies !== undefined) {
            content = similarMovies.map((movie, index) => <MovieCard key={index} movie={movie}/>)
        } else {
            return <NotFound message='no-movie-found'/>
        }


        return (
            <div>
                <div className='row mb-5'>
                    {content}
                </div>
            </div>
        );
    }
}


export default SimilarMoviesContainer;
