import axios from 'axios';
import { useState } from 'react';
import { Link, useMatch } from 'react-router-dom';
const Home = () => {
  const [trandingMovie, setTrandingMovie] = useState([]);
  const { url } = useMatch;
  axios
    .get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=9e5cf4f45ae60b7760108794dc459813'
    )
    .then(response => {
      console.log(response.data.results);
      setTrandingMovie(response.data.results);
    });
  return (
    <ul>
      {trandingMovie.map(movie => (
        <li key={movie.id}>
          <Link to={`${url}/${movie.id}`}> {movie.original_title}</Link>
        </li>
      ))}
    </ul>
  );
};
export default Home;
