import React, {Component} from 'react';
import SearchForm from "../../containers/main/SearchForm";
import {Spinner} from "react-bootstrap";
import DisplayMovies from "../../containers/main/MoviesContainer";
import "../../css/App.css";


class Landing extends Component {
    render() {
        const {loading} = this.props.loading;
        return (
            <div className="container">
                <SearchForm/>
                {loading ?
                    <div className="spinner">
                        <Spinner animation="grow" variant="dark"/>
                    </div>
                : <DisplayMovies/>}
            </div>
        );
    }
}


export default Landing;
