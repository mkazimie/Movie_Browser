import React from 'react';
import './css/App.css';
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/main/Landing";

// const OMDb_API_KEY = process.env.OMDb_API_KEY;

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Landing/>
            <Footer/>
        </div>
    );
}

export default App;
