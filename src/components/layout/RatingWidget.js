import React, {Component} from 'react';
import StarRatingComponent from "react-star-ratings";


class RatingWidget extends Component {

    state = {
        rating: 0,
    }

    changeRating = (newRating) => {
        this.setState({rating: newRating});
        this.props.addToWatched(this.props.imdbID)
    }

    render() {
        const {rating} = this.state;
        return (
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
        );
    }
}


export default RatingWidget;
