import React, {Component} from 'react';
import {Spinner} from "react-bootstrap";
import {Link} from "react-router-dom";
import MovieCard from "../../../containers/Movie/MovieCard"

class SingleMovie extends Component {

    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.id);
        this.props.setLoading();
        window.scrollTo(0, 0)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const currentPropsId = this.props.match.params.id;
        const prevPropsId = prevProps.match.params.id;
        if (prevPropsId !== currentPropsId) {
            this.props.fetchMovie(currentPropsId);
            window.scrollTo(0, 0)
        }
    }

    render() {
        const {loading, movie, movies} = this.props;

        let filteredMovies = movies.filter((item) => item.imdbID !== movie.imdbID);

        let movieInfo = (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 card card-body">
                        <img
                            src={movie.Poster}
                            onError={(e) => {
                                e.target.onError = null;
                                e.target.src = "https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png"
                            }}
                            className="thumbnail" alt="Poster"/>
                    </div>
                    <div className="col-md-8">
                        <h2 className="mb-4"> {movie.Title} </h2>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <strong>Genre:</strong> {movie.Genre}
                            </li>
                            <li className="list-group-item">
                                <strong>Released:</strong> {movie.Released}
                            </li>
                            <li className="list-group-item">
                                <strong>Rated:</strong> {movie.Rated}
                            </li>
                            <li className="list-group-item">
                                <strong>IMDB Rating:</strong> {movie.imdbRating}
                            </li>
                            <li className="list-group-item">
                                <strong>Director:</strong> {movie.Director}
                            </li>
                            <li className="list-group-item">
                                <strong>Writer:</strong> {movie.Writer}
                            </li>
                            <li className="list-group-item">
                                <strong>Actors:</strong> {movie.Actors}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="card card-body bg-dark my-5 text-light">
                        <div className="col-md-12">
                            <h3>About </h3>
                            {movie.Plot}
                            <hr/>
                            <a href={`https://www.imdb.com/title/${movie.imdbID}`}
                               target="_blank"
                               rel="noopener noreferrer"
                               className="btn btn-primary">
                                View on IMDB</a>
                            <Link to={"/"} className="btn btn-default text-light">
                                Go Back To Search
                            </Link>
                        </div>
                    </div>
                </div>
                {filteredMovies.length > 0 && <h2> Similar Movies: </h2>}
                <div className="row">
                    {filteredMovies.length > 0 ? filteredMovies.slice(0, 6).map((item, index) =>
                            <MovieCard movie={item} key={index} rating={item.rating}/>) : null}
                </div>
            </div>
        )
        let content = loading ? <div className="spinner"><Spinner animation="grow" variant="dark"/></div> : movieInfo;

        return (
            <div>{content}</div>
        )
    }
}

export default SingleMovie;