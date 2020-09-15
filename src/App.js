import React from 'react';
import './css/App.css';
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// const OMDb_API_KEY = process.env.OMDb_API_KEY;

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Footer/>
    </div>
  );
}

export default App;
