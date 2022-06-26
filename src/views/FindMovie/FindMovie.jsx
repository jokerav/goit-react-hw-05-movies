import { useEffect, lazy } from 'react';
import { useState } from 'react';
import { getMovie } from 'services/moviesApi';
import { useSearchParams } from 'react-router-dom';
const MoviesList = lazy(() => import('../../components/MoviesList/MoviesList'));

const FindMovie = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const querry = searchParams.get('querry');
  const [input, setInput] = useState(querry);
  const [movies, setMovies] = useState([]);

  const onChange = e => {
    const { value } = e.currentTarget;
    setInput(value);
  };
  const onSubmit = e => {
    e.preventDefault();
    setSearchParams({ querry: input.toLowerCase().trim() });
    setInput(input.toLowerCase().trim());
  };

  useEffect(() => {
    getMovie(querry).then(movies => setMovies([...movies]));
  }, [querry]);

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

      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default FindMovie;
