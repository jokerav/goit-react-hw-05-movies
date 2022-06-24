import { useEffect, lazy } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
// import MoviesList from '../MoviуsList/MoviуsList';
const MoviesList = lazy(() => import('../MoviуsList/MoviуsList'));
const FindMovie = () => {
  const [input, setInput] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({});
  const querry = searchParams.get('querry');

  const onChange = e => {
    const { value } = e.currentTarget;
    setInput(value);
  };
  const onSubmit = e => {
    e.preventDefault();
    setSearchParams({ querry: input.toLowerCase().trim() });
  };

  const getMovie = search => {
    if (search === null) {
      return;
    }
    axios
      .get(
        `
https://api.themoviedb.org/3/search/movie?api_key=9e5cf4f45ae60b7760108794dc459813&language=en-US&query=${search}&page=1&include_adult=false`
      )
      .then(response => {
        setMovies(response.data.results);
      });
  };
  useEffect(() => getMovie(querry), [querry]);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={input}
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>

      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default FindMovie;
