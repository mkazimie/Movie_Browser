import React, {Component} from 'react';
import MovieCard from "./MovieCard";
import NoMovieFound from "./NoMovieFound";

class MoviesContainer extends Component {
    render() {
        const {movies} = this.props;
        let content = '';

        if (movies !== undefined){
            content =  movies.map((movie, index) => <MovieCard key={index} movie={movie}/>)
        } else {
            return <NoMovieFound />
        }

        return (
            <div className='row mb-5'>
                {content}
            </div>
        );
    }
}


export default MoviesContainer;
