import React from 'react';
import './css/App.css';
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import DisplayMovies from "./containers/main/Landing";


function App() {
    return (
        <div className="App">
            <Navbar/>
            <DisplayMovies/>
            <Footer/>
        </div>
    );
}

export default App;
