import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight, faEye, faEyeSlash, faTrash} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
import "../../../static/App.css"
import RatingWidget from "../../../containers/Home/RatingWidget";


class MovieCard extends Component {


    handleOnClickAddWishlist = id => {
        this.props.addToWishlist(id);
        this.props.removeFromWatched(id);
    }

    handleOnClickRemoveWishlist = id => {
        this.props.removeFromWishlist(id);
    }

    handleOnClickRemoveWatched = id => {
        this.props.removeFromWatched(id);
    }


    render() {
        const {movie, wishlist, watched, rating} = this.props;


        let onWishlist = false;
        let alreadySeen = false;

        if (wishlist.length > 0 && wishlist.some(movieToBeSeen => movieToBeSeen.imdbID === movie.imdbID)) {
            onWishlist = true;
        }
        if (watched.length > 0 && watched.some(watchedMovie => watchedMovie.movie.imdbID === movie.imdbID)) {
            alreadySeen = true;
        }


        return (
            <div className="col-lg-4 col-sm-6 mb-5">
                <div className="card card-body h-100 border-secondary bg-dark text-white text-center">
                    <img className="w-100 h-75 mb-2"
                         src={movie.Poster}
                         onError={(e)=>{e.target.onError = null; e.target.src="https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png"}}
                         alt="Movie Cover"/>
                    <h5 className="text-light card-title">
                        {movie.Title}
                    </h5>
                    <h5 className="text-light card-title">
                        ({movie.Year})
                    </h5>

                    <Link className="btn btn-primary" to={`/movie/${movie.imdbID}`}>
                        Movie Details <FontAwesomeIcon icon={faChevronRight}/>
                    </Link>

                    <div className="mt-2">
                    <RatingWidget key={movie.imdbID} movie={movie} rating={rating}/>
                    </div>


                    {(onWishlist && !alreadySeen) &&
                    <button className="btn btn-dark text-white mt-2"
                            onClick={() => this.handleOnClickRemoveWishlist(movie.imdbID)}>
                        Remove from Wishlist &nbsp;
                        <FontAwesomeIcon className="icon-event"
                                         icon={faEyeSlash}
                                         size={'1.5'}
                                         color={"#ff3333"}

                        /></button>}

                    {(!onWishlist && !alreadySeen) &&
                    <button className="btn btn-dark mt-2 text-white"
                            onClick={() => this.handleOnClickAddWishlist(movie.imdbID)}>
                        Add to Wishlist &nbsp;
                        <FontAwesomeIcon className="icon-event"
                                         icon={faEye}
                                         size={'1.5'}
                                         color={'#00bfff'}
                        /></button>}


                        {alreadySeen &&
                        <button className="btn btn-light mt-2"
                                onClick={() => this.handleOnClickRemoveWatched(movie.imdbID)}>Remove from
                            watched &nbsp;
                            <FontAwesomeIcon className="icon-event"
                                             icon={faTrash}
                                             size={'1.5'}
                                             color={'#ff3333'}
                            />
                        </button>}

                </div>
            </div>
        );
    }
}


export default MovieCard;
