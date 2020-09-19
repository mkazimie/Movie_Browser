import React from 'react';
import './static/App.css';
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./containers/Home/Landing";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import SingleMovie from "./containers/Movie/SingleMovie";
import WishlistMoviesContainer from "./containers/Movies/WishlistMoviesContainer";
import NotFound from "./components/layout/NotFound";


function App() {
    return (
        <Router>
            <>
                <Navbar/>
                <Switch>
                    <Route exact path={"/"} component={Landing}/>
                    <Route exact path={"/movie/:id"} component={SingleMovie}/>
                    <Route exact path={"/movies/wishlist"} component={WishlistMoviesContainer}/>
                    <Route path={"*"} render={(props) => <NotFound {...props} message={'404'}/>}/>
                </Switch>
                <Footer/>
            </>
        </Router>
    );
}

export default App;
