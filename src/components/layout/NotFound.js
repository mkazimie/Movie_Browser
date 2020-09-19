import React from 'react';

const NotFound = ({message}) => {
    return (
        <div>
            {message === '404' && <h1> Page not found </h1>}
            {message === 'no-movie-found' && <h1> Sorry, we don't have such movie in our DB </h1>}
            {message === 'wishlist-empty' && <h1> You don't have any movies on your wishlist yet </h1>}
        </div>
    );
};

export default NotFound;
