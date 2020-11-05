import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";


class SearchForm extends Component {

    handleOnChange = e => {
        this.props.searchMovie(e.target.value)
    }

    handleOnSubmit = e => {
        e.preventDefault();
        const {text} = this.props;
        if (text.length < 3) {
            alert('You need to type in at least 3 characters')
        } else {
            this.props.fetchMovies(text);
            this.props.setLoading();
        }
    }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid mt-5 text-center">
                <div className="container">
                    <h1 className="display-4 mb-3">
                        <FontAwesomeIcon icon={faSearch}/> Search for a movie, TV series ..
                    </h1>
                    <form id="searchForm" onSubmit={this.handleOnSubmit}>
                        <input
                            type="text"
                            className="form-control"
                            name="searchText"
                            placeholder="Search Movies, TV Series ..."
                            onChange={this.handleOnChange}
                        />
                        <button type="submit" className="btn btn-primary btn-bg mt-3">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchForm;