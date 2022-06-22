import axios from 'axios';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  const [trandingMovie, setTrandingMovie] = useState([]);

  const getTrandingMovie = () => {
    axios
      .get(
        'https://api.themoviedb.org/3/trending/movie/day?api_key=9e5cf4f45ae60b7760108794dc459813'
      )
      .then(response => {
        console.log(response.data.results);
        console.log(Date.now());
        setTrandingMovie(response.data.results);
      });
  };
  useEffect(() => getTrandingMovie(), []);

  return (
    <ul>
      {trandingMovie.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
        </li>
      ))}
    </ul>
  );
};
export default Home;
