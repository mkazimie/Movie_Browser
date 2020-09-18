const getSimilarMovies = (state) => {
  return state.movies.movies.slice(0, 4);
}

export default getSimilarMovies;