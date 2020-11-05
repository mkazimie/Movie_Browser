import React, {Component} from 'react';
import SearchForm from "../../../containers/Search/SearchForm";
import {Spinner} from "react-bootstrap";
import MoviesContainer from "../../../containers/Movies/MoviesContainer";
import "../../../static/App.css";

class Landing extends Component {

    state = {
        clicked: false
    }
    handleClick = () => {
        this.setState({clicked: !this.state.clicked});
        this.props.clearSearch();
    }

    render() {
        const {loading} = this.props;
        const {clicked} = this.state;
        return (
            <div className="container">
                {clicked ? <SearchForm/> :
                    <div className="text-center mb-5">
                        <button className="btn btn-primary btn-lg" onClick={this.handleClick}> New Search</button>
                    </div>}
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