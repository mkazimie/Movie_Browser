import React, {Component} from 'react';
import StarRatingComponent from "react-star-ratings";

class RatingWidget extends Component {

    changeRating = (newRating) => {
        const {movie} = this.props;
        this.props.addToWatched(movie.imdbID, newRating);
        this.props.updateMovies(movie.imdbID, newRating);
        this.props.removeFromWishlist(movie.imdbID);
    }

    render() {
        const {rating} = this.props;


        return (
            <div>
                <StarRatingComponent
                    rating={rating === undefined ? 0 : rating}
                    numberOfStars={5}
                    starCount={5}
                    changeRating={this.changeRating}
                    starDimension={'20px'}
                    starSpacing={'1.5px'}
                    starRatedColor={'#ffff00'}
                    starEmptyColor={'#faebd7'}
                    starHoverColor={'#ffff00'}
                />
            </div>
        );
    }
}

export default RatingWidget;