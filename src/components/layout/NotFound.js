import React from 'react';

const NotFound = ({message}) => {
    return (
        <div className="container">
            <p className="text-center">{message === '404' && <h1> Page not found </h1>}</p>
            <p className="text-center">{message === 'no-movie-found' && <h1> Sorry, we don't have such movie in our DB </h1>}</p>
            <p className="text-center">{message === 'wishlist-empty' && <h1> No movies on your wishlist yet </h1>}</p>
            <p className="text-center">{message === 'watched-empty' && <h1> No movies rated yet </h1>}</p>
        </div>
    );
};

export default NotFound;
