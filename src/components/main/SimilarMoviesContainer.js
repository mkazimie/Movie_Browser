import React, {Component} from 'react';
import MovieCard from "../../containers/MovieCard";
import NoMovieFound from "./NoMovieFound";

class SimilarMoviesContainer extends Component {
    render() {
        const {similarMovies} = this.props;
        let content = '';

        if (similarMovies !== undefined) {
            content = similarMovies.map((movie, index) => <MovieCard key={index} movie={movie}/>)
        } else {
            return <NoMovieFound/>
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
