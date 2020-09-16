import React from 'react';
import './static/App.css';
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./containers/main/Landing";
import {HashRouter as Router, Route} from "react-router-dom";
import SingleMovie from "./containers/main/SingleMovie";


function App() {
    return (
        <Router>
            <>
                <Navbar/>
                    <Route exact path={"/"} component={Landing}/>
                    <Route exact path={"/movie/:id"} component={SingleMovie}/>
                <Footer/>
            </>
        </Router>
    );
}

export default App;
