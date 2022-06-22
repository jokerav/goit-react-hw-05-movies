import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => getMovie());
  const getMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=9e5cf4f45ae60b7760108794dc459813&language=en-US`
      )
      .then(response => setMovie(response.data));
  };
  const { title } = movie;
  return <h1>{title}</h1>;
};
export default MovieDetails;
