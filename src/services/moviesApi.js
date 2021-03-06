import axios from 'axios';

const getCast = async movieId => {
  const response = await axios.get(
    `
https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=9e5cf4f45ae60b7760108794dc459813&language=en-US`
  );
  return response.data.cast;
};

const getMovie = async search => {
  if (search === null) {
    return;
  }
  const response = await axios.get(
    `
https://api.themoviedb.org/3/search/movie?api_key=9e5cf4f45ae60b7760108794dc459813&language=en-US&query=${search}&page=1&include_adult=false`
  );
  return response.data.results;
};
const getTrandingMovie = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=9e5cf4f45ae60b7760108794dc459813'
  );
  return response.data.results;
};
const getMovieDetails = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=9e5cf4f45ae60b7760108794dc459813&language=en-US`
  );
  return response.data;
};
const getReviews = async movieId => {
  const response = await axios.get(
    `
https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=9e5cf4f45ae60b7760108794dc459813&language=en-US&page=1`
  );
  return response.data.results;
};
export { getCast, getMovie, getTrandingMovie, getMovieDetails, getReviews };
//
