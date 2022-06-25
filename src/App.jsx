import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';

// import MovieDetails from './views/MovieDetails/MovieDetails';
// import Cast from './views/Cast/Cast';
// import Reviews from './views/Reviews/Reviews';
// import FindMovie from './views/FindMovie/FindMovie';
// import Home from './views/Home/Home';

const Home = lazy(() => import('./views/Home/Home'));
const MovieDetails = lazy(() => import('./views/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./views/Cast/Cast'));
const Reviews = lazy(() => import('./views/Reviews/Reviews'));
const FindMovie = lazy(() => import('./views/FindMovie/FindMovie'));

export const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="movies" element={<FindMovie />}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};
