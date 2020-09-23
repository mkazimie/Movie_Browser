import React, {Component} from 'react';
import StarRatingComponent from "react-star-ratings";


class RatingWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: this.props.rating,
        }
    }

// jesli id tego filmu nie znajduje sie w id filmow juz ogladanych
    changeRating = (newRating) => {
        this.setState({rating: newRating});
        const {movie} = this.props;
        this.props.addToWatched(movie.imdbID, newRating);
    }


    render() {
        const {rating} = this.state;

        return (
            <div>
                <StarRatingComponent
                    rating={rating}
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
