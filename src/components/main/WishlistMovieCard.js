import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import RatingWidget from "../layout/RatingWidget";

class WishlistMovieCard extends Component {


    handleOnClick = id => {
        this.props.removeFromWishlist(id);
    }

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
                    <RatingWidget/>
                    <FontAwesomeIcon className="icon-event" icon={faEyeSlash}
                                     size={'2x'} color={"#ff3333"}
                                     onClick={() => this.handleOnClick(movie.imdbID)}/>

                </div>
            </div>
        );
    }
}


export default WishlistMovieCard;
