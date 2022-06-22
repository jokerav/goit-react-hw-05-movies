import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => getMovie, []);
  const getMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=9e5cf4f45ae60b7760108794dc459813&language=en-US`
      )
      .then(response => setMovie(response.data));
  };
  const imgPath = 'https://image.tmdb.org/t/p/w500';
  const { title, poster_path } = movie;
  return (
    <>
      <h1>{title}</h1>
      <img src={`${imgPath}${poster_path}`} />
      <p>Additional information</p>
    </>
  );
};
export default MovieDetails;
