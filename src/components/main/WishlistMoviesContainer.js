import React, {Component} from 'react';
import MovieCard from "../../containers/MovieCard";
import NotFound from "../layout/NotFound";

class WishlistMoviesContainer extends Component {
    render() {
        const {wishlistMovies} = this.props;
        let content = '';

        console.log(wishlistMovies);

        if (wishlistMovies !== undefined && wishlistMovies.length > 0){
            content =  wishlistMovies.map((movie, index) => <MovieCard key={index} movie={movie}/>)
        } else {
            return <NotFound message={'wishlist-empty'} />
        }

        return (
            <div className='row mb-5'>
                {content}
            </div>
        );
    }
}


export default WishlistMoviesContainer;
