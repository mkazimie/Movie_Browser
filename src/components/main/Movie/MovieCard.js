import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight, faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
import "../../../static/App.css"
import RatingWidget from "../../../containers/Home/RatingWidget";


class MovieCard extends Component {


    handleOnClickAddWishlist = id => {
        this.props.addToWishlist(id);
    }

    handleOnClickRemoveWishlist = id => {
        this.props.removeFromWishlist(id);
    }

    handleOnClickRemoveWatched = id => {
        this.props.removeFromWatched(id);
    }


    render() {
        const {movie, wishlist, watched, rating} = this.props;


        let isOnWishlist = false;
        let alreadySeen = false;

        if (wishlist !== undefined && wishlist.indexOf(movie) >= 0) {
            isOnWishlist = true;
        }

        if (watched.length > 0 && watched.some(watchedMovie => watchedMovie.movie.imdbID === movie.imdbID)) {
            alreadySeen = true;
        }


        return (
            <div className="col-md-3 mb-5">
                <div className="card card-body bg-dark text-center h-100">
                    <img className="w-100 mb-2" src={movie.Poster} alt="Movie Cover"/>
                    <h5 className="text-light card-title">
                        {movie.Title} &#8226; {movie.Year}
                    </h5>

                    <Link className="btn btn-primary" to={`/movie/${movie.imdbID}`}>
                        Movie Details <FontAwesomeIcon icon={faChevronRight}/>
                    </Link>


                    <RatingWidget key={movie.imdbID} movie={movie} rating={rating}/>


                    <div className="mt-2">
                        {isOnWishlist ?
                            <FontAwesomeIcon className="icon-event"
                                             icon={faEyeSlash}
                                             size={'2x'}
                                             color={"#ff3333"}
                                             onClick={() => this.handleOnClickRemoveWishlist(movie.imdbID)}/>
                            :
                            <FontAwesomeIcon className="icon-event"
                                             icon={faEye}
                                             size={'2x'}
                                             color={'#00bfff'}
                                             onClick={() => this.handleOnClickAddWishlist(movie.imdbID)}/>}
                    </div>
                    <div className="mt-2">
                        {alreadySeen ? <button onClick={() => this.handleOnClickRemoveWatched(movie.imdbID)}>Remove from
                            watched</button> : <h2>Add to watched</h2>}
                    </div>

                </div>
            </div>
        );
    }
}


export default MovieCard;
