import { getMovieDetails } from 'services/moviesApi';
import { useState, useEffect, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  // const getMovie = movieId => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/${movieId}?api_key=9e5cf4f45ae60b7760108794dc459813&language=en-US`
  //     )
  //     .then(response => {
  //       setMovie(response.data);
  //     });
  // };
  useEffect(() => {
    getMovieDetails(movieId).then(movie => setMovie(movie));
  }, [movieId]);

  const imgPath = 'https://image.tmdb.org/t/p/w500';
  const { title, poster_path, overview } = movie;

  return (
    <>
      <Link to={backLinkHref}>Back</Link>
      <h1>{title}</h1>
      <img
        src={`${imgPath}${poster_path}`}
        alt={`Poster to ${title}`}
        height="450px"
      />
      <p>{overview}</p>
      <p>Additional information</p>
      <p>
        <Link to={`cast`}>Cast</Link>
      </p>
      <p>
        <Link to={`reviews`}>Reviews</Link>
      </p>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
