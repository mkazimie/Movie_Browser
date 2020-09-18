import React, {Component} from 'react';
import SearchForm from "../../containers/SearchForm";
import {Spinner} from "react-bootstrap";
import MoviesContainer from "../../containers/MoviesContainer";
import "../../static/App.css";


class Landing extends Component {
    render() {
        const {loading} = this.props;
        return (
            <div className="container">
                <SearchForm/>
                {loading ?
                    <div className="spinner">
                        <Spinner animation="grow" variant="dark"/>
                    </div>
                : <MoviesContainer/>}
            </div>
        );
    }
}


export default Landing;
