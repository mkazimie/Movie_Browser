import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';

class MovieCard extends Component {
    render() {
        const {movie} = this.props;
        return (
            <div className="col-md-3 mb-5">
                <div className="card card-body bg-dark text-center h-100">
                    <img className="w-100 mb-2" src={movie.Poster} alt="Movie Cover"/>
                    <h5 className="text-light card-title">
                        {movie.Title} &#8226; {movie.Year}
                    </h5>
                    <Link className="btn btn-primary" to={'/movie/' + movie.imdbID}>
                        Movie Details <FontAwesomeIcon icon={faChevronRight}/>
                    </Link>
                </div>
            </div>
        );
    }
}


export default MovieCard;
