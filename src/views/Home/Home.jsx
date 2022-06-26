import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getTrandingMovie } from '../../services/moviesApi';
const Home = () => {
  const [trandingMovie, setTrandingMovie] = useState([]);
  const navigate = useNavigate();
  // const getTrandingMovie = () => {
  //   axios
  //     .get(
  //       'https://api.themoviedb.org/3/trending/movie/day?api_key=9e5cf4f45ae60b7760108794dc459813'
  //     )
  //     .then(response => {
  //       setTrandingMovie(response.data.results);
  //     });
  // };

  useEffect(() => {
    navigate('/', { replace: true });
    getTrandingMovie().then(movies => setTrandingMovie([...movies]));
  }, [navigate]);

  return (
    <>
      <h1>Tranding today</h1>
      <ul>
        {trandingMovie.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Home;
