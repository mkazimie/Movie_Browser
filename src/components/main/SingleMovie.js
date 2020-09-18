import React, {Component} from 'react';
import {Spinner} from "react-bootstrap";
import {Link} from "react-router-dom";
import SimilarMoviesContainer from "../../containers/SimilarMoviesContainer";

class SingleMovie extends Component {

    constructor() {
        super();
        this.onClick = this.handleClick.bind(this);
        this.state = {
            fetchedSimilar: false
        }
    }


    handleClick(event) {
        const {id} = event.target;
        let fragment = id.slice(0, 4);
        console.log(fragment);
        this.props.fetchSimilar(fragment);
        this.setState(() => ({fetchedSimilar: true}))
    }

    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.id);
        this.props.setLoading();
    }


    render() {
        const {loading, movie} = this.props;
        let movieInfo = (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 card card-body">
                        <img src={movie.Poster} className="thumbnail" alt="Poster"/>
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
                            <a
                                href={`https://www.imdb.com/title/${movie.imdbID}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                View on IMDB
                            </a>
                            <Link to={"/"} className="btn btn-default text-light">
                                Go Back To Search
                            </Link>
                            <button id={movie.Title} onClick={this.onClick}>Similar movies</button>
                        </div>
                    </div>
                </div>
            </div>
        )
        let content = loading ? <div className="spinner"><Spinner animation="grow" variant="dark"/></div>
            : movieInfo;

        return (
            <>
                <div>{content}</div>
                {this.state.fetchedSimilar ? <SimilarMoviesContainer/> : null}
            </>
        )
    }

}


export default SingleMovie;

