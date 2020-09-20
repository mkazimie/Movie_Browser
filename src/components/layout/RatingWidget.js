import React, {Component} from 'react';
import StarRatingComponent from "react-star-ratings";


class RatingWidget extends Component {

    state = {
        rating: 0,
    }

    changeRating = (newRating) => {
        this.setState({rating: newRating})
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
                starSpacing={'-5px'}
                starRatedColor={'#ffff00'}
                starEmptyColor={'#faebd7'}
                starHoverColor={'#ffff00'}
            />
        );
    }
}


export default RatingWidget;
