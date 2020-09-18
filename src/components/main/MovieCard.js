import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight, faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
import "../../static/App.css"


class MovieCard extends Component {


    handleOnClickAddWishlist = id => {
        this.props.addToWishlist(id);
    }

    handleOnClickRemoveWishlist = id => {
        this.props.removeFromWishlist(id);
    }

    render() {
        const {movie, wishlist} = this.props;

        let isOnWishlist = false;

        if (wishlist.indexOf(movie) >= 0) {
            isOnWishlist = true;
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

                </div>
            </div>
        );
    }
}


export default MovieCard;
