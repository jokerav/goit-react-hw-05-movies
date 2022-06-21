import axios from 'axios';
import { useState } from 'react';
const Home = () => {
  const [trandingMovie, setTrandingMovie] = useState([]);
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
        <li>{movie.original_title}</li>
      ))}
    </ul>
  );
};
export default Home;
