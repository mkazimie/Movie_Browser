import React, {Component} from 'react';
import NoMovieFound from "./NoMovieFound";
import WishlistMovieCard from "../../containers/main/WishlistMovieCard";

class WishlistMoviesContainer extends Component {
    render() {
        const {wishlistMovies} = this.props;
        let content = '';

        if (wishlistMovies !== undefined){
            content =  wishlistMovies.map((movie, index) => <WishlistMovieCard key={index} movie={movie}/>)
        } else {
            return <NoMovieFound />
        }

        return (
            <div className='row mb-5'>
                {content}
            </div>
        );
    }
}


export default WishlistMoviesContainer;
