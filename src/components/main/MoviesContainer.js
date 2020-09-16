import React, {Component} from 'react';
import MovieCard from "./MovieCard";

class MoviesContainer extends Component {
    render() {
        const {movies} = this.props;
        let content = movies.length > 0 ? movies.map((movie, index) => <MovieCard key={index} movie={movie}/>) : null;


        return (
            <div className='row'>
                {content}
            </div>
        );
    }
}


export default MoviesContainer;
