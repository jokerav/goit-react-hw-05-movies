import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCast] = useState([]);
  const getMovie = movieId => {
    axios
      .get(
        `
https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=9e5cf4f45ae60b7760108794dc459813&language=en-US`
      )
      .then(response => setCast(response.data.cast));
  };
  useEffect(() => getMovie(movieId), [movieId]);
  console.log(casts);
  return (
    <ul>
      {casts.map(({ cast_id, original_name }) => (
        <li key={cast_id}>{original_name}</li>
      ))}
    </ul>
  );
};
export default Cast;
