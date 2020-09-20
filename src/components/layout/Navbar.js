import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReact, faImdb} from "@fortawesome/free-brands-svg-icons";
import {NavLink} from "react-router-dom";



const Navbar = () => {

    const active = {
        color : '#00bfff',
        fontWeight : 'bold'
    }

    return (
        <div>
            <nav className="navbar navbar-light bg-dark mb-5">
                <div className="container">
                    <div className="navbar-header">
                        <NavLink exact className="navbar-brand text-lg brand-text px-2" activeStyle={active}  to={"/"}>
                            Search
                        </NavLink>
                        <NavLink exact className="navbar-brand text-lg brand-text px-2" activeStyle={active}  to={"/movies/wishlist"}>
                            Wishlist
                        </NavLink>
                        <NavLink exact className="navbar-brand text-lg brand-text px-2" activeStyle={active}  to={"/movies/watched"}>
                            Watched
                        </NavLink>
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