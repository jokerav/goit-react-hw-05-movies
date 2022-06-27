import { getMovieDetails } from 'services/moviesApi';
import { useState, useEffect, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkHref = location?.state?.from ?? '/';

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
        <Link to={`cast`} state={{ from: backLinkHref }}>
          Cast
        </Link>
      </p>
      <p>
        <Link to={`reviews`} state={{ from: backLinkHref }}>
          Reviews
        </Link>
      </p>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
