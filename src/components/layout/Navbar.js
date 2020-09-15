import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReact, faImdb} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-dark mb-5">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand text-white text-lg brand-text" href="#">
                            Movee Me
                        </a>
                    </div>
                    <ul className="navbar-nav ml-auto text-light d-inline-block">
                        <li className="nav-item d-inline-block mr-4">
                            <FontAwesomeIcon icon={faImdb} size={'5x'} color="yellow"/>
                        </li>
                        <li className="nav-item d-inline-block mr-4">
                            <FontAwesomeIcon icon={faReact} size={'5x'} color="skyblue"/>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
